"use client";

import { useEffect } from "react";

import Footer from "../Footer";
import Header from "../Header";

interface IApp {
  children: React.ReactNode;
}
const App = ({ children }: IApp) => {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default App;
