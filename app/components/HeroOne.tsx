'use client';

export default function HeroOne() {
  return (
          <div className="bg-gray-50">
        {/* <section className="relative py-16 sm:py-20 lg:pb-40"> */}
<section className="relative py-bottom-16 sm:py-bottom-20 lg:py-bottom-28 ">

          <div className="absolute bottom-0 right-0 overflow-hidden">
            <img
              className="w-full h-auto origin-bottom-right transform scale-150 lg:w-auto lg:mx-auto lg:object-cover lg:scale-75"
              src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/background-pattern.png"
              alt=""
            />
          </div>

          <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2">
              
              {/* LEFT CONTENT */}
              <div className="text-center lg:text-left xl:pr-20">
                <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl lg:text-6xl font-pj">
                  Turning Ideas into Scalable Digital Solutions
                </h1>

                <p className="mt-4 text-lg text-gray-600 font-inter max-w-xl mx-auto lg:mx-0">
                  We build reliable softwares, web and enterprise applications
                  tailored to help businesses grow and adapt in a digital-first world.
                </p>

                <a
                  href="#contact"
                  className="inline-flex px-8 py-4 mt-8 text-lg font-semibold text-white transition-all duration-200 bg-gray-900 rounded hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                >
                  Get in Touch
                </a>
              </div>

              {/* RIGHT IMAGE */}
              <div>
                <img
                  className="w-full mx-auto"
                  src="https://cdn.rareblocks.xyz/collection/clarity/images/hero/1/illustration.png"
                  alt="CodeVista Solutions Illustration"
                />
              </div>

            </div>
          </div>
        </section>
      </div>
  );
}
