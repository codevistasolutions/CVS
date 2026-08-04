"use client";

import Link from "next/link";

const services = [
  {
    title: "Search Engine Optimization",
    description:
      "Improve search rankings, increase organic traffic, and generate qualified leads with professional SEO services.",
  },
  {
    title: "Google Ads Management",
    description:
      "Create and optimize Google Ads campaigns that deliver measurable business growth and qualified leads.",
  },
  {
    title: "Social Media Marketing",
    description:
      "Build brand awareness, increase engagement, and grow your audience across leading social media platforms.",
  },
  {
    title: "Performance Marketing",
    description:
      "Use data driven advertising strategies focused on conversions and business growth.",
  },
  {
    title: "Local SEO",
    description:
      "Increase visibility in local search results through Google Business Profile optimization and local SEO.",
  },
  {
    title: "Content Marketing",
    description:
      "Publish valuable content that attracts customers and strengthens brand authority.",
  },
];

const benefits = [
  {
    title: "More Website Traffic",
    description: "Increase qualified visitors through search engine optimization.",
  },
  {
    title: "Higher Lead Generation",
    description: "Generate consistent leads through optimized marketing campaigns.",
  },
  {
    title: "Better Return On Investment",
    description: "Maximize marketing performance while reducing wasted advertising spend.",
  },
  {
    title: "Brand Visibility",
    description: "Build a strong online presence across multiple digital channels.",
  },
  {
    title: "Transparent Reporting",
    description: "Receive detailed monthly reports with measurable marketing insights.",
  },
  {
    title: "Long Term Growth",
    description: "Create sustainable marketing strategies that continue delivering results.",
  },
];

export default function DigitalMarketing() {
  return (
    <>

      {/* Hero */}

      <section className="relative overflow-hidden bg-white pt-36 pb-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-100 blur-3xl opacity-40"></div>
          <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-orange-50 blur-3xl"></div>
          <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-orange-50 blur-3xl"></div>
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* Left */}

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                Digital Marketing Company
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Digital Marketing
                <span className="block text-orange-500">
                  Services That Drive Business Growth
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions provides professional digital marketing
                services including search engine optimization, Google Ads,
                social media marketing, local SEO, content marketing,
                performance marketing, and lead generation strategies that help
                businesses increase online visibility and generate more revenue.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Get Free Consultation
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
                  "Search Engine Optimization",
                  "Google Ads",
                  "Social Media Marketing",
                  "Lead Generation",
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
                    Marketing Dashboard
                  </h3>

                  <p className="text-sm text-gray-500">
                    Campaign Analytics
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Active
                </span>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Organic Traffic", "+320%"],
                  ["Qualified Leads", "1450"],
                  ["Conversion Rate", "9.2%"],
                  ["Return", "5.8X"],
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
                  Campaign Performance
                </h4>

                <div className="mt-6 space-y-5">

                  {[
                    ["SEO Performance", "96%"],
                    ["Lead Quality", "94%"],
                    ["Customer Growth", "98%"],
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

      <section className="relative bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-4">

            {[
              ["500+", "Successful Campaigns"],
              ["98%", "Client Satisfaction"],
              ["350%", "Average Traffic Growth"],
              ["24/7", "Marketing Support"],
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
              Digital Marketing Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Complete Online Marketing Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our digital marketing services help businesses improve search
              rankings, increase website traffic, generate qualified leads,
              improve conversion rates, and strengthen online brand visibility
              through customized marketing strategies.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-xl font-bold text-white">
                  DM
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
              Results Driven Digital Marketing Company
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every marketing campaign is backed by research, analytics,
              optimization, and continuous improvements. Our objective is to
              increase traffic, improve visibility, generate qualified leads,
              and help businesses achieve sustainable growth.
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
              Grow Your Business With Digital Marketing
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions provides search engine optimization, Google
              Ads management, local SEO, social media marketing, content
              marketing, performance marketing, and lead generation services
              that help businesses increase online visibility, attract more
              customers, and grow revenue.
            </p>

          </div>

        </div>

      </section>
            {/* Marketing Process */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Our Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Simple Process With Measurable Results
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every digital marketing campaign follows a structured approach
              designed to increase visibility, improve search rankings,
              generate qualified leads, and maximize business growth.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                step: "01",
                title: "Business Research",
                description:
                  "Understand your business, competitors, customers, and market opportunities.",
              },
              {
                step: "02",
                title: "Marketing Strategy",
                description:
                  "Develop a customized digital marketing plan focused on measurable growth.",
              },
              {
                step: "03",
                title: "Campaign Execution",
                description:
                  "Launch SEO, Google Ads, content marketing, and social media campaigns.",
              },
              {
                step: "04",
                title: "Optimization",
                description:
                  "Track campaign performance and continuously improve results using analytics.",
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

      {/* Marketing Solutions */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                Complete Marketing Solutions
              </span>

              <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-5xl">
                Everything Your Business Needs To Grow Online
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                We combine search engine optimization, Google Ads,
                performance marketing, local SEO, content marketing,
                website optimization, and lead generation into one
                complete digital marketing strategy.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Search Engine Optimization",
                  "Google Ads Management",
                  "Local SEO",
                  "Social Media Marketing",
                  "Performance Marketing",
                  "Lead Generation",
                  "Content Marketing",
                  "Website Optimization",
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
                Marketing Performance
              </h3>

              <div className="mt-10 space-y-8">

                {[
                  ["Organic Search Growth", "96%"],
                  ["Lead Conversion", "92%"],
                  ["Advertising Performance", "95%"],
                  ["Customer Engagement", "98%"],
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
              Digital Marketing Services For Every Industry
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our digital marketing services help businesses improve search
              visibility, generate qualified leads, increase online sales,
              and build a trusted digital presence across multiple industries.
            </p>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              "Healthcare",
              "Real Estate",
              "Education",
              "Electronic Commerce",
              "Finance",
              "Manufacturing",
              "Professional Services",
              "Logistics",
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
              Digital Marketing Questions
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Learn more about digital marketing services, search engine
              optimization, Google Ads, local SEO, social media marketing,
              lead generation, and online business growth.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What digital marketing services do you provide?",
                answer:
                  "We provide search engine optimization, Google Ads management, local SEO, social media marketing, performance marketing, content marketing, website optimization, and lead generation services.",
              },
              {
                question: "How long does search engine optimization take?",
                answer:
                  "Most businesses begin seeing measurable improvements within three to six months depending on competition, website quality, and industry.",
              },
              {
                question: "Can digital marketing help local businesses?",
                answer:
                  "Yes. Local SEO and Google Business Profile optimization help businesses improve local visibility and attract nearby customers.",
              },
              {
                question: "Do you provide monthly reports?",
                answer:
                  "Yes. Every client receives detailed monthly reports covering traffic, keyword rankings, advertising performance, conversions, and marketing improvements.",
              },
              {
                question: "Which businesses benefit from digital marketing?",
                answer:
                  "Healthcare, education, real estate, electronic commerce, finance, manufacturing, logistics, and professional service businesses all benefit from digital marketing.",
              },
              {
                question: "Why choose CodeVista Solutions?",
                answer:
                  "Our team focuses on measurable business growth through customized digital marketing strategies, transparent reporting, and continuous optimization.",
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
              Ready To Grow Your Business
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Digital Marketing That Generates More Traffic More Leads And More Sales
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions helps businesses improve search rankings,
              increase online visibility, generate qualified leads, optimize
              advertising campaigns, strengthen brand awareness, and achieve
              sustainable business growth through professional digital
              marketing services.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                Start Your Project
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