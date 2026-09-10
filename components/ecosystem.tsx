import { ArrowRight, Bank, DeviceMobile, Storefront, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { ecosystemColumns } from "@/lib/content";

const columnIcons = [UsersThree, DeviceMobile, Storefront, Bank];

export function Ecosystem() {
  return (
    <section id="technology" className="section ecosystem-section">
      <div className="shell">
        <div className="section-heading split-heading">
          <div>
            <p className="eyebrow">THE YARQINPAY ECOSYSTEM</p>
            <h2>Connecting every part of the payment journey.</h2>
          </div>
          <div>
            <p>YARQINPAY brings together customers, channels, financial institutions and service providers on one reliable platform.</p>
            <a className="text-link" href="#security">Explore our technology <ArrowRight aria-hidden="true" size={15} weight="bold" /></a>
          </div>
        </div>

        <div className="ecosystem-flow">
          {ecosystemColumns.map((column, index) => {
            const Icon = columnIcons[index];
            return (
              <div className={`ecosystem-step ecosystem-step-${index + 1}`} key={column.title}>
                <div className="ecosystem-card">
                  <Icon aria-hidden="true" size={27} weight={index === 2 ? "fill" : "regular"} />
                  <h3>{column.title}</h3>
                  <ul>{column.items.map((item) => <li key={item}>{item}</li>)}</ul>
                </div>
                {index < ecosystemColumns.length - 1 ? <ArrowRight className="flow-arrow" aria-hidden="true" size={22} weight="bold" /> : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
