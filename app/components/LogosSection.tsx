'use client';

import Marquee from 'react-fast-marquee';

export default function LogosSection() {
  return (
    <div className="bg-gray-100">
      <div className="container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8">
        <h5 className="mb-6 text-center text-2xl font-bold md:mb-10">
          Our <span className="text-customOrange-500">Top-Rated</span> Products
        </h5>

        <Marquee
          speed={50}
          pauseOnHover
          gradient={false}
        >
          <div className="flex items-center gap-16 mx-8 text-gray-400">
            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-2xl font-semibold">
                <img
                  src="/IMG_0079 2.svg"
                  alt="Logo"
                  className="h-12 w-auto max-h-full object-contain"
                />
                <span>Sahil Property</span>
              </div>

            </div>

            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">

              <div className="inline-flex items-center space-x-2 text-2xl font-semibold"><img
                src="/IMG_0080 4.svg"
                alt="Logo"
                className="h-12 w-auto max-h-full object-contain"
              />
                <span>The Mohan Tigers</span>
              </div>
            </div>

            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-2xl font-semibold">
                <img
                  src="/IMG_0081.svg"
                  alt="Logo"
                  className="h-12 w-auto max-h-full object-contain"
                />
                <span>Life Lens Shots</span>
              </div>
            </div>

            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-2xl font-semibold">
                <img
                  src="/IMG_0082.svg"
                  alt="Logo"
                  className="h-12 w-auto max-h-full object-contain"
                />
                <span>Jiya Creations</span>
              </div>
            </div>

             <div className="flex items-center gap-16 mx-8 text-gray-400">
            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-2xl font-semibold">
                <img
                  src="/krio.svg"
                  alt="Logo"
                  className="h-12 w-auto max-h-full object-contain"
                />
                <span>Krio Gym</span>
              </div>

            </div>



          </div>
        </Marquee>
      </div>
    </div>
  );
}
