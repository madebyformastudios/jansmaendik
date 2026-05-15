import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { WhyUs } from "@/components/sections/why-us";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <main className="flex-1 overflow-x-clip">
      <Hero />
      <Services />
      <WhyUs />
      <ContactForm />
    </main>
  );
}
