import { HowItWorks } from "@/components/how-it-works";
import { NetworkHero } from "@/components/network-hero";
import { NetworkTrust } from "@/components/network-trust";
import { OnePlatform } from "@/components/one-platform";
import { PartnerCta } from "@/components/partner-cta";
import { Products } from "@/components/products";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <div className="network-page">
        <main>
          <NetworkHero />
          <OnePlatform />
          <HowItWorks />
          <Products networkControl />
          <NetworkTrust />
          <PartnerCta networkControl />
        </main>
        <SiteFooter />
      </div>
    </>
  );
}
