export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  /** Quotes must be approved in writing by the named person before flipping to true. */
  approved: boolean;
}

// DRAFTS ONLY — suggested wording sent to each client for editing and sign-off.
// The Testimonials section renders nothing until at least one entry is approved.
export const testimonials: Testimonial[] = [
  {
    quote:
      "Joseph has run our entire digital presence for over three years, from zero followers to a real community, plus our creative assets and even our website. He operates like a full digital department.",
    name: "Damilola Emmanuel",
    role: "President",
    company: "My Journey Inc.",
    approved: false,
  },
  {
    // Verbatim from the client's WhatsApp review, sent 2026-07-16 in
    // response to Eshenake's request for feedback and a review.
    quote:
      "I would love to really commend you for all your hard work and how much you have put into working everything out. You worked with humility and innovation. Thank you so much.",
    name: "Ojewe",
    role: "CEO",
    company: "Winx Global",
    approved: true,
  },
  {
    quote:
      "Joseph brought structure to our content and advertising strategy. He understands how to speak to a business audience.",
    name: "Daniel Obemejero",
    role: "CEO",
    company: "Hanging Garden",
    approved: false,
  },
];

export const approvedTestimonials = testimonials.filter((t) => t.approved);
