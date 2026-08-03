"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Our Services", href: "/services" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/email" },
];

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (mobileMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenu]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-gray-200/70 bg-white/90 backdrop-blur-xl shadow-sm"
            : "bg-white/80 backdrop-blur-lg"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileMenu(false)}
          >
            <Image
              src="/logo.svg"
              alt="CodeVista Solutions"
              width={180}
              height={52}
              priority
              className="h-10 w-auto lg:h-12 transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="group relative font-medium text-gray-700 transition-colors duration-300 hover:text-orange-500"
              >
                {item.name}

                <span className="absolute -bottom-2 left-0 h-0.5 w-0 rounded-full bg-orange-500 transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <Link
              href="/email"
              className="rounded-full bg-orange-500 px-7 py-3 font-semibold text-white shadow-lg shadow-orange-500/25 transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
            >
              Book Free Consultation
            </Link>
          </div> 
                    {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:bg-orange-50 md:hidden"
            aria-label="Toggle Menu"
          >
            <svg
              className="h-6 w-6 text-gray-800"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.2}
              viewBox="0 0 24 24"
            >
              {mobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6L18 18M18 6L6 18"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16M4 12h16M4 17h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          mobileMenu
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          onClick={() => setMobileMenu(false)}
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        />

        {/* Menu Card */}
        <div
          className={`absolute left-4 right-4 top-24 overflow-hidden rounded-3xl bg-white shadow-2xl transition-all duration-300 ${
            mobileMenu
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-6 scale-95 opacity-0"
          }`}
        >
          <div className="p-6">
            <div className="mb-5 border-b border-gray-100 pb-4">
              <Image
                src="/logo.svg"
                alt="CodeVista Solutions"
                width={170}
                height={50}
                className="h-10 w-auto"
              />
            </div>

            <div className="flex flex-col gap-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenu(false)}
                  className="rounded-2xl px-5 py-4 text-lg font-medium text-gray-700 transition-all duration-300 hover:bg-orange-50 hover:text-orange-500"
                >
                  {item.name}
                </Link>
              ))}

              <Link
                href="/email"
                onClick={() => setMobileMenu(false)}
                className="mt-4 rounded-full bg-orange-500 px-6 py-4 text-center font-semibold text-white transition-all duration-300 hover:bg-orange-600"
              >
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div> 
          </>
  );
}