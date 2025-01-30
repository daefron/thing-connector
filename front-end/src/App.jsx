import "./App.css";
import { useState } from "react";
import nounList from "/nouns";

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

  function randomNoun() {
    const randomNumber = Math.round(Math.random() * (nounList.length - 1));
    return nounList[randomNumber];
  }

  function placeholderMaker() {
    const randomNumber = Math.round(Math.random() * 2) + 2;
    let placeholderString = "";
    for (let i = randomNumber; i > 0; i--) {
      if (i > 1) {
        placeholderString += randomNoun() + ", ";
      } else {
        placeholderString += randomNoun();
      }
    }
    return placeholderString;
  }
  placeholderMaker();
  return (
    <>
      <header>
        <h1>Word Connector</h1>
        <h3>Find the connections between words</h3>
      </header>
      <main>
        <div className="userInput">
          <input
            type="text"
            onChange={inputChange}
            placeholder={placeholderMaker()}
          ></input>
          <button onClick={apiCall}>Submit</button>
        </div>
        <p>Enter any amount of words, seperated by commas</p>
      </main>
      <footer>
        <p>Made by Thomas Evans</p>
      </footer>
    </>
  );
}

export default App;
