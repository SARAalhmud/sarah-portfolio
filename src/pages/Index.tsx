import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CertificationsSection from "@/components/CertificationsSection";
import TimelineSection from "@/components/TimelineSection";
import VolunteerSection from "@/components/VolunteerSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <TimelineSection />
      <VolunteerSection />
      <ContactSection />
      <footer className="py-10 px-6 text-center body-text text-sm">
        © 2024 سارة أحمد الحمود. جميع الحقوق محفوظة.
      </footer>
    </div>
  );
};

export default Index;
