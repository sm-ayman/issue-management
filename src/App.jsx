import { Suspense } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Issues from "./components/Issues/Issues";
import Navbar from "./components/Navbar/Navbar";
import Spinner from "./components/Spinner/Spinner";

const fetchIssues = async () => {
  const result = await fetch("/issues.json");
  return result.json();
};

function App() {
  const fetchPromise = fetchIssues();
  return (
    <>
      <Navbar></Navbar>
      <Suspense fallback={<Spinner></Spinner>}>
        <Issues fetchPromise={fetchPromise}></Issues>
      </Suspense>
      <Footer></Footer>
    </>
  );
}

export default App;
