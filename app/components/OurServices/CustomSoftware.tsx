"use client";

import Link from "next/link";

const services = [
  {
    title: "Custom Software Development",
    description:
      "Develop secure and scalable custom software designed around your unique business goals and operational requirements.",
  },
  {
    title: "Enterprise Software Development",
    description:
      "Build enterprise software that improves collaboration, productivity, and business performance.",
  },
  {
    title: "CRM And ERP Development",
    description:
      "Create custom CRM and ERP software that centralizes business operations and customer management.",
  },
  {
    title: "Cloud Software Development",
    description:
      "Develop secure cloud based software that supports business growth and long term scalability.",
  },
  {
    title: "Business Process Automation",
    description:
      "Automate repetitive business operations through intelligent software solutions.",
  },
  {
    title: "Software Modernization",
    description:
      "Upgrade existing business software using modern technologies, improved security, and better performance.",
  },
];

const benefits = [
  {
    title: "Business Efficiency",
    description:
      "Improve operational efficiency through software designed specifically for your business.",
  },
  {
    title: "Scalable Architecture",
    description:
      "Software solutions that continue growing as your business expands.",
  },
  {
    title: "Enterprise Security",
    description:
      "Modern security practices protect business data and sensitive information.",
  },
  {
    title: "Reliable Performance",
    description:
      "Fast, stable, and reliable software built using modern development standards.",
  },
  {
    title: "Future Ready Technology",
    description:
      "Modern software architecture that supports future upgrades and integrations.",
  },
  {
    title: "Dedicated Support",
    description:
      "Continuous maintenance, optimization, and technical support after deployment.",
  },
];

