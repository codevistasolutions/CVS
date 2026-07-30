import Navbar from "@/app/components/Navbar";
import About from "@/app/components/About";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "About CodeVista Solutions | Web, ERP, CRM & SaaS Development Company",
  description:
    "Learn about CodeVista Solutions (OPC) Pvt. Ltd., a software development company in Mohali specializing in Web Development, ERP, CRM, SaaS, AI Solutions, Mobile Apps and Custom Software Development for businesses across India.",

  keywords: [
    "Software Development Company",
    "Web Development Company",
    "ERP Development",
    "CRM Development",
    "SaaS Development",
    "AI Solutions",
    "Mobile App Development",
    "Mohali",
    "Chandigarh",
    "Punjab",
    "India",
    "CodeVista Solutions",
  ],
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}