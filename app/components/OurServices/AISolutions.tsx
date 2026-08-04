"use client";

import Link from "next/link";

const services = [
  {
    title: "Artificial Intelligence Development",
    description:
      "Develop intelligent AI powered software solutions designed for business automation and digital transformation.",
  },
  {
    title: "AI Chatbot Development",
    description:
      "Build intelligent chatbots that improve customer support, lead generation, and business communication.",
  },
  {
    title: "Machine Learning Solutions",
    description:
      "Create machine learning models that analyze business data and deliver accurate predictions.",
  },
  {
    title: "Generative AI Development",
    description:
      "Develop modern AI applications using advanced language models for business productivity.",
  },
  {
    title: "AI Automation",
    description:
      "Automate repetitive business processes with intelligent artificial intelligence solutions.",
  },
  {
    title: "Enterprise AI Solutions",
    description:
      "Deploy secure and scalable artificial intelligence solutions for modern enterprises.",
  },
];

const benefits = [
  {
    title: "Business Automation",
    description:
      "Reduce manual work using intelligent automation powered by artificial intelligence.",
  },
  {
    title: "Better Decisions",
    description:
      "Analyze business data with AI to improve decision making and operational efficiency.",
  },
  {
    title: "Scalable Solutions",
    description:
      "Develop AI systems that grow alongside your business requirements.",
  },
  {
    title: "Higher Productivity",
    description:
      "Improve team productivity through intelligent workflows and automation.",
  },
  {
    title: "Enterprise Security",
    description:
      "Build secure AI solutions with modern security practices and cloud infrastructure.",
  },
  {
    title: "Continuous Innovation",
    description:
      "Stay ahead with modern artificial intelligence technologies and continuous improvements.",
  },
];

export default function AISolutions() {
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
                Artificial Intelligence Development Company
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                AI Solutions
                <span className="block text-orange-500">
                  Built For Modern Businesses
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions delivers professional AI solutions,
                artificial intelligence development, machine learning,
                AI automation, AI chatbot development, enterprise AI
                solutions, and generative AI applications that help
                businesses automate operations, improve productivity,
                and accelerate digital transformation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Start AI Project
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
                  "Artificial Intelligence",
                  "Machine Learning",
                  "AI Automation",
                  "Enterprise AI",
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
                    AI Dashboard
                  </h3>

                  <p className="text-sm text-gray-500">
                    Business Intelligence
                  </p>

                </div>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Online
                </span>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Automation", "96%"],
                  ["Accuracy", "99%"],
                  ["Efficiency", "88%"],
                  ["Growth", "3.9X"],
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
                  AI Performance
                </h4>

                <div className="mt-6 space-y-5">

                  {[
                    ["Business Automation", "95%"],
                    ["Prediction Accuracy", "98%"],
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
              ["150+", "AI Projects"],
              ["99%", "Client Satisfaction"],
              ["24/7", "Technical Support"],
              ["95%", "Automation Accuracy"],
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

        </div>

      </section>

      {/* AI Services */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              AI Development Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Complete Artificial Intelligence Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              CodeVista Solutions develops intelligent AI software that helps
              organizations automate operations, improve decision making,
              increase productivity, reduce operational costs, and deliver
              better customer experiences through modern artificial
              intelligence technologies.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {services.map((service) => (

              <div
                key={service.title}
                className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition duration-300 hover:-translate-y-2 hover:border-orange-200 hover:bg-white hover:shadow-xl"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-500 text-lg font-bold text-white">
                  AI
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
              Trusted Artificial Intelligence Development Company
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our team develops scalable AI solutions using modern machine
              learning, natural language processing, intelligent automation,
              and enterprise software architecture to help businesses achieve
              long term digital transformation.
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
              Build Intelligent Software With Artificial Intelligence
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-100">
              From AI chatbot development and machine learning solutions to
              enterprise AI platforms, intelligent automation, predictive
              analytics, and generative AI applications, CodeVista Solutions
              creates custom AI software designed for measurable business
              growth and long term success.
            </p>

          </div>

        </div>

      </section>
            {/* Development Process */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              AI Development Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Simple Process For Powerful AI Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every artificial intelligence project follows a structured
              development process that focuses on business value, automation,
              scalability, security, and long term success.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                step: "01",
                title: "Business Discovery",
                description:
                  "Understand business goals, workflows, challenges, and automation opportunities.",
              },
              {
                step: "02",
                title: "AI Strategy",
                description:
                  "Create an artificial intelligence roadmap based on business requirements and growth objectives.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Build secure AI applications using modern machine learning and automation technologies.",
              },
              {
                step: "04",
                title: "Deployment",
                description:
                  "Deploy, monitor, optimize, and continuously improve AI performance.",
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

      {/* AI Technologies */}

      <section className="bg-gray-50 py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
                AI Technologies
              </span>

              <h2 className="mt-8 text-4xl font-bold text-gray-900 md:text-5xl">
                Modern Technologies For Intelligent Applications
              </h2>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions develops AI software using modern
                artificial intelligence frameworks, cloud infrastructure,
                intelligent automation, predictive analytics, and enterprise
                technologies that deliver secure and scalable business
                solutions.
              </p>

              <div className="mt-10 space-y-5">

                {[
                  "Artificial Intelligence Development",
                  "Machine Learning",
                  "Natural Language Processing",
                  "Generative AI",
                  "Predictive Analytics",
                  "Business Automation",
                  "Cloud AI Solutions",
                  "Enterprise AI Applications",
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
                AI Performance
              </h3>

              <div className="mt-10 space-y-8">

                {[
                  ["Automation Efficiency", "97%"],
                  ["Prediction Accuracy", "99%"],
                  ["Business Productivity", "95%"],
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
              AI Solutions For Every Industry
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our artificial intelligence development services help businesses
              automate operations, improve customer experiences, reduce costs,
              and accelerate digital transformation across multiple industries.
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
              Artificial Intelligence Development FAQ
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Learn more about AI development, machine learning, enterprise AI,
              business automation, AI chatbots, implementation timelines, and
              ongoing support from CodeVista Solutions.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What are AI solutions?",
                answer:
                  "AI solutions use artificial intelligence technologies to automate business processes, analyze information, improve decision making, increase productivity, and deliver better customer experiences.",
              },
              {
                question: "Can AI be integrated into existing software?",
                answer:
                  "Yes. We integrate artificial intelligence into websites, business software, CRM platforms, ERP systems, cloud applications, and enterprise software.",
              },
              {
                question: "Do you build AI chatbots?",
                answer:
                  "Yes. We develop intelligent AI chatbots for customer support, sales, lead generation, internal business operations, and knowledge management.",
              },
              {
                question: "How long does AI development take?",
                answer:
                  "The timeline depends on project scope, business requirements, integrations, and data availability. Smaller projects may take several weeks while enterprise platforms require larger implementation phases.",
              },
              {
                question: "Which industries benefit from artificial intelligence?",
                answer:
                  "Healthcare, finance, education, manufacturing, logistics, real estate, electronic commerce, and professional services benefit from artificial intelligence solutions.",
              },
              {
                question: "Do you provide maintenance and support?",
                answer:
                  "Yes. We provide continuous maintenance, monitoring, optimization, security updates, model improvements, and technical support after deployment.",
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
              Build Smarter Business Solutions
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Transform Your Business With Artificial Intelligence
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions delivers artificial intelligence development,
              machine learning solutions, AI chatbot development, business
              automation, enterprise AI platforms, predictive analytics,
              intelligent software, and custom AI applications that improve
              efficiency, reduce operational costs, and accelerate digital
              transformation.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-orange-100"
              >
                Start Your AI Project
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