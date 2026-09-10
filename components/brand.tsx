import { ArrowsSplit } from "@phosphor-icons/react/dist/ssr";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className="brand" href="#top" aria-label="YARQINPAY home">
      <ArrowsSplit aria-hidden="true" size={30} weight="bold" className="brand-mark" />
      <span className={inverse ? "text-white" : "text-graphite"}>YARQINPAY</span>
    </a>
  );
}

