"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Brain,
  Bot,
  Cpu,
  Workflow,
  Sparkles,
  Database,
  ShieldCheck,
  BarChart3,
  LineChart,
  Zap,
  Cloud,
  Code2,
  Users,
  Building2,
  HeartPulse,
  Landmark,
  ShoppingBag,
  GraduationCap,
  Truck,
  Factory,
  MessageSquare,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbot Development",
    description:
      "Develop intelligent AI chatbots that automate customer support, lead generation, and business communication.",
  },
  {
    icon: Brain,
    title: "Generative AI Solutions",
    description:
      "Build powerful AI applications using advanced language models for content generation, automation, and productivity.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Automate repetitive workflows with artificial intelligence to improve efficiency and reduce operational costs.",
  },
  {
    icon: Database,
    title: "AI Data Processing",
    description:
      "Extract insights from structured and unstructured data using modern artificial intelligence technologies.",
  },
  {
    icon: BarChart3,
    title: "Predictive Analytics",
    description:
      "Use machine learning models to forecast trends and support data driven business decisions.",
  },
  {
    icon: Cloud,
    title: "AI Integration",
    description:
      "Integrate artificial intelligence into existing web applications, ERP systems, CRM software, and mobile platforms.",
  },
];

const benefits = [
  {
    icon: Zap,
    title: "Faster Operations",
    description:
      "Reduce manual work through intelligent automation and AI powered workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Secure AI Systems",
    description:
      "Enterprise grade security with protected data handling and reliable AI deployment.",
  },
  {
    icon: Cpu,
    title: "Scalable Architecture",
    description:
      "AI solutions designed to scale as your business and customer base continue to grow.",
  },
  {
    icon: Sparkles,
    title: "Modern AI Technology",
    description:
      "Build future ready applications using the latest artificial intelligence frameworks.",
  },
  {
    icon: Users,
    title: "Better User Experience",
    description:
      "Deliver personalized experiences using intelligent recommendations and automation.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    description:
      "Every AI solution is designed specifically for your business requirements and goals.",
  },
];

