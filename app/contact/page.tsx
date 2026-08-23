import type { Metadata } from "next";
import { EnvelopeSimple, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { InquiryForm } from "@/components/InquiryForm";
import { contact } from "@/lib/models";

export const metadata: Metadata = { title: "Contact", description: "Contact GT Drive for product information and dealership enquiries." };
export default function ContactPage() { return <><section className="page-hero"><div className="page-hero-copy"><span className="eyebrow">Product and partnership enquiries</span><h1>LET&apos;S<br />CONNECT</h1><p>Use the enquiry form, call, email, or WhatsApp the GT Drive team for information.</p></div></section><section className="contact-section"><div className="contact-copy"><span className="eyebrow">Direct contact</span><h2>Choose the channel<br />that works for you.</h2><div className="direct-contact-list"><a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer"><WhatsappLogo weight="fill" /><span><strong>WhatsApp</strong>{contact.phones[0]}</span></a>{contact.phones.map((phone) => <a href={`tel:${phone.replace(/\s/g, "")}`} key={phone}><Phone weight="fill" /><span><strong>Phone</strong>{phone}</span></a>)}<a href={`mailto:${contact.email}`}><EnvelopeSimple weight="fill" /><span><strong>Email</strong>{contact.email}</span></a></div></div><InquiryForm /></section></>; }
