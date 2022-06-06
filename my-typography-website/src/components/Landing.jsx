import React, { useEffect, useState } from "react";
import global from "../resources/global.json";
import Scrollbar from "smooth-scrollbar";
import "../index.css";
import "../App.css";
const archivoFont = "'Archivo', sans-serif";

const Landing = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [clientX, setClientX] = useState(-200);
  const [clientY, setClientY] = useState(-200);

  useEffect(() => {
    document.addEventListener("resize", (e) => {
      setWindowSize(e.innerWidth);
    });
    document.addEventListener("mousemove", (e) => {
      setClientX(e.clientX);
      setClientY(e.clientY);
    });
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
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
            backgroundColor: "#000",
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
                windowSize > global.SYSTEM.MOBILE_WIDTH ? "12vw" : "4em",
              fontFamily: archivoFont,
              color: "#fff",
              marginTop: "-10px",
            }}
          >
            I'M A JUNIOR FRONT END DEVELOPER AND AN ENGINEERING IN COMPUTER
            SCIENCE STUDENT
            <span className="gradient-text">☺︎</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
