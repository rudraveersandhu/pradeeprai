import HeaderSection from "@/app/components/HeaderSection";
import HeroSection from "@/app/components/HeroSection";
import ProfessionalPracticeSection from "@/app/components/ProfessionalPracticeSection";
import InstitutionalEngagementSection from "@/app/components/InstitutionalEngagementSection";
import OfficeSection from "@/app/components/OfficeSection";
import InternshipsSection from "@/app/components/MentorshipSection";
import GallerySection from "@/app/components/GallerySection";
import ContactFooterSection from "@/app/components/ContactFooterSection";



export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
        <HeaderSection />
        <HeroSection />
        <ProfessionalPracticeSection/>
        <InstitutionalEngagementSection/>
        <OfficeSection/>
        <InternshipsSection/>
        <GallerySection/>
        <ContactFooterSection/>
      {/* Add more sections here */}
    </main>
  );
}