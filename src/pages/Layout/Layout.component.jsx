import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar.component";

const Layout = ({ brand, navMenu }) => {
  return (
    <>
      <NavigationBar brand={brand} navItems={navMenu} />
      <Outlet />
    </>
  );
};

export default Layout;
