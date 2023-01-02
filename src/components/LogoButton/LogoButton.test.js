import { fireEvent, render, screen, waitfor } from "@testing-library/react";
import LogoButton from "./LogoButton.component";
import Logo from "./Logo.svg";

describe("Logo button", () => {
  it("contain a button element", () => {
    render(<LogoButton />);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("contain an img", () => {
    render(<LogoButton logo={Logo} />);
  });
});
