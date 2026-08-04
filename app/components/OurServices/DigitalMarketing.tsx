"use client";

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Target,
  Megaphone,
  Users,
  LineChart,
  ShieldCheck,
  Rocket,
  Instagram,
  MousePointerClick,
  Mail,
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
    icon: Search,
    title: "Search Engine Optimization",
    description:
      "Improve organic search rankings, website visibility, and qualified traffic with advanced SEO strategies.",
  },
  {
    icon: MousePointerClick,
    title: "Google Ads Management",
    description:
      "Generate high quality leads using optimized Google Ads campaigns focused on measurable return on investment.",
  },
  {
    icon: Instagram,
    title: "Social Media Marketing",
    description:
      "Build brand awareness, engage audiences, and increase conversions across leading social media platforms.",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Run data driven advertising campaigns that maximize conversions and marketing performance.",
  },
  {
    icon: Globe,
    title: "Local SEO",
    description:
      "Increase local visibility through Google Business Profile optimization and location focused SEO strategies.",
  },
  {
    icon: Mail,
    title: "Content And Email Marketing",
    description:
      "Build customer relationships using valuable content, email campaigns, and personalized communication.",
  },
];

const benefits = [
  {
    icon: TrendingUp,
    title: "Business Growth",
    description:
      "Increase qualified leads, website traffic, and customer acquisition through proven marketing strategies.",
  },
  {
    icon: BarChart3,
    title: "Data Driven Decisions",
    description:
      "Track campaign performance with detailed analytics and continuous optimization.",
  },
  {
    icon: Rocket,
    title: "Higher Return On Investment",
    description:
      "Optimize every campaign to improve conversions while reducing unnecessary advertising costs.",
  },
  {
    icon: Users,
    title: "Audience Targeting",
    description:
      "Reach the right customers through intelligent audience research and campaign optimization.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Marketing Partner",
    description:
      "Transparent reporting, measurable performance, and long term marketing support.",
  },
  {
    icon: Megaphone,
    title: "Brand Visibility",
    description:
      "Strengthen online presence through consistent digital marketing across multiple channels.",
  },
];

