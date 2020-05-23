import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Container from "./components/Container";
import "./App.css";
import Home from "./components/Text/Home";
import Projects from "./components/Text/Projects";
import Resume from "./components/Text/Resume";
import Skills from "./components/Text/Skills";
import Particles from "react-particles-js";

function App() {
  const [light, setLight] = useState(false);

  document.body.style.background = light ? "#F4F4F4" : "#000000";

  return (
    <div className={"App"}>
      <div>
        <Particles
          className="particles"
          params={
            light
              ? {
                  fpslimit: 60,
                  particles: {
                    number: {
                      value: 40,
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                    },
                    color: {
                      value: "#001B44",
                    },
                    line_linked: {
                      color: "#001B44",
                    },
                  },
                }
              : {
                  fpslimit: 60,
                  particles: {
                    number: {
                      value: 40,
                      density: {
                        enable: true,
                        value_area: 800,
                      },
                    },
                    color: {
                      value: "#fff",
                    },
                    line_linked: {
                      color: "#fff",
                    },
                  },
                }
          }
        />
        <Navbar light={light} />
        <Home light={light} setLight={setLight} />
        <Projects light={light} />
        <Resume light={light} />
        <Skills light={light} />
      </div>
    </div>
  );
}

export default App;
