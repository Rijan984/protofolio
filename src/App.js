import logo from "./logo.svg";
import "./App.css";
import Home from "./components/templates/Home/Home";
import Nav from "./components/templates/Nav/Nav";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Work from "./components/templates/Works/Work";
import About from "./components/templates/About/About";
import Service from "./components/templates/Services/Service";
function App() {
  return (
    <Router>
      <>
        <Nav />
      </>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/projects" element={<Work />} />
        <Route exact path="/services" element={<Service />} />
        <Route exact path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
