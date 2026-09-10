import { Audiences } from "@/components/audiences";
import { Ecosystem } from "@/components/ecosystem";
import { Hero } from "@/components/hero";
import { Impact } from "@/components/impact";
import { PartnerCta } from "@/components/partner-cta";
import { Products } from "@/components/products";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <Products />
        <Ecosystem />
        <Impact />
        <Audiences />
        <PartnerCta />
      </main>
      <SiteFooter />
    </>
  );
}
