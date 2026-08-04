"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Rocket,
  Cloud,
  ShieldCheck,
  Users,
  Code2,
  Database,
  Cpu,
  Building2,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Truck,
 Layers3,
  CreditCard,
  BrainCircuit,
  Workflow,
  Smartphone,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Custom SaaS Development",
    description:
      "Build secure, scalable and cloud-native SaaS applications tailored to your business requirements.",
  },
  {
    icon: Layers3,
    title: "MVP Development",
    description:
      "Launch your SaaS startup quickly with a scalable MVP built for rapid validation.",
  },
  {
    icon: Database,
    title: "CRM & ERP Solutions",
    description:
      "Automate business workflows using intelligent CRM and ERP software.",
  },
  {
    icon: CreditCard,
    title: "Subscription Platforms",
    description:
      "Recurring billing, payment gateway integration and subscription management.",
  },
  {
    icon: Cloud,
    title: "Cloud Migration",
    description:
      "Move legacy software to modern cloud infrastructure with zero compromise.",
  },
  {
    icon: BrainCircuit,
    title: "AI SaaS Solutions",
    description:
      "Integrate Artificial Intelligence to automate business operations.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Rapid Development",
    description:
      "Fast development using modern technologies and agile methodology.",
  },
  {
    icon: Cloud,
    title: "Cloud Native",
    description:
      "Highly scalable cloud architecture built for future business growth.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description:
      "Secure authentication, encrypted data and industry best practices.",
  },
  {
    icon: Users,
    title: "User-Centric Design",
    description:
      "Beautiful UI/UX focused on engagement and customer satisfaction.",
  },
  {
    icon: Code2,
    title: "Modern Technology",
    description:
      "Future-ready applications powered by the latest development stack.",
  },
  {
    icon: CheckCircle,
    title: "Ongoing Support",
    description:
      "Maintenance, updates and technical support after deployment.",
  },
];

