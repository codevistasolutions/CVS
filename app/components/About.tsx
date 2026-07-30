'use client';

const stats = [
  {
    number: "2+",
    title: "Years Experience",
  },
  {
    number: "10+",
    title: "Projects Delivered",
  },
  {
    number: "100%",
    title: "Custom Solutions",
  },
  {
    number: "24/7",
    title: "Support",
  },
];

export default function About() {
  return (
    <div className="bg-gray-50">

      {/* HERO */}
      <section className="relative py-10 sm:py-20 lg:py-20">

        <div className="absolute bottom-0 right-0 overflow-hidden">
          <img
            className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
            src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
            alt=""
          />
        </div>

        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div className="grid items-center grid-cols-1 gap-y-12 lg:grid-cols-2">

            {/* LEFT */}
            <div className="text-center lg:text-left">

              <span className="inline-flex px-4 py-2 text-sm font-semibold tracking-wide text-blue-700 uppercase bg-blue-100 rounded-full">
                About CodeVista
              </span>

              <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl">

                Building Software That
                <br />
                Powers Modern Businesses

              </h1>

              <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-600 lg:mx-0">

                CodeVista Solutions (OPC) Pvt. Ltd. delivers
                custom websites, ERP systems, CRM software,
                SaaS platforms and AI-powered business
                solutions that help organizations scale
                efficiently.

              </p>

              <div className="flex flex-col justify-center gap-4 mt-10 sm:flex-row lg:justify-start">

                <a
                  href="/email"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white transition-all duration-200 bg-gray-900 rounded hover:bg-gray-700"
                >
                  Start Your Project
                </a>

                <a
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-gray-900 transition-all duration-200 bg-white border border-gray-300 rounded hover:bg-gray-100"
                >
                  Explore Services
                </a>

              </div>

            </div>

            {/* RIGHT */}

            <div>

              <img
                className="w-full mx-auto"
                src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                alt="About CodeVista"
              />

            </div>

          </div>

        </div>

      </section>

      {/* STATS */}

      <section className="pb-20">

        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">

          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="p-8 text-center transition duration-300 bg-white border border-gray-200 rounded-xl hover:shadow-lg"
              >

                <h2 className="text-4xl font-bold text-gray-900">

                  {item.number}

                </h2>

                <p className="mt-3 text-gray-600">

                  {item.title}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
  );
}