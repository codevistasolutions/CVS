import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main className="bg-white">
        <div className="max-w-5xl mx-auto px-6 py-16">

          

          <h1 className="text-5xl font-bold text-gray-900">
            Privacy Policy
          </h1>

          <p className="mt-4 text-gray-600">
            Effective Date: August 15, 2025
          </p>

          <div className="mt-12 space-y-10 text-gray-700 leading-8">

            <section>
              <h2 className="text-2xl font-semibold text-black mb-4">
                1. Introduction
              </h2>

              <p>
                CodeVista Solutions (OPC) Pvt. Ltd. (reffered to as CodeVista, we, our or us) respects your privacy and is committed to
                protecting your personal information. This Privacy Policy
                explains how we collect, use, store and protect information
                when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                2. Information We Collect
              </h2>

              <ul className="list-disc ml-6 space-y-2">
                <li>Name</li>
                <li>Email Address</li>
                <li>Phone Number</li>
                <li>Company Information</li>
                <li>Project Requirements</li>
                <li>IP Address</li>
                <li>Browser Information</li>
                <li>Device Information</li>
                <li>Cookies and Analytics Data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                3. How We Use Your Information
              </h2>

              <ul className="list-disc ml-6 space-y-2">
                <li>Provide requested services.</li>
                <li>Respond to enquiries.</li>
                <li>Improve website performance.</li>
                <li>Enhance user experience.</li>
                <li>Send service updates.</li>
                <li>Prevent fraud and abuse.</li>
                <li>Meet legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                4. Cookies
              </h2>

              <p>
                We use cookies and similar technologies to improve website
                functionality, analyse traffic and enhance your browsing
                experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                5. Third-Party Services
              </h2>

              <p>
                Our website may integrate trusted third-party services such as
                Google Analytics, Google Maps, Meta, payment gateways and
                hosting providers. These services have their own privacy
                policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                6. Data Security
              </h2>

              <p>
                We implement industry-standard security measures to protect
                personal information from unauthorized access, disclosure,
                alteration and destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                7. Data Retention
              </h2>

              <p>
                We retain personal information only for as long as necessary
                for business, legal and regulatory purposes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                8. Your Rights
              </h2>

              <ul className="list-disc ml-6 space-y-2">
                <li>Access your information.</li>
                <li>Request corrections.</li>
                <li>Request deletion.</li>
                <li>Withdraw consent where applicable.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                9. Childrens Privacy
              </h2>

              <p>
                Our services are not intended for individuals under the age of
                13. We do not knowingly collect information from children.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                10. Changes to this Policy
              </h2>

              <p>
                We may update this Privacy Policy periodically. Changes become
                effective immediately upon publication on this page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                11. Contact Us
              </h2>

              <div className="rounded-xl border p-6 bg-gray-50">

                <p className="font-semibold">
                  CodeVista Solutions (OPC) Pvt. Ltd.
                </p>

                <p>Email: info@codevistasolutions.com</p>

                <p>Website: https://codevistasolutions.com</p>

              </div>
            </section>

          </div>

        </div>
      </main>

      <Footer />
    </>
  );
}