import { useState } from "react";
import "./App.css";
import Nav from "./pages/Nav";
import Routing from "./utils/Routing";
import Footer from "./pages/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="font-[Poppins] tracking-tight">
      <Nav />
      <Routing />
      <Footer />
      </div>
    </>
  );
}

export default App;
