import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ToggleBtns from "./components/ToggleBtns/ToggleBtns";

function App() {
  const [toggleStatus, setToggleStatus] = useState("All");

  return (
    <>
      <Navbar></Navbar>
      <Counter></Counter>
      <ToggleBtns
        toggleStatus={toggleStatus}
        setToggleStatus={setToggleStatus}
      ></ToggleBtns>
      <Footer></Footer>
    </>
  );
}

export default App;
