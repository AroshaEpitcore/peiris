"use client";

import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Send,
  Phone,
  Mail,
  Clock,
  ExternalLink,
} from "lucide-react";

const contactMethods = [
  {
    icon: Phone,
    title: "Phone",
    value: "07903 599828",
    href: "tel:07903599828",
    color: "bg-blue-500",
    description: "Call us for a free quote",
  },
  {
    icon: Mail,
    title: "Email",
    value: "Info@peiriscleaningsolutions.co.uk",
    href: "mailto:Info@peiriscleaningsolutions.co.uk",
    color: "bg-primary",
    description: "We reply within 24 hours",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "07903 599828",
    href: "https://wa.me/447903599828",
    color: "bg-green-500",
    description: "Quick response via WhatsApp",
  },
];

type FormFields = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormFields, string>>;

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const [form, setForm] = useState<FormFields>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormFields]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name.trim()) newErrors.name = "Full name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address.";
    }
    if (!form.phone.trim()) newErrors.phone = "Phone number is required.";
    if (!form.service) newErrors.service = "Please select a service.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validate()) return;
    const lines = [
      `Hi, I'd like to request a free cleaning quote.`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.message ? `Message: ${form.message}` : null,
    ].filter(Boolean);
    window.open(
      `https://wa.me/447903599828?text=${encodeURIComponent(lines.join("\n"))}`,
      "_blank"
    );
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const },
    },
  } as const;

  return (
    <section id="contact" ref={ref} className="bg-background relative overflow-hidden pt-32 pb-20">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/2" />

      {/* Vacuum image — left side, desktop only */}
      <motion.img
        src="/images/vaccumpng.png"
        alt="Professional cleaning equipment - Peiris Cleaning Solutions London"
        initial={{ opacity: 0, x: -40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="hidden lg:block absolute left-0 top-[20%] h-[70%] max-h-[600px] object-contain pointer-events-none opacity-30 z-0"
      />

      {/* Wash bucket image — right side, desktop only */}
      <motion.img
        src="/images/wash bucket.png"
        alt="Professional cleaning supplies - Peiris Cleaning Solutions London"
        initial={{ opacity: 0, x: 40 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.7 }}
        className="hidden lg:block absolute right-0 top-[20%] h-[70%] max-h-[600px] object-contain pointer-events-none opacity-30 z-0"
      />

      <div className="container relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="section-badge">Get in Touch</span>
          <h1 className="section-title mt-3">
            Message for a <span>Free Quote!</span>
          </h1>
          <p className="section-description">
            Fill in the form below and we&apos;ll get back to you via WhatsApp with your free quote.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="card max-w-5xl mx-auto p-6 sm:p-10 mb-12"
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="icon-box w-10! h-10!">
              <Send className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-xl font-semibold text-foreground">Send Us a Message</h2>
          </div>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="e.g. John Smith"
                  className={`input ${errors.name ? "border-red-400 focus:border-red-400" : ""}`}
                  value={form.name}
                  onChange={handleChange}
                />
                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="e.g. john@email.com"
                  className={`input ${errors.email ? "border-red-400 focus:border-red-400" : ""}`}
                  value={form.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
              </div>
            </div>

            {/* Row 2: Phone + Service */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="e.g. 07700 900000"
                  className={`input ${errors.phone ? "border-red-400 focus:border-red-400" : ""}`}
                  value={form.phone}
                  onChange={handleChange}
                />
                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-foreground">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  name="service"
                  className={`input ${errors.service ? "border-red-400 focus:border-red-400" : ""}`}
                  value={form.service}
                  onChange={handleChange}
                >
                  <option value="">Select a Service</option>
                  <option value="Regular Home Cleaning">Regular Home Cleaning</option>
                  <option value="Deep Cleaning">Deep Cleaning</option>
                  <option value="End of Tenancy Cleaning">End of Tenancy Cleaning</option>
                  <option value="Office & Commercial Cleaning">Office & Commercial Cleaning</option>
                </select>
                {errors.service && <p className="text-xs text-red-500">{errors.service}</p>}
              </div>
            </div>

            {/* Row 3: Message — optional */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-medium text-foreground">
                Your Message{" "}
                <span className="text-muted-foreground font-normal text-xs">(optional)</span>
              </label>
              <textarea
                name="message"
                placeholder="Tell us about your cleaning needs, property size, preferred dates, or any other details..."
                rows={5}
                className="input resize-none"
                value={form.message}
                onChange={handleChange}
              />
            </div>

            {/* Submit */}
            <motion.button
              type="button"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleWhatsApp}
              className="btn btn-primary w-full text-base py-4"
            >
              <MessageCircle className="w-5 h-5" />
              Send via WhatsApp
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info — below the form */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

          {/* Contact Methods */}
          <motion.div
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Other Ways to Reach Us</h3>
            <div className="space-y-3">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.title}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="card p-4! flex items-center gap-4 group"
                >
                  <div className={`w-11 h-11 rounded-xl ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform shrink-0`}>
                    <method.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-foreground text-sm">{method.title}</p>
                    <p className="text-primary font-medium text-xs truncate">{method.value}</p>
                    <p className="text-xs text-muted-foreground">{method.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Office Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold text-foreground mb-4">Office Hours</h3>
            <div className="card">
              <div className="flex items-center gap-3 mb-4">
                <div className="icon-box w-10! h-10!">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <p className="text-muted-foreground text-sm">We&apos;re available to take your enquiry</p>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Monday - Friday</span>
                  <span className="text-foreground font-medium">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Saturday</span>
                  <span className="text-foreground font-medium">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Sunday</span>
                  <span className="text-foreground font-medium">By appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
