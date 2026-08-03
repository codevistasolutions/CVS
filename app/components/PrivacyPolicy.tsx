import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Privacy Policy | CodeVista Solutions | Software Development Company India",
  description:
    "Read the Privacy Policy of CodeVista Solutions. Learn how we collect, process, protect, and manage personal information while delivering Website Development, Software Development, ERP, CRM, SaaS, AI, Cloud, Mobile App Development, SEO, and Digital Marketing services.",
  keywords: [
    "Privacy Policy",
    "CodeVista Solutions",
    "Software Development Company",
    "Website Development Company",
    "ERP Development",
    "CRM Development",
    "SaaS Development",
    "AI Development",
    "Mobile App Development",
    "Digital Marketing",
    "SEO Company",
    "Cloud Solutions",
    "IT Company India",
    "Data Protection",
    "Data Privacy",
  ],
  alternates: {
    canonical: "https://www.codevistasolutions.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | CodeVista Solutions",
    description:
      "Understand how CodeVista Solutions collects, protects, and processes your personal information.",
    url: "https://www.codevistasolutions.com/privacy-policy",
    siteName: "CodeVista Solutions",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="bg-white">

      {/* Hero */}

      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100">

        <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-orange-200/40 blur-[120px]" />

        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-orange-100 blur-[140px]" />

        <div className="relative mx-auto max-w-6xl px-6 py-28 text-center">

          <div className="inline-flex rounded-full border border-orange-200 bg-white px-5 py-2 text-sm font-semibold text-orange-600 shadow-sm">
            Privacy • Data Protection • Transparency
          </div>

          <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">
            Privacy Policy
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-9 text-slate-600">
            CodeVista Solutions values your privacy. This Privacy Policy
            explains how we collect, use, process, store, and protect
            information while delivering Website Development, Software
            Development, ERP, CRM, SaaS, Artificial Intelligence, Mobile
            Application Development, Cloud Solutions, SEO, and Digital
            Marketing services.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Contact Our Team
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-slate-300 px-8 py-4 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
            >
              Explore Services
            </Link>

          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Last Updated
              </p>

              <p className="mt-3 text-xl font-bold text-slate-900">
                August 2026
              </p>

            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Compliance
              </p>

              <p className="mt-3 text-xl font-bold text-slate-900">
                GDPR Friendly
              </p>

            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">

              <p className="text-sm font-semibold uppercase tracking-wider text-orange-500">
                Security
              </p>

              <p className="mt-3 text-xl font-bold text-slate-900">
                Industry Best Practices
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Content */}

      <section className="mx-auto max-w-5xl px-6 py-24">

        <div className="space-y-10">

          {/* 1 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Information We Collect
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We collect information that helps us deliver our services,
              improve customer experience, maintain security, respond to
              enquiries, and fulfill contractual and legal obligations.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-orange-50 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Personal Information
                </h3>

                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>Full Name</li>
                  <li>Email Address</li>
                  <li>Phone Number</li>
                  <li>Company Name</li>
                  <li>Billing Details</li>
                </ul>

              </div>

              <div className="rounded-2xl bg-orange-50 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Technical Information
                </h3>

                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>IP Address</li>
                  <li>Browser Type</li>
                  <li>Operating System</li>
                  <li>Device Information</li>
                  <li>Usage Analytics</li>
                </ul>

              </div>

            </div>

          </section>
                    {/* 2 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              How We Use Information
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Information collected through our website and business
              interactions helps us provide professional software services,
              improve customer experience, enhance security, deliver projects,
              and maintain communication with clients.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-orange-100 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Business Purposes
                </h3>

                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>Respond to enquiries</li>
                  <li>Deliver software projects</li>
                  <li>Provide technical support</li>
                  <li>Manage customer accounts</li>
                  <li>Improve service quality</li>
                  <li>Generate quotations</li>
                  <li>Process payments</li>
                </ul>

              </div>

              <div className="rounded-2xl border border-orange-100 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Website Improvement
                </h3>

                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>Performance analytics</li>
                  <li>Security monitoring</li>
                  <li>Website optimization</li>
                  <li>User experience improvements</li>
                  <li>Feature enhancements</li>
                  <li>Error monitoring</li>
                  <li>Traffic analysis</li>
                </ul>

              </div>

            </div>

          </section>

          {/* 3 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Cookies And Tracking Technologies
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our website may use cookies, browser storage, analytics tools,
              and similar technologies to improve website functionality,
              remember preferences, measure performance, and provide a better
              browsing experience.
            </p>

            <div className="mt-8 rounded-2xl bg-orange-50 p-8">

              <h3 className="text-xl font-bold text-slate-900">
                Cookies Help Us
              </h3>

              <ul className="mt-5 space-y-3 text-slate-600">
                <li>Remember your preferences</li>
                <li>Improve website speed</li>
                <li>Understand visitor behavior</li>
                <li>Maintain website security</li>
                <li>Improve website performance</li>
              </ul>

            </div>

          </section>

          {/* 4 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Third Party Services
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We may work with trusted third party providers for cloud hosting,
              payment processing, communication, analytics, customer support,
              email delivery, and infrastructure management.
            </p>

            <p className="mt-6 leading-8 text-slate-600">
              Every provider processes information according to its own privacy
              practices. CodeVista Solutions carefully selects providers that
              maintain appropriate operational and security standards.
            </p>

          </section>

          {/* 5 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Data Security
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We implement administrative, organizational, and technical
              safeguards designed to protect information against unauthorized
              access, disclosure, alteration, misuse, or accidental loss.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-3">

              <div className="rounded-2xl bg-orange-50 p-6">

                <h3 className="font-bold text-slate-900">
                  Secure Infrastructure
                </h3>

                <p className="mt-4 text-slate-600">
                  Trusted cloud platforms, encrypted connections, and secure
                  hosting environments.
                </p>

              </div>

              <div className="rounded-2xl bg-orange-50 p-6">

                <h3 className="font-bold text-slate-900">
                  Access Control
                </h3>

                <p className="mt-4 text-slate-600">
                  Access to customer information is limited to authorized team
                  members when required for business operations.
                </p>

              </div>

              <div className="rounded-2xl bg-orange-50 p-6">

                <h3 className="font-bold text-slate-900">
                  Continuous Monitoring
                </h3>

                <p className="mt-4 text-slate-600">
                  Security reviews and operational improvements help maintain a
                  safe environment for our clients.
                </p>

              </div>

            </div>

          </section>
                    {/* 6 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Data Retention
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Personal information is retained only for as long as necessary
              to provide services, comply with legal obligations, resolve
              disputes, maintain business records, and enforce agreements.
              When information is no longer required it is securely removed
              or anonymized wherever reasonably possible.
            </p>

          </section>

          {/* 7 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Your Privacy Rights
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Depending upon applicable privacy regulations, you may request
              access to your information, update inaccurate details, request
              deletion where legally permitted, or ask us to restrict certain
              processing activities.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl border border-orange-100 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  You May Request
                </h3>

                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>Access to personal information</li>
                  <li>Correction of inaccurate information</li>
                  <li>Deletion where legally permitted</li>
                  <li>Restriction of processing</li>
                  <li>Withdrawal of consent</li>
                </ul>

              </div>

              <div className="rounded-2xl border border-orange-100 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  We Will
                </h3>

                <ul className="mt-5 space-y-3 text-slate-600">
                  <li>Review every request carefully</li>
                  <li>Respond within a reasonable period</li>
                  <li>Protect confidential information</li>
                  <li>Follow applicable legal requirements</li>
                  <li>Maintain secure communication</li>
                </ul>

              </div>

            </div>

          </section>

          {/* 8 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Privacy Of Minors
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Our services are intended primarily for businesses and adults.
              We do not knowingly collect personal information from children.
              If such information is identified, reasonable steps will be
              taken to remove it as quickly as practical.
            </p>

          </section>

          {/* 9 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Updates To This Privacy Policy
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              This Privacy Policy may be revised whenever our services,
              operational practices, legal requirements, or security measures
              change. The latest version will always be published on this page
              together with the most recent update date.
            </p>

          </section>

          {/* 10 */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <div className="mt-8 space-y-5">

              <div className="rounded-2xl bg-slate-50 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Do you sell personal information
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  No. CodeVista Solutions does not sell customer or visitor
                  personal information.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  Can I request deletion of my information
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  Yes. Requests are reviewed according to applicable legal
                  obligations and contractual requirements.
                </p>

              </div>

              <div className="rounded-2xl bg-slate-50 p-6">

                <h3 className="text-xl font-bold text-slate-900">
                  How is information protected
                </h3>

                <p className="mt-4 leading-8 text-slate-600">
                  We use modern operational practices, secure hosting,
                  encrypted communication, and access controls to help protect
                  business information.
                </p>

              </div>

            </div>

          </section>
                    {/* 11 */}

          <section
            id="contact"
            className="overflow-hidden rounded-3xl bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-10 text-white shadow-xl"
          >

            <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">
              Contact CodeVista Solutions
            </span>

            <h2 className="mt-6 text-4xl font-black">
              Questions About Privacy
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              If you require additional information regarding this Privacy
              Policy, our data handling practices, or any service offered by
              CodeVista Solutions, our team is ready to assist you.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <p className="text-sm font-semibold uppercase tracking-wider text-orange-200">
                  Email
                </p>

                <a
                  href="mailto:solutionscodevista@gmail.com  "
                  className="mt-3 block text-xl font-bold hover:underline"
                >
solutionscodevista@gmail.com                </a>

              </div>

              <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                <p className="text-sm font-semibold uppercase tracking-wider text-orange-200">
                  Website
                </p>

                <a
                  href="https://www.codevistasolutions.com"
                  className="mt-3 block text-xl font-bold hover:underline"
                >
                  www.codevistasolutions.com
                </a>

              </div>

            </div>

          </section>

          {/* Explore More */}

          <section className="rounded-3xl border border-orange-100 bg-white p-10 shadow-sm">

            <h2 className="text-3xl font-bold text-slate-900">
              Explore More
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Learn more about CodeVista Solutions, our technology services,
              business information, and legal policies through the pages below.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

              <Link
                href="/"
                className="rounded-2xl border border-orange-100 p-6 transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
              >
                <h3 className="font-bold text-slate-900">
                  Home
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Return to the main website.
                </p>

              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-orange-100 p-6 transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
              >
                <h3 className="font-bold text-slate-900">
                  Services
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Website, ERP, CRM, SaaS, AI, Cloud, and Digital Marketing.
                </p>

              </Link>

              <Link
                href="/about"
                className="rounded-2xl border border-orange-100 p-6 transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
              >
                <h3 className="font-bold text-slate-900">
                  About Us
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Learn more about our company and our mission.
                </p>

              </Link>

              <Link
                href="/terms-and-conditions"
                className="rounded-2xl border border-orange-100 p-6 transition hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
              >
                <h3 className="font-bold text-slate-900">
                  Terms And Conditions
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  Read the legal terms governing our services.
                </p>

              </Link>

            </div>

          </section>

        </div>

      </section>

    </main>
  );
}