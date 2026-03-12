"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const sections = [
  {
    id: "who-we-are",
    title: "1. Who We Are",
    content: [
      {
        body: "Peiris Cleaning Solutions Ltd. is the data controller responsible for your personal information. We are a professional cleaning company based in Romford, London, providing domestic and commercial cleaning services across the Greater London area.",
      },
      {
        heading: "Data Controller Contact Details",
        bullets: [
          "Company: Peiris Cleaning Solutions Ltd.",
          "Address: No 2a Chase Cross Road, Romford, RM5 3PR",
          "Email: Info@peiriscleaningsolutions.co.uk",
          "Phone: 07903 599828",
        ],
      },
    ],
  },
  {
    id: "data-we-collect",
    title: "2. Personal Data We Collect",
    content: [
      {
        intro: "We collect the following categories of personal data when you interact with us:",
        bullets: [
          "Full name",
          "Home or business address (service location)",
          "Email address",
          "Phone number",
          "WhatsApp contact details (where provided)",
          "Details about the service requested (e.g. property size, type of clean, preferred date and time)",
          "Any special instructions or requirements you share with us",
          "Enquiry or message content submitted via our contact form",
        ],
      },
      {
        heading: "How We Collect Your Data",
        intro: "We collect personal data directly from you through the following channels:",
        bullets: [
          "Our website contact and booking forms",
          "Phone calls and voicemails",
          "WhatsApp messages",
          "Email correspondence",
          "In-person enquiries",
        ],
      },
    ],
  },
  {
    id: "legal-basis",
    title: "3. Legal Basis for Processing",
    content: [
      {
        intro: "We process your personal data on the following legal grounds under UK GDPR:",
        bullets: [
          "Contract: To fulfil a booking or service agreement with you.",
          "Legitimate Interests: To manage our business operations, respond to enquiries, and improve our services.",
          "Legal Obligation: To comply with applicable UK laws and regulations.",
          "Consent: Where you have specifically opted in to receive marketing communications from us.",
        ],
      },
    ],
  },
  {
    id: "how-we-use",
    title: "4. How We Use Your Data",
    content: [
      {
        intro: "Your personal information is used for the following purposes:",
        bullets: [
          "Processing and confirming your service bookings",
          "Communicating appointment details, reminders, and updates",
          "Responding to enquiries and customer service requests",
          "Sending service-related notifications via phone, email, or WhatsApp",
          "Improving the quality of our cleaning services",
          "Maintaining records for accounting and legal compliance",
          "Sending promotional communications about our services, where you have consented",
        ],
        footer: "We do not use your data for automated decision-making or profiling.",
      },
    ],
  },
  {
    id: "sharing",
    title: "5. Who We Share Your Data With",
    content: [
      {
        body: "We do not sell, rent, or trade your personal data to third parties. We may share your data in the following limited circumstances:",
        bullets: [
          "With our cleaning staff, on a need-to-know basis, to carry out your booked service",
          "With trusted third-party service providers (e.g. email platforms, accounting software) who process data on our behalf under data processing agreements",
          "With regulatory authorities or law enforcement agencies where required by law",
        ],
        footer: "All third parties we work with are required to handle your data securely and in accordance with UK data protection law.",
      },
    ],
  },
  {
    id: "retention",
    title: "6. How Long We Keep Your Data",
    content: [
      {
        intro: "We retain your personal data only for as long as necessary:",
        bullets: [
          "Booking and service records: up to 6 years (for tax and legal compliance)",
          "Contact enquiries: up to 12 months from last contact",
          "Marketing preferences: until you withdraw consent",
        ],
        footer: "After these periods, your data is securely deleted or anonymised.",
      },
    ],
  },
  {
    id: "your-rights",
    title: "7. Your Rights Under UK GDPR",
    content: [
      {
        intro: "As a data subject, you have the following rights regarding your personal data:",
        bullets: [
          "Right of Access – request a copy of the personal data we hold about you",
          "Right to Rectification – ask us to correct inaccurate or incomplete data",
          "Right to Erasure – request deletion of your personal data where we no longer have a legal basis to hold it",
          "Right to Restriction – ask us to limit how we process your data in certain circumstances",
          "Right to Data Portability – receive your data in a structured, commonly used format",
          "Right to Object – object to processing based on legitimate interests or for direct marketing",
          "Right to Withdraw Consent – withdraw marketing consent at any time, without affecting prior processing",
        ],
        footer: "To exercise any of these rights, please contact us at Info@peiriscleaningsolutions.co.uk. We will respond within 30 days.",
      },
    ],
  },
  {
    id: "data-security",
    title: "8. Data Security",
    content: [
      {
        body: "We take the security of your personal data seriously. We implement appropriate technical and organisational measures to protect your data against unauthorised access, loss, or disclosure. Access to personal data is restricted to staff and contractors who need it to perform their duties.",
      },
    ],
  },
  {
    id: "cookies",
    title: "9. Cookies",
    content: [
      {
        body: "Our website may use essential cookies to ensure the site functions correctly. We do not use tracking or advertising cookies without your consent. By continuing to use our website, you consent to the use of essential cookies only.",
      },
    ],
  },
  {
    id: "complaints",
    title: "10. Complaints",
    content: [
      {
        body: "If you believe we have not handled your personal data correctly, you have the right to lodge a complaint with the Information Commissioner's Office (ICO), the UK's data protection authority.",
        bullets: [
          "ICO Website: www.ico.org.uk",
          "ICO Helpline: 0303 123 1113",
        ],
        footer: "We would, however, appreciate the chance to address your concerns directly before you contact the ICO. Please reach out to us first at Info@peiriscleaningsolutions.co.uk.",
      },
    ],
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
    content: [
      {
        body: "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. The current version will always be available on our website. Where changes are significant, we will notify you directly.",
      },
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="pt-32 pb-12 bg-primary/5 border-b border-border">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <span className="section-badge mb-4">Legal</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
              Privacy Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: March 2026 &nbsp;·&nbsp; Peiris Cleaning Solutions Ltd.
              &nbsp;·&nbsp; No 2a Chase Cross Road, Romford, RM5 3PR
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="pt-12 pb-0">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-muted-foreground leading-relaxed text-base border-l-4 border-primary/40 pl-4 py-2 bg-primary/5 rounded-r-lg"
            >
              At Peiris Cleaning Solutions Ltd., we are committed to protecting your privacy and
              handling your personal data with transparency and care. This Privacy Policy explains
              what data we collect, how we use it, and your rights under the UK General Data
              Protection Regulation (UK GDPR) and the Data Protection Act 2018.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section, si) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: si * 0.05 }}
              >
                {/* Section title */}
                <div className="mb-6 pb-3 border-b-2 border-primary/20">
                  <h2 className="text-xl sm:text-2xl font-bold text-foreground">{section.title}</h2>
                </div>

                <div className="space-y-6">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {"heading" in item && item.heading && (
                        <h3 className="text-base font-semibold text-foreground mb-3">{item.heading}</h3>
                      )}
                      {"intro" in item && item.intro && (
                        <p className="text-muted-foreground leading-relaxed mb-2">{item.intro}</p>
                      )}
                      {"body" in item && item.body && (
                        <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                      )}
                      {"bullets" in item && item.bullets && (
                        <ul className="space-y-2 mt-2">
                          {item.bullets.map((bullet, bi) => (
                            <li key={bi} className="flex items-start gap-3 text-muted-foreground">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      )}
                      {"footer" in item && item.footer && (
                        <p className="text-muted-foreground leading-relaxed mt-3 italic text-sm">{item.footer}</p>
                      )}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Contact note */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card p-6 bg-primary/5 border-primary/20"
            >
              <h3 className="font-semibold text-foreground mb-2">Contact Us About Your Data</h3>
              <p className="text-muted-foreground text-sm">
                For any data protection enquiries or to exercise your rights, please contact us at{" "}
                <a href="mailto:Info@peiriscleaningsolutions.co.uk" className="text-primary hover:underline font-medium">
                  Info@peiriscleaningsolutions.co.uk
                </a>{" "}
                or call{" "}
                <a href="tel:07903599828" className="text-primary hover:underline font-medium">
                  07903 599828
                </a>
                . Also see our{" "}
                <a href="/terms" className="text-primary hover:underline font-medium">
                  Terms &amp; Conditions
                </a>
                .
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
      <ScrollToTop />
    </main>
  );
}
