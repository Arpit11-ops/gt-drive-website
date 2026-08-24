import { writeFile } from "node:fs/promises";
import { chromium } from "playwright";

const sourceUrl =
  "https://upload.wikimedia.org/wikipedia/commons/f/f8/States_of_India_%28Survey_of_India%29.svg";
const outputPath = new URL(
  "../public/assets/gt-drive/india-states-premium.svg",
  import.meta.url,
);

const browser = await chromium.launch({ headless: true });

try {
  const page = await browser.newPage();
  await page.goto(sourceUrl, { waitUntil: "load" });

  const svgMarkup = await page.evaluate(() => {
    const svg = document.querySelector("svg");
    if (!svg) throw new Error("Survey of India SVG did not load");

    const visibleElements = svg.querySelectorAll("path, line, polyline, use");

    visibleElements.forEach((element) => {
      if (element.closest("defs")) return;

      const box = element.getBBox();
      const styles = getComputedStyle(element);
      const isPageBackground = box.width > 790 && box.height > 1100;
      const isGridOrFrame = box.width > 680 || box.height > 820;
      const isProjectionMask =
        styles.fill === "rgb(255, 255, 255)" &&
        styles.stroke === "none" &&
        box.width > 250 &&
        box.height > 250;
      const isCoordinateFurniture = box.x < 45 || box.x > 745;

      if (
        isPageBackground ||
        isGridOrFrame ||
        isProjectionMask ||
        isCoordinateFurniture
      ) {
        element.remove();
        return;
      }

      if (styles.stroke !== "none") {
        element.setAttribute("stroke", "#56635b");
      }

      if (element.tagName.toLowerCase() === "use") {
        element.setAttribute("fill", "#111111");
      }
    });

    svg.setAttribute("viewBox", "50 145 690 830");
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-labelledby", "india-map-title india-map-desc");
    svg.removeAttribute("width");
    svg.removeAttribute("height");
    svg.removeAttribute("style");

    const title = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "title",
    );
    title.id = "india-map-title";
    title.textContent = "States and union territories of India";

    const description = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "desc",
    );
    description.id = "india-map-desc";
    description.textContent =
      "A cleaned vector rendering derived from the Survey of India map, retaining state boundaries, state names, and island territories.";

    svg.prepend(description);
    svg.prepend(title);

    return svg.outerHTML;
  });

  const attribution = [
    "<!--",
    "  Derived from States of India (Survey of India).svg.",
    `  Source: ${sourceUrl}`,
    "  The source is released into the public domain by the Survey of India.",
    "  Changes: removed the coordinate grid, map frame, and technical page furniture; restyled strokes.",
    "-->",
  ].join("\n");

  await writeFile(
    outputPath,
    `<?xml version="1.0" encoding="UTF-8"?>\n${attribution}\n${svgMarkup}\n`,
    "utf8",
  );
} finally {
  await browser.close();
}
