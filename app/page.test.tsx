import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("YARQINPAY home page", () => {
  it("explains the platform and exposes the primary journeys", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: "Payment infrastructure for modern Afghanistan." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /See the platform/i })).toHaveAttribute("href", "#one-platform");
    expect(screen.getAllByRole("button", { name: /Become a partner/i }).length).toBeGreaterThan(0);

    for (const id of ["one-platform", "how-it-works", "products", "technology", "for-business", "security", "about", "partner"]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
  });

  it("renders the product and payment-lifecycle content from the approved brief", () => {
    render(<Home />);

    for (const product of ["POS Terminals", "ATM Solutions", "Self-Service Terminals", "QR Payments", "Agent Network"]) {
      expect(screen.getAllByText(product).length).toBeGreaterThan(0);
    }
    for (const label of ["Channels", "API & Security", "Transaction Processing", "Routing & Integration", "Banks / APS / Billers", "Ledger / Reconciliation"]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
  });
});
