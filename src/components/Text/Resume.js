import React from "react";

export default function Resume() {
  return (
    <div className="mb2">
      <div className=" flex mt3 code w-100 ">
        <div className="  bw2 pa3 w-50">
          <h2 className=" light-green bg-animate hover-light-yellow fw5">
            Educación
          </h2>
        </div>
        <div className=" white bw2 pa3 center code w-50">
          <div className="center">
            <p className="f4 mb1">Ingenieria de Sistemas</p>
            <p className="ma0">Universidad EAN</p>
            <p className="center f5 ma0">(2016-2020)</p>
          </div>
          <div className="center">
            <p className="f4 mb1">Desarrollador de Software</p>
            <p className="ma0">
              Universidad Popular Autónoma del Estado de Puebla{" "}
            </p>
            <p className="center f5 ma0">(2019-2020)</p>
          </div>
        </div>
      </div>
      <div className=" flex mt3 code w-100">
        <div className=" bw2 pa3 w-50">
          <h2 className=" light-green bg-animate hover-light-yellow fw5">
            Trabajo
          </h2>
        </div>
        <div className="white bw2 pa3 center code w-50">
          <p className=" f4 mb1">Olimpia IT</p>
          <p className="center f5 ma0">Desarrolador C#, .NET, SQL</p>
          <p className="center f5 ma0">(2018-2019)</p>
        </div>
      </div>
    </div>
  );
}