export default function SAASDevelopment() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-white pt-36 pb-24">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                SaaS Development Company
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Build Powerful
                <span className="block text-orange-500">
                  SaaS Applications
                </span>
                That Scale With Your Business
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions provides custom SaaS development services,
                cloud software development, enterprise SaaS solutions and MVP
                development that help startups and businesses launch scalable
                digital products.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Start Your Project
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

                {[
                  "Cloud Native Architecture",
                  "Multi-Tenant SaaS",
                  "AI Integration",
                  "Subscription Billing",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}

              </div>

            </div>

            {/* Dashboard */}

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="flex items-center justify-between border-b pb-6">

                <div>
                  <h3 className="text-xl font-bold">
                    SaaS Analytics
                  </h3>

                  <p className="text-sm text-gray-500">
                    Live Dashboard
                  </p>
                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                  Online
                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Users", "12.8K"],
                  ["Revenue", "$84K"],
                  ["API Calls", "2.3M"],
                  ["Uptime", "99.99%"],
                ].map(([title, value]) => (
                  <div
                    key={title}
                    className="rounded-2xl bg-gray-50 p-5"
                  >
                    <p className="text-sm text-gray-500">
                      {title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold">
                      {value}
                    </h3>
                  </div>
                ))}

              </div>

              <div className="mt-8 rounded-2xl bg-orange-50 p-6">

                <h4 className="font-semibold">
                  Platform Performance
                </h4>

                <div className="mt-6 space-y-5">

                  {[
                    ["Speed", "98%"],
                    ["Security", "100%"],
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
                          style={{ width: value }}
                        />
                      </div>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          </div>
        </div>
      </section>
            {/* Services */}

      <section className="relative overflow-hidden bg-gray-50 py-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-4">

            {[
              ["100+", "Projects Delivered"],
              ["99.9%", "Cloud Uptime"],
              ["24/7", "Technical Support"],
              ["98%", "Client Satisfaction"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <h3 className="text-4xl font-bold text-orange-500">
                  {value}
                </h3>

                <p className="mt-3 text-gray-600">
                  {label}
                </p>

              </div>
            ))}

          </div>

          <div className="mx-auto mt-24 max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Our SaaS Development Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Complete SaaS Development Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We build secure, cloud-native SaaS platforms for startups,
              enterprises, and growing businesses. From MVPs to enterprise
              software, our development team delivers scalable solutions built
              for long-term success.
            </p>

          </div>

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

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Why Choose Us */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Why Choose CodeVista Solutions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Your Trusted SaaS Development Partner
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine modern technologies, scalable architecture, and
              business-focused development strategies to build SaaS products
              that help companies grow faster.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="group rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
                >
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 transition group-hover:bg-orange-500">

                    <Icon className="h-8 w-8 text-orange-500 group-hover:text-white" />

                  </div>

                  <h3 className="mt-8 text-2xl font-bold text-gray-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {benefit.description}
                  </p>

                </div>
              );
            })}

          </div>

        </div>

      </section>
            {/* Development Process */}

      <section className="relative overflow-hidden bg-gray-50 py-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Our Development Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              A Proven Process For Successful SaaS Development
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every SaaS application is developed using a structured workflow
              focused on scalability, security, performance, and long term
              business growth.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              [
                "01",
                "Discovery",
                "Understanding business goals, target audience and product vision."
              ],
              [
                "02",
                "Planning",
                "Creating architecture, roadmap and scalable technical strategy."
              ],
              [
                "03",
                "UI UX Design",
                "Designing intuitive interfaces with excellent user experience."
              ],
              [
                "04",
                "Development",
                "Building secure frontend, backend, APIs and cloud infrastructure."
              ],
              [
                "05",
                "Testing",
                "Quality assurance, performance optimization and security testing."
              ],
              [
                "06",
                "Deployment",
                "Launching your SaaS product with continuous monitoring and support."
              ],
            ].map(([step, title, description]) => (

              <div
                key={step}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                  {step}
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Technology Stack */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Technology Stack
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Modern Technologies For Scalable SaaS Applications
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We use proven technologies to develop secure, cloud based SaaS
              platforms with excellent performance and long term scalability.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            {[
              {
                icon: Code2,
                title: "Frontend",
                items: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
              },
              {
                icon: Cpu,
                title: "Backend",
                items: ["Node.js", "Express", "Python", "FastAPI"],
              },
              {
                icon: Database,
                title: "Database",
                items: ["PostgreSQL", "MongoDB", "Redis", "Firebase"],
              },
              {
                icon: Cloud,
                title: "Cloud",
                items: ["AWS", "Docker", "Vercel", "Cloudflare"],
              },
            ].map((stack) => {
              const Icon = stack.icon;

              return (
                <div
                  key={stack.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">
                    <Icon className="h-8 w-8 text-orange-500" />
                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {stack.title}
                  </h3>

                  <ul className="mt-6 space-y-3">

                    {stack.items.map((item) => (

                      <li
                        key={item}
                        className="flex items-center gap-3 text-gray-600"
                      >
                        <CheckCircle className="h-5 w-5 text-orange-500" />
                        {item}
                      </li>

                    ))}

                  </ul>

                </div>
              );
            })}

          </div>

        </div>

      </section>

      {/* Industries */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900">
              SaaS Solutions For Every Industry
            </h2>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              [HeartPulse, "Healthcare"],
              [ShoppingBag, "E Commerce"],
              [Landmark, "Finance"],
              [GraduationCap, "Education"],
              [Truck, "Logistics"],
              [Building2, "Real Estate"],
            ].map(([Icon, title], index) => (
              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">
                  <Icon className="h-8 w-8 text-orange-500" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  {title}
                </h3>
              </div>
            ))}

          </div>

        </div>

      </section>
            {/* FAQ */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              SaaS Development Questions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Find answers to common questions about custom SaaS development,
              cloud software, MVP development, pricing, timelines, and ongoing
              support from CodeVista Solutions.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What is SaaS development?",
                answer:
                  "SaaS development is the process of creating cloud based software applications that users access through a web browser without installing software on their devices.",
              },
              {
                question: "How much does custom SaaS development cost?",
                answer:
                  "The cost depends on project complexity, required features, integrations, user roles, and deployment requirements. Every project receives a customized quotation.",
              },
              {
                question: "How long does SaaS development take?",
                answer:
                  "Most MVP projects take between eight and sixteen weeks while enterprise SaaS platforms require additional development depending on functionality.",
              },
              {
                question: "Can you upgrade an existing SaaS application?",
                answer:
                  "Yes. We modernize existing SaaS applications, improve performance, redesign user interfaces, migrate to cloud infrastructure, and add new features.",
              },
              {
                question: "Do you provide maintenance and support?",
                answer:
                  "Yes. We provide continuous maintenance, monitoring, feature updates, bug fixes, performance optimization, and technical support after deployment.",
              },
              {
                question: "Which industries do you work with?",
                answer:
                  "We develop SaaS solutions for healthcare, education, finance, logistics, ecommerce, manufacturing, real estate, and many other industries.",
              },
            ].map((faq) => (

              <div
                key={faq.question}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:shadow-lg"
              >

                <h3 className="text-xl font-bold text-gray-900">
                  {faq.question}
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  {faq.answer}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Final CTA */}

      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600"></div>

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white opacity-10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
              Start Your SaaS Journey
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Build A Powerful SaaS Product That Grows With Your Business
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions delivers custom SaaS development services,
              cloud software development, enterprise SaaS platforms, AI powered
              applications, CRM solutions, ERP software, and scalable digital
              products designed for long term success.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-gray-100"
              >
                Get Free Consultation

                <ArrowRight className="ml-2 h-5 w-5" />

              </Link>

              <Link
                href="/about"
                className="inline-flex items-center rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                Learn More About Us
              </Link>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}