export default function DigitalMarketing() {
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
                Digital Marketing Company
              </span>

              <h1 className="mt-8 text-5xl font-bold tracking-tight text-gray-900 md:text-6xl">
                Digital Marketing
                <span className="block text-orange-500">
                  That Delivers Real Business Growth
                </span>
              </h1>

              <p className="mt-8 text-lg leading-8 text-gray-600">
                CodeVista Solutions provides digital marketing services that
                help businesses improve online visibility, generate qualified
                leads, increase website traffic, strengthen brand awareness,
                and achieve sustainable growth through search engine
                optimization, Google Ads, social media marketing, local SEO,
                and performance marketing.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">

                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-xl bg-orange-500 px-7 py-4 font-semibold text-white transition hover:bg-orange-600"
                >
                  Grow My Business

                  <ArrowRight className="ml-2 h-5 w-5" />

                </Link>

                <Link
                  href="/portfolio"
                  className="inline-flex items-center rounded-xl border border-gray-300 px-7 py-4 font-semibold text-gray-700 transition hover:border-orange-500 hover:text-orange-500"
                >
                  View Success Stories
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
                    Marketing Analytics
                  </h3>

                  <p className="text-sm text-gray-500">
                    Live Campaign Dashboard
                  </p>

                </div>

                <div className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-600">
                  Active Campaigns
                </div>

              </div>

              <div className="mt-8 grid grid-cols-2 gap-5">

                {[
                  ["Organic Traffic", "+285%"],
                  ["Qualified Leads", "1240"],
                  ["Conversion Rate", "8.6%"],
                  ["Return On Investment", "5.4X"],
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
                    ["SEO Growth", "96%"],
                    ["Lead Quality", "94%"],
                    ["Customer Engagement", "98%"],
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
              ["500+", "Marketing Campaigns"],
              ["98%", "Client Satisfaction"],
              ["350%", "Average Traffic Growth"],
              ["24/7", "Campaign Support"],
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
              Digital Marketing Services
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Complete Digital Marketing Services For Every Business
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              CodeVista Solutions provides complete digital marketing services
              including search engine optimization, local SEO, Google Ads,
              Meta Ads, social media marketing, content marketing, email
              marketing, online reputation management, conversion rate
              optimization, and lead generation strategies that help businesses
              increase visibility, attract qualified customers, and achieve
              measurable business growth.
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
              Trusted Digital Marketing Agency Focused On Results
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We combine search engine optimization, paid advertising,
              performance marketing, content strategy, social media management,
              analytics, and conversion optimization to help businesses improve
              online visibility, generate qualified leads, increase sales, and
              build long term brand authority.
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

            <TrendingUp className="mx-auto h-14 w-14" />

            <h3 className="mt-6 text-3xl font-bold">
              Grow Faster With Strategic Digital Marketing
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-lg text-orange-100">
              From search engine optimization and Google Ads to social media
              marketing, local SEO, lead generation, content marketing, and
              performance marketing, CodeVista Solutions delivers measurable
              digital marketing strategies that increase traffic, generate
              qualified leads, and accelerate business growth.
            </p>

          </div>

        </div>

      </section>
            {/* Marketing Process */}

      <section className="relative overflow-hidden bg-gray-50 py-24">

        <div className="absolute inset-0 -z-10">
          <div className="absolute left-0 top-0 h-80 w-80 rounded-full bg-orange-100 blur-3xl opacity-40" />
          <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-orange-50 blur-3xl opacity-50" />
        </div>

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Our Digital Marketing Process
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Data Driven Marketing That Delivers Measurable Results
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Every digital marketing campaign follows a structured process
              focused on increasing website traffic, generating qualified
              leads, improving conversion rates, and maximizing return on
              investment.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {[
              [
                "01",
                "Business Analysis",
                "Understand your business goals, competitors, audience, and current online presence."
              ],
              [
                "02",
                "Marketing Strategy",
                "Develop a customized digital marketing strategy based on business objectives and market opportunities."
              ],
              [
                "03",
                "Campaign Launch",
                "Launch SEO, Google Ads, Meta Ads, and social media marketing campaigns across the right channels."
              ],
              [
                "04",
                "Content Optimization",
                "Create optimized landing pages, marketing content, and creative assets that improve engagement."
              ],
              [
                "05",
                "Performance Tracking",
                "Monitor rankings, traffic, conversions, advertising performance, and customer behavior."
              ],
              [
                "06",
                "Continuous Growth",
                "Optimize campaigns using real time data to improve lead generation and long term business growth."
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

      {/* Marketing Channels */}

      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">

            <span className="rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-600">
              Marketing Channels
            </span>

            <h2 className="mt-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Complete Digital Marketing Solutions
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our digital marketing experts combine multiple online marketing
              channels to maximize visibility, generate qualified leads, and
              increase customer acquisition.
            </p>

          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                icon: Search,
                title: "Search Marketing",
                items: [
                  "Technical SEO",
                  "Local SEO",
                  "Keyword Research",
                  "On Page SEO",
                ],
              },
              {
                icon: MousePointerClick,
                title: "Paid Advertising",
                items: [
                  "Google Ads",
                  "Meta Ads",
                  "Remarketing",
                  "Lead Campaigns",
                ],
              },
              {
                icon: Instagram,
                title: "Social Media",
                items: [
                  "Content Creation",
                  "Social Media Management",
                  "Brand Building",
                  "Audience Growth",
                ],
              },
              {
                icon: LineChart,
                title: "Analytics",
                items: [
                  "Performance Reports",
                  "Conversion Tracking",
                  "Campaign Analysis",
                  "Growth Insights",
                ],
              },
            ].map((channel) => {
              const Icon = channel.icon;

              return (

                <div
                  key={channel.title}
                  className="rounded-3xl border border-gray-200 bg-gray-50 p-8 transition hover:-translate-y-2 hover:shadow-xl"
                >

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-orange-100">

                    <Icon className="h-8 w-8 text-orange-500" />

                  </div>

                  <h3 className="mt-6 text-2xl font-bold text-gray-900">
                    {channel.title}
                  </h3>

                  <div className="mt-6 space-y-3">

                    {channel.items.map((item) => (

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
              Digital Marketing Solutions For Every Industry
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Our digital marketing services help businesses improve search
              visibility, generate qualified leads, increase online sales, and
              build a strong digital presence across competitive industries.
            </p>

          </div>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            {[
              [HeartPulse, "Healthcare"],
              [ShoppingBag, "Electronic Commerce"],
              [Landmark, "Finance"],
              [GraduationCap, "Education"],
              [Building2, "Real Estate"],
              [Truck, "Logistics"],
              [Factory, "Manufacturing"],
              [Globe, "Professional Services"],
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
              Digital Marketing FAQ
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
              Learn more about digital marketing services, search engine
              optimization, Google Ads management, social media marketing,
              local SEO, lead generation, and performance marketing from
              CodeVista Solutions.
            </p>

          </div>

          <div className="mt-16 space-y-6">

            {[
              {
                question: "What digital marketing services do you provide?",
                answer:
                  "We provide search engine optimization, local SEO, Google Ads management, Meta Ads management, social media marketing, content marketing, email marketing, conversion optimization, online reputation management, and lead generation services.",
              },
              {
                question: "How long does search engine optimization take?",
                answer:
                  "Search engine optimization is a long term strategy. Most businesses begin seeing measurable improvements within three to six months depending on competition, website quality, and industry.",
              },
              {
                question: "Do you manage Google Ads campaigns?",
                answer:
                  "Yes. We create, manage, optimize, and monitor Google Ads campaigns focused on generating qualified leads, increasing conversions, and improving return on investment.",
              },
              {
                question: "Can digital marketing help local businesses?",
                answer:
                  "Yes. Local SEO, Google Business Profile optimization, paid advertising, and social media marketing help local businesses improve visibility and attract nearby customers.",
              },
              {
                question: "Do you provide monthly marketing reports?",
                answer:
                  "Yes. Every client receives detailed reports covering website traffic, keyword rankings, advertising performance, lead generation, conversions, and campaign improvements.",
              },
              {
                question: "Which industries do you work with?",
                answer:
                  "We provide digital marketing services for healthcare, education, ecommerce, finance, manufacturing, logistics, real estate, professional services, and many other industries.",
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
              Grow Your Business With Confidence
            </span>

            <h2 className="mt-8 text-4xl font-bold text-white md:text-6xl">
              Digital Marketing Strategies That Generate More Leads And Sales
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-orange-100">
              CodeVista Solutions helps businesses grow through search engine
              optimization, Google Ads management, Meta Ads, local SEO, social
              media marketing, performance marketing, content marketing,
              conversion optimization, and lead generation strategies that
              increase online visibility, attract qualified customers, and
              deliver measurable business growth.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-white px-8 py-4 font-semibold text-orange-600 transition hover:bg-gray-100"
              >
                Get Free Marketing Consultation

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