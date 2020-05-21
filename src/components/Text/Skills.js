import React, { Fragment } from "react";
import ProgressBar from "./ProgressBar";

export default function Skills() {
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
    <div className="ma3" id="skill">
      <div className="flex flex-wrap code">
        {list.map((i) => Bar(i.w, i.skill))}
      </div>
    </div>
  );
}

function Bar(w, text) {
  return (
    <Fragment className="mt2">
      <div className="w-50 light-yellow fw4 mt3">{text}</div>
      <div className="w-50 mt3">
        <ProgressBar w={w} />
      </div>
    </Fragment>
  );
}
