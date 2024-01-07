
import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import  Todolist from "./Todolist";
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Todolist" element={<Todolist />} />
      </Routes>
    </>
  );
}

export default App;


