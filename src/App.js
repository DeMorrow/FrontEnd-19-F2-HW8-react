import React, { useEffect, useState } from "react";
import { createElement } from "react";

function App() {
  let name1 = "Кубанычбек"
  let name2 = "Бека"
  let name3 = "Нурсултан"
  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <input type="text" id="taker" />
      <button onClick={() =>{
        let taker = document.getElementById("taker")
        let rec = document.getElementById("rec")
        if (taker.value === name1) {
          rec.innerHTML = name1
        } if (taker.value === name2) {
          rec.innerHTML = name2
        } if (taker.value === name3) {
          rec.innerHTML = name3
        }
      }}>Add Name</button>
      <p id="rec"></p>
    </div>
  );
}

export default App;
