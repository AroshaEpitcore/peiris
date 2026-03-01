"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { motion } from "framer-motion";

const sections = [
  {
    id: "terms",
    title: "Terms & Conditions",
    subtitle: "Peiris Cleaning Solutions Ltd.",
    content: [
      {
        heading: "1. Introduction",
        body: "These Terms and Conditions govern the provision of cleaning services by Peiris Cleaning Solutions Ltd. By booking or using our services, you agree to be bound by these Terms and Conditions.",
      },
      {
        heading: "2. Services",
        body: "Peiris Cleaning Solutions Ltd. provides professional cleaning services including, but not limited to, office cleaning, end of tenancy cleaning, deep cleaning, and regular cleaning. Services will be delivered in accordance with the agreed scope at the time of booking.",
      },
      {
        heading: "3. Bookings and Payments",
        bullets: [
          "All bookings must be confirmed in advance.",
          "Payment is due upon completion of the service unless otherwise agreed in writing.",
          "We reserve the right to suspend or cancel services in the event of non-payment.",
        ],
      },
      {
        heading: "4. Cancellations and Rescheduling",
        bullets: [
          "Clients must provide at least 24 hours' notice for cancellations or rescheduling.",
          "Cancellations made with less than 24 hours' notice may be subject to a cancellation fee of up to 50% of the agreed service cost.",
        ],
      },
      {
        heading: "5. Access and Working Conditions",
        body: "Clients must ensure that safe and reasonable access to the premises is provided at the agreed time. Peiris Cleaning Solutions Ltd. shall not be held responsible for delays or incomplete services resulting from lack of access or unsafe working conditions.",
      },
      {
        heading: "6. Liability and Damages",
        bullets: [
          "We take all reasonable care while carrying out our services.",
          "We are not liable for pre-existing damage, normal wear and tear, or issues caused by faulty equipment or materials supplied by the client.",
          "Any claims relating to damage must be reported within 24 hours of service completion.",
        ],
      },
      {
        heading: "7. Health and Safety",
        body: "We reserve the right to refuse or discontinue services if the working environment is deemed unsafe or hazardous to our staff.",
      },
    ],
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    content: [
      {
        heading: "1. Data Collection",
        body: "Peiris Cleaning Solutions Ltd. may collect personal information including names, contact details, and service addresses for the purpose of providing our services.",
      },
      {
        heading: "2. Use of Personal Data",
        intro: "Personal information is used solely to:",
        bullets: [
          "Process bookings",
          "Communicate with clients",
          "Improve service quality",
        ],
        footer: "We do not sell, rent, or share personal data with third parties.",
      },
      {
        heading: "3. Data Protection",
        body: "We comply with applicable UK data protection legislation. All personal data is stored securely and accessed only when necessary.",
      },
      {
        heading: "4. Client Rights",
        body: "Clients have the right to request access to, correction of, or deletion of their personal data at any time.",
      },
    ],
  },
  {
    id: "refund",
    title: "Refund Policy",
    content: [
      {
        heading: "",
        bullets: [
          "Refunds are considered on a case-by-case basis.",
          "Any concerns regarding service quality must be reported within 24 hours of service completion.",
          "Where appropriate, a re-clean may be offered as an alternative to a refund.",
        ],
      },
    ],
  },
];

export default function TermsPage() {
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
              Terms, Privacy &amp; Refund Policy
            </h1>
            <p className="text-muted-foreground text-lg">
              Last updated: March 2026 &nbsp;·&nbsp; Peiris Cleaning Solutions Ltd.
              &nbsp;·&nbsp; No 2a Chase Cross Road, Romford, RM5 3PR
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto space-y-16">
            {sections.map((section, si) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: si * 0.1 }}
              >
                {/* Section title */}
                <div className="mb-8 pb-4 border-b-2 border-primary/20">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground">{section.title}</h2>
                  {section.subtitle && (
                    <p className="text-muted-foreground mt-1">{section.subtitle}</p>
                  )}
                </div>

                <div className="space-y-8">
                  {section.content.map((item, i) => (
                    <div key={i}>
                      {item.heading && (
                        <h3 className="text-lg font-semibold text-foreground mb-3">{item.heading}</h3>
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
                        <p className="text-muted-foreground leading-relaxed mt-3">{item.footer}</p>
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
              <h3 className="font-semibold text-foreground mb-2">Questions?</h3>
              <p className="text-muted-foreground text-sm">
                If you have any questions regarding these policies, please contact us at{" "}
                <a href="mailto:Info@peiriscleaningsolutions.co.uk" className="text-primary hover:underline font-medium">
                  Info@peiriscleaningsolutions.co.uk
                </a>{" "}
                or call{" "}
                <a href="tel:07903599828" className="text-primary hover:underline font-medium">
                  07903 599828
                </a>.
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
