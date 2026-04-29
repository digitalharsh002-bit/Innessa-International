import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Innessa International Terms of Service.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-subtitle mb-3">Legal</p>
        <h1 className="section-title mb-2">Terms of Service</h1>
        <p className="text-espresso/50 text-sm mb-10">Last updated: 1 January 2024</p>

        <div className="space-y-8 text-espresso/70 leading-relaxed text-sm">
          {[
            {
              title: "1. Acceptance of Terms",
              body: "By accessing and using the Innessa International website and purchasing our products, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website or services.",
            },
            {
              title: "2. Products and Pricing",
              body: "All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes. We reserve the right to modify prices at any time. Product descriptions, images, and specifications are provided as accurately as possible. We do not warrant that product descriptions or other content is accurate, complete, or error-free.",
            },
            {
              title: "3. Orders and Payment",
              body: "By placing an order, you confirm that the information you provide is accurate and complete. We accept major credit cards, debit cards, UPI, and net banking. Your order is confirmed only upon receipt of payment. We reserve the right to cancel any order for any reason, including product unavailability.",
            },
            {
              title: "4. Shipping and Delivery",
              body: "We aim to dispatch orders within 1-2 business days. Standard delivery takes 3-7 business days within India. Express delivery options may be available at checkout. We are not responsible for delays caused by courier companies or customs authorities.",
            },
            {
              title: "5. Returns and Refunds",
              body: "We accept returns within 15 days of delivery for unused, unopened products in their original packaging. Opened products may not be returned for hygiene reasons unless they are defective. Please refer to our Refund Policy for detailed information.",
            },
            {
              title: "6. Intellectual Property",
              body: "All content on this website, including text, graphics, logos, images, and software, is the property of Innessa International and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
            },
            {
              title: "7. Limitation of Liability",
              body: "Innessa International shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or website. Our liability is limited to the amount paid for the specific product giving rise to the claim.",
            },
            {
              title: "8. Governing Law",
              body: "These Terms of Service are governed by the laws of India. Any disputes arising shall be subject to the exclusive jurisdiction of the courts in New Delhi, India.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2 className="font-display text-lg text-espresso mb-3">{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
