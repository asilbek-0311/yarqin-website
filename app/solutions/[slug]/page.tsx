import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check } from "@phosphor-icons/react/dist/ssr";
import { solutions } from "@/lib/solutions";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { PartnerCta } from "@/components/partner-cta";

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  return {
    title: solution?.name ?? "Solution not found",
    description: solution?.description,
  };
}
export default async function SolutionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);
  if (!solution) notFound();
  return (
    <>
      <SiteHeader />
      <main id="top">
        <section className="detail-hero shell">
          <Link className="back-link" href="/#solutions">
            <ArrowLeft size={17} aria-hidden="true" /> All solutions
          </Link>
          <div className="detail-hero-grid">
            <div>
              <p className="eyebrow">{solution.name}</p>
              <h1>{solution.headline}</h1>
              <p className="section-intro">{solution.description}</p>
              <button className="button button-primary" data-partner-trigger>
                Let’s talk {solution.short}
                <ArrowUpRight size={20} aria-hidden="true" />
              </button>
            </div>
            <div
              className={`detail-art ${solution.slug !== "pos-terminals" ? "equipment-visual" : ""}`}
            >
              <Image
                src={solution.image}
                alt={solution.name}
                fill
                sizes="(max-width: 760px) 90vw, 45vw"
                preload
              />
            </div>
          </div>
        </section>
        <section className="detail-benefits shell">
          <p className="eyebrow">{solution.audience}</p>
          <h2>{solution.detail}</h2>
          <div>
            {solution.features.map((feature) => (
              <p key={feature}>
                <Check size={22} aria-hidden="true" />
                {feature}
              </p>
            ))}
          </div>
        </section>
        <section className="detail-steps shell">
          <p className="eyebrow">FROM POSSIBILITY TO PAYMENT</p>
          <h2>
            Your next steps,
            <br />
            <span className="muted">made simple.</span>
          </h2>
          <div>
            {solution.steps.map((step, index) => (
              <article key={step}>
                <span>0{index + 1}</span>
                <h3>{step}</h3>
                <p>{solution.explanations[index]}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="related-solutions shell">
          <h2>More ways to connect.</h2>
          {solutions
            .filter((item) => item.slug !== slug)
            .map((item) => (
              <Link key={item.slug} href={`/solutions/${item.slug}#top`}>
                <span>{item.name}</span>
                <ArrowUpRight size={22} aria-hidden="true" />
              </Link>
            ))}
        </section>
        <PartnerCta />
      </main>
      <SiteFooter />
    </>
  );
}
