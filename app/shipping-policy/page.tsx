import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: "Innessa International Shipping Policy — delivery timelines and rates.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-subtitle mb-3">Legal</p>
        <h1 className="section-title mb-2">Shipping Policy</h1>
        <p className="text-espresso/50 text-sm mb-10">Last updated: 1 January 2024</p>

        {/* Shipping rates table */}
        <div className="mb-12">
          <h2 className="font-display text-xl text-espresso mb-5">Shipping Rates</h2>
          <div className="border border-cream-200 overflow-hidden">
            <div className="grid grid-cols-3 bg-espresso text-cream-100 text-xs tracking-widest uppercase font-semibold">
              <div className="p-4">Order Value</div>
              <div className="p-4">Standard (5-7 days)</div>
              <div className="p-4">Express (2-3 days)</div>
            </div>
            {[
              ["Below ₹999", "₹99", "₹199"],
              ["₹999 – ₹1999", "FREE", "₹149"],
              ["₹2000 and above", "FREE", "FREE"],
            ].map(([value, standard, express]) => (
              <div
                key={value}
                className="grid grid-cols-3 border-t border-cream-200 text-sm text-espresso/70"
              >
                <div className="p-4 font-medium text-espresso">{value}</div>
                <div className={`p-4 ${standard === "FREE" ? "text-green-600 font-semibold" : ""}`}>{standard}</div>
                <div className={`p-4 ${express === "FREE" ? "text-green-600 font-semibold" : ""}`}>{express}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8 text-espresso/70 leading-relaxed text-sm">
          {[
            {
              title: "Processing Time",
              body: "All orders are processed within 1-2 business days (excluding weekends and public holidays). You will receive a confirmation email with tracking information once your order has been shipped. During peak periods (festivals, sale events), processing may take up to 3 business days.",
            },
            {
              title: "Delivery Timeline",
              body: "Standard delivery typically takes 5-7 business days across India. Express delivery takes 2-3 business days. Metro cities (Delhi, Mumbai, Bangalore, Chennai, Hyderabad, Kolkata) may receive orders sooner. Remote or rural areas may experience slight delays.",
            },
            {
              title: "Order Tracking",
              body: "Once your order is shipped, you will receive an SMS and email with your tracking number. You can track your order directly on the courier's website or through our website under 'My Orders' in your account.",
            },
            {
              title: "International Shipping",
              body: "Currently, we ship within India only. We are working on expanding our international shipping capabilities. Please check back soon or contact us for updates.",
            },
            {
              title: "Packaging",
              body: "All Innessa products are carefully packaged to ensure they arrive in perfect condition. We use eco-friendly, recyclable packaging materials as part of our commitment to sustainability. Gift orders receive premium packaging at no additional charge.",
            },
            {
              title: "Failed Deliveries",
              body: "If a delivery attempt fails, the courier will try up to 3 times. After that, the parcel will be held at the local facility for 7 days. If uncollected, it will be returned to us. In such cases, you will be charged for re-shipping.",
            },
            {
              title: "Damaged in Transit",
              body: "If your order arrives damaged, please take photos immediately and contact us within 48 hours at shipping@innessainternational.com. We will arrange a replacement or refund promptly.",
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
