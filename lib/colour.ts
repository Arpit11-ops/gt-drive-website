import type { CSSProperties } from "react";

const colourValues: Record<string, string> = {
  white: "#f5f5f2",
  black: "#17191a",
  grey: "#8b8f93",
  "honda grey": "#737982",
  orange: "#e97822",
  maroon: "#762536",
  "silver grey": "#c5c9ce",
  green: "#b8d8cc",
  "matte shale green": "#617568",
  "matte coffee brown": "#80604c",
  "tyrant gold": "#c9a53f",
  red: "#b82731",
  "peacock blue": "#24728a",
  yellow: "#e1bd2e",
};

export function colourSwatchStyle(label: string): CSSProperties {
  const parts = label.split("/").map((part) => part.trim().toLowerCase());
  if (parts.length > 1) {
    const first = colourValues[parts[0]] ?? "#b8b8b8";
    const second = colourValues[parts[1]] ?? "#242424";
    return { background: `linear-gradient(135deg, ${first} 0 50%, ${second} 50% 100%)` };
  }

  const value = colourValues[parts[0]];
  return value ? { backgroundColor: value } : { background: "linear-gradient(135deg, #f2f2f0 0 50%, #b8b8b8 50% 100%)" };
}
