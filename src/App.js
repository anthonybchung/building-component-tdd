import "./App.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home/Home.page";
import Blog from "./pages/Blog/Blog.page";
import AboutMe from "./pages/AboutMe/AboutMe.page";
import Login from "./pages/Login/Login.page";
import Layout from "./pages/Layout/Layout.component";

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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout brand={brand} navMenu={navMenu} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
