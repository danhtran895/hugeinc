import LandingPage from "components/LandingPage";
import React from "react";

import Header from "./Header";

const Layout = () => (
  <>
    <header>
      <Header />
    </header>
    <main>
      <LandingPage />
    </main>
  </>
);

export default Layout;
