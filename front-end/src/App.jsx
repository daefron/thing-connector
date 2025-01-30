import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState();

  function inputChange(e) {
    setInputText(e.target.value);
  }

  function inputSubmit() {
    apiCall(inputText);
  }

  async function apiCall(input) {
    fetch("http://localhost:3000/data", {
      method: "POST",
      body: "userInput=" + input,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
  }

  return (
    <>
      <p>Input text: </p>
      <input type="text" onChange={inputChange}></input>
      <button onClick={inputSubmit}>Submit</button>
    </>
  );
}

export default App;
