import React from "react";
import "./css/SlideButton.css";

export default function SlideButton({ light, setLight }) {
  return (
    <div>
      <label className="switch">
        <input
          type="checkbox"
          value="Dark"
          onChange={(e) => {
            setLight(!light);
          }}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}
