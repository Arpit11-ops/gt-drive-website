// Prefix a public/ path with the deploy basePath (empty locally, /repo on Pages).
// next/image + unoptimized doesn't do this automatically for user-provided srcs,
// so every <Image src="/assets/..." /> in the codebase goes through asset().

const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function asset(path: string): string {
  if (!path.startsWith("/")) return path;
  return `${BASE_PATH}${path}`;
}
