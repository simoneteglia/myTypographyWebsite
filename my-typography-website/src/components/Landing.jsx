import React, { useEffect, useState, useRef } from "react";
import global from "../resources/global.json";
import Scrollbar from "smooth-scrollbar";
import "../index.css";
import "../App.css";
const archivoFont = "'Archivo', sans-serif";

const Landing = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [clientX, setClientX] = useState(-200);
  const [clientY, setClientY] = useState(-200);
  const [distanceX, setDistanceX] = useState(50);
  const [centerX, setCenterX] = useState(50);
  const [centerY, setCenterY] = useState(50);

  useEffect(() => {
    document.addEventListener("resize", (e) => {
      setWindowSize(e.innerWidth);
    });
    document.addEventListener("mousemove", (e) => {
      setClientX(e.clientX);
      setClientY(e.clientY);
      const { x, y } = e;
      let distanceX =
        (Math.abs(x - window.innerWidth / 2) / (window.innerWidth / 2)) * 100;
      setDistanceX(distanceX);

      let centerX = (x / window.innerWidth) * 100;
      setCenterX(100 - centerX);

      let centerY = (y / window.innerHeight) * 100;
      setCenterY(100 - centerY);
    });
    Scrollbar.init(document.querySelector("#text-container"), {
      damping: 0.06,
    });
  }, []);

  return (
    <>
      <div
        style={{
          position: "fixed",
          top: clientY - 100,
          left: clientX - 100,
          zIndex: 1000,
          pointerEvents: "none",
        }}
      >
        <svg viewBox="0 0 100 100" width="200" height="200">
          <defs>
            <path
              id="circle"
              d="
                M 50, 50
                m -37, 0
                a 37,37 0 1,1 74,0
                a 37,37 0 1,1 -74,0"
            />
          </defs>
          <text fontSize="15">
            <textPath xlinkHref="#circle">SCROLL DOWN - SCROLL DOWN -</textPath>
          </text>
        </svg>
      </div>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "#000",
          transition: "all 0.5s ease",
          overflow: "auto",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            height: "20vh",
            width: "100%",
            top: 0,
            display: "flex",
            alignItems: "center",
            backgroundColor: "mediumslateblue",
            transition: "all 0.5s ease",
          }}
        >
          <h1
            style={{
              fontSize: windowSize > global.SYSTEM.MOBILE_WIDTH ? "8vw" : "7vh",
              color:
                windowSize > global.SYSTEM.MOBILE_WIDTH
                  ? "transparent"
                  : "#fff",
              fontFamily: archivoFont,
              WebkitTextStroke:
                windowSize > global.SYSTEM.MOBILE_WIDTH ? "2px #fff" : "",
            }}
          >
            SIMONE TEGLIA :)
          </h1>
        </div>
        <div
          id="text-container"
          style={{
            //borderBottom: "2px solid #fff",
            marginBottom: "-100px",
            height: "80vh",
            overflow: "scroll",
          }}
        >
          <h1
            style={{
              fontSize:
                windowSize > global.SYSTEM.MOBILE_WIDTH ? "12vw" : "8vw",
              fontFamily: archivoFont,
              marginTop: "0px",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",

              background: `radial-gradient(ellipse at ${centerX * 0.8}% ${
                centerY * 0.8
              }%, #e66465 ${
                distanceX * 0.2
              }%, transparent 100%), radial-gradient(farthest-corner at 40px 40px,
          #f35 0%, #43e 100%)`,
            }}
          >
            I'M A JUNIOR FRONT END DEVELOPER AND AN ENGINEERING IN COMPUTER
            SCIENCE STUDENT
          </h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
