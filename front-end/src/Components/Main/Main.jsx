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
  const [connectionData, setConnectionData] = useState();
  useEffect(() => {
    setPlaceholderText(placeholderMaker());
  }, [connectionData]);

  function inputChange(e) {
    setInputText(e.target.value);
  }

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
            <form
              className="userInput"
              onSubmit={() =>
                apiCall(
                  inputText,
                  placeholderText,
                  setConnectionData,
                  setLoading
                )
              }
            >
              <input
                type="text"
                onChange={inputChange}
                placeholder={placeholderText}
                autoFocus
              ></input>
              <button>| | |</button>
            </form>
            <p>enter any amount of things, separated by commas</p>
          </div>
          {connectionData ? <ConnectionList data={connectionData} /> : null}
        </>
      )}
    </main>
  );
}
