"use client";

import { useEffect } from "react";

import Footer from "../Footer";
import Header from "../Header";
import Subscription from "../Subscription/Subscription";

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
      <Subscription />
      <Footer />
    </>
  );
};

export default App;
