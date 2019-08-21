import React from "react";
import Header from "./components/Header/Header";
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

const itemList1 = [
  {
    title: "One",
    link: ""
  },
  {
    title: "Two",
    link: ""
  },
  {
    title: "Three",
    link: ""
  },
  {
    title: "Four",
    link: ""
  },
  {
    title: "Five",
    link: ""
  }
];

const itemList2 = [
  {
    title: "Six",
    link: ""
  },
  {
    title: "Seven",
    link: ""
  },
  {
    title: "Eight",
    link: ""
  }
];

const dropdownLists = [
  {
    title: "Corporate OS",
    id: 1,
    itemList: itemList1
  },
  {
    title: "Showcase",
    id: 2,
    itemList: itemList2
  }
];

function App() {
  return ( // TODO: there must be a better way than this..
    <div className="App d-flex flex-column justify-content-between mt-5 pt-5">
      {/* <div className="header-background" style={{minHeight: '60px'}}/> */}
      <Header dropdownLists={dropdownLists} className="" /> 
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
