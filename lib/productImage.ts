const portraitViews = new Set([
  "4005", "4006", "4018", "4020", "4028", "4034", "4045", "4046", "4048",
  "4064", "4066", "4074", "4076", "4088", "4090", "4093", "4095",
]);

export function isPortraitProductImage(path: string) {
  const match = path.match(/IMG_(\d+)_clean\.webp/i);
  return Boolean(match && portraitViews.has(match[1]));
}
