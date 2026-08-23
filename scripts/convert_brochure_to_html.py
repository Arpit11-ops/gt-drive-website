from __future__ import annotations

import argparse
import base64
import html
import io
from pathlib import Path

import pypdfium2 as pdfium


def render_page(page: pdfium.PdfPage, scale: float, quality: int) -> str:
    image = page.render(scale=scale, rev_byteorder=True).to_pil().convert("RGB")
    buffer = io.BytesIO()
    image.save(buffer, format="WEBP", quality=quality, method=6)
    return base64.b64encode(buffer.getvalue()).decode("ascii")


def extract_text(page: pdfium.PdfPage) -> str:
    text_page = page.get_textpage()
    try:
        return text_page.get_text_range().strip()
    finally:
        text_page.close()


def build_html(pdf_path: Path, scale: float, quality: int) -> str:
    document = pdfium.PdfDocument(str(pdf_path))
    sections: list[str] = []

    try:
        total = len(document)
        for index in range(total):
            page = document[index]
            try:
                image_data = render_page(page, scale, quality)
                transcript = html.escape(extract_text(page))
            finally:
                page.close()

            page_number = index + 1
            sections.append(
                f"""
        <article class="page" id="page-{page_number}" aria-labelledby="page-{page_number}-title">
          <div class="page-heading">
            <h2 id="page-{page_number}-title">Page {page_number}</h2>
            <a href="#top" aria-label="Return to top">Top</a>
          </div>
          <img
            src="data:image/webp;base64,{image_data}"
            alt="GT Drive brochure page {page_number} of {total}"
            width="1489"
            height="1049"
            loading="{'eager' if page_number == 1 else 'lazy'}"
            decoding="async"
          >
          <details class="transcript">
            <summary>Searchable text for page {page_number}</summary>
            <pre>{transcript}</pre>
          </details>
        </article>"""
            )
    finally:
        document.close()

    page_links = "".join(
        f'<a href="#page-{number}" aria-label="Go to page {number}">{number}</a>'
        for number in range(1, total + 1)
    )

    return f"""<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="HTML edition of the GT Drive product brochure.">
  <title>GT Drive Brochure</title>
  <style>
    :root {{
      color-scheme: light;
      --green: #159447;
      --green-dark: #0d7135;
      --ink: #172019;
      --muted: #627067;
      --canvas: #edf1ee;
      --paper: #ffffff;
      --line: #d4ddd6;
    }}

    * {{ box-sizing: border-box; }}
    html {{ scroll-behavior: smooth; }}

    body {{
      margin: 0;
      color: var(--ink);
      background: var(--canvas);
      font-family: Arial, Helvetica, sans-serif;
    }}

    .toolbar {{
      position: sticky;
      top: 0;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
      min-height: 68px;
      padding: 12px clamp(16px, 4vw, 48px);
      color: #ffffff;
      background: rgba(19, 27, 21, 0.96);
      border-bottom: 3px solid var(--green);
      backdrop-filter: blur(12px);
    }}

    .brand {{ min-width: 0; }}
    .brand strong {{ display: block; font-size: 18px; }}
    .brand span {{ display: block; margin-top: 2px; color: #b9c6bc; font-size: 12px; }}

    .actions {{ display: flex; align-items: center; gap: 10px; }}
    .actions a {{
      display: inline-flex;
      align-items: center;
      min-height: 40px;
      padding: 0 16px;
      color: #ffffff;
      text-decoration: none;
      border: 1px solid #496052;
      border-radius: 5px;
    }}
    .actions a:hover, .actions a:focus-visible {{ border-color: var(--green); outline: none; }}

    .intro {{
      max-width: 1500px;
      margin: 0 auto;
      padding: 28px clamp(16px, 4vw, 48px) 12px;
    }}
    .intro h1 {{ margin: 0; font-size: clamp(28px, 4vw, 52px); line-height: 1; }}
    .intro p {{ max-width: 68ch; margin: 12px 0 0; color: var(--muted); line-height: 1.6; }}

    .page-nav {{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      max-width: 1500px;
      margin: 0 auto;
      padding: 12px clamp(16px, 4vw, 48px) 24px;
    }}
    .page-nav a {{
      display: grid;
      width: 38px;
      height: 38px;
      place-items: center;
      color: var(--ink);
      background: var(--paper);
      text-decoration: none;
      border: 1px solid var(--line);
      border-radius: 4px;
    }}
    .page-nav a:hover, .page-nav a:focus-visible {{ color: #ffffff; background: var(--green-dark); outline: none; }}

    main {{ display: grid; gap: 36px; padding: 0 clamp(12px, 3vw, 36px) 64px; }}
    .page {{ width: min(100%, 1500px); margin: 0 auto; scroll-margin-top: 86px; }}
    .page-heading {{ display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; }}
    .page-heading h2 {{ margin: 0; font-size: 14px; }}
    .page-heading a {{ color: var(--green-dark); font-size: 13px; }}

    .page > img {{
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 595.3 / 419.5;
      background: var(--paper);
      box-shadow: 0 16px 42px rgba(26, 38, 29, 0.14);
    }}

    .transcript {{ margin-top: 10px; color: var(--muted); }}
    .transcript summary {{ cursor: pointer; font-size: 13px; font-weight: 700; }}
    .transcript pre {{
      overflow: auto;
      margin: 10px 0 0;
      padding: 18px;
      color: var(--ink);
      background: var(--paper);
      border: 1px solid var(--line);
      border-radius: 4px;
      font: 14px/1.55 Arial, Helvetica, sans-serif;
      white-space: pre-wrap;
    }}

    @media (max-width: 680px) {{
      .toolbar {{ align-items: flex-start; flex-direction: column; gap: 10px; }}
      .actions {{ width: 100%; }}
      .actions a {{ justify-content: center; flex: 1; }}
      .page {{ scroll-margin-top: 128px; }}
    }}

    @media (prefers-reduced-motion: reduce) {{ html {{ scroll-behavior: auto; }} }}

    @media print {{
      @page {{ size: A4 landscape; margin: 0; }}
      body {{ background: #ffffff; }}
      .toolbar, .intro, .page-nav, .page-heading, .transcript {{ display: none; }}
      main {{ display: block; padding: 0; }}
      .page {{ width: 100%; margin: 0; break-after: page; }}
      .page > img {{ width: 100%; height: 100vh; object-fit: contain; box-shadow: none; }}
    }}
  </style>
</head>
<body id="top">
  <header class="toolbar">
    <div class="brand">
      <strong>GT Drive Brochure</strong>
      <span>{total} original pages, preserved in order</span>
    </div>
    <nav class="actions" aria-label="Document actions">
      <a href="GT%20DRIVE%20BROCHURE.pdf">Open original PDF</a>
      <a href="#page-1">Start reading</a>
    </nav>
  </header>

  <section class="intro" aria-labelledby="document-title">
    <h1 id="document-title">GT Drive Product Brochure</h1>
    <p>Every brochure page is embedded at high resolution. Use the page index to navigate or open each page's transcript to search and select its text.</p>
  </section>

  <nav class="page-nav" aria-label="Brochure pages">{page_links}</nav>

  <main>
    {''.join(sections)}
  </main>
</body>
</html>
"""


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert a PDF brochure into one self-contained HTML file.")
    parser.add_argument("input", type=Path)
    parser.add_argument("output", type=Path)
    parser.add_argument("--scale", type=float, default=2.5)
    parser.add_argument("--quality", type=int, default=91)
    args = parser.parse_args()

    if not args.input.is_file():
        raise SystemExit(f"PDF not found: {args.input}")

    output = build_html(args.input.resolve(), args.scale, args.quality)
    args.output.write_text(output, encoding="utf-8", newline="\n")
    print(f"Created {args.output} ({args.output.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
