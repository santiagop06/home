import React from "react";
import "./css/ProgressBar.css";

const Filler = ({ w, light }) => {
  return (
    <div
      className={light ? "filler bg-black" : "filler bg-green"}
      style={{ width: `${w}` }}
    ></div>
  );
};

export default function ProgressBar({ w, light }) {
  return (
    <div
      className={
        light
          ? "progress-bar ba b--dark-green bw1"
          : "progress-bar ba b--green bw1"
      }
    >
      <Filler w={w} light={light} />
    </div>
  );
}
