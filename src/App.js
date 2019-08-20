import React from "react";
import Header from "./components/Header/Header"
import CardContainer from "./components/CardContainer/CardContainer";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <CardContainer />
      <Footer />
    </div>
  );
}

export default App;
