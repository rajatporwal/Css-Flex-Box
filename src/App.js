import React from "react";
import "./sass/main.scss";
import Header from "./component/Header";
import Sidebar from "./component/SideBar";
import Gallery from "./component/Gallery";
import Overview from "./component/Overview";
import Details from "./component/Details";
import CTA from "./component/CTA";

export default function App() {
  return (
    <div className="container">
      <Header />
      <div className="content">
        <Sidebar />
        <main className="hotel-view">
          <Gallery />
          <Overview />
          <Details />
          <CTA />
        </main>
      </div>
    </div>
  );
}
