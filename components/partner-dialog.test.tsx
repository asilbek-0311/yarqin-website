import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PartnerDialog } from "./partner-dialog";

function renderDialog() {
  return render(
    <>
      <button type="button" data-partner-trigger>
        Become a partner
      </button>
      <PartnerDialog />
    </>,
  );
}

describe("PartnerDialog", () => {
  it("opens from any partner trigger and closes accessibly", () => {
    renderDialog();
    fireEvent.click(screen.getByRole("button", { name: "Become a partner" }));
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Close partner inquiry" }));
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("shows inline errors for an invalid inquiry", () => {
    renderDialog();
    fireEvent.click(screen.getByRole("button", { name: "Become a partner" }));
    fireEvent.click(screen.getByRole("button", { name: "Send inquiry" }));

    expect(screen.getByText("Organization is required.")).toBeInTheDocument();
    expect(screen.getByText("Contact name is required.")).toBeInTheDocument();
    expect(screen.getByText("Work email is required.")).toBeInTheDocument();
    expect(screen.getByText("Choose a partner type.")).toBeInTheDocument();
  });

  it("shows a local success state without sending a network request", () => {
    const fetchSpy = vi.spyOn(globalThis, "fetch");
    renderDialog();
    fireEvent.click(screen.getByRole("button", { name: "Become a partner" }));

    fireEvent.change(screen.getByLabelText("Organization"), { target: { value: "Example Bank" } });
    fireEvent.change(screen.getByLabelText("Contact name"), { target: { value: "Amina Rahimi" } });
    fireEvent.change(screen.getByLabelText("Work email"), { target: { value: "amina@example.af" } });
    fireEvent.change(screen.getByLabelText("Partner type"), { target: { value: "Bank" } });
    fireEvent.click(screen.getByRole("button", { name: "Send inquiry" }));

    expect(screen.getByRole("status")).toHaveTextContent("Your inquiry is ready for our partnership team.");
    expect(fetchSpy).not.toHaveBeenCalled();
    fetchSpy.mockRestore();
  });
});
