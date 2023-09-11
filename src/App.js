import React, { useState } from "react";

import Footer from "./components/Footer";

import Home from "./components/Home";
import Packages from "./components/Packages";
import Contact from "./components/Contact";
import About from "./components/About";

import "./App.css";
import "./components/Navigation.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";

export default function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

const Root = () => {
  const [scrollBarColor, setScrollBarColor] = useState(false);
  const changeNavBarColor = () => {
    if (window.scrollY >= 99) {
      setScrollBarColor(true);
    } else {
      setScrollBarColor(false);
    }
  };

  window.addEventListener("scroll", changeNavBarColor);

  return (
    <>
      <header
        className={
          scrollBarColor ? "primary-header primary-header-bg" : "primary-header"
        }
      >
        <div className="wrapper">
          <nav className="primary-header__inner">
            <span>
              <Link className="logo" to="/" rel="noopener noreferrer">
                Nature's Blessings Photography
              </Link>
            </span>
            <ul className="nav-list">
              <li>
                <Link className="link" to="/" rel="noopener noreferrer">
                  Home
                </Link>
              </li>
              <li>
                <Link className="link" to="/packages" rel="noopener noreferrer">
                  Packages
                </Link>
              </li>
              <li>
                <Link className="link" to="/about" rel="noopener noreferrer">
                  About
                </Link>
              </li>
              <li>
                <Link className="link" to="contact" rel="noopener noreferrer">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div>
        <Outlet />
        <Footer />
      </div>
    </>
  );
};
