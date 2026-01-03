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

            {/* Logo 1 */}
            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-2xl font-semibold">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17z" />
                </svg>
                <span>boxspot</span>
              </div>
            </div>

            {/* Logo 2 */}
            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-2xl font-light">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M12.316 3.051l-4 12" />
                </svg>
                <span>TechCode</span>
              </div>
            </div>

            {/* Logo 3 */}
            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-2xl font-bold">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6.672 1.911l4 10" />
                </svg>
                <span>cCLICK</span>
              </div>
            </div>

            {/* Logo 4 */}
            <div className="px-2 h-28 inline-flex items-center justify-center grayscale opacity-75 transition hover:grayscale-0 hover:opacity-100">
              <div className="inline-flex items-center space-x-2 text-3xl">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 18.9l-4.95-4.95" />
                </svg>
                <span>freshloc</span>
              </div>
            </div>

          </div>
        </Marquee>
      </div>
    </div>
  );
}