import HeaderSection from "@/app/components/HeaderSection";
import HeroSection from "@/app/components/HeroSection";
import ProfessionalPracticeSection from "@/app/components/ProfessionalPracticeSection";
import InstitutionalEngagementSection from "@/app/components/InstitutionalEngagementSection";
import ChambersSection from "@/app/components/ChambersSection";
import InternshipsSection from "@/app/components/InternshipSection";
import WritingAddressesSection from "@/app/components/WritingAddressesSection";
import ContactFooterSection from "@/app/components/ContactFooterSection";


export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
        <HeaderSection />
        <HeroSection />
        <InstitutionalEngagementSection/>
        <ChambersSection/>
        <InternshipsSection/>
        <WritingAddressesSection/>
        <ContactFooterSection/>
      {/* Add more sections here */}
    </main>
  );
}