import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <div className="temperature">
          <TemFunction />
        </div>
      </div>
    </>
  );
}

function Header() {
  return <header>Temperature Controller</header>;
}

function TemFunction() {
  const [count, setCount] = useState(20);

  return (
    <div className="tempMain">
      <div className={count > 30 ? "kelvin" : "celcius"}>
        <button
          className={count >= 50 ? "disable" : "increase"}
          onClick={() => (count <= 50 ? setCount((e) => e + 1) : "")}
        >
          +
        </button>
        <span className="temp">
          {count} {count > 30 ? "K" : "C"}
        </span>
        <button
          className={count <= 0 ? "disable" : "decrease"}
          onClick={() => (count > 0 ? setCount((e) => e - 1) : "")}
        >
          -
        </button>
      </div>
    </div>
  );
}

export default App;
