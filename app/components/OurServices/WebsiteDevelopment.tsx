"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Globe,
  MonitorSmartphone,
  Search,
  ShieldCheck,
} from "lucide-react";

export default function WebsiteDevelopment() {
  return (
    <section
      id="website-development"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Glow */}

      <div className="absolute right-0 top-24 h-96 w-96 rounded-full bg-orange-100 blur-3xl opacity-60" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid items-center gap-20 lg:grid-cols-2">

          {/* Left Visual */}

          <div className="relative">

            <div className="rounded-[36px] border border-gray-100 bg-white p-8 shadow-2xl">

              <div className="flex items-center justify-between">

                <div>

                  <p className="text-sm text-gray-500">
                    Featured Service
                  </p>

                  <h3 className="mt-2 text-3xl font-black text-gray-900">
                    Website Development
                  </h3>

                </div>

                <div className="rounded-2xl bg-orange-50 p-4">

                  <Globe
                    size={36}
                    className="text-orange-500"
                  />

                </div>

              </div>

              <div className="mt-10 space-y-5">

                {[
                  {
                    icon: MonitorSmartphone,
                    title: "Responsive Design",
                  },
                  {
                    icon: Search,
                    title: "SEO Optimized",
                  },
                  {
                    icon: ShieldCheck,
                    title: "Secure Architecture",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-5 rounded-2xl border border-gray-100 p-5 transition hover:border-orange-300 hover:shadow-lg"
                  >
                    <div className="rounded-xl bg-orange-50 p-3">
                      <item.icon
                        className="text-orange-500"
                        size={24}
                      />
                    </div>

                    <div>

                      <h4 className="font-bold text-gray-900">
                        {item.title}
                      </h4>

                      <p className="text-gray-500">
                        Premium quality development
                      </p>

                    </div>

                  </div>
                ))}

              </div>

              <div className="mt-8 rounded-2xl bg-orange-50 p-6">

                <p className="text-sm text-gray-500">
                  Average Performance
                </p>

                <h3 className="mt-2 text-5xl font-black text-orange-500">
                  95+
                </h3>

                <p className="mt-2 text-gray-600">
                  Google PageSpeed Score
                </p>

              </div>

            </div>

          </div>

          {/* Right Content */}

          <div>

            <span className="rounded-full bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              Website Development
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight text-gray-900">
              Professional Website
              <br />

              Development Services
            </h2>

            <p className="mt-8 text-lg leading-9 text-gray-600">
              CodeVista Solutions is a leading
              <strong className="text-gray-900">
                {" "}Website Development Company
              </strong>{" "}
              providing custom website development,
              responsive web design, eCommerce development,
              landing pages and corporate websites for
              startups, SMEs and enterprises.

              Every website is built with SEO, speed,
              security and scalability in mind.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              {[
                "Business Websites",
                "Corporate Websites",
                "E-Commerce Stores",
                "Landing Pages",
                "SEO Friendly",
                "Lightning Fast",
                "CMS Integration",
                "Mobile Responsive",
              ].map((feature) => (

                <div
                  key={feature}
                  className="flex items-center gap-3"
                >

                  <CheckCircle2
                    size={20}
                    className="text-orange-500"
                  />

                  <span className="text-gray-700">
                    {feature}
                  </span>

                </div>

              ))}

            </div>

            <div className="mt-12 flex gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Get Free Quote

                <ArrowRight size={20} />

              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-orange-500 hover:text-orange-500"
              >
                View Projects
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}