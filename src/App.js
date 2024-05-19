import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [money, setMoney] = useState(0);
  const [increment, setIncrement] = useState(1);
  const [upgradeAmount, setUpgradeAmount] = useState(10);

  const addOne = () => {
    setCounter(counter + increment);
    setMoney(money + increment);
  };
  const onHandle = () => {
    setIncrement(increment + 1);
    setMoney(money - upgradeAmount);
    setUpgradeAmount(upgradeAmount + 20);
    console.log(money);
  };
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "10%",
        }}
      >
        <button
          style={{ backgroundColor: "pink", width: "100px", height: "100px" }}
          onClick={addOne}
        >
          {counter}
        </button>
        <button
          style={{ backgroundColor: "grey", width: "100px", height: "100px" }}
        >
          {money} x Shiba
        </button>

        {money >= upgradeAmount && (
          <div>
            <button onClick={onHandle}>Upgrade? {money}</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
