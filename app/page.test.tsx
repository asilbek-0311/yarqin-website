import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Home from "./page";

describe("YARQINPAY home page", () => {
  it("explains the platform and exposes the primary journeys", () => {
    const { container } = render(<Home />);

    expect(screen.getByRole("heading", { level: 1, name: "One payment platform. Multiple channels." })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Explore solutions/i })).toHaveAttribute("href", "#products");
    expect(screen.getAllByRole("button", { name: /Become a partner/i }).length).toBeGreaterThan(0);

    for (const id of ["products", "technology", "for-business", "security", "about", "partner"]) {
      expect(container.querySelector(`#${id}`)).toBeInTheDocument();
    }
  });

  it("renders the product and ecosystem content from the approved brief", () => {
    render(<Home />);

    for (const product of ["POS Terminals", "ATM Solutions", "Self-Service Terminals", "QR Payments", "Agent Network"]) {
      expect(screen.getAllByText(product).length).toBeGreaterThan(0);
    }
    for (const label of ["Customers", "Channels", "YARQINPAY", "Connected partners"]) {
      expect(screen.getAllByText(label).length).toBeGreaterThan(0);
    }
    expect(screen.getByText(/Illustrative prototype metrics/i)).toBeInTheDocument();
  });
});
