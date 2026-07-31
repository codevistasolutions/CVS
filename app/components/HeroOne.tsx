"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroOne() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-grid opacity-[0.04]" />

      <div className="absolute left-1/2 top-0 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-brand-orange/20 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-24 lg:px-8">

        <div className="grid w-full items-center gap-20 lg:grid-cols-2">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            {/* Badge */}

            <div className="inline-flex items-center rounded-full border border-brand-orange/30 bg-brand-orange/10 px-5 py-2">

              <span className="mr-2 h-2 w-2 rounded-full bg-brand-orange animate-pulse" />

              <span className="text-sm font-medium text-brand-orange">

                Website Development • SaaS • AI

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-black leading-tight text-white lg:text-7xl">

              Website Development

              <br />

              <span className="bg-brand-gradient bg-clip-text text-transparent">

                SaaS & AI Solutions

              </span>

              <br />

              That Drive Growth

            </h1>

            {/* Paragraph */}

            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">

              CodeVista Solutions builds modern websites,
              custom software, SaaS platforms,
              CRM systems, ERP software and AI-powered
              business solutions that help startups and
              growing businesses scale confidently.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">

              <Link
                href="/contact"
                className="rounded-2xl bg-brand-gradient px-8 py-4 text-lg font-semibold text-white shadow-glow transition duration-300 hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>

              <Link
                href="/services"
                className="rounded-2xl border border-white/10 px-8 py-4 text-lg font-semibold text-white transition hover:border-brand-orange hover:bg-white/5"
              >
                Explore Services
              </Link>

            </div>

            {/* Stats */}

            <div className="mt-16 grid grid-cols-3 gap-8">

              <div>

                <h2 className="text-4xl font-black text-brand-orange">

                  10+

                </h2>

                <p className="mt-2 text-brand-muted">

                  Projects Delivered

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-brand-orange">

                  2+

                </h2>

                <p className="mt-2 text-brand-muted">

                  Years Experience

                </p>

              </div>

              <div>

                <h2 className="text-4xl font-black text-brand-orange">

                  24/7

                </h2>

                <p className="mt-2 text-brand-muted">

                  Support

                </p>

              </div>

            </div>

          </motion.div>

          {/* RIGHT */}

          <div className="relative hidden lg:flex items-center justify-center">

            {/* Right side coming in Part 1B */}

          </div>

        </div>

      </div>

    </section>
  );
}