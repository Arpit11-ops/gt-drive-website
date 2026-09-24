import type { Metadata } from "next";
import { ContactChoices } from "@/components/contact/ContactChoices";
import { ContactFinalCTA } from "@/components/contact/ContactFinalCTA";
import { ContactFindUs } from "@/components/contact/ContactFindUs";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactClose } from "@/components/ContactClose";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call, WhatsApp or email GT Drive with questions about electric scooters and dealership opportunities.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactChoices />
      <ContactFindUs />
      <ContactFinalCTA />
      <ContactClose defaultType="other" />
    </>
  );
}
