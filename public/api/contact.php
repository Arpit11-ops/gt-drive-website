<?php
// GT Drive contact handler. Install PHPMailer with Composer on the PHP host.
// Configure GT_DRIVE_CONTACT_EMAIL, GT_DRIVE_SMTP_PASSWORD and optionally
// GT_DRIVE_SMTP_HOST / GT_DRIVE_SMTP_USERNAME as hosting-only environment values.
declare(strict_types=1);

use PHPMailer\PHPMailer\Exception as MailerException;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

function respond(int $status, string $message): never { http_response_code($status); echo json_encode(['message' => $message], JSON_UNESCAPED_SLASHES); exit; }
function clean_line(mixed $value): string { return trim(str_replace(["\r", "\n"], ' ', (string) $value)); }
function text_length(string $value): int { return function_exists('mb_strlen') ? mb_strlen($value, 'UTF-8') : strlen($value); }

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') { header('Allow: POST'); respond(405, 'This endpoint accepts contact-form submissions only.'); }
if (clean_line($_POST['website'] ?? '') !== '') respond(200, 'Your inquiry has been sent.');

$name = clean_line($_POST['name'] ?? '');
$email = clean_line($_POST['email'] ?? '');
$organisation = clean_line($_POST['organisation'] ?? '');
$phone = clean_line($_POST['phone'] ?? '');
$city = clean_line($_POST['city'] ?? '');
$state = clean_line($_POST['state'] ?? '');
$type = clean_line($_POST['type'] ?? 'other');
$model = clean_line($_POST['model'] ?? '');
$message = trim((string) ($_POST['message'] ?? ''));

if ($name === '' || $email === '' || $message === '') respond(422, 'Please complete your name, email, and message.');
if (!filter_var($email, FILTER_VALIDATE_EMAIL) || text_length($email) > 254) respond(422, 'Please enter a valid email address.');
foreach ([[$name, 120], [$organisation, 160], [$phone, 40], [$city, 100], [$state, 100], [$type, 80], [$model, 100], [$message, 5000]] as [$value, $limit]) {
    if (text_length($value) > $limit) respond(422, 'One of the fields is too long. Please shorten it and try again.');
}

$recipient = getenv('GT_DRIVE_CONTACT_EMAIL') ?: 'info@gtdrivepro.com';
$smtpPassword = trim((string) (getenv('GT_DRIVE_SMTP_PASSWORD') ?: ''));
if ($smtpPassword === '') { error_log('GT Drive contact form: GT_DRIVE_SMTP_PASSWORD is not configured.'); respond(503, 'Email delivery is being configured. Please use WhatsApp for now.'); }

$body = implode("\r\n", [
    'A new GT Drive website enquiry was submitted.', '', 'Name: ' . $name, 'Email: ' . $email,
    'Business / dealership: ' . ($organisation ?: 'Not provided'), 'Phone: ' . ($phone ?: 'Not provided'),
    'City: ' . ($city ?: 'Not provided'), 'State: ' . ($state ?: 'Not provided'), 'Enquiry type: ' . $type,
    'Model: ' . ($model ?: 'No specific model'), '', 'Message:', $message, '', 'Submitted: ' . gmdate('Y-m-d H:i:s') . ' UTC',
]);

try {
    $mailer = new PHPMailer(true);
    $mailer->isSMTP();
    $mailer->Host = getenv('GT_DRIVE_SMTP_HOST') ?: 'smtp.zoho.in';
    $mailer->SMTPAuth = true;
    $mailer->Username = getenv('GT_DRIVE_SMTP_USERNAME') ?: $recipient;
    $mailer->Password = $smtpPassword;
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mailer->Port = (int) (getenv('GT_DRIVE_SMTP_PORT') ?: 465);
    $mailer->Timeout = 15;
    $mailer->CharSet = PHPMailer::CHARSET_UTF8;
    $mailer->setFrom($mailer->Username, 'GT Drive Website');
    $mailer->addAddress($recipient, 'GT Drive');
    $mailer->addReplyTo($email, $name);
    $mailer->Subject = 'Website enquiry from ' . $name;
    $mailer->Body = $body;
    $mailer->send();
} catch (MailerException $error) {
    error_log('GT Drive contact form SMTP failure: ' . $error->getMessage());
    respond(502, 'Email delivery failed. Please try again or use WhatsApp.');
}
respond(200, 'Your enquiry has been sent. We will reply shortly.');
