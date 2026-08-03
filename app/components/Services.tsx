"use client";

import Link from "next/link";
import {
  Globe,
  Database,
  Users,
  Cloud,
  Bot,
  Settings,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    title: "Website Development",
    href: "/services/WebsiteDevelopment",
    icon: Globe,
    description:
      "Modern, SEO-optimized websites built with Next.js, React and the latest web technologies to help your business grow online.",
  },
  {
    title: "ERP Development",
    href: "/services/ERPDevelopment",
    icon: Database,
    description:
      "Custom ERP solutions that automate inventory, HR, finance, operations and business workflows.",
  },
  {
    title: "CRM Development",
    href: "/services/CRMDevelopment",
    icon: Users,
    description:
      "Powerful CRM systems to manage leads, customers, sales pipelines and support from one place.",
  },
  {
    title: "SaaS Development",
    href: "/services/SAASDevelopment",
    icon: Cloud,
    description:
      "Scalable cloud-based SaaS applications with secure architecture and subscription-ready features.",
  },
  {
    title: "AI Solutions",
    href: "/services/AISolutions",
    icon: Bot,
    description:
      "AI chatbots, intelligent automation and business solutions powered by modern artificial intelligence.",
  },
  {
    title: "Custom Software",
    href: "/services/CustomSoftware",
    icon: Settings,
    description:
      "Tailor-made software engineered specifically for your business goals, processes and future growth.",
  },
];

export default function ServicesPreview() {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24">

      {/* Background Blur */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-60" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-200 blur-3xl opacity-40" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-1 text-sm font-semibold text-orange-600">
            OUR SERVICES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Custom Software Development Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            CodeVista Solutions builds high-performance websites, ERP systems,
            CRM software, SaaS platforms, AI-powered applications and custom
            software solutions that help businesses automate operations, improve
            productivity and accelerate growth.
          </p>

        </div>

        {/* Service Grid Starts Here */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3"> 
        {services.map((service) => {
            const Icon = service.icon;

            return (
              <Link
                key={service.title}
                href={service.href}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl hover:shadow-orange-100"
              >
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                {/* Top Accent */}
                <div className="absolute left-0 top-0 h-1 w-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-500 group-hover:w-full" />

                <div className="relative z-10">

                  {/* Icon */}
                  <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-200 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="h-8 w-8" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  {/* Divider */}
                  <div className="my-7 h-px w-full bg-gradient-to-r from-slate-200 to-transparent" />

                  {/* CTA */}
                  <div className="flex items-center justify-between">

                    <span className="font-semibold text-slate-900 transition-colors duration-300 group-hover:text-orange-600">
                      Learn More
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 text-orange-600 transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white">
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>

                  </div>

                </div>
              </Link>
            );
          })} 
                  </div>

                  </div>
      
    </section>
  );
}