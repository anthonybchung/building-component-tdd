import { fireEvent, render, screen, waitfor } from "@testing-library/react";
import MenuButton from "./MenuButton.component";

describe("button menu", () => {
  it("is a button", () => {
    render(<MenuButton isClose={true} />);
    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  it("contains a hamburger icon when prop is true.", () => {
    render(<MenuButton isClose={true} />);
    const buttonHamburger = screen.getByRole("img", {
      name: /hamburger icon/i,
    });

    const buttonClose = screen.queryByRole("img", { name: /close icon/i });

    expect(buttonHamburger).toBeInTheDocument();
    expect(buttonClose).not.toBeInTheDocument();
  });

  it("contains a close icon when prop is false", () => {
    render(<MenuButton isClose={false} />);
    const buttonHamburger = screen.queryByRole("img", {
      name: /hamburger icon/i,
    });

    const buttonClose = screen.queryByRole("img", {
      name: /close icon/i,
    });

    expect(buttonHamburger).not.toBeInTheDocument();
    expect(buttonClose).toBeInTheDocument();
  });

  it("the button toggle boolean", () => {
    let isClose = true;
    const clickHandle = () => {
      isClose = !isClose;
    };
    render(<MenuButton isClose={isClose} menuButtonHandler={clickHandle} />);
    const openButton = screen.queryByRole("button", {
      name: /hamburger icon/i,
    });

    expect(openButton).toBeInTheDocument();
    fireEvent.click(openButton);
    expect(isClose).toBe(false);

    render(<MenuButton isClose={isClose} menuButtonHandler={clickHandle} />);
    const closeButton = screen.queryByRole("button", {
      name: /close icon/i,
    });

    expect(closeButton).toBeInTheDocument();
  });
});
