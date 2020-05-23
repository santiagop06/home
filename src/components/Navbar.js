import React from "react";

export default function Navigation({ light }) {
  return (
    <header>
      <nav
        className="courier f7  f4-l"
        style={{ display: "flex", justifyContent: "flex-start" }}
      >
        <a
          href="#home"
          className={
            light ? "link dim  purple ml4 mt3 " : "link dim  gold ml4 mt3 "
          }
        >
          Inicio
        </a>
        <a
          href="#project"
          className={
            light ? "link dim  purple ml4 mt3 " : "link dim  gold ml4 mt3 "
          }
        >
          Proyectos
        </a>
        <a
          href="#resume"
          className={
            light ? "link dim  purple ml4 mt3 " : "link dim  gold ml4 mt3 "
          }
        >
          Resumen
        </a>
        <a
          href="#skill"
          className={
            light ? "link dim  purple ml4 mt3 " : "link dim  gold ml4 mt3 "
          }
        >
          Habilidades
        </a>
      </nav>
    </header>
  );
}
