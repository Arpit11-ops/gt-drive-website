import type { Metadata } from "next";
import { ContactChoices } from "@/components/contact/ContactChoices";
import { ContactFinalCTA } from "@/components/contact/ContactFinalCTA";
import { ContactFindUs } from "@/components/contact/ContactFindUs";
import { ContactHero } from "@/components/contact/ContactHero";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact GT Drive — call, WhatsApp or email us, or find the head office and plant locations across India.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChoices />
      <ContactFindUs />
      <ContactFinalCTA />
    </>
  );
}
