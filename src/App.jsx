import { useState } from "react";

function App() {
  const [color, setColor] = useState("#000");

  return (
    <>
      <div
        className="w-full h-screen duration-1000"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex justify-center flex-wrap bottom-10 px-5 py-2 inset-x-0">
          <div
            className="flex flex-wrap gap-4 justify-center rounded-3xl px-3 py-2 shadow-lg border-2 border-solid border-black"
            style={{ backgroundColor: "transparent" }}
          >
            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "red" }}
              onClick={() => {
                setColor("red");
              }}
            >
              Red
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full px-3 drop-shadow-xl text-white"
              style={{ backgroundColor: "green" }}
              onClick={() => {
                setColor("green");
              }}
            >
              Green
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "blue" }}
              onClick={() => {
                setColor("blue");
              }}
            >
              Blue
            </button>

            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "olive" }}
              onClick={() => {
                setColor("olive");
              }}
            >
              Olive
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "yellow" }}
              onClick={() => {
                setColor("yellow");
              }}
            >
              Yellow
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "pink" }}
              onClick={() => {
                setColor("pink");
              }}
            >
              Pink
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "grey" }}
              onClick={() => {
                setColor("grey");
              }}
            >
              Grey
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "#a06ab4" }}
              onClick={() => {
                setColor("#a06ab4");
              }}
            >
              Lavender
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-black"
              style={{ backgroundColor: "white" }}
              onClick={() => {
                setColor("white");
              }}
            >
              White
            </button>
            <button
              className="outline-none px-4 py-1 rounded-full px-3 shadow-xl text-white"
              style={{ backgroundColor: "black" }}
              onClick={() => {
                setColor("black");
              }}
            >
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
