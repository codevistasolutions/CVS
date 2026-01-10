'use client';

import { useState } from 'react';

export default function Navbar() {
  const [expanded, setExpanded] = useState(false);

  const closeMenu = () => {
    setExpanded(false);
  };

  return (
    <>
      <div className="bg-gray-50">
        {/* Header */}
        <header className="relative z-10">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between py-0">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a
                  href="#"
                  className="flex items-center rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <img
                    className="w-auto h-20"
                    src="/logo.svg"
                    alt="Logo"
                  />
                </a>
              </div>

              {/* Mobile Burger */}
              <div className="flex md:hidden">
                <button
                  type="button"
                  className="text-gray-900"
                  onClick={() => setExpanded(!expanded)}
                  aria-expanded={expanded}
                >
                  {!expanded ? (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>

              {/* Desktop Menu */}
              <div className="hidden md:flex md:items-center md:justify-center md:space-x-10 md:absolute md:inset-y-0 md:left-1/2 md:-translate-x-1/2 lg:space-x-16">
                <a href="#" className="text-base font-medium text-gray-900 hover:text-opacity-50">
                  Home
                </a>
                <a href="#services" className="text-base font-medium text-gray-900 hover:text-opacity-50">
                  Services                </a>
                <a
                  href="#testimonials"
                  className="text-base font-medium text-gray-900 hover:text-opacity-50"
                >
                  Testimonials
                </a>
              </div>

              {/* Desktop CTA */}
              <div className="hidden md:flex">
                <a
                  href="#email"
                  className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-gray-900 rounded hover:bg-gray-700"
                >
                  Contact Us
                </a>
              </div>
            </div>

            {/* Mobile Menu */}
            {expanded && (
              <nav>
                <div className="px-1 py-6">
                  <div className="grid gap-y-6">
                    <a
                      href="#"
                      onClick={closeMenu}
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded hover:bg-gray-100"
                    >
                      Home
                    </a>

                    <a
                      href="#about"
                      onClick={closeMenu}
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded hover:bg-gray-100"
                    >
                      About Us
                    </a>

                    <a
                      href="#testimonials"
                      onClick={closeMenu}
                      className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 rounded hover:bg-gray-100"
                    >
                      Testimonials
                    </a>

                    <a
                      href="#email"
                      onClick={closeMenu}
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold text-white bg-gray-900 rounded hover:bg-gray-700"
                    >
                      Contact Us
                    </a>
                  </div>
                </div>
              </nav>
            )}
          </div>
        </header>
        {/* END Header */}
      </div>
    </>
  );
}


