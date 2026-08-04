"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Code2,
  Database,
  Cloud,
  Cpu,
  Workflow,
  ShieldCheck,
  Rocket,
  Layers3,
  Settings,
  BarChart3,
  Users,
  Building2,
  HeartPulse,
  ShoppingBag,
  GraduationCap,
  Landmark,
  Truck,
  Factory,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "Develop secure and scalable software solutions tailored to your business objectives and operational requirements.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automate repetitive workflows and improve productivity through intelligent business software solutions.",
  },
  {
    icon: Database,
    title: "CRM And ERP Development",
    description:
      "Build centralized CRM and ERP software that improves collaboration, reporting, and operational efficiency.",
  },
  {
    icon: Layers3,
    title: "Enterprise Software",
    description:
      "Develop enterprise applications that support complex workflows, departments, and large scale operations.",
  },
  {
    icon: Cloud,
    title: "Cloud Software Development",
    description:
      "Build cloud based software that delivers security, flexibility, and long term scalability.",
  },
  {
    icon: Settings,
    title: "Software Modernization",
    description:
      "Upgrade legacy software with modern architecture, improved security, and enhanced performance.",
  },
];

const benefits = [
  {
    icon: Rocket,
    title: "Fast Development",
    description:
      "Efficient development process that reduces time to market while maintaining software quality.",
  },
  {
    icon: ShieldCheck,
    title: "Secure Applications",
    description:
      "Enterprise level security practices protect business data and customer information.",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    description:
      "Software solutions designed to grow alongside your business and future requirements.",
  },
  {
    icon: Workflow,
    title: "Business Focused",
    description:
      "Every feature is developed around your operational goals and workflow requirements.",
  },
  {
    icon: Database,
    title: "Reliable Performance",
    description:
      "Optimized software architecture delivers speed, stability, and long term reliability.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description:
      "Continuous maintenance, updates, optimization, and technical assistance after deployment.",
  },
];