export default function AISolutions() {
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
                Artificial Intelligence Solutions
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                AI Solutions That Transform
                <span className="block text-orange-500">
                  Modern Businesses
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions delivers custom AI solutions, artificial
                intelligence development, AI automation, chatbot development,
                machine learning solutions, and enterprise AI applications that
                help businesses increase productivity, reduce costs, and drive
                digital transformation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Start AI Project

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
                  "Generative AI",
                  "Machine Learning",
                  "AI Automation",
                  "Enterprise AI",
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
                    AI Analytics
                  </h3>

                  <p className="text-sm text-gray-500">
                    Live Intelligence Dashboard
                  </p>

                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                  Active
                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Automation", "94%"],
                  ["Accuracy", "99%"],
                  ["Time Saved", "75%"],
                  ["Growth", "3.8X"],
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
                    ["Response Speed", "98%"],
                    ["Automation Rate", "95%"],
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
            {/* AI Services */}

      <section className="relative overflow-hidden bg-gray-50 py-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-orange-50 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid gap-6 md:grid-cols-4">

            {[
              ["100+", "AI Projects"],
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

          <div className="mx-auto mt-24 max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              AI Development Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Complete Artificial Intelligence Development Services
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              CodeVista Solutions provides custom artificial intelligence
              development, AI software development, AI chatbot development,
              machine learning solutions, workflow automation, predictive
              analytics, and enterprise AI solutions that improve efficiency,
              customer experience, and business growth.
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

      {/* Why Choose CodeVista */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Why Choose CodeVista Solutions
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Trusted Artificial Intelligence Development Company
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our AI engineers build intelligent software that combines
              automation, analytics, machine learning, and generative AI to
              create secure, scalable, and business focused solutions for
              organizations of every size.
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

            <Brain className="mx-auto h-14 w-14" />

            <h3 className="mt-6 text-3xl font-bold">
              Build Intelligent Software With Artificial Intelligence
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-orange-100">
              From AI powered chatbots and workflow automation to predictive
              analytics and enterprise AI platforms, CodeVista Solutions creates
              custom artificial intelligence solutions that help businesses work
              smarter, increase productivity, and accelerate digital
              transformation.
            </p>

          </div>

        </div>

      </section>
            {/* AI Development Process */}

      <section className="relative overflow-hidden bg-gray-50 py-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              AI Development Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              From Business Challenge To Intelligent AI Solution
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every artificial intelligence solution follows a structured
              development process that delivers secure, scalable, accurate, and
              business focused results.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              [
                "01",
                "Business Discovery",
                "Understand your business goals, existing workflows, and automation opportunities."
              ],
              [
                "02",
                "AI Strategy",
                "Select the best AI models, architecture, integrations, and implementation roadmap."
              ],
              [
                "03",
                "Data Preparation",
                "Organize, clean, and structure business data for intelligent AI processing."
              ],
              [
                "04",
                "AI Development",
                "Build custom AI software, chatbots, machine learning models, and automation systems."
              ],
              [
                "05",
                "Testing",
                "Validate accuracy, performance, security, scalability, and business reliability."
              ],
              [
                "06",
                "Deployment",
                "Deploy AI solutions with monitoring, optimization, and continuous improvements."
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

      {/* AI Technology Stack */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              AI Technology Stack
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Modern AI Technologies For Enterprise Applications
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We build artificial intelligence applications using modern
              frameworks, cloud infrastructure, machine learning models,
              language models, and secure deployment technologies.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: Brain,
                title: "Artificial Intelligence",
                items: [
                  "OpenAI",
                  "Claude",
                  "Gemini",
                  "Llama",
                ],
              },
              {
                icon: Cpu,
                title: "Development",
                items: [
                  "Python",
                  "FastAPI",
                  "Node.js",
                  "Next.js",
                ],
              },
              {
                icon: Database,
                title: "Data",
                items: [
                  "PostgreSQL",
                  "MongoDB",
                  "Vector Database",
                  "Redis",
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
              AI Solutions For Every Industry
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our artificial intelligence solutions help organizations automate
              operations, improve decision making, increase productivity, and
              deliver exceptional customer experiences across multiple
              industries.
            </p>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {[
              [HeartPulse, "Healthcare"],
              [Landmark, "Finance"],
              [ShoppingBag, "Electronic Commerce"],
              [GraduationCap, "Education"],
              [Truck, "Logistics"],
              [Factory, "Manufacturing"],
              [Building2, "Real Estate"],
              [MessageSquare, "Customer Support"],
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
              Artificial Intelligence Development FAQ
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Learn more about custom AI development, machine learning,
              enterprise AI solutions, AI chatbot development, business
              automation, implementation timelines, and ongoing support from
              CodeVista Solutions.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What are AI solutions?",
                answer:
                  "AI solutions use artificial intelligence technologies to automate business processes, analyze data, improve decision making, enhance customer experiences, and increase operational efficiency.",
              },
              {
                question: "Can artificial intelligence be integrated into existing software?",
                answer:
                  "Yes. We integrate AI into existing websites, mobile applications, CRM platforms, ERP systems, SaaS products, and enterprise software without disrupting existing operations.",
              },
              {
                question: "Which industries benefit from AI development?",
                answer:
                  "Healthcare, finance, education, logistics, ecommerce, manufacturing, customer service, real estate, and many other industries benefit from intelligent automation and data driven insights.",
              },
              {
                question: "Do you build custom AI chatbots?",
                answer:
                  "Yes. We develop intelligent AI chatbots for customer support, lead generation, internal knowledge systems, employee assistance, and automated communication.",
              },
              {
                question: "How long does an AI development project take?",
                answer:
                  "Project timelines depend on complexity, available data, integrations, and business goals. Smaller AI solutions can be delivered within weeks while enterprise platforms require larger implementation phases.",
              },
              {
                question: "Do you provide support after deployment?",
                answer:
                  "Yes. We provide monitoring, maintenance, optimization, feature enhancements, model improvements, and long term technical support after deployment.",
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
              Build Intelligent Business Solutions
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Transform Your Business With Artificial Intelligence
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions develops custom artificial intelligence
              solutions, AI automation platforms, machine learning systems,
              intelligent chatbots, predictive analytics, enterprise AI
              applications, and business automation software that improve
              productivity, reduce operational costs, and accelerate digital
              transformation.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-gray-100"
              >
                Start Your AI Project

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