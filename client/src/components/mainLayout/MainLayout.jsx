import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <section className="main">{children}</section>

      <Footer />
    </>
  );
};
