"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-40" />
        <div className="absolute right-0 top-32 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
    </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-medium text-orange-600">
              Custom SaaS Development Company
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
              Build Powerful
              <span className="block text-orange-500">
                SaaS Applications
              </span>
              That Scale Effortlessly
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-600">
              CodeVista Solutions builds secure, scalable, and cloud-native SaaS
              applications tailored for startups, enterprises, and growing
              businesses. From MVP development to enterprise platforms, we
              transform ideas into successful software products.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-orange-500 px-7 py-4 text-white font-semibold shadow-lg transition hover:bg-orange-600"
              >
                Start Your SaaS Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>

              <Link
                href="/portfolio"
                className="inline-flex items-center rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
              >
                View Portfolio
              </Link>
            </div>

            <div className="mt-12 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">
                  Cloud-Native Architecture
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">
                  Secure Multi-Tenant Solutions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">
                  AI & API Integrations
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">
                  Subscription & Billing Systems
                </span>
              </div>
            </div>
          </div>

          {/* Right Dashboard */}
          <div className="relative">
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              {/* Top */}
              <div className="flex items-center justify-between border-b pb-6">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    SaaS Analytics
                  </h3>
                  <p className="text-sm text-gray-500">
                    Live Product Dashboard
                  </p>
                </div>

                <div className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-600">
                  Online
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-5">
                {[
                  {
                    title: "Active Users",
                    value: "12.8K",
                  },
                  {
                    title: "Monthly Revenue",
                    value: "$84K",
                  },
                  {
                    title: "API Requests",
                    value: "2.3M",
                  },
                  {
                    title: "Server Uptime",
                    value: "99.99%",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-gray-100 bg-gray-50 p-5"
                  >
                    <p className="text-sm text-gray-500">{item.title}</p>

                    <h4 className="mt-2 text-3xl font-bold text-gray-900">
                      {item.value}
                    </h4>
                  </div>
                ))}
              </div>

              {/* Activity */}
              <div className="mt-8 rounded-2xl bg-orange-50 p-6">
                <h4 className="font-semibold text-gray-900">
                  Platform Performance
                </h4>

                <div className="mt-6 space-y-5">
                  {[
                    ["Application Speed", "98%"],
                    ["Security Score", "100%"],
                    ["Customer Satisfaction", "99%"],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-2 flex justify-between text-sm">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>

                      <div className="h-2 rounded-full bg-orange-100">
                        <div
                          className="h-2 rounded-full bg-orange-500"
                          style={{
                            width: value,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -left-10 top-16 rounded-2xl bg-white p-5 shadow-xl border">
              <p className="text-sm text-gray-500">
                New Subscribers
              </p>

              <h3 className="mt-1 text-2xl font-bold text-orange-500">
                +1,248
              </h3>
            </div>

            <div className="absolute -right-8 bottom-10 rounded-2xl bg-white p-5 shadow-xl border">
              <p className="text-sm text-gray-500">
                Uptime
              </p>

              <h3 className="mt-1 text-2xl font-bold text-green-600">
                99.99%
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";

import {
  Building2,
  Rocket,
  Database,
  Cloud,
  CreditCard,
  ShieldCheck,
  BrainCircuit,
  Workflow,
  Smartphone,
  Layers3,
  ServerCog,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Custom SaaS Development",
    description:
      "Develop secure and scalable SaaS platforms tailored to your unique business model, user base, and long-term growth strategy.",
  },
  {
    icon: Layers3,
    title: "MVP Development",
    description:
      "Launch your SaaS idea quickly with a feature-rich MVP designed to validate your concept and attract investors.",
  },
  {
    icon: Database,
    title: "CRM & ERP Solutions",
    description:
      "Automate business operations with cloud-based CRM and ERP software that improves productivity and collaboration.",
  },
  {
    icon: CreditCard,
    title: "Subscription Platforms",
    description:
      "Implement recurring billing, subscription management, payment gateways, and customer invoicing with ease.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Move legacy software to secure cloud infrastructure for higher availability, performance, and scalability.",
  },
  {
    icon: BrainCircuit,
    title: "AI SaaS Solutions",
    description:
      "Integrate artificial intelligence, automation, predictive analytics, and smart workflows into your SaaS product.",
  },
  {
    icon: Workflow,
    title: "API Development",
    description:
      "Build robust RESTful APIs and third-party integrations that connect your SaaS application with external platforms.",
  },
  {
    icon: Smartphone,
    title: "Cross-Platform SaaS",
    description:
      "Deliver seamless experiences across desktop, tablet, and mobile devices with responsive cloud applications.",
  },
  {
    icon: ShieldCheck,
    title: "Maintenance & Support",
    description:
      "Continuous monitoring, feature upgrades, security patches, backups, and technical support for uninterrupted operations.",
  },
];

export default function Services() {
  return (
    <section className="relative bg-gray-50 py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40" />
        <div className="absolute right-0 bottom-10 h-72 w-72 rounded-full bg-orange-50 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Stats */}
        <div className="grid gap-6 md:grid-cols-4">

          {[
            {
              value: "100+",
              label: "Projects Delivered",
            },
            {
              value: "99.9%",
              label: "Cloud Uptime",
            },
            {
              value: "24/7",
              label: "Technical Support",
            },
            {
              value: "98%",
              label: "Client Satisfaction",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <h3 className="text-4xl font-bold text-orange-500">
                {item.value}
              </h3>

              <p className="mt-3 text-gray-600">
                {item.label}
              </p>
            </div>
          ))}

        </div>

        {/* Heading */}
        <div className="mx-auto mt-24 max-w-3xl text-center">

          <div className="inline-flex rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Our SaaS Development Services
          </div>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Complete SaaS Application Development Solutions
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            From idea validation to enterprise-scale cloud software,
            CodeVista Solutions provides end-to-end SaaS development services
            that help businesses launch faster, scale confidently, and
            deliver exceptional digital experiences.
          </p>

        </div>

        {/* Services Grid */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-500">
                  <Icon className="h-8 w-8 text-orange-500 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {service.description}
                </p>

                <div className="mt-8 flex items-center text-orange-500 font-semibold">
                  Learn More
                  <span className="ml-2 transition group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom CTA */}

        <div className="mt-24 rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-center text-white shadow-2xl">

          <Building2 className="mx-auto h-14 w-14" />

          <h3 className="mt-6 text-3xl font-bold">
            Build a Scalable SaaS Platform with CodeVista Solutions
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-orange-100">
            Whether you're building a startup MVP, enterprise SaaS platform,
            CRM, ERP, marketplace, or subscription-based application,
            our experienced developers create secure, cloud-native software
            engineered for long-term business growth.
          </p>

        </div>

      </div>
    </section>
  );
}
"use client";

import {
  CheckCircle2,
  ShieldCheck,
  Rocket,
  Cloud,
  Users,
  Code2,
  ArrowRight,
} from "lucide-react";

const benefits = [
  {
    icon: Rocket,
    title: "Rapid SaaS Development",
    description:
      "Accelerate your product launch with agile development, reusable components, and modern engineering practices.",
  },
  {
    icon: Cloud,
    title: "Cloud-Native Architecture",
    description:
      "Build scalable SaaS applications designed for high availability, automatic scaling, and exceptional performance.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Protect your business with secure authentication, encrypted data storage, role-based access, and industry best practices.",
  },
  {
    icon: Users,
    title: "User-Centric Experience",
    description:
      "Deliver intuitive interfaces and seamless user journeys that improve engagement, retention, and customer satisfaction.",
  },
  {
    icon: Code2,
    title: "Future-Proof Technology",
    description:
      "We build maintainable SaaS platforms using modern technologies that grow alongside your business.",
  },
  {
    icon: CheckCircle2,
    title: "Dedicated Support",
    description:
      "Receive ongoing maintenance, feature enhancements, security updates, and technical support after deployment.",
  },
];

const process = [
  {
    step: "01",
    title: "Discovery",
    description:
      "Understand your business goals, target audience, and product vision before development begins.",
  },
  {
    step: "02",
    title: "Planning",
    description:
      "Define the product roadmap, architecture, milestones, and technology stack for long-term scalability.",
  },
  {
    step: "03",
    title: "UI/UX Design",
    description:
      "Design beautiful, responsive, and conversion-focused interfaces that users enjoy using.",
  },
  {
    step: "04",
    title: "Development",
    description:
      "Develop secure frontend, backend, APIs, dashboards, authentication, and cloud infrastructure.",
  },
  {
    step: "05",
    title: "Testing",
    description:
      "Perform extensive quality assurance, security testing, performance optimization, and bug fixing.",
  },
  {
    step: "06",
    title: "Deployment & Support",
    description:
      "Launch your SaaS platform with continuous monitoring, updates, and long-term maintenance.",
  },
];

export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden bg-white py-24">

      {/* Background */}

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl opacity-60" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Why Choose CodeVista Solutions
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Build Modern SaaS Products with Confidence
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We combine strategic planning, modern technologies, and scalable
            cloud architecture to build SaaS platforms that help startups,
            enterprises, and growing businesses succeed in the digital world.
          </p>

        </div>

        {/* Benefits */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-500">
                  <Icon className="h-8 w-8 text-orange-500 group-hover:text-white" />
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>

        {/* Process */}

        <div className="mt-28">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Our Development Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              From Idea to Successful SaaS Product
            </h2>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-gray-600">
              Every successful SaaS application starts with a structured
              development process focused on quality, scalability, and long-term
              growth.
            </p>

          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">

            {process.map((item) => (
              <div
                key={item.step}
                className="relative rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:border-orange-200 hover:shadow-xl"
              >
                <div className="absolute right-8 top-8 text-5xl font-extrabold text-orange-100">
                  {item.step}
                </div>

                <div className="relative">

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                    {item.step}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {item.description}
                  </p>

                </div>
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-24 rounded-[32px] bg-orange-500 p-10 text-center text-white shadow-2xl">

          <h3 className="text-4xl font-bold">
            Ready to Turn Your SaaS Idea Into Reality?
          </h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-orange-100">
            Whether you're launching a startup MVP or building an enterprise
            SaaS platform, our team develops secure, scalable, and
            high-performance cloud applications tailored to your business goals.
          </p>

          <button className="mt-8 inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-500 transition hover:bg-gray-100">
            Get Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>

        </div>

      </div>

    </section>
  );
}
"use client";

import Link from "next/link";
import {
  Code2,
  Database,
  Cloud,
  Cpu,
  Building2,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Truck,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const techStack = [
  {
    title: "Frontend",
    icon: Code2,
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript",
      "HTML5",
    ],
  },
  {
    title: "Backend",
    icon: Cpu,
    items: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    title: "Database",
    icon: Database,
    items: [
      "PostgreSQL",
      "MongoDB",
      "MySQL",
      "Redis",
      "Firebase",
      "Supabase",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    items: [
      "AWS",
      "Docker",
      "Vercel",
      "Cloudflare",
      "GitHub",
      "CI/CD",
    ],
  },
];

const industries = [
  {
    icon: HeartPulse,
    name: "Healthcare",
  },
  {
    icon: ShoppingBag,
    name: "E-Commerce",
  },
  {
    icon: Landmark,
    name: "Finance",
  },
  {
    icon: GraduationCap,
    name: "Education",
  },
  {
    icon: Truck,
    name: "Logistics",
  },
  {
    icon: Building2,
    name: "Real Estate",
  },
];

const faqs = [
  {
    q: "What is SaaS development?",
    a: "SaaS development involves building cloud-based software applications that users access through a web browser without installing software locally.",
  },
  {
    q: "How long does SaaS development take?",
    a: "An MVP typically takes 8–16 weeks, while enterprise SaaS platforms may require several months depending on complexity.",
  },
  {
    q: "Can you build custom SaaS software?",
    a: "Yes. We develop completely custom SaaS applications tailored to your business workflows, users, and future growth.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Absolutely. We offer maintenance, feature enhancements, security updates, performance optimization, and technical support.",
  },
];

export default function TechStack() {
  return (
    <section className="relative overflow-hidden bg-gray-50 py-24">

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40" />
        <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl opacity-50" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Tech Stack */}

        <div className="text-center">

          <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
            Technology Stack
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
            Modern Technologies for Scalable SaaS Products
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600">
            We use industry-leading technologies to build secure, scalable,
            cloud-native SaaS applications that deliver exceptional performance.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {techStack.map((stack) => {
            const Icon = stack.icon;

            return (
              <div
                key={stack.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {stack.title}
                </h3>

                <div className="mt-6 space-y-3">

                  {stack.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle2 className="h-5 w-5 text-orange-500" />

                      <span className="text-gray-600">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>
            );
          })}

        </div>

        {/* Industries */}

        <div className="mt-28">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              SaaS Solutions for Every Industry
            </h2>

          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <div
                  key={industry.name}
                  className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-gray-900">
                    {industry.name}
                  </h3>
                </div>
              );
            })}

          </div>

        </div>

        {/* FAQ */}

        <div className="mt-28">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              SaaS Development FAQs
            </h2>

          </div>

          <div className="mx-auto mt-16 max-w-4xl space-y-6">

            {faqs.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl border border-gray-200 bg-white p-8"
              >
                <h3 className="text-xl font-bold text-gray-900">
                  {faq.q}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {faq.a}
                </p>
              </div>
            ))}

          </div>

        </div>

        {/* CTA */}

        <div className="mt-28 rounded-[36px] bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center text-white shadow-2xl">

          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to Build Your SaaS Product?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-orange-100">
            Whether you're building a startup MVP, enterprise SaaS platform,
            CRM, ERP, marketplace, or subscription-based software, CodeVista
            Solutions delivers secure, scalable, and future-ready SaaS
            applications that help businesses grow.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              href="/contact"
              className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-gray-100"
            >
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>

            <Link
              href="/our-services"
              className="inline-flex items-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
            >
              Explore More Services
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}