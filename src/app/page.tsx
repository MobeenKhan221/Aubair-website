import Header from "@/components/header";
import HomeSection from "@/components/Home-section";
import OurServices from "@/components/OurServices";
import SkillsTechnology from "@/components/SkillsTechnology";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <div>
      <Header />
      <HomeSection />
      <OurServices />
      <SkillsTechnology />
      <Projects />
    </div>
  );
}
