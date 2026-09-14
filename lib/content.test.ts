import { describe, expect, it } from "vitest";
import { audiences, ecosystemColumns, languages, products } from "./content";

describe("site content", () => {
  it("provides the five required payment products with unique anchors", () => {
    expect(products.map((product) => product.title)).toEqual([
      "POS Terminals",
      "ATM Solutions",
      "Self-Service Terminals",
      "QR Payments",
      "Agent Network",
    ]);
    expect(new Set(products.map((product) => product.id)).size).toBe(products.length);
    expect(products.every((product) => product.href === `#${product.id}`)).toBe(true);
  });

  it("models the complete ecosystem and core audiences", () => {
    expect(ecosystemColumns.map((column) => column.title)).toEqual([
      "Customers",
      "Channels",
      "YARQINPAY",
      "Connected partners",
    ]);
    expect(audiences.map((audience) => audience.title)).toEqual([
      "For Banks",
      "For Merchants",
      "For Payment Agents",
      "For Service Providers",
    ]);
  });

  it("does not present unsupported languages as translated", () => {
    expect(languages).toMatchObject([
      { code: "EN", label: "English", available: true },
      { code: "DR", label: "Dari", available: false },
      { code: "PS", label: "Pashto", available: false },
    ]);
  });
});
