import type { Metadata } from "next";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ContactDetails } from "@/components/cta/ContactDetails";
import { ClosingCta } from "@/components/cta/ClosingCta";

export const metadata: Metadata = {
  title: "Contact | Eshenake Joseph",
  description:
    "Get in touch: WhatsApp for brand engagements, resume and email for recruiters. Based in Warri, Nigeria; works remote worldwide.",
};

export default function ContactPage() {
  return (
    <>
      <Nav />
      <main className="bg-white">
        <PageHeader
          eyebrow="Contact"
          title="One message starts it."
          intro="Brands: WhatsApp is the fastest way to reach me. Recruiters: grab the resume and email me. I reply within a day."
        />
        <ContactDetails />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
