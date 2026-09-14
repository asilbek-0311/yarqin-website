import Link from "next/link";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className="brand" href="/#top" aria-label="YARQINPAY home">
      <span className={inverse ? "text-white" : "text-graphite"}>
        YARQINPAY
      </span>
    </Link>
  );
}
