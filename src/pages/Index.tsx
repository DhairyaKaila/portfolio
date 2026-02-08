import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import MyStory from "@/components/MyStory";
import Services from "@/components/Services";
import WhyRevamp from "@/components/WhyRevamp";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <FeaturedProjects />
        <MyStory />
        <Services />
        <WhyRevamp />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
