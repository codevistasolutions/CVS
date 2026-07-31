"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-16 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-60"></div>

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">        {/* LEFT */}

        <div>
          {/* Badge */}

          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2">
            <span className="mr-2 h-2 w-2 rounded-full bg-orange-500"></span>

            <span className="text-sm font-semibold text-orange-600">
              Trusted Website Development Company
            </span>
          </div>

          {/* H1 */}

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl">
            Website Development
            <br />

            <span className="text-orange-500">
              SaaS & AI Solutions
            </span>

            <br />

            That Drive Growth
          </h1>

          {/* Paragraph */}

          <p className="mt-8 max-w-xl text-xl leading-9 text-gray-600">
            CodeVista Solutions builds modern websites,
            custom software, SaaS platforms, ERP systems,
            CRM software and AI-powered applications for
            startups and businesses looking to scale
            faster with secure and high-performance
            digital solutions.
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/email"
              className="rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Book Free Consultation
            </Link>

            <Link
              href="/services"
              className="rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-orange-500 hover:text-orange-500"
            >
              Explore Services
            </Link>

          </div>

          {/* Trust */}

          <div className="mt-12 flex items-center gap-4">

            <div className="flex text-orange-400 text-xl">
              ★★★★★
            </div>

            <p className="text-gray-500">
              Trusted by growing businesses across India
            </p>

          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-black text-gray-900">
                10+
              </h2>

              <p className="mt-2 text-gray-500">
                Projects Delivered
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-gray-900">
                2+
              </h2>

              <p className="mt-2 text-gray-500">
                Years Experience
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-gray-900">
                24/7
              </h2>

              <p className="mt-2 text-gray-500">
                Support
              </p>

            </div>

          </div>
        </div>

        {/* RIGHT */}

        <div className="relative flex items-center justify-center">

          {/* Glow */}

          <div className="absolute h-[420px] w-[420px] rounded-full bg-orange-100 blur-3xl"></div>

          {/* Logo */}

          <div className="relative rounded-[36px] border border-gray-100 bg-white p-12 shadow-xl">

            <img
              src="/logo.svg"
              alt="CodeVista Solutions"
              className="w-70"
            />

          </div>

        </div>
      </div>
    </section>
  );
}