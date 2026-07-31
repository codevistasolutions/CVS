"use client";

import Link from "next/link";
import {
  ArrowRight,
  Github,
  Instagram,
  Linkedin,
  Facebook,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative mt-32 overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-60" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8"></div>

        {/* CTA */}

        <div className="relative overflow-hidden rounded-[40px] border border-orange-100 bg-gradient-to-br from-orange-500 to-orange-600 px-10 py-16 text-white shadow-2xl">

          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">

            <div className="max-w-2xl">

              <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold backdrop-blur">
                Let's Build Something Amazing
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight lg:text-5xl">
                Ready to Transform
                <br />
                Your Business?
              </h2>

              <p className="mt-6 text-lg leading-8 text-orange-50">
                Whether you need a website, ERP, CRM, SaaS platform or AI
                solution, CodeVista Solutions is ready to help you build
                scalable software that drives real business growth.
              </p>
            </div>

            <div className="flex flex-col gap-4">

              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-orange-600 transition hover:scale-105"
              >
                Start Your Project

                <ArrowRight className="ml-2 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-white/30 px-8 py-4 text-center text-lg font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                View Portfolio
              </Link>

            </div>

          </div>

        </div>

        {/* Main Footer */}

        <div className="mt-24 rounded-[40px] border border-gray-200 bg-white p-10 shadow-xl">

          <div className="grid gap-14 lg:grid-cols-4">
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
  We build premium websites, ERP systems, CRM platforms,
  SaaS products, AI-powered applications and custom software
  that help startups and enterprises scale faster.
</p>

<div className="mt-8 flex flex-wrap gap-3">

<div className="mt-8 flex flex-wrap gap-3">

<Link
  href="https://linkedin.com"
  target="_blank"
  className="rounded-full border border-gray-200 p-3 text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
>
  <span>LinkedIn</span>
</Link>

<Link
  href="https://github.com"
  target="_blank"
  className="rounded-full border border-gray-200 p-3 text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
>
<span>Github</span></Link>

<Link
  href="https://instagram.com"
  target="_blank"
  className="rounded-full border border-gray-200 p-3 text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
>
<span>Instagram</span></Link>

<Link
  href="https://facebook.com"
  target="_blank"
  className="rounded-full border border-gray-200 p-3 text-gray-700 transition hover:border-orange-500 hover:bg-orange-500 hover:text-white"
>
<span>Facebook</span></Link>

</div>

</div>

</div>

{/* Services */}

<div>

<h3 className="text-xl font-bold text-gray-900">
  Services
</h3>

<div className="mt-6 space-y-4">

  {[
    ["Website Development", "/WebsiteDevelopment"],
    ["ERP Development", "/ERPDevelopment"],
    ["CRM Development", "/CRMDevelopment"],
    ["SaaS Development", "/SaaSDevelopment"],
    ["AI Solutions", "/AISolutions"],
    ["Custom Software", "/CustomSoftware"],
  ].map(([title, href]) => (
    <Link
      key={title}
      href={href}
      className="block font-medium text-gray-600 transition hover:translate-x-2 hover:text-orange-500"
    >
      {title}
    </Link>
  ))}

</div>

</div>

{/* Company Links */}

<div>

<h3 className="text-xl font-bold text-gray-900">
  Company
</h3>

<div className="mt-6 space-y-4">

  {[
    ["Home", "/"],
    ["About Us", "/about"],
    ["Our Services", "/OurServices"],
    ["Portfolio", "/portfolio"],
    ["Contact", "/email"],
  ].map(([title, href]) => (
    <Link
      key={title}
      href={href}
      className="block font-medium text-gray-600 transition hover:translate-x-2 hover:text-orange-500"
    >
      {title}
    </Link>
  ))}

</div>

</div>

{/* Contact */}

<div>

<h3 className="text-xl font-bold text-gray-900">
  Contact
</h3>

<div className="mt-6 space-y-6">

  <div className="flex items-start gap-4">

    <div className="rounded-2xl bg-orange-100 p-3">
      <Phone className="text-orange-500" size={20} />
    </div>

    <div>

      <p className="text-sm text-gray-500">
        Phone
      </p>

      <a
        href="tel:+917888968943"
        className="font-semibold text-gray-900 hover:text-orange-500"
      >
        +91 78889 68943
      </a>

    </div>

  </div>

  <div className="flex items-start gap-4">

    <div className="rounded-2xl bg-orange-100 p-3">
      <Mail className="text-orange-500" size={20} />
    </div>

    <div>

      <p className="text-sm text-gray-500">
        Email
      </p>

      <a
        href="mailto:solutionscodevista@gmail.com"
        className="font-semibold break-all text-gray-900 hover:text-orange-500"
      >
        solutionscodevista@gmail.com
      </a>

    </div>

  </div>

  <div className="flex items-start gap-4">

    <div className="rounded-2xl bg-orange-100 p-3">
      <MapPin className="text-orange-500" size={20} />
    </div>

    <div>

      <p className="text-sm text-gray-500">
        Office
      </p>

      <p className="font-semibold text-gray-900 leading-7">
        SCO 325 First Floor, Mattaur Rd, Sector-70, Mohali,
        Punjab,
        India
      </p>

    </div>

  </div>

</div>

</div>
</div>

{/* Bottom Bar */}

<div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-gray-200 pt-8 text-center lg:flex-row lg:text-left">

  <div>

    <p className="font-semibold text-gray-900">
      © 2026 CodeVista Solutions (OPC) Pvt. Ltd.
    </p>

    <p className="mt-2 text-sm text-gray-500">
      All Rights Reserved.
    </p>

    <div className="mt-3 flex flex-wrap justify-center gap-5 text-sm text-gray-500 lg:justify-start">

      <span>
        CIN: U62011PB2025OPC066033
      </span>

      <span>
        GSTIN: 03AANCC1896N1Z4
      </span>

    </div>

  </div>

  <div className="flex flex-wrap items-center justify-center gap-6">

    <Link
      href="/privacy-policy"
      className="font-medium text-gray-600 transition hover:text-orange-500"
    >
      Privacy Policy
    </Link>

    <Link
      href="/terms-and-conditions"
      className="font-medium text-gray-600 transition hover:text-orange-500"
    >
      Terms & Conditions
    </Link>

    <Link
      href="/contact"
      className="font-medium text-gray-600 transition hover:text-orange-500"
    >
      Contact
    </Link>

  </div>

</div>

</div>

</footer>
);
}