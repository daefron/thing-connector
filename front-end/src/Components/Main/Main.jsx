import "./Main.css";
import { useState, useEffect } from "react";
import { ScaleLoader } from "react-spinners";

import { placeholderMaker } from "./placeholderMaker";
import { apiCall } from "./apiCall";

import { ConnectionList } from "./ConnectionList";

export function Main() {
  const [inputText, setInputText] = useState();
  const [placeholderText, setPlaceholderText] = useState(placeholderMaker());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [connectionData, setConnectionData] = useState();
  useEffect(() => {
    setInputText(false);
    setPlaceholderText(placeholderMaker());
  }, [connectionData]);

  function inputChange(e) {
    setInputText(e.target.value);
  }
  const formSubmit = (e) => {
    e.preventDefault();
    apiCall(
      inputText,
      placeholderText,
      setConnectionData,
      setLoading,
      setError
    );
  };

  return (
    <main>
      {loading ? (
        <div className="loadingDiv">
          <p>connecting things</p>
          <ScaleLoader
            id="loadingSymbol"
            height={16}
            width={2}
            margin={2}
            color="black"
          />
        </div>
      ) : (
        <>
          <div className="inputDiv">
            {error ? (
              <>
                <p className="error">{error}</p>
              </>
            ) : null}{" "}
            <form name="mainInput" className="userInput" onSubmit={formSubmit}>
              <input
                type="text"
                name="userInput"
                onChange={inputChange}
                placeholder={placeholderText}
                value={error && inputText ? inputText : undefined}
                autoFocus
              ></input>
              <button type="submit">| | |</button>
            </form>
            <p>enter any amount of things, separated by commas</p>
          </div>
          {connectionData ? <ConnectionList data={connectionData} /> : null}
        </>
      )}
    </main>
  );
}
