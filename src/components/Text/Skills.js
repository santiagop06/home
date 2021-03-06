import React, { Fragment } from "react";
import ProgressBar from "./ProgressBar";

export default function Skills({ light }) {
  const list = [
    {
      skill: "React.Js",
      w: "70%",
    },
    {
      skill: "C#",
      w: "45%",
    },
    {
      skill: "Javascript",
      w: "60%",
    },
    {
      skill: "SQL",
      w: "75%",
    },

    {
      skill: "Node.Js",
      w: "60%",
    },
    {
      skill: "Redux",
      w: "45%",
    },
    {
      skill: "Git",
      w: "85%",
    },
    {
      skill: "Linux",
      w: "80%",
    },
  ];

  return (
    <div
      className={
        light
          ? "blue ma3 ml4 ba b--dotted bw2"
          : "gold ma3 ml4 ba b--dotted bw2"
      }
    >
      <div className="ma3" id="skill">
        <p className={light ? "f3 fw6 code purple" : "f3 fw6 code"}>
          Habilidades
        </p>
        <div className="flex flex-wrap code">
          {list.map((i) => Bar(i.w, i.skill, light))}
        </div>
      </div>
    </div>
  );
}

function Bar(w, text, light) {
  return (
    <Fragment className="mt2">
      <div
        className={light ? "w-50 purple fw6 mt3" : "w-50 light-yellow fw4 mt3"}
      >
        {text}
      </div>
      <div className="w-50 mt3">
        <ProgressBar w={w} ligh={light} />
      </div>
    </Fragment>
  );
}