export default function CustomSoftware() {
  return (
    <>
      {/* Hero */}

      <section className="relative overflow-hidden bg-white pt-36 pb-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                Custom Software Development Company
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Custom Software
                <span className="block text-orange-500">
                  Built For Business Growth
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions develops custom software solutions,
                enterprise applications, business software, CRM systems,
                ERP platforms, cloud software, and workflow automation
                solutions that improve efficiency, productivity, and
                long term business growth.
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
                  "Enterprise Software",
                  "CRM And ERP",
                  "Cloud Applications",
                  "Business Automation",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <CheckCircle className="h-5 w-5 text-orange-500" />

                    <span className="text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Dashboard */}

            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">

              <div className="flex items-center justify-between border-b pb-6">

                <div>

                  <h3 className="text-xl font-bold text-gray-900">
                    Software Analytics
                  </h3>

                  <p className="text-sm text-gray-500">
                    Business Performance Dashboard
                  </p>

                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                  Active
                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Projects", "120+"],
                  ["Efficiency", "96%"],
                  ["Automation", "88%"],
                  ["Growth", "3.4X"],
                ].map(([title, value]) => (

                  <div
                    key={title}
                    className="rounded-2xl bg-gray-50 p-5"
                  >

                    <p className="text-sm text-gray-500">
                      {title}
                    </p>

                    <h3 className="mt-2 text-3xl font-bold text-gray-900">
                      {value}
                    </h3>

                  </div>

                ))}

              </div>

              <div className="mt-8 rounded-2xl bg-orange-50 p-6">

                <h4 className="font-semibold text-gray-900">
                  Software Performance
                </h4>

                <div className="mt-6 space-y-5">

                  {[
                    ["System Reliability", "99%"],
                    ["Performance", "97%"],
                    ["Customer Satisfaction", "98%"],
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
            {/* Statistics And Services */}

      <section className="relative overflow-hidden bg-gray-50 py-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-4">

            {[
              ["250+", "Software Projects"],
              ["99%", "Client Satisfaction"],
              ["24/7", "Technical Support"],
              ["10+", "Business Industries"],
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
              Custom Software Development Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              End To End Software Development Services
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              CodeVista Solutions delivers custom software development,
              enterprise software, business applications, cloud software,
              workflow automation, CRM development, ERP development, and
              scalable digital solutions that improve productivity and support
              business growth.
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
              Trusted Custom Software Development Company
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We build secure, scalable, and high performance software
              applications using modern technologies, cloud architecture,
              intelligent automation, and proven development practices that
              help businesses achieve long term success.
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

          <div className="mt-20 rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 p-10 text-center text-white shadow-2xl">

            <Code2 className="mx-auto h-14 w-14" />

            <h3 className="mt-6 text-3xl font-bold">
              Build Powerful Custom Software For Your Business
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-orange-100">
              From enterprise software and workflow automation to CRM systems,
              ERP platforms, cloud applications, and business management
              software, CodeVista Solutions develops custom software that
              increases efficiency, improves operations, and supports long term
              business growth.
            </p>

          </div>

        </div>

      </section>
            {/* Software Development Process */}

      <section className="relative overflow-hidden bg-gray-50 py-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Software Development Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Proven Custom Software Development Process
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every custom software project follows a structured development
              process that focuses on planning, security, scalability,
              performance, and long term business value.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              [
                "01",
                "Requirement Analysis",
                "Understand business goals, workflows, challenges, and software requirements."
              ],
              [
                "02",
                "Planning",
                "Create technical architecture, software roadmap, and project milestones."
              ],
              [
                "03",
                "UI And UX Design",
                "Design intuitive, responsive, and user focused software interfaces."
              ],
              [
                "04",
                "Software Development",
                "Develop secure frontend, backend, APIs, dashboards, and business modules."
              ],
              [
                "05",
                "Testing",
                "Perform quality assurance, security testing, performance optimization, and validation."
              ],
              [
                "06",
                "Deployment And Support",
                "Launch software with continuous monitoring, maintenance, and future enhancements."
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
              Modern Technologies For Enterprise Software Development
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We build secure custom software using modern frontend, backend,
              cloud, and database technologies that deliver excellent
              performance and scalability.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: Code2,
                title: "Frontend",
                items: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS",
                ],
              },
              {
                icon: Cpu,
                title: "Backend",
                items: [
                  "Node.js",
                  "Python",
                  "FastAPI",
                  "Express",
                ],
              },
              {
                icon: Database,
                title: "Database",
                items: [
                  "PostgreSQL",
                  "MongoDB",
                  "Redis",
                  "MySQL",
                ],
              },
              {
                icon: Cloud,
                title: "Cloud",
                items: [
                  "AWS",
                  "Docker",
                  "Cloudflare",
                  "Vercel",
                ],
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

                  <div className="mt-6 space-y-3">

                    {stack.items.map((item) => (

                      <div
                        key={item}
                        className="flex items-center gap-3"
                      >

                        <CheckCircle className="h-5 w-5 text-orange-500" />

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
              Custom Software Solutions For Every Industry
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our custom software development services help businesses automate
              operations, improve productivity, manage business processes, and
              accelerate digital transformation across multiple industries.
            </p>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [HeartPulse, "Healthcare"],
              [Landmark, "Finance"],
              [ShoppingBag, "Electronic Commerce"],
              [GraduationCap, "Education"],
              [Truck, "Logistics"],
              [Factory, "Manufacturing"],
              [Building2, "Real Estate"],
              [BarChart3, "Business Management"],
            ].map(([Icon, title], index) => (

              <div
                key={index}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center transition hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-orange-100">

                  <Icon className="h-8 w-8 text-orange-500" />

                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
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
              Custom Software Development FAQ
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Learn more about custom software development, enterprise software,
              cloud applications, CRM development, ERP software, project
              timelines, maintenance, and business software solutions from
              CodeVista Solutions.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What is custom software development?",
                answer:
                  "Custom software development is the process of creating software specifically designed for the unique requirements of a business instead of using generic off the shelf applications.",
              },
              {
                question: "How long does a custom software project take?",
                answer:
                  "Project timelines depend on business requirements, integrations, features, and overall complexity. Small business applications can be delivered within weeks while enterprise platforms require larger development phases.",
              },
              {
                question: "Can you modernize existing software?",
                answer:
                  "Yes. We upgrade legacy software with modern technologies, improved security, better performance, cloud infrastructure, and enhanced user experience.",
              },
              {
                question: "Do you develop CRM and ERP software?",
                answer:
                  "Yes. We develop custom CRM software, ERP platforms, workflow automation systems, business management applications, and enterprise software tailored to your organization.",
              },
              {
                question: "Do you provide maintenance after deployment?",
                answer:
                  "Yes. We provide software maintenance, monitoring, feature enhancements, security updates, performance optimization, and long term technical support.",
              },
              {
                question: "Which industries do you serve?",
                answer:
                  "We develop custom software solutions for healthcare, finance, education, logistics, manufacturing, ecommerce, real estate, and many other industries.",
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
              Build Software That Drives Business Success
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Transform Business Ideas Into Powerful Software Solutions
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions provides custom software development,
              enterprise software development, cloud software development,
              CRM software, ERP solutions, workflow automation, business
              management software, and scalable digital applications that
              improve productivity, simplify operations, and support long term
              business growth.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-gray-100"
              >
                Start Your Software Project

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

    </>
  );
}