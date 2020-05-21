import React from "react";

export default function Navigation() {
  return (
    <header>
      <nav
        className="courier f7  f4-l"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a href="#home" className="link dim  gold ml4 mt3 ">
          Inicio
        </a>
        <a href="#project" className="link dim  gold ml2 ml3-l mt3">
          Proyectos
        </a>
        <a href="#resume" className="link dim gold ml2 ml3-l mt3">
          Resumen
        </a>
        <a href="#skill" className="link dim gold ml2 ml3-l mt3 mr2 ">
          Habilidades
        </a>
      </nav>
    </header>
  );
}
