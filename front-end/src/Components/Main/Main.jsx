import "./Main.css";
import { useState } from "react";

import { ScaleLoader } from "react-spinners";

import { placeholderMaker } from "./placeholderMaker";
import { apiCall } from "./apiCall";

export function Main() {
  const [inputText, setInputText] = useState();
  const [placeholderText, setPlaceholderText] = useState(placeholderMaker());
  const [loading, setLoading] = useState(false);
  const [connectionData, setConnectionData] = useState();

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
          <form
            className="userInput"
            onSubmit={() =>
              apiCall(inputText, placeholderText, setConnectionData, setLoading)
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
          <p>enter any amount of things, seperated by commas</p>
        </>
      )}
    </main>
  );
}
