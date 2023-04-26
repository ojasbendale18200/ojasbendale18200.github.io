import { Button, useColorMode } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Components/About/About";
import Home from "./Components/Home/Home";
import Skills from "./Components/Skills/Skills";
import Project from "./Components/Project/Project";
import GitHub from "./Components/Github/Github";
import Contact from "./Components/Contact/Contact";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <div
      className="App"
      style={{
        backgroundColor: colorMode === "light" ? "#121212" : "#121212",
      }}
    >
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Project />
      <GitHub />
      <Contact />
    </div>
  );
}

export default App;
