"use client";

import Link from "next/link";
import {
  ArrowRight,
  Database,
  Building2,
  BarChart3,
  ShieldCheck,
} from "lucide-react";

export default function ERPDevelopment() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">

        <div className="absolute left-1/2 top-16 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-60" />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(#000 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

      </div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">

        {/* LEFT */}

        <div>

          <div className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-5 py-2">

            <Database size={16} className="mr-2 text-orange-500" />

            <span className="text-sm font-semibold text-orange-600">
              Premium ERP Development Company
            </span>

          </div>

          <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl">

            ERP Software

            <br />

            <span className="text-orange-500">
              That Automates
            </span>

            <br />

            Your Entire Business

          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-gray-600">

            CodeVista Solutions develops secure, scalable and
            fully customized ERP software that connects your
            sales, inventory, HR, finance, manufacturing and
            operations into one intelligent platform.

          </p>

          <div className="mt-12 flex flex-wrap gap-5">

            <Link
              href="/email"
              className="group inline-flex items-center rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600"
            >
              Get Free ERP Consultation

              <ArrowRight className="ml-2 transition group-hover:translate-x-1" />

            </Link>

            <Link
              href="/portfolio"
              className="rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-orange-500 hover:text-orange-500"
            >
              View Portfolio
            </Link>

          </div>

          <div className="mt-16 grid grid-cols-3 gap-8">

            <div>

              <h2 className="text-4xl font-black text-gray-900">
                100%
              </h2>

              <p className="mt-2 text-gray-500">
                Custom ERP
              </p>

            </div>

            <div>

              <h2 className="text-4xl font-black text-gray-900">
                Secure
              </h2>

              <p className="mt-2 text-gray-500">
                Cloud Ready
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

        <div className="relative">

          <div className="absolute inset-0 rounded-full bg-orange-100 blur-3xl opacity-70" />

          <div className="relative rounded-[36px] border border-gray-200 bg-white p-10 shadow-2xl">

            <div className="grid gap-6">

              <div className="flex items-center gap-4 rounded-2xl border border-orange-100 bg-orange-50 p-5">

                <Building2 className="text-orange-500" size={34} />

                <div>

                  <h3 className="font-bold text-gray-900">
                    Centralized Operations
                  </h3>

                  <p className="text-sm text-gray-600">
                    Manage every department from one dashboard.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5">

                <BarChart3 className="text-orange-500" size={34} />

                <div>

                  <h3 className="font-bold text-gray-900">
                    Real-Time Analytics
                  </h3>

                  <p className="text-sm text-gray-600">
                    Make faster decisions with live reports.
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-gray-200 p-5">

                <ShieldCheck className="text-orange-500" size={34} />

                <div>

                  <h3 className="font-bold text-gray-900">
                    Enterprise Security
                  </h3>

                  <p className="text-sm text-gray-600">
                    Protected with role-based access and encryption.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
      {/* ERP Modules */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              Complete ERP Modules
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
              Everything Your Business
              <span className="text-orange-500"> Needs In One Platform</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We build modular ERP software that grows with your business.
              Start with the modules you need today and expand anytime.
            </p>

          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Inventory Management",
                desc: "Track stock, warehouses, purchase orders and suppliers in real time.",
              },
              {
                title: "Sales & CRM",
                desc: "Manage leads, quotations, customers and complete sales pipelines.",
              },
              {
                title: "Finance & Accounting",
                desc: "Invoices, GST, expenses, payments and financial reporting.",
              },
              {
                title: "Human Resources",
                desc: "Employee records, payroll, attendance and leave management.",
              },
              {
                title: "Manufacturing",
                desc: "Production planning, BOM, quality control and workflows.",
              },
              {
                title: "Procurement",
                desc: "Vendor management, RFQs, purchase approvals and procurement.",
              },
              {
                title: "Project Management",
                desc: "Tasks, milestones, teams, timelines and productivity tracking.",
              },
              {
                title: "Business Analytics",
                desc: "Interactive dashboards with KPIs and real-time reports.",
              },
            ].map((module) => (

              <div
                key={module.title}
                className="group rounded-[28px] border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                  📊
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {module.title}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {module.desc}
                </p>

                <div className="mt-8 flex items-center font-semibold text-orange-500">

                  Learn More

                  <ArrowRight
                    size={18}
                    className="ml-2 transition group-hover:translate-x-1"
                  />

                </div>

              </div>

            ))}

          </div>

        </div>

            {/* Why Choose CodeVista */}

            <section className="py-28 bg-white">

<div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      Why Choose CodeVista Solutions
    </span>

    <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
      A Reliable ERP Development Company
      <span className="text-orange-500">
        {" "}Built For Growth
      </span>
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Our ERP software development team creates secure, scalable and
      high-performance enterprise solutions that streamline business
      operations, reduce manual work and improve decision-making through
      automation and real-time reporting.
    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

    {[
      {
        number: "01",
        title: "100% Custom ERP",
        desc: "Every ERP system is designed around your workflow instead of forcing your business to adapt to generic software.",
      },
      {
        number: "02",
        title: "Cloud & Mobile Ready",
        desc: "Access your ERP securely from anywhere with responsive web applications and optional mobile apps.",
      },
      {
        number: "03",
        title: "Third-Party Integrations",
        desc: "Connect payment gateways, CRM, accounting software, WhatsApp, email services and external APIs.",
      },
      {
        number: "04",
        title: "Enterprise Security",
        desc: "Role-based permissions, encrypted data, automated backups and secure authentication keep your business protected.",
      },
    ].map((item) => (

      <div
        key={item.number}
        className="group rounded-[30px] border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
      >

        <span className="text-5xl font-black text-orange-100 transition group-hover:text-orange-500">
          {item.number}
        </span>

        <h3 className="mt-6 text-2xl font-bold text-gray-900">
          {item.title}
        </h3>

        <p className="mt-5 leading-8 text-gray-600">
          {item.desc}
        </p>

      </div>

    ))}

  </div>

</div>

</section>

{/* ERP Development Process */}

<section className="bg-gray-50 py-28">

<div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      ERP Development Process
    </span>

    <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
      Our Proven ERP Development
      <span className="text-orange-500">
        {" "}Methodology
      </span>
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Every ERP software project follows a structured development
      lifecycle to ensure scalability, security and long-term success.
    </p>

  </div>

  <div className="mt-20">

    <div className="grid gap-8 lg:grid-cols-5">

      {[
        {
          step: "01",
          title: "Business Analysis",
          desc: "Understand your operations, workflows and business goals."
        },
        {
          step: "02",
          title: "ERP Planning",
          desc: "Design modules, database architecture and integrations."
        },
        {
          step: "03",
          title: "Development",
          desc: "Build secure ERP modules using modern technologies."
        },
        {
          step: "04",
          title: "Testing",
          desc: "Performance testing, security audits and quality assurance."
        },
        {
          step: "05",
          title: "Deployment",
          desc: "Launch, employee training and continuous support."
        }
      ].map((step) => (

        <div
          key={step.step}
          className="relative rounded-[30px] bg-white p-8 shadow-lg"
        >

          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
            {step.step}
          </div>

          <h3 className="mt-8 text-2xl font-bold text-gray-900">
            {step.title}
          </h3>

          <p className="mt-4 leading-8 text-gray-600">
            {step.desc}
          </p>

        </div>

      ))}

    </div>

  </div>

</div>

</section>
</section>