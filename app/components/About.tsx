"use client";

import Link from "next/link";
import {
  ArrowRight,
  Award,
  Users,
  Rocket,
  Target,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";

export default function About() {
  return (
    <>
      {/* Hero Section */}

      <section className="relative overflow-hidden bg-white pt-36 pb-28">
        <div className="absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-orange-100/70 blur-3xl" />

          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "radial-gradient(#000 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-orange-200 bg-orange-50 px-6 py-2 text-sm font-semibold text-orange-600">
              About CodeVista Solutions
            </span>

            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-gray-900 lg:text-7xl">
              Building Digital Solutions
              <br />
              <span className="text-orange-500">
                That Help Businesses Grow
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-gray-600">
              CodeVista Solutions is a software development company in India
              specializing in Website Development, ERP Development,
              CRM Development, SaaS Development, AI Solutions and
              Custom Software Development. We help startups,
              SMEs and enterprises build secure, scalable and
              future-ready digital products.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="group inline-flex items-center rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white transition hover:-translate-y-1 hover:bg-orange-600"
              >
                Start Your Project

                <ArrowRight className="ml-2 transition group-hover:translate-x-1" />
              </Link>

              <Link
                href="/portfolio"
                className="rounded-full border border-gray-300 px-8 py-4 text-lg font-semibold text-gray-900 transition hover:border-orange-500 hover:text-orange-500"
              >
                View Portfolio
              </Link>

            </div>

          </div>

          {/* Stats */}

          <div className="mt-24 grid gap-8 md:grid-cols-3">

            <div className="rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-lg">

              <Award
                size={46}
                className="mx-auto text-orange-500"
              />

              <h2 className="mt-6 text-4xl font-black text-gray-900">
                10+
              </h2>

              <p className="mt-3 text-gray-600">
                Successful Projects Delivered
              </p>

            </div>

            <div className="rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-lg">

              <Users
                size={46}
                className="mx-auto text-orange-500"
              />

              <h2 className="mt-6 text-4xl font-black text-gray-900">
                2+
              </h2>

              <p className="mt-3 text-gray-600">
                Years of Experience
              </p>

            </div>

            <div className="rounded-[30px] border border-gray-200 bg-white p-10 text-center shadow-lg">

              <Rocket
                size={46}
                className="mx-auto text-orange-500"
              />

              <h2 className="mt-6 text-4xl font-black text-gray-900">
                24/7
              </h2>

              <p className="mt-3 text-gray-600">
                Dedicated Support
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* Our Story */}

      <section className="bg-gray-50 py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>

              <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
                Our Story
              </span>

              <h2 className="mt-6 text-4xl font-black leading-tight text-gray-900 lg:text-5xl">
                Empowering Businesses Through
                <span className="text-orange-500">
                  {" "}Technology
                </span>
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                CodeVista Solutions was founded with a mission to help
                businesses adopt modern technology through innovative,
                scalable and reliable software solutions. We believe every
                company deserves technology that simplifies operations,
                improves productivity and drives sustainable growth.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                From business websites and enterprise ERP software to CRM
                platforms, SaaS applications and AI-powered solutions, our
                team builds software tailored to each client's unique
                requirements rather than relying on generic templates.
              </p>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                Our focus is on long-term partnerships, transparent
                communication and delivering software that continues to
                create value as businesses evolve.
              </p>

            </div>

            <div className="space-y-8">

              <div className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg">

                <Target className="text-orange-500" size={40} />

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Our Mission
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  To develop high-quality software solutions that automate
                  business operations, improve efficiency and enable
                  organizations to achieve long-term growth through
                  technology.
                </p>

              </div>

              <div className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg">

                <Lightbulb className="text-orange-500" size={40} />

                <h3 className="mt-6 text-2xl font-bold text-gray-900">
                  Our Vision
                </h3>

                <p className="mt-4 leading-8 text-gray-600">
                  To become one of India's most trusted software development
                  companies by building innovative digital products and
                  maintaining lasting client relationships.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Why Choose Us starts in Part 2 */} 
            {/* Why Choose Us */}

            <section className="py-28 bg-white">

<div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      Why Businesses Choose CodeVista
    </span>

    <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
      More Than A Development Company
      <span className="text-orange-500">
        {" "}A Technology Partner
      </span>
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      At CodeVista Solutions, we don't just build software—we solve
      business challenges. Every project is carefully planned,
      professionally developed and optimized to deliver measurable
      business outcomes through modern technology.
    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

    {[
      {
        icon: "🚀",
        title: "Business-First Approach",
        desc: "We understand your business model before writing code, ensuring every solution aligns with your goals."
      },
      {
        icon: "⚡",
        title: "Scalable Architecture",
        desc: "Applications are designed for future growth, allowing your software to expand as your business evolves."
      },
      {
        icon: "🔒",
        title: "Enterprise Security",
        desc: "Security best practices, encrypted communication and role-based access are implemented from day one."
      },
      {
        icon: "☁️",
        title: "Cloud Ready",
        desc: "Our solutions are built for cloud infrastructure with performance, reliability and scalability in mind."
      },
      {
        icon: "🤝",
        title: "Transparent Process",
        desc: "Regular updates, milestone tracking and open communication throughout every stage of development."
      },
      {
        icon: "🛠️",
        title: "Long-Term Support",
        desc: "Deployment is just the beginning. We provide maintenance, upgrades and continuous improvements."
      }
    ].map((item) => (

      <div
        key={item.title}
        className="group rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:border-orange-300 hover:shadow-2xl"
      >

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100 text-3xl transition group-hover:bg-orange-500 group-hover:text-white">
          {item.icon}
        </div>

        <h3 className="mt-8 text-2xl font-bold text-gray-900">
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

{/* Our Core Services */}

<section className="bg-gray-50 py-28">

<div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      What We Do
    </span>

    <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
      End-to-End Software
      <span className="text-orange-500">
        {" "}Development Services
      </span>
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Our comprehensive software development services help businesses
      establish a strong digital presence, automate operations and
      improve efficiency through modern technology.
    </p>

  </div>

  <div className="mt-20 grid gap-8 lg:grid-cols-2">

    {[
      {
        title: "Website Development",
        description:
          "SEO-optimized corporate websites, business websites, eCommerce platforms and custom web applications."
      },
      {
        title: "ERP Development",
        description:
          "Custom ERP software for inventory, HR, finance, manufacturing, procurement and operations."
      },
      {
        title: "CRM Development",
        description:
          "Customer relationship management software that improves sales, customer engagement and support."
      },
      {
        title: "SaaS Development",
        description:
          "Cloud-based SaaS platforms with secure authentication, subscriptions and scalable architecture."
      },
      {
        title: "AI Solutions",
        description:
          "Artificial Intelligence solutions including chatbots, automation, AI integrations and intelligent workflows."
      },
      {
        title: "Custom Software Development",
        description:
          "Tailor-made business software designed specifically for your organization's unique requirements."
      }
    ].map((service) => (

      <div
        key={service.title}
        className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
      >

        <h3 className="text-2xl font-bold text-gray-900">
          {service.title}
        </h3>

        <p className="mt-5 leading-8 text-gray-600">
          {service.description}
        </p>

        <Link
          href="/contact"
          className="mt-8 inline-flex items-center font-semibold text-orange-500 transition hover:text-orange-600"
        >
          Learn More

          <ArrowRight
            size={18}
            className="ml-2"
          />

        </Link>

      </div>

    ))}

  </div>

</div>

</section>

{/* Technologies We Use starts in Part 3 */} 

      {/* Technologies */}

      <section className="py-28 bg-white">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              Technologies We Use
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
              Modern Technology Stack
              <span className="text-orange-500">
                {" "}For Modern Businesses
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We leverage modern frameworks, cloud platforms and enterprise-grade
              technologies to build secure, scalable and future-ready software
              solutions.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                category: "Frontend",
                tech: [
                  "React",
                  "Next.js",
                  "TypeScript",
                  "Tailwind CSS"
                ]
              },
              {
                category: "Backend",
                tech: [
                  "Node.js",
                  "Express",
                  "Python",
                  "REST APIs"
                ]
              },
              {
                category: "Database",
                tech: [
                  "PostgreSQL",
                  "MongoDB",
                  "MySQL",
                  "Firebase"
                ]
              },
              {
                category: "Cloud & AI",
                tech: [
                  "Vercel",
                  "AWS",
                  "OpenAI",
                  "Docker"
                ]
              }
            ].map((stack) => (

              <div
                key={stack.category}
                className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
              >

                <h3 className="text-2xl font-bold text-gray-900">
                  {stack.category}
                </h3>

                <div className="mt-8 space-y-4">

                  {stack.tech.map((item) => (

                    <div
                      key={item}
                      className="rounded-xl bg-orange-50 px-4 py-3 font-medium text-gray-700"
                    >
                      {item}
                    </div>

                  ))}

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* Industries

      <section className="bg-gray-50 py-28">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
              Industries We Serve
            </span>

            <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
              Software Solutions Across
              <span className="text-orange-500">
                {" "}Multiple Industries
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our software development expertise enables businesses across
              multiple industries to improve productivity, automate workflows
              and accelerate digital transformation.
            </p>

          </div>

          <div className="mt-20 grid gap-6 md:grid-cols-3 xl:grid-cols-4">

            {[
              "Healthcare",
              "Real Estate",
              "Education",
              "Manufacturing",
              "Retail",
              "Finance",
              "Logistics",
              "Hospitality",
              "Travel",
              "Automotive",
              "Professional Services",
              "Startups"
            ].map((industry) => (

              <div
                key={industry}
                className="rounded-2xl border border-gray-200 bg-white p-6 text-center font-semibold text-gray-800 transition hover:border-orange-300 hover:bg-orange-50"
              >
                {industry}
              </div>

            ))}

          </div>

        </div>

      </section> */}

      {/* Development Process Starts In Part 4 */} 

            {/* Development Process */}

            <section className="py-28 bg-white">

<div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      Our Development Process
    </span>

    <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
      How We Turn
      <span className="text-orange-500">
        {" "}Ideas Into Successful Products
      </span>
    </h2>

    <p className="mt-6 text-lg leading-8 text-gray-600">
      Every project follows a structured software development lifecycle
      that ensures quality, scalability and timely delivery.
    </p>

  </div>

  <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-5">

    {[
      {
        step: "01",
        title: "Discovery",
        desc: "Understanding your business goals, users and technical requirements."
      },
      {
        step: "02",
        title: "Planning",
        desc: "Wireframes, architecture, timelines and technology selection."
      },
      {
        step: "03",
        title: "Development",
        desc: "Building secure, scalable and high-performance applications."
      },
      {
        step: "04",
        title: "Testing",
        desc: "Comprehensive QA, performance optimization and security testing."
      },
      {
        step: "05",
        title: "Launch & Support",
        desc: "Deployment, monitoring, updates and continuous improvements."
      }
    ].map((step) => (

      <div
        key={step.step}
        className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
      >

        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-2xl font-bold text-white">
          {step.step}
        </div>

        <h3 className="mt-8 text-2xl font-bold text-gray-900">
          {step.title}
        </h3>

        <p className="mt-5 leading-8 text-gray-600">
          {step.desc}
        </p>

      </div>

    ))}

  </div>

</div>

</section>

{/* Company Values */}

<section className="bg-gray-50 py-28">

<div className="mx-auto max-w-7xl px-6 lg:px-8">

  <div className="mx-auto max-w-3xl text-center">

    <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      Our Values
    </span>

    <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
      Principles That Drive
      <span className="text-orange-500">
        {" "}Everything We Build
      </span>
    </h2>

  </div>

  <div className="mt-20 grid gap-8 lg:grid-cols-2">

    {[
      {
        title: "Innovation",
        desc: "We constantly explore new technologies and modern development practices."
      },
      {
        title: "Quality",
        desc: "Every project is developed with performance, scalability and maintainability in mind."
      },
      {
        title: "Transparency",
        desc: "Clients receive clear communication, milestone updates and complete project visibility."
      },
      {
        title: "Long-Term Partnership",
        desc: "We aim to become your technology partner, not just another software vendor."
      }
    ].map((value) => (

      <div
        key={value.title}
        className="rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg"
      >

        <h3 className="text-2xl font-bold text-gray-900">
          {value.title}
        </h3>

        <p className="mt-5 leading-8 text-gray-600">
          {value.desc}
        </p>

      </div>

    ))}

  </div>

</div>

</section>

{/* Frequently Asked Questions */}

<section className="py-28 bg-white">

<div className="mx-auto max-w-5xl px-6 lg:px-8">

  <div className="text-center">

    <span className="rounded-full border border-orange-200 bg-orange-50 px-5 py-2 text-sm font-semibold text-orange-600">
      Frequently Asked Questions
    </span>

    <h2 className="mt-6 text-4xl font-black text-gray-900 lg:text-5xl">
      Common Questions About
      <span className="text-orange-500">
        {" "}CodeVista Solutions
      </span>
    </h2>

  </div>

  <div className="mt-20 space-y-6">

    {[
      {
        q: "What services does CodeVista Solutions provide?",
        a: "We specialize in Website Development, ERP Development, CRM Development, SaaS Development, AI Solutions and Custom Software Development."
      },
      {
        q: "Do you develop custom software?",
        a: "Yes. Every solution is tailored to your business requirements, workflows and future scalability."
      },
      {
        q: "Do you provide support after deployment?",
        a: "Absolutely. We offer maintenance, updates, performance optimization and long-term technical support."
      },
      {
        q: "Can you work with startups as well as enterprises?",
        a: "Yes. We build scalable solutions for startups, SMEs and large enterprises."
      }
    ].map((faq) => (

      <div
        key={faq.q}
        className="rounded-[24px] border border-gray-200 bg-gray-50 p-8"
      >

        <h3 className="text-xl font-bold text-gray-900">
          {faq.q}
        </h3>

        <p className="mt-4 leading-8 text-gray-600">
          {faq.a}
        </p>

      </div>

    ))}

  </div>

</div>

</section>

{/* Final CTA */}

{/* <section className="pb-28">

<div className="mx-auto max-w-6xl px-6 lg:px-8">

  <div className="overflow-hidden rounded-[40px] bg-gradient-to-r from-orange-500 to-orange-600 px-10 py-20 text-center text-white shadow-2xl">

    <h2 className="text-4xl font-black lg:text-5xl">
      Ready To Build Your Next Software Project?
    </h2>

    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-orange-50">
      Let's discuss your idea and build a secure, scalable and
      future-ready solution that helps your business grow.
    </p>

    <div className="mt-10 flex flex-wrap justify-center gap-5">

      <Link
        href="/contact"
        className="rounded-full bg-white px-8 py-4 text-lg font-bold text-orange-600 transition hover:scale-105"
      >
        Get Free Consultation
      </Link>

      <Link
        href="/portfolio"
        className="rounded-full border border-white/40 px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-orange-600"
      >
        View Portfolio
      </Link>

    </div>

  </div>

</div>

</section> */}

</>
);
}