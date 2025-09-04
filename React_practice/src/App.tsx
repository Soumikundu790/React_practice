import { useState } from "react";
import "./index.css";

function App() 
{
  const [x, setX] = useState(10);

  console.log("Hello World");

  return (
    <div>
      <h3>Parent</h3>
      <Hello x={x} setX={setX} />
    </div>
  );
}

function Hello({ x, setX }: any) {
  const [y, setY] = useState(20);
  console.log("Hello from Hello component");
  return (
    <>
      <h3>Value of x is {x}</h3>
      <h3>Value of y is {y}</h3>
      <button
        onClick={() => {
          setX(x + 1);
        }}
      >
        Increment
      </button>
      <button onClick={() => setY(y + 1)}>Increment</button>
    </>
  );
}

export default App;
