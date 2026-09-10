import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import { products } from "@/lib/content";

export function Products({ networkControl = false }: { networkControl?: boolean }) {
  const displayedProducts = networkControl
    ? [products[4], products[3], products[0], products[1], products[2]]
    : products;

  return (
    <section id="products" className="section products-section">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">{networkControl ? "OUR PRODUCTS" : "OUR SOLUTIONS"}</p>
            <h2>{networkControl ? "Every payment channel. One platform." : "Everything you need to accept, process and grow."}</h2>
          </div>
          <div>
            <p>{networkControl ? "Flexible solutions for banks, service providers, merchants and agents—all connected through the YARQINPAY network." : "A complete payment technology stack, designed for Afghanistan. Flexible, secure and built to scale with you."}</p>
            <a className="text-link" href="#technology">View the platform <ArrowRight aria-hidden="true" size={15} weight="bold" /></a>
          </div>
        </div>

        <div className="product-grid">
          {displayedProducts.map((product, index) => (
            <article id={product.id} className="product-card" key={product.id}>
              <div className="product-media">
                <Image src={product.image} alt={`${product.title} by YARQINPAY`} fill sizes="(max-width: 680px) 82vw, (max-width: 1100px) 42vw, 20vw" />
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <div className="product-card-body">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <a className="text-link" href="#partner">Learn more <ArrowRight aria-hidden="true" size={14} weight="bold" /></a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
