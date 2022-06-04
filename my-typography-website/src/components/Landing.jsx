import React, { useEffect, useState } from "react";
import global from "../resources/global.json";
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
  }, []);

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: clientY - 100,
          left: clientX - 100,
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
          <text font-size="15">
            <textPath xlinkHref="#circle">SCROLL DOWN - SCROLL DOWN -</textPath>
          </text>
        </svg>
      </div>
      <div
        style={{
          width: "100%",
          backgroundColor: "#000",
          transition: "all 0.5s ease",
          overflowX: "hidden",
        }}
      >
        {/* HEADER */}
        <div
          style={{
            height: "20vh",
            width: "100%",
            position: "fixed",
            top: 0,
            display: "flex",
            alignItems: "center",
            backgroundColor: "#000",
            zIndex: 999,
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
          style={{
            borderBottom: "2px solid #fff",
            marginTop: "20vh",
            maxWidth: "100%",
          }}
        >
          <h1
            style={{
              fontSize:
                windowSize > global.SYSTEM.MOBILE_WIDTH ? "14vw" : "4em",
              fontFamily: archivoFont,
              color: "#fff",
            }}
          >
            <span className="gradient-text">☹︎</span> I'M A JUNIOR FRONT END
            DEVELOPER AND A COMPUTER SCIENCE STUDENT{" "}
            <span className="gradient-text">☺︎</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Landing;
