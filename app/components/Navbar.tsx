"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl shadow-md"
          : "bg-white"
      }`}
    >
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Main Navigation"
      >
        {/* Logo */}

        <Link href="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="CodeVista Solutions"
            className="h-14 w-auto transition duration-300 hover:scale-105"
          />
        </Link>

        {/* Desktop Menu */}

        <div className="hidden md:flex items-center gap-10">

          <Link
            href="/"
            className="relative font-medium text-gray-700 transition hover:text-orange-500 group"
          >
            Home
            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/services"
            className="relative font-medium text-gray-700 transition hover:text-orange-500 group"
          >
            Our Services
            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/about"
            className="relative font-medium text-gray-700 transition hover:text-orange-500 group"
          >
            About Us
            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

          <Link
            href="/email"
            className="relative font-medium text-gray-700 transition hover:text-orange-500 group"
          >
            Contact Us
            <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
          </Link>

        </div>

        {/* CTA */}

        <div className="hidden md:block">

          <Link
            href="/email"
            className="rounded-full bg-orange-500 px-7 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-orange-600"
          >
            Book Free Consultation
          </Link>

        </div>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenu(!mobileMenu)}
          className="md:hidden"
        >
          <svg
            className="h-7 w-7"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            {mobileMenu ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}

<div
  className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
    mobileMenu
      ? "pointer-events-auto opacity-100"
      : "pointer-events-none opacity-0"
  }`}
>
  {/* Overlay */}
  <div
    onClick={() => setMobileMenu(false)}
    className="absolute inset-0 bg-black/40 backdrop-blur-sm"
  />

  {/* Menu */}
  <div
    className={`absolute left-0 right-0 top-20 mx-4 rounded-3xl bg-white shadow-2xl transition-all duration-300 ${
      mobileMenu
        ? "translate-y-0 opacity-100"
        : "-translate-y-8 opacity-0"
    }`}
  >
    <div className="flex flex-col p-6">

      {[
        ["Home", "/"],
        ["Our Services", "/services"],
        ["About Us", "/about"],
        ["Contact Us", "/email"],
      ].map(([title, href]) => (
        <Link
          key={title}
          href={href}
          onClick={() => setMobileMenu(false)}
          className="rounded-xl px-4 py-4 text-lg font-medium text-gray-700 transition hover:bg-orange-50 hover:text-orange-500"
        >
          {title}
        </Link>
      ))}

      <Link
        href="/email"
        onClick={() => setMobileMenu(false)}
        className="mt-5 rounded-full bg-orange-500 py-4 text-center font-semibold text-white transition hover:bg-orange-600"
      >
        Book Free Consultation
      </Link>

    </div>
  </div>
</div>