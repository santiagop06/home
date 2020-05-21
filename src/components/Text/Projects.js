import React from "react";

export default function Projects() {
  return (
    <div id="project">
      <div className="flex  flex-wrap-reverse">
        <div className="  w-100-ns  w-50-l ">
          <div className="ma4 mb1">
            <img src={require("./img/proyectos/faceapp.PNG")} />
          </div>
          <div>
            {socialIcon(
              "https://github.com/santiagop06/FaceApp",
              "https://face-app-smart.herokuapp.com/"
            )}
          </div>
        </div>
        <div className="  pa3 white w-100-ns  w-50-l">
          <h2 className="f4 f3-l b code light-yellow">FaceApp</h2>
          <p className="code tj ">
            FaceApp es una applicacion que usa la API de deteccion de rostros de
            Clarifai en una foto, detecta y sobrepone con CSS un cuadro en la
            ubicacion de la cara.
            <br />
            <br />
            Esta a su vez realiza detalles de validacion de usuarios, cifrado de
            contraseñas y un conteo del numero de veces que el usuario ha usado
            la API. Su FrontEnd esta hecho con React.js y Tacyons. Su BackEnd
            esta hecho en PostgreSQL, Express.js, bcrypt-node.js, y esta alojada
            en Heroku.
          </p>
        </div>
      </div>
      <div className="flex  flex-wrap-reverse mt3">
        <div className=" w-100-ns w-50-l ">
          <div className="ma4 mb1">
            <img src={require("./img/proyectos/robofriends.PNG")} />
          </div>
          <div>
            {socialIcon(
              "https://github.com/santiagop06/robofriends",
              "https://santiagop06.github.io/robofriends/"
            )}
          </div>
        </div>
        <div className="  pa3 w-100-ns w-50-l white">
          <h2 className="f4 f3-l b code light-yellow"> RoboFriends</h2>
          <p className="code tj">
            RoboFriends es una SPA hecha en React.js, con uso de Redux, y una
            API de la cual extraemos nuestros RoboFriends.
          </p>
        </div>
      </div>
      <div className="flex  flex-wrap-reverse  mt3">
        <div className="   w-100-ns  w-50-l ">
          <div className="ma4 mb1">
            <img src={require("./img/proyectos/background.PNG")} />
          </div>
          <div>
            {socialIcon(
              "https://github.com/santiagop06/backgroundchange",
              "https://santiagop06.github.io/backgroundchange"
            )}
          </div>
        </div>
        <div className=" pa3 w-100-ns  w-50-l white code">
          <h2 className="light-yellow f4 f3-l b code">Background Color</h2>
          <p className="tj">
            Background Color es una sencilla aplicacion hecha principalmente a
            traves de CSS, que cambia el background de una pagina web por un
            gradiente entre dos colores dados
          </p>
        </div>
      </div>
    </div>
  );
}

const socialIcon = (github, demo) => (
  <div className="mb2">
    <a
      className="link dim light-green dib br-100 h2 w2 mr3 "
      href={github}
      target="_blank"
    >
      <svg
        data-icon="github"
        viewBox="0 0 32 32"
        style={{ fill: "currentcolor" }}
      >
        <title>github icon</title>
        <path d="M0 18 C0 12 3 10 3 9 C2.5 7 2.5 4 3 3 C6 3 9 5 10 6 C12 5 14 5 16 5 C18 5 20 5 22 6 C23 5 26 3 29 3 C29.5 4 29.5 7 29 9 C29 10 32 12 32 18 C32 25 30 30 16 30 C2 30 0 25 0 18 M3 20 C3 24 4 28 16 28 C28 28 29 24 29 20 C29 16 28 14 16 14 C4 14 3 16 3 20 M8 21 A1.5 2.5 0 0 0 13 21 A1.5 2.5 0 0 0 8 21 M24 21 A1.5 2.5 0 0 0 19 21 A1.5 2.5 0 0 0 24 21 z"></path>
      </svg>
    </a>
    <a
      className="link dim light-green dib br-100 h2 w2 mr3 "
      href={demo}
      title=""
      target="_blank"
    >
      <svg
        data-icon="dribbble"
        viewBox="0 0 32 32"
        style={{ fill: "currentcolor" }}
      >
        <title>dribbble icon</title>
        <path d="M16 0 A16 16 0 0 0 0 16 A16 16 0 0 0 16 32 A16 16 0 0 0 32 16 A16 16 0 0 0 16 0 M5 11.5 A12 12 0 0 1 11 5 A46 46 0 0 1 13.5 9.25 A46 46 0 0 1 5 11.5 M15 4 A12 12 0 0 1 21.5 5.25 A46 46 0 0 1 17 7.75 A50 50 0 0 0 15 4 M4 16 A50 50 0 0 0 15 13 A46 46 0 0 1 16 15.5 A26 26 0 0 0 6 22.5 A12 12 0 0 1 4 16 M18.5 11.5 A50 50 0 0 0 25 8 A12 12 0 0 1 28 13.75 A26 26 0 0 0 19.75 14.5 A50 50 0 0 0 18.5 11.5 M17 19.5 A46 46 0 0 1 18 28 A12 12 0 0 1 8.75 25.5 A22 22 0 0 1 17 19.5 M20.75 18.25 A22 22 0 0 1 28 17.75 A12 12 0 0 1 22 26.5 A50 50 0 0 0 20.75 18.25"></path>
      </svg>
    </a>
  </div>
);
