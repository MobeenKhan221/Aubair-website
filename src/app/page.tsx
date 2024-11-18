import Header from "@/components/header";
import HomeSection from "@/components/Home-section";
import OurServices from "@/components/OurServices";
import SkillsTechnology from "@/components/SkillsTechnology";
import Projects from "@/components/Projects";
import GetForm from "@/components/GetPopup";
import Footer from "@/components/Footer";
export default function Home() {
  return (
    <div>
      <Header />
      <section id="home">
        <HomeSection />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="skills">
        <SkillsTechnology />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="contact">
        <GetForm />
      </section>
      <Footer />
    </div>
  );
}
