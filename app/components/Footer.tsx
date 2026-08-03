"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-white">
      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-100 opacity-60 blur-3xl" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* CTA */}

        <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-orange-500 to-orange-600 px-8 py-14 text-white shadow-2xl lg:flex lg:items-center lg:justify-between lg:px-14">

          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 max-w-2xl">

            <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
              Lets Build Something Amazing
            </span>

            <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
              Ready to Transform
              <br />
              Your Business?
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-orange-50">
              We build premium websites, ERP software, CRM systems,
              SaaS platforms, AI solutions and custom applications
              that help businesses scale faster.
            </p>

          </div>

          <div className="relative z-10 mt-10 flex flex-col gap-4 lg:mt-0">

            <Link
              href="/contact"
              className="rounded-full bg-white px-8 py-4 text-center text-lg font-bold text-orange-600 transition hover:scale-105"
            >
              Start Your Project →
            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-white/30 px-8 py-4 text-center text-lg font-semibold transition hover:bg-white hover:text-orange-600"
            >
              View Portfolio
            </Link>

          </div>

        </div>

        {/* Main Footer */}

        <div className="mt-24">

          <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
                      {/* Company */}

          <div>

<Link
  href="/"
  className="text-3xl font-black tracking-tight text-gray-900"
>
  CodeVista{" "}
  <span className="text-orange-500">
    Solutions
  </span>
</Link>

<p className="mt-6 leading-8 text-gray-600">
  We create high-performance websites, ERP systems,
  CRM platforms, SaaS applications and AI-powered
  software for startups and growing businesses.
</p>

<div className="mt-8 flex flex-wrap gap-3">

  <Link
    href="https://www.linkedin.com"
    target="_blank"
    className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
  >
    LinkedIn
  </Link>

  <Link
    href="https://github.com"
    target="_blank"
    className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
  >
    GitHub
  </Link>

  <Link
    href="https://www.instagram.com"
    target="_blank"
    className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
  >
    Instagram
  </Link>

  <Link
    href="https://www.facebook.com"
    target="_blank"
    className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
  >
    Facebook
  </Link>

</div>

</div>

{/* Services */}

<div>

<h3 className="text-xl font-bold text-gray-900">
  Services
</h3>

<div className="mt-6 space-y-4">

  <Link href="/WebsiteDevelopment" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    Website Development
  </Link>

  <Link href="/ERPDevelopment" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    ERP Development
  </Link>

  <Link href="/CRMDevelopment" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    CRM Development
  </Link>

  <Link href="/SAASDevelopment" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    SaaS Development
  </Link>

  <Link href="/AISolutions" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    AI Solutions
  </Link>

  <Link href="/CustomSoftware" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    Custom Software
  </Link>

</div>

</div>

{/* Company */}

<div>

<h3 className="text-xl font-bold text-gray-900">
  Company
</h3>

<div className="mt-6 space-y-4">

  <Link href="/" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    Home
  </Link>

  <Link href="/about" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    About Us
  </Link>

  <Link href="/services" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    Our Services
  </Link>

  <Link href="/portfolio" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    Portfolio
  </Link>

  <Link href="/email" className="block text-gray-600 transition hover:translate-x-2 hover:text-orange-500">
    Contact
  </Link>

</div>

</div>

{/* Contact */}

<div>

<h3 className="text-xl font-bold text-gray-900">
  Contact
</h3>

<div className="mt-6 space-y-6">

  <div>

    <p className="text-sm uppercase tracking-wider text-orange-500">
      Phone
    </p>

    <a
      href="tel:+917888968943"
      className="mt-2 block text-lg font-semibold text-gray-900 hover:text-orange-500"
    >
      +91 78889 68943
    </a>

  </div>

  <div>

    <p className="text-sm uppercase tracking-wider text-orange-500">
      Email
    </p>

    <a
      href="mailto:solutionscodevista@gmail.com"
      className="mt-2 block break-all font-semibold text-gray-900 hover:text-orange-500"
    >
      solutionscodevista@gmail.com
    </a>

  </div>

  <div>

    <p className="text-sm uppercase tracking-wider text-orange-500">
      Office
    </p>

    <p className="mt-2 leading-7 font-semibold text-gray-900">
      SCO 325, First Floor
      <br />
      Sector 70
      <br />
      Mohali, Punjab 160071
      <br />
      India
    </p>

  </div>

</div>

</div>
</div>

{/* Bottom Footer */}

<div className="mt-20 border-t border-gray-200 pt-8">

  <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

    <div>

      <h4 className="text-lg font-bold text-gray-900">
        © 2026 CodeVista Solutions (OPC) Pvt. Ltd.
      </h4>

      <p className="mt-2 text-gray-500">
        All Rights Reserved.
      </p>

      <div className="mt-4 flex flex-col gap-2 text-sm text-gray-500 sm:flex-row sm:gap-8">

        <span>
          CIN: U62011PB2025OPC066033
        </span>

        <span>
          GSTIN: 03AANCC1896N1Z4
        </span>

      </div>

    </div>

    <div className="flex flex-wrap gap-6 text-sm font-medium">

      <Link
        href="/privacy-policy"
        className="text-gray-600 transition hover:text-orange-500"
      >
        Privacy Policy
      </Link>

      <Link
        href="/terms-and-conditions"
        className="text-gray-600 transition hover:text-orange-500"
      >
        Terms & Conditions
      </Link>

      <Link
        href="/contact"
        className="text-gray-600 transition hover:text-orange-500"
      >
        Contact
      </Link>

    </div>

  </div>

</div>

</div>

</div>

</footer>
);
}