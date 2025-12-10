import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ValueProps from "@/components/ValueProps";
import HowItWorks from "@/components/HowItWorks";
import BrowseStores from "@/components/BrowseStores";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background page-fade">
      <Header />
      <main>
        <Hero />
        <ValueProps />
        <HowItWorks />
        <BrowseStores />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
