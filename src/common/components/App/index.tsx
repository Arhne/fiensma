"use client";

import { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import Subscription from "../Subscription/Subscription";
import styles from "./App.module.scss";

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
      <main className={styles.Main}>{children}</main>
      {/* <Subscription /> */}
      <Footer />
    </>
  );
};

export default App;
