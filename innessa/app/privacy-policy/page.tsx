import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Innessa International Privacy Policy — how we collect, use, and protect your data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-cream-50 pt-24 md:pt-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="section-subtitle mb-3">Legal</p>
        <h1 className="section-title mb-2">Privacy Policy</h1>
        <p className="text-espresso/50 text-sm mb-10">Last updated: 1 January 2024</p>

        <div className="prose prose-sm max-w-none space-y-8 text-espresso/70 leading-relaxed">
          {[
            {
              title: "1. Information We Collect",
              body: "We collect information you provide directly to us when you create an account, place an order, subscribe to our newsletter, or contact us. This includes your name, email address, postal address, phone number, and payment information. We also collect information automatically when you use our website, including your IP address, browser type, pages visited, and purchase history.",
            },
            {
              title: "2. How We Use Your Information",
              body: "We use the information we collect to process your orders and send you related information, respond to your comments and questions, send you marketing communications (with your consent), analyze usage trends and improve our website, and comply with legal obligations.",
            },
            {
              title: "3. Information Sharing",
              body: "We do not sell, trade, or otherwise transfer your personal information to outside parties except to trusted third parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential. We may also release your information when we believe release is appropriate to comply with the law.",
            },
            {
              title: "4. Data Security",
              body: "We implement industry-standard security measures to maintain the safety of your personal information. All sensitive data is transmitted via Secure Socket Layer (SSL) technology and encrypted in our database. However, no method of transmission over the Internet is 100% secure.",
            },
            {
              title: "5. Cookies",
              body: "We use cookies to enhance your experience on our website, analyze site traffic, and understand where our visitors come from. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.",
            },
            {
              title: "6. Your Rights",
              body: "You have the right to access, update, or delete your personal information at any time. You may also opt out of receiving marketing communications by clicking the unsubscribe link in any email. To exercise these rights, please contact us at privacy@innessainternational.com.",
            },
            {
              title: "7. Contact Us",
              body: "If you have any questions about this Privacy Policy, please contact us at privacy@innessainternational.com or write to us at Innessa International, New Delhi, India 110001.",
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
