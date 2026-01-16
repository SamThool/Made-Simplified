import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProductsSection } from "@/components/ProductsSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SimplifyX - IT Services & Software Solutions | HMS, CRM & ERP</title>
        <meta 
          name="description" 
          content="SimplifyX delivers enterprise-grade IT services and software solutions including Hospital Management Systems, CRM, and ERP. Transform your business operations today." 
        />
        <meta name="keywords" content="healthcare software, HMS, CRM, ERP, hospital management, medical software" />
      </Helmet>
      <main className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ProductsSection />
        <TeamSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
