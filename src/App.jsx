import "./App.css";
import Counter from "./components/Counter/Counter";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ToggleBtns from "./components/ToggleBtns/ToggleBtns";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Counter></Counter>
      <ToggleBtns></ToggleBtns>
      <Footer></Footer>
    </>
  );
}

export default App;