export default function CustomSoftware() {
  return (
    <>

      {/* Hero */}

      <section className="relative overflow-hidden bg-white pt-36 pb-24">

        <div className="absolute inset-0 -z-10">

          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-100 opacity-40 blur-3xl"></div>

          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl"></div>

          <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl"></div>

        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

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
                CodeVista Solutions develops custom software, enterprise
                software, CRM systems, ERP platforms, cloud applications,
                workflow automation software, and business management
                solutions that improve productivity, simplify operations,
                and accelerate digital transformation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Start Your Project
                </Link>

                <Link
                  href="/portfolio"
                  className="rounded-xl border border-gray-300 px-8 py-4 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
                >
                  View Portfolio
                </Link>

              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2">

                {[
                  "Enterprise Software",
                  "CRM Development",
                  "ERP Development",
                  "Cloud Software",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-3"
                  >

                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>

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
                    Software Dashboard
                  </h3>

                  <p className="text-sm text-gray-500">
                    Business Performance
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Active
                </span>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Projects", "250+"],
                  ["Performance", "98%"],
                  ["Efficiency", "96%"],
                  ["Growth", "4.2X"],
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
                  Software Quality
                </h4>

                <div className="mt-6 space-y-5">

                  {[
                    ["Security", "99%"],
                    ["Scalability", "97%"],
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
                        ></div>

                      </div>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
            {/* Statistics */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-4">

            {[
              ["250+", "Software Projects"],
              ["99%", "Client Satisfaction"],
              ["24/7", "Technical Support"],
              ["98%", "Project Success"],
            ].map(([value, label]) => (

              <div
                key={label}
                className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
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

        </div>

      </section>

      {/* Services */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Custom Software Development Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Software Built Around Your Business
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              CodeVista Solutions develops custom software that improves
              business operations, increases productivity, simplifies
              workflows, and supports long term growth through scalable
              technology solutions built specifically for your organization.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white">
                  CS
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {service.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {service.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Why Choose CodeVista */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Why Choose CodeVista Solutions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Trusted Custom Software Development Company
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We create secure, scalable, and high performance software using
              modern development practices. Every solution is designed to solve
              real business challenges while supporting long term digital
              transformation and sustainable business growth.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {benefits.map((benefit) => (

              <div
                key={benefit.title}
                className="rounded-3xl border border-gray-200 bg-white p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-100">

                  <div className="h-4 w-4 rounded-full bg-orange-500"></div>

                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {benefit.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {benefit.description}
                </p>

              </div>

            ))}

          </div>

          <div className="mt-20 rounded-[32px] bg-gradient-to-r from-orange-500 to-orange-600 p-12 text-center text-white">

            <h3 className="text-3xl font-bold md:text-4xl">
              Build Powerful Software For Future Business Growth
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              From enterprise software and cloud applications to CRM systems,
              ERP platforms, workflow automation, and business management
              software, CodeVista Solutions develops custom software that
              improves efficiency, increases productivity, and supports
              long term business success.
            </p>

          </div>

        </div>

      </section>
            {/* Development Process */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Software Development Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Simple Process For Exceptional Software Development
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every custom software development project follows a structured
              process focused on business goals, security, scalability,
              performance, and long term success.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                step: "01",
                title: "Business Analysis",
                description:
                  "Understand business objectives, operational challenges, and software requirements.",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Design software architecture, development strategy, and project roadmap.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Develop secure and scalable software using modern technologies and best practices.",
              },
              {
                step: "04",
                title: "Deployment",
                description:
                  "Deploy, optimize, maintain, and continuously improve software performance.",
              },
            ].map((item) => (

              <div
                key={item.step}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-xl font-bold text-white">
                  {item.step}
                </div>

                <h3 className="mt-8 text-2xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-5 leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Software Solutions */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                Business Software Solutions
              </span>

              <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-5xl">
                Modern Software Built For Every Business
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions develops enterprise software, CRM software,
                ERP platforms, cloud applications, workflow automation,
                customer portals, web applications, and custom business
                software that improves efficiency and supports digital
                transformation.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Custom Software Development",
                  "Enterprise Software",
                  "CRM Software Development",
                  "ERP Software Development",
                  "Cloud Software Development",
                  "Business Process Automation",
                  "Web Application Development",
                  "Software Modernization",
                ].map((item) => (

                  <div
                    key={item}
                    className="flex items-center gap-4"
                  >

                    <div className="h-3 w-3 rounded-full bg-orange-500"></div>

                    <span className="text-lg text-gray-700">
                      {item}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            <div className="rounded-[32px] border border-gray-200 bg-white p-10 shadow-xl">

              <h3 className="text-3xl font-bold text-gray-900">
                Software Performance
              </h3>

              <div className="mt-10 space-y-8">

                {[
                  ["Application Performance", "99%"],
                  ["Security", "98%"],
                  ["Business Efficiency", "96%"],
                  ["Customer Satisfaction", "98%"],
                ].map(([label, value]) => (

                  <div key={label}>

                    <div className="mb-2 flex justify-between">

                      <span className="font-medium text-gray-700">
                        {label}
                      </span>

                      <span className="font-bold text-orange-500">
                        {value}
                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-orange-100">

                      <div
                        className="h-3 rounded-full bg-orange-500"
                        style={{ width: value }}
                      ></div>

                    </div>

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Industries */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Custom Software Solutions For Every Industry
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our custom software development services help organizations
              automate operations, improve customer experiences, streamline
              workflows, and accelerate business growth across multiple
              industries.
            </p>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Healthcare",
              "Finance",
              "Education",
              "Electronic Commerce",
              "Manufacturing",
              "Real Estate",
              "Logistics",
              "Professional Services",
            ].map((industry) => (

              <div
                key={industry}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 text-center transition hover:-translate-y-2 hover:bg-white hover:shadow-xl"
              >

                <div className="mx-auto h-16 w-16 rounded-full bg-orange-500"></div>

                <h3 className="mt-6 text-xl font-bold text-gray-900">
                  {industry}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </section>
            {/* FAQ */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Frequently Asked Questions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Custom Software Development FAQ
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Learn more about custom software development, enterprise
              software, CRM software, ERP software, cloud applications,
              project timelines, software maintenance, and business
              automation services from CodeVista Solutions.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What is custom software development?",
                answer:
                  "Custom software development creates software designed specifically for business requirements instead of using standard software products.",
              },
              {
                question: "How long does custom software development take?",
                answer:
                  "Development time depends on project complexity, required features, integrations, and business objectives. Small projects may take several weeks while enterprise software requires a larger implementation timeline.",
              },
              {
                question: "Do you develop CRM and ERP software?",
                answer:
                  "Yes. We build custom CRM software, ERP systems, workflow automation platforms, customer portals, and enterprise business applications.",
              },
              {
                question: "Can existing software be upgraded?",
                answer:
                  "Yes. We modernize existing software with improved performance, stronger security, modern architecture, cloud deployment, and enhanced user experience.",
              },
              {
                question: "Do you provide maintenance after deployment?",
                answer:
                  "Yes. We provide continuous software maintenance, monitoring, optimization, feature enhancements, security updates, and technical support.",
              },
              {
                question: "Which industries use custom software?",
                answer:
                  "Healthcare, finance, education, manufacturing, logistics, real estate, electronic commerce, and professional service businesses all benefit from custom software solutions.",
              },
            ].map((faq) => (

              <div
                key={faq.question}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition hover:shadow-xl"
              >

                <h3 className="text-2xl font-bold text-gray-900">
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

        <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white">
              Build Better Business Software
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Transform Your Business With Custom Software Development
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions develops custom software, enterprise software,
              CRM systems, ERP platforms, cloud applications, workflow
              automation, web applications, and business software that improves
              productivity, streamlines operations, strengthens security, and
              supports long term business growth.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                Start Your Software Project
              </Link>

              <Link
                href="/our-services"
                className="rounded-xl border border-white px-8 py-4 font-semibold text-white transition hover:bg-white hover:text-orange-600"
              >
                Explore Our Services
              </Link>

            </div>

          </div>

        </div>

      </section>

    </>
  );
}