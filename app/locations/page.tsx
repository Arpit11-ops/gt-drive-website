import type { Metadata } from "next";
import { ContactClose } from "@/components/ContactClose";
import { IndiaFootprint } from "@/components/IndiaFootprint";

export const metadata: Metadata = {
  title: "Plant locations",
  description: "GT Drive manufacturing footprint across five Indian states.",
};

export default function LocationsPage() {
  return (
    <>
      <IndiaFootprint showAllAddresses />
      <ContactClose />
    </>
  );
}
