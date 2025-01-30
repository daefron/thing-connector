import "./App.css";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState();
  const [loading, setLoading] = useState(false);
  const [connectionData, setConnectionData] = useState();

  function inputChange(e) {
    setInputText(e.target.value);
  }

  async function apiCall() {
    setLoading(true);
    fetch("http://localhost:3000/data", {
      method: "POST",
      body: "userInput=" + inputText,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setLoading(false);
        setConnectionData(data.result);
      });
  }
  console.log(loading);
  console.log(connectionData);
  return (
    <>
      <p>Input text: </p>
      <input type="text" onChange={inputChange}></input>
      <button onClick={apiCall}>Submit</button>
    </>
  );
}

export default App;
