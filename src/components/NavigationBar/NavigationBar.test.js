import { render, screen } from "@testing-library/react";
import NavigationBar from "./NavigationBar.component";
import "./NavigationBar.styles.css";
import Blog from "../../pages/Blog/Blog.page";
import AboutMe from "../../pages/AboutMe/AboutMe.page";
import Login from "../../pages/Login/Login.page";
import Home from "../../pages/Home/Home.page";

describe("should contain the following elements", () => {
  const brand = {
    path: "/home",
    element: Home,
    text: "Home",
  };

  const navMenu = [
    {
      path: "/blog",
      element: Blog,
      text: "Blog",
    },
    {
      path: "/about-me",
      element: AboutMe,
      text: "About Me",
    },
    {
      path: "/login",
      element: Login,
      text: "Login",
    },
  ];

  beforeEach(() => {
    render(<NavigationBar brand={brand} navItems={navMenu} />);
  });

  it("should container a header", () => {
    const header = screen.getByRole("banner");
    expect(header).toBeInTheDocument();
  });

  it("should conatain a nav", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  it("should contain a button with a brand name", () => {
    const brandButton = screen.getByRole("button", { name: /abchung/i });
    expect(brandButton).toBeInTheDocument();
  });

  it("should contain ul", () => {
    const ul = screen.getByRole("list");
    expect(ul).toBeInTheDocument();
  });

  it("should contain button menu-button", () => {
    const menuButton = screen.queryByRole("button", {
      name: /menu/i,
      hidden: true,
    });
    expect(menuButton).toBeInTheDocument();
  });

  it("should contain a list of <li>'s", () => {
    const liLists = screen.queryAllByRole("listitem");
    expect(liLists).toHaveLength(navMenu.length);
  });
});
