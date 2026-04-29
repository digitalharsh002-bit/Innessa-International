import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Refund Policy",
  description: "Innessa International Refund and Return Policy.",
};

export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-subtitle mb-3">Legal</p>
        <h1 className="section-title mb-2">Refund Policy</h1>
        <p className="text-espresso/50 text-sm mb-10">Last updated: 1 January 2024</p>

        <div className="bg-gold-50 border border-gold-200 p-5 mb-10">
          <p className="text-gold-700 font-semibold text-sm mb-1">Our Promise to You</p>
          <p className="text-gold-600 text-sm">
            We stand behind every product we sell. If you're not completely satisfied,
            we'll make it right.
          </p>
        </div>

        <div className="space-y-8 text-espresso/70 leading-relaxed text-sm">
          {[
            {
              title: "Return Eligibility",
              body: "You may return most unopened products within 15 days of the delivery date. To be eligible for a return, items must be in their original, unused condition and in the original packaging. Products that have been opened or used cannot be returned for hygiene reasons, unless the product is defective or damaged.",
            },
            {
              title: "Defective or Damaged Products",
              body: "If you receive a defective, damaged, or incorrect product, please contact us within 48 hours of delivery at returns@innessainternational.com with photos of the issue. We will arrange a free replacement or full refund at no cost to you.",
            },
            {
              title: "How to Initiate a Return",
              body: "Email returns@innessainternational.com with your order number, reason for return, and photos if applicable. Our team will review your request within 24 hours and provide return instructions. Please do not return products without prior authorization. Once we receive and inspect the returned product, we will process your refund within 5-7 business days.",
            },
            {
              title: "Refund Timeline",
              body: "Once your return is approved and received, refunds are processed within 5-7 business days. The credit will appear on your original payment method. UPI and bank transfers may take 3-5 additional business days. Credit and debit card refunds may take up to 10 business days depending on your card issuer.",
            },
            {
              title: "Return Shipping",
              body: "For returns due to our error (wrong product, defective, damaged), we cover the return shipping cost. For other returns, the customer is responsible for return shipping charges. We recommend using a trackable shipping service as we are not responsible for returns lost in transit.",
            },
            {
              title: "Non-Returnable Items",
              body: "For hygiene reasons, the following cannot be returned: opened or used hair care products, products without original packaging, gift cards, and promotional or sale items marked as final sale.",
            },
            {
              title: "Exchanges",
              body: "We do not offer direct exchanges. If you wish to exchange a product, please return the original item for a refund and place a new order for the desired product.",
            },
          ].map(({ title, body }) => (
            <div key={title}>
              <h2 className="font-display text-lg text-espresso mb-3">{title}</h2>
              <p>{body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-cream-200 text-center">
          <p className="text-espresso/60 text-sm mb-3">
            Have questions about your return?
          </p>
          <Link href="/contact" className="btn-gold inline-block text-sm">
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
