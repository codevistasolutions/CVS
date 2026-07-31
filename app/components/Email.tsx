"use client";

import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white via-orange-50 to-white py-24"
    >
      {/* Background Blur */}
      <div className="absolute -top-20 -left-20 h-80 w-80 rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-100 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto max-w-4xl text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Get In Touch
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 md:text-6xl">
            Start Your Next Software Development Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Looking for a trusted software development company in India?
            CodeVista Solutions specializes in custom website development,
            ERP software, CRM systems, SaaS platforms, AI-powered solutions
            and enterprise applications tailored to your business.
          </p>

        </div>

        <div className="mt-20 grid gap-12 lg:grid-cols-2">

          {/* LEFT SIDE */}

          <div>

            <h3 className="text-3xl font-bold text-gray-900">
              Why Businesses Choose CodeVista
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              We combine strategy, technology and design to create
              scalable digital products that help businesses grow.
            </p>

            <div className="mt-10 space-y-6">

              {[
                "Free Project Consultation",
                "24 Hour Response Time",
                "Dedicated Project Manager",
                "Custom Software Development",
                "NDA Available on Request",
                "Transparent Pricing",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-white p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                    ✓
                  </div>

                  <span className="text-lg font-medium text-gray-800">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <div className="mt-12 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white shadow-xl">

              <h4 className="text-2xl font-bold">
                Trusted Across India
              </h4>

              <p className="mt-4 leading-8 text-orange-100">
                Helping startups, SMEs and enterprises build
                websites, ERP systems, CRM software, SaaS platforms
                and AI-driven digital products.
              </p>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="rounded-[32px] border border-orange-100 bg-white p-8 shadow-2xl">

            <form className="space-y-6">

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Full Name *
                  </label>

                  <input
                    type="text"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Company
                  </label>

                  <input
                    type="text"
                    name="company"
                    autoComplete="organization"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                    placeholder="Your Company"
                  />
                </div>

              </div>

              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Business Email *
                  </label>

                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block font-semibold text-gray-700">
                    Phone Number *
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500"
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>

              </div>
              <div className="grid gap-6 md:grid-cols-2">

<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Service Required *
  </label>

  <select
    name="service"
    value={form.service}
    onChange={handleChange}
    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-orange-500"
  >
    <option value="">Select a Service</option>
    <option>Website Development</option>
    <option>Custom Software Development</option>
    <option>ERP Development</option>
    <option>CRM Development</option>
    <option>SaaS Development</option>
    <option>AI Solutions</option>
    <option>Mobile App Development</option>
    <option>UI/UX Design</option>
    <option>Other</option>
  </select>
</div>

<div>
  <label className="mb-2 block font-semibold text-gray-700">
    Estimated Budget
  </label>

  <select
    name="budget"
    value={form.budget}
    onChange={handleChange}
    className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-orange-500"
  >
    <option value="">Select Budget</option>
    <option>Below ₹50,000</option>
    <option>₹50,000 - ₹1,00,000</option>
    <option>₹1,00,000 - ₹5,00,000</option>
    <option>₹5,00,000+</option>
  </select>
</div>

</div>

<div>
<label className="mb-2 block font-semibold text-gray-700">
  Tell Us About Your Project *
</label>

<textarea
  name="message"
  rows={6}
  value={form.message}
  onChange={handleChange}
  placeholder="Describe your project, goals, timeline and requirements..."
  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-orange-500 resize-none"
/>
</div>

<button
type="submit"
className="group w-full rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-5 text-lg font-bold text-white shadow-xl transition duration-300 hover:scale-[1.02] hover:shadow-2xl"
>
Get Free Consultation →
</button>

<div className="grid grid-cols-2 gap-4 pt-2 text-center md:grid-cols-4">

<div className="rounded-xl bg-orange-50 p-4">
  <p className="text-2xl font-bold text-orange-600">24h</p>
  <p className="mt-1 text-sm text-gray-600">
    Response
  </p>
</div>

<div className="rounded-xl bg-orange-50 p-4">
  <p className="text-2xl font-bold text-orange-600">100%</p>
  <p className="mt-1 text-sm text-gray-600">
    Confidential
  </p>
</div>

<div className="rounded-xl bg-orange-50 p-4">
  <p className="text-2xl font-bold text-orange-600">Free</p>
  <p className="mt-1 text-sm text-gray-600">
    Consultation
  </p>
</div>

<div className="rounded-xl bg-orange-50 p-4">
  <p className="text-2xl font-bold text-orange-600">5★</p>
  <p className="mt-1 text-sm text-gray-600">
    Client Focus
  </p>
</div>

</div>

</form>

</div>

</div>

</div>

</section>
);
}