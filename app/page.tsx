import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { CinematicHero } from "@/components/sections/CinematicHero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Partners } from "@/components/sections/Partners";
import { WhyUs } from "@/components/sections/WhyUs";
import { Services } from "@/components/sections/Services";
import { SmartHome } from "@/components/sections/SmartHome";
import { Fotovoltaika } from "@/components/sections/Fotovoltaika";
import { Process } from "@/components/sections/Process";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { Testimonials } from "@/components/sections/Testimonials";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Contact } from "@/components/sections/Contact";
import { JsonLd, faqJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd()} />
      <Header />
      <main id="main">
        <CinematicHero />
        <TrustBar />
        <WhyUs />
        <Services />
        <SmartHome />
        <Fotovoltaika />
        <Process />
        <About />
        <Projects />
        <Partners />
        <Testimonials />
        <Faq />
        <FinalCta />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
