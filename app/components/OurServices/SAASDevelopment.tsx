"use client";

import Link from "next/link";

const services = [
  {
    title: "Custom SaaS Development",
    description:
      "Develop secure and scalable Software as a Service platforms tailored to business requirements and long term growth.",
  },
  {
    title: "Multi Tenant SaaS",
    description:
      "Build efficient multi tenant SaaS architecture that supports thousands of users from a single platform.",
  },
  {
    title: "Cloud SaaS Solutions",
    description:
      "Create cloud native SaaS applications with excellent scalability, security, and performance.",
  },
  {
    title: "SaaS Product Development",
    description:
      "Transform business ideas into modern SaaS products using proven development practices.",
  },
  {
    title: "API Integration",
    description:
      "Connect SaaS platforms with payment gateways, CRM systems, ERP software, and third party services.",
  },
  {
    title: "SaaS Modernization",
    description:
      "Upgrade existing SaaS products with improved security, performance, and modern technology.",
  },
];

const benefits = [
  {
    title: "Cloud Ready",
    description:
      "Modern cloud architecture designed for reliability and business growth.",
  },
  {
    title: "Highly Scalable",
    description:
      "Support growing businesses with software built for thousands of users.",
  },
  {
    title: "Enterprise Security",
    description:
      "Protect business information using modern security standards.",
  },
  {
    title: "Fast Performance",
    description:
      "Deliver responsive software with optimized application performance.",
  },
  {
    title: "Subscription Ready",
    description:
      "Support recurring billing, user management, and subscription services.",
  },
  {
    title: "Continuous Support",
    description:
      "Receive long term maintenance, updates, and performance optimization.",
  },
];

export default function SaaSDevelopment() {
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
                SaaS Development Company
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                SaaS Development
                <span className="block text-orange-500">
                  Built For Modern Businesses
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions develops secure and scalable Software as a
                Service platforms, cloud applications, multi tenant SaaS
                products, subscription software, enterprise SaaS solutions,
                customer portals, and business management platforms that help
                organizations grow faster and deliver exceptional digital
                experiences.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Start Your SaaS Project
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
                  "Cloud SaaS",
                  "Multi Tenant Architecture",
                  "Subscription Platform",
                  "Enterprise SaaS",
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
                    SaaS Analytics
                  </h3>

                  <p className="text-sm text-gray-500">
                    Platform Performance
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Live
                </span>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Active Users", "50K+"],
                  ["Availability", "99.9%"],
                  ["Performance", "98%"],
                  ["Growth", "4.5X"],
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
                  Platform Health
                </h4>

                <div className="mt-6 space-y-5">

                  {[
                    ["Security", "99%"],
                    ["Scalability", "98%"],
                    ["Customer Satisfaction", "97%"],
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
              ["200+", "SaaS Projects"],
              ["99.9%", "Platform Availability"],
              ["99%", "Client Satisfaction"],
              ["24/7", "Technical Support"],
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

      {/* SaaS Services */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              SaaS Development Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Complete Software As A Service Development
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              CodeVista Solutions develops secure, scalable, and cloud native
              Software as a Service platforms that support subscription
              businesses, enterprise operations, customer management,
              automation, and long term business growth.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white">
                  SA
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

      {/* Why Choose Us */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Why Choose CodeVista Solutions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Trusted SaaS Development Company
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our SaaS development team builds secure, cloud based software
              platforms that deliver outstanding performance, modern user
              experiences, enterprise security, and long term scalability for
              businesses of every size.
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
              Launch A SaaS Platform Built For Growth
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              From subscription software and enterprise SaaS platforms to cloud
              applications, customer portals, business automation, and scalable
              Software as a Service products, CodeVista Solutions develops
              powerful SaaS platforms that support sustainable business growth
              and exceptional customer experiences.
            </p>

          </div>

        </div>

      </section>
            {/* Development Process */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              SaaS Development Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Structured Development For Modern SaaS Platforms
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every Software as a Service platform follows a structured
              development process focused on scalability, cloud architecture,
              performance, security, and long term business success.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                step: "01",
                title: "Business Discovery",
                description:
                  "Understand business goals, customer requirements, subscription model, and platform objectives.",
              },
              {
                step: "02",
                title: "Architecture Planning",
                description:
                  "Design secure cloud architecture, database structure, user management, and scalable infrastructure.",
              },
              {
                step: "03",
                title: "Platform Development",
                description:
                  "Develop responsive SaaS applications with modern technologies and secure cloud deployment.",
              },
              {
                step: "04",
                title: "Launch And Growth",
                description:
                  "Deploy, monitor, optimize, and continuously improve platform performance and customer experience.",
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

      {/* SaaS Features */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                Modern SaaS Features
              </span>

              <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-5xl">
                Everything Needed For A Successful SaaS Platform
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions develops Software as a Service platforms
                with subscription management, secure authentication, cloud
                infrastructure, payment integration, analytics dashboards,
                automation, and enterprise level performance.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Multi Tenant Architecture",
                  "Subscription Management",
                  "Secure User Authentication",
                  "Cloud Infrastructure",
                  "Payment Gateway Integration",
                  "Business Analytics Dashboard",
                  "API Integration",
                  "Scalable Platform Architecture",
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
                Platform Performance
              </h3>

              <div className="mt-10 space-y-8">

                {[
                  ["Cloud Availability", "99.9%"],
                  ["Application Performance", "98%"],
                  ["Platform Security", "99%"],
                  ["Customer Satisfaction", "97%"],
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
              SaaS Development Solutions For Every Industry
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our SaaS development services help organizations launch secure,
              scalable, and cloud based software platforms for subscription
              businesses, enterprise operations, and digital transformation.
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
              SaaS Development FAQ
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Learn more about Software as a Service development, cloud
              platforms, subscription software, enterprise SaaS, platform
              security, project timelines, and long term support from
              CodeVista Solutions.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What is Software as a Service development?",
                answer:
                  "Software as a Service development creates cloud based software that users can securely access through a web browser using subscription based access.",
              },
              {
                question: "Can you build a custom SaaS platform?",
                answer:
                  "Yes. We develop custom SaaS platforms designed around business requirements, customer experience, subscription management, and long term scalability.",
              },
              {
                question: "Do you develop multi tenant SaaS platforms?",
                answer:
                  "Yes. We build secure multi tenant SaaS architecture that supports multiple customers from one platform while maintaining data isolation and performance.",
              },
              {
                question: "Can existing software be converted into SaaS?",
                answer:
                  "Yes. We modernize traditional software and transform existing business applications into secure cloud based Software as a Service platforms.",
              },
              {
                question: "Do you provide maintenance after deployment?",
                answer:
                  "Yes. We provide continuous platform maintenance, security updates, performance optimization, feature development, monitoring, and technical support.",
              },
              {
                question: "Which industries benefit from SaaS platforms?",
                answer:
                  "Healthcare, finance, education, manufacturing, logistics, electronic commerce, real estate, and professional services benefit from scalable SaaS platforms.",
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
              Launch A Scalable SaaS Platform
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Build Powerful Software As A Service Solutions
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions develops secure Software as a Service
              platforms, cloud applications, enterprise SaaS products,
              subscription software, multi tenant architecture, customer
              portals, business management platforms, and scalable cloud
              solutions that improve efficiency, support business growth,
              and deliver exceptional customer experiences.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                Start Your SaaS Project
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