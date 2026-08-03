import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | CodeVista Solutions (OPC) Pvt Ltd",
  description:
    "Read the Privacy Policy of CodeVista Solutions (OPC) Pvt Ltd. Learn how we collect, use, store, and protect your information while providing Web Development, ERP, CRM, SaaS, AI, and Digital Solutions.",
  keywords: [
    "Privacy Policy",
    "CodeVista Solutions",
    "Software Development Company",
    "Web Development Company",
    "ERP Development Company",
    "CRM Development",
    "SaaS Development",
    "AI Solutions",
    "Mobile App Development",
    "Website Development India",
    "IT Company Chandigarh",
    "Data Privacy",
  ],
  alternates: {
    canonical: "https://www.codevistasolutions.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | CodeVista Solutions",
    description:
      "Learn how CodeVista Solutions protects your privacy and personal information.",
    url: "https://www.codevistasolutions.com/privacy-policy",
    siteName: "CodeVista Solutions",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | CodeVista Solutions",
    description:
      "Read how CodeVista Solutions collects, uses and protects your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="relative overflow-hidden bg-white">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-0 top-0 h-[520px] w-[520px] rounded-full bg-orange-100 blur-[140px] opacity-60" />

        <div className="absolute right-0 top-72 h-[450px] w-[450px] rounded-full bg-orange-50 blur-[140px] opacity-70" />

        <div className="absolute bottom-0 left-1/2 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-100 blur-[180px] opacity-50" />

      </div>

      {/* Hero */}

      <section className="relative pt-40 pb-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Breadcrumb */}

          <nav
            aria-label="Breadcrumb"
            className="mb-10 flex items-center justify-center text-sm text-slate-500"
          >
            <Link
              href="/"
              className="transition hover:text-orange-500"
            >
              Home
            </Link>

            <span className="mx-3">/</span>

            <span className="font-medium text-slate-700">
              Privacy Policy
            </span>
          </nav>

          <div className="mx-auto max-w-4xl text-center">

            <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">

              🔒 Privacy & Data Protection

            </span>

            <h1 className="mt-8 text-5xl font-black tracking-tight text-slate-900 lg:text-7xl">

              Privacy Policy

            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-slate-600">

              At <strong>CodeVista Solutions (OPC) Pvt Ltd</strong>,
              protecting your privacy is one of our highest priorities.
              This Privacy Policy explains how we collect, use,
              process, and safeguard your personal information when
              you visit our website or use our Web Development,
              Software Development, ERP, CRM, SaaS, AI,
              Digital Marketing, and IT Consulting services.

            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/services"
                className="rounded-full bg-orange-500 px-8 py-4 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
              >
                Explore Our Services
              </Link>

              <Link
                href="/contact"
                className="rounded-full border border-slate-200 px-8 py-4 font-semibold text-slate-700 transition hover:border-orange-500 hover:text-orange-500"
              >
                Contact Us
              </Link>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">

              <div className="rounded-2xl border border-orange-100 bg-white px-6 py-4 shadow-sm">

                <p className="text-xs uppercase tracking-wider text-slate-500">

                  Last Updated

                </p>

                <p className="mt-1 font-semibold text-slate-900">

                  August 2026

                </p>

              </div>

              <div className="rounded-2xl border border-orange-100 bg-white px-6 py-4 shadow-sm">

                <p className="text-xs uppercase tracking-wider text-slate-500">

                  Compliance

                </p>

                <p className="mt-1 font-semibold text-slate-900">

                  GDPR Friendly

                </p>

              </div>

              <div className="rounded-2xl border border-orange-100 bg-white px-6 py-4 shadow-sm">

                <p className="text-xs uppercase tracking-wider text-slate-500">

                  Security

                </p>

                <p className="mt-1 font-semibold text-slate-900">

                  Industry Best Practices

                </p>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Content */}

      <section className="pb-28">

        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[280px_1fr] lg:px-8">

          {/* Sticky Table of Contents */}

          <aside className="hidden lg:block">

            <div className="sticky top-32 rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">

              <h2 className="text-lg font-bold text-slate-900">
                On This Page
              </h2>

              <nav className="mt-6 space-y-4 text-sm">

                <a href="#information" className="block text-slate-600 transition hover:text-orange-500">
                  Information We Collect
                </a>

                <a href="#usage" className="block text-slate-600 transition hover:text-orange-500">
                  How We Use Information
                </a>

                <a href="#cookies" className="block text-slate-600 transition hover:text-orange-500">
                  Cookies Policy
                </a>

                <a href="#thirdparty" className="block text-slate-600 transition hover:text-orange-500">
                  Third-Party Services
                </a>

                <a href="#security" className="block text-slate-600 transition hover:text-orange-500">
                  Data Security
                </a>

                <a href="#rights" className="block text-slate-600 transition hover:text-orange-500">
                  Your Rights
                </a>

                <a href="#contact" className="block text-slate-600 transition hover:text-orange-500">
                  Contact Information
                </a>

              </nav>

            </div>

          </aside>

          {/* Main Content */}

          <div className="space-y-10">

            {/* Information */}

            <article
              id="information"
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg"
            >

              <h2 className="text-3xl font-bold text-slate-900">

                Information We Collect

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                CodeVista Solutions (OPC) Pvt Ltd may collect personal,
                technical, and business information whenever you visit our
                website, request a quotation, submit a contact form, subscribe
                to our services, or communicate with our team.

              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl bg-orange-50 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Personal Information

                  </h3>

                  <ul className="mt-4 space-y-3 text-slate-600">

                    <li>• Full Name</li>
                    <li>• Email Address</li>
                    <li>• Phone Number</li>
                    <li>• Company Name</li>
                    <li>• Billing Information</li>

                  </ul>

                </div>

                <div className="rounded-2xl bg-orange-50 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Technical Information

                  </h3>

                  <ul className="mt-4 space-y-3 text-slate-600">

                    <li>• IP Address</li>
                    <li>• Browser Type</li>
                    <li>• Device Information</li>
                    <li>• Operating System</li>
                    <li>• Website Usage Data</li>

                  </ul>

                </div>

              </div>

            </article>

            {/* Usage */}

            <article
              id="usage"
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg"
            >

              <h2 className="text-3xl font-bold text-slate-900">

                How We Use Your Information

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                The information we collect helps us deliver better software
                solutions, improve our services, provide customer support,
                process enquiries, and maintain the security of our website.

              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-orange-100 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Business Purposes

                  </h3>

                  <ul className="mt-4 space-y-3 text-slate-600">

                    <li>• Respond to enquiries</li>
                    <li>• Deliver software projects</li>
                    <li>• Provide technical support</li>
                    <li>• Manage client accounts</li>
                    <li>• Improve customer experience</li>

                  </ul>

                </div>

                <div className="rounded-2xl border border-orange-100 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Website Improvement

                  </h3>

                  <ul className="mt-4 space-y-3 text-slate-600">

                    <li>• Analytics & Performance</li>
                    <li>• Security Monitoring</li>
                    <li>• Bug Fixes</li>
                    <li>• User Experience</li>
                    <li>• Feature Enhancements</li>

                  </ul>

                </div>

              </div>

            </article>

            {/* Cookies */}

            <article
              id="cookies"
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg"
            >

              <h2 className="text-3xl font-bold text-slate-900">

                Cookies Policy

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                Our website may use cookies and similar technologies to
                enhance your browsing experience, remember preferences,
                analyse traffic, and improve website performance.
                You can disable cookies through your browser settings,
                although some features may not function correctly.

              </p>

            </article>

            {/* Third Party */}

            <article
              id="thirdparty"
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg"
            >

              <h2 className="text-3xl font-bold text-slate-900">

                Third-Party Services

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                We may work with trusted third-party providers for services
                such as analytics, payment processing, cloud hosting,
                communication, and customer support. These providers process
                information only as necessary to deliver their services and
                are expected to maintain appropriate security standards.

              </p>

            </article>
                        {/* Data Security */}

            <article
              id="security"
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg"
            >

              <h2 className="text-3xl font-bold text-slate-900">

                Data Security

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                CodeVista Solutions (OPC) Pvt Ltd implements appropriate
                administrative, technical, and organizational security
                measures to protect your personal information from
                unauthorized access, alteration, disclosure, or destruction.
                While we strive to safeguard all information, no method of
                electronic transmission or storage is completely secure.

              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">

                <div className="rounded-2xl bg-orange-50 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Secure Infrastructure

                  </h3>

                  <p className="mt-3 text-slate-600">

                    Secure hosting, encrypted connections, and trusted cloud
                    infrastructure help keep your information protected.

                  </p>

                </div>

                <div className="rounded-2xl bg-orange-50 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Limited Access

                  </h3>

                  <p className="mt-3 text-slate-600">

                    Only authorized personnel are granted access to client
                    information when necessary for business operations.

                  </p>

                </div>

                <div className="rounded-2xl bg-orange-50 p-6">

                  <h3 className="font-semibold text-slate-900">

                    Continuous Monitoring

                  </h3>

                  <p className="mt-3 text-slate-600">

                    We regularly review our systems and security practices to
                    improve protection against evolving threats.

                  </p>

                </div>

              </div>

            </article>

            {/* Data Retention */}

            <article className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">

                Data Retention

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                We retain personal information only for as long as necessary
                to provide our services, comply with legal obligations,
                resolve disputes, and enforce our agreements. Once your
                information is no longer required, it is securely deleted or
                anonymized wherever practical.

              </p>

            </article>

            {/* User Rights */}

            <article
              id="rights"
              className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg"
            >

              <h2 className="text-3xl font-bold text-slate-900">

                Your Rights

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                Depending on applicable privacy laws, you may have the right
                to access, update, correct, restrict, or request deletion of
                your personal information. You may also withdraw consent for
                certain data processing activities where legally permitted.

              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-2xl border border-orange-100 p-6">

                  <ul className="space-y-3 text-slate-600">

                    <li>✓ Request access to your information</li>
                    <li>✓ Correct inaccurate information</li>
                    <li>✓ Request deletion where applicable</li>
                    <li>✓ Withdraw marketing consent</li>

                  </ul>

                </div>

                <div className="rounded-2xl border border-orange-100 p-6">

                  <ul className="space-y-3 text-slate-600">

                    <li>✓ Request data portability</li>
                    <li>✓ Restrict processing</li>
                    <li>✓ Object to certain processing</li>
                    <li>✓ Contact us with privacy concerns</li>

                  </ul>

                </div>

              </div>

            </article>

            {/* Children's Privacy */}

            <article className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">

                Childrens Privacy

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                Our services are intended for businesses and individuals aged
                18 years or older. We do not knowingly collect personal
                information from children. If you believe a child has
                submitted personal information to us, please contact us so we
                can remove it promptly.

              </p>

            </article>

            {/* Policy Updates */}

            <article className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">

                Changes to This Privacy Policy

              </h2>

              <p className="mt-5 leading-8 text-slate-600">

                We may update this Privacy Policy periodically to reflect
                changes in our services, legal requirements, or business
                practices. Any updates will be published on this page along
                with the revised Last Updated date.

              </p>

            </article>

            {/* Frequently Asked Questions */}

            <section className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">

                Frequently Asked Questions

              </h2>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl bg-slate-50 p-6">

                  <h3 className="text-lg font-semibold text-slate-900">

                    Do you sell my personal information?

                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">

                    No. CodeVista Solutions (OPC) Pvt Ltd does not sell,
                    trade, or rent your personal information to third parties.

                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-6">

                  <h3 className="text-lg font-semibold text-slate-900">

                    Can I request deletion of my data?

                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">

                    Yes. Subject to legal and contractual obligations, you may
                    request deletion of your personal information by
                    contacting our team.

                  </p>

                </div>

                <div className="rounded-2xl bg-slate-50 p-6">

                  <h3 className="text-lg font-semibold text-slate-900">

                    Is my information kept secure?

                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">

                    We use industry-standard security measures and continually
                    improve our systems to protect client and visitor data.

                  </p>

                </div>

              </div>

            </section>
                        {/* Contact Section */}

            <section
              id="contact"
              className="overflow-hidden rounded-3xl border border-orange-200 bg-gradient-to-br from-orange-500 via-orange-600 to-orange-700 p-10 text-white shadow-2xl"
            >

              <span className="inline-flex rounded-full bg-white/20 px-4 py-2 text-sm font-semibold">

                Need Assistance?

              </span>

              <h2 className="mt-6 text-4xl font-black">

                Questions About Our Privacy Policy?

              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-8 text-orange-100">

                If you have any questions regarding this Privacy Policy,
                the way we process personal information, or your privacy
                rights, our team will be happy to assist you.

              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-2">

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <p className="text-sm uppercase tracking-wider text-orange-200">

                    Email

                  </p>

                  <a
                    href="mailto: solutionscodevista@gmail.com"

                    className="mt-2 block text-xl font-bold hover:underline"
                  >
                    solutionscodevista@gmail.com
                  </a>

                </div>

                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">

                  <p className="text-sm uppercase tracking-wider text-orange-200">

                    Website

                  </p>

                  <a
                    href="https://www.codevistasolutions.com"
                    className="mt-2 block text-xl font-bold hover:underline"
                  >
                    www.codevistasolutions.com
                  </a>

                </div>

              </div>

            </section>

            {/* Explore More */}

            <section className="rounded-3xl border border-orange-100 bg-white p-8 shadow-lg">

              <h2 className="text-3xl font-bold text-slate-900">

                Explore More

              </h2>

              <p className="mt-4 leading-8 text-slate-600">

                Learn more about our company, services, and policies through
                the pages below.

              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

                <Link
                  href="/"
                  className="rounded-2xl border border-orange-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
                >
                  <h3 className="font-bold text-slate-900">

                    Home

                  </h3>

                  <p className="mt-2 text-sm text-slate-600">

                    Discover CodeVista Solutions.

                  </p>

                </Link>

                <Link
                  href="/services"
                  className="rounded-2xl border border-orange-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
                >
                  <h3 className="font-bold text-slate-900">

                    Our Services

                  </h3>

                  <p className="mt-2 text-sm text-slate-600">

                    Web, ERP, CRM, SaaS & AI Solutions.

                  </p>

                </Link>

                <Link
                  href="/about"
                  className="rounded-2xl border border-orange-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
                >
                  <h3 className="font-bold text-slate-900">

                    About Us

                  </h3>

                  <p className="mt-2 text-sm text-slate-600">

                    Learn more about our company.

                  </p>

                </Link>

                <Link
                  href="/terms-and-conditions"
                  className="rounded-2xl border border-orange-100 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500 hover:shadow-lg"
                >
                  <h3 className="font-bold text-slate-900">

                    Terms & Conditions

                  </h3>

                  <p className="mt-2 text-sm text-slate-600">

                    Read our terms of service.

                  </p>

                </Link>

              </div>

            </section>

          </div>

        </div>

      </section>

    </main>
  );
}