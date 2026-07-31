"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How much does a business website cost in India?",
    a: "Website pricing depends on the features, design and functionality required. We build scalable websites for startups, SMEs and enterprises."
  },
  {
    q: "Do you build custom ERP software?",
    a: "Yes. We develop custom ERP solutions for manufacturing, healthcare, education, logistics and service-based businesses."
  },
  {
    q: "Can you develop CRM software?",
    a: "Absolutely. We create CRM solutions for lead management, customer support, sales automation and workflow management."
  },
  {
    q: "Do you provide AI software development?",
    a: "Yes. We build AI-powered chatbots, automation tools, recommendation systems and intelligent business applications."
  },
  {
    q: "Which cities do you serve?",
    a: "We work with businesses across Chandigarh, Mohali, Panchkula, Punjab, Haryana, Himachal Pradesh and clients worldwide."
  }
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 py-24">
      <div className="mx-auto max-w-4xl px-6">

        <div className="text-center">
          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-4xl font-black text-gray-900">
            Questions About Our Software Development Services
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-gray-900">
                  {faq.q}
                </span>

                <span className="text-3xl font-bold text-orange-500">
                  {open === index ? "−" : "+"}
                </span>
              </button>

              {open === index && (
                <div className="border-t border-gray-200 px-6 py-6">
                  <p className="leading-8 text-gray-600">
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}