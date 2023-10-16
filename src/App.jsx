import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="container text-white">
          <h1>Design system</h1>
          <h2 className="h2">
              <span>01</span>
            </h2>
          <section id="colors">
            <div className="color1">
           
            <div>
              <div
                className="bg-dark text-white"
                style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
              > #0B0D17</div>
             
            </div>
            <p><span className="text-accent">RGB</span> 11, 13, 23</p>
            <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
            </div>


            <div className="color2">
            <div>
              <div
                className="bg-accent text-dark"
                style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
              >#0B0D17</div>
              
            </div>
            <p><span className="text-accent">RGB</span> 11, 13, 23</p>
            <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
            </div>


            <div className="color3">
            <div>
              <div
                className="bg-white text-dark"
                style={{ padding: "3rem 1rem 1rem", border: "1px solid white" }}
              >#FFFFFF</div>
              
            </div>
            <p><span className="text-accent">RGB</span> 11, 13, 23</p>
            <p><span className="text-accent">HSL</span> 230°, 35%, 7%</p>
            </div>
           
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
