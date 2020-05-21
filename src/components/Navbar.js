import React from "react";

export default function Navigation() {
  return (
    <nav
      className="courier f6 f3-l "
      style={{ display: "flex", justifyContent: "flex-start" }}
    >
      <a href="#" className="link dim  gold ml4 mt3 ">
        Inicio
      </a>
      <a href="#" className="link dim  gold ml4 mt3">
        Proyectos
      </a>
      <a href="#" className="link dim gold ml4 mt3">
        Resumen
      </a>
      <a href="#" className="link dim gold ml4 mt3 mr2 ">
        Habilidades
      </a>
    </nav>
  );
}
