import type { Metadata } from "next";
import Contact from "../../views/Contact";

export const metadata: Metadata = {
  title: "Contact Us - Dr. Shweta Bansal Wazir",
};

export default function ContactPage() {
  return <Contact />;
}
