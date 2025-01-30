import { Fragment, useState } from "react";
export function ConnectionList({ data }) {
  return (
    <>
      <h2>{data.input} are best connected by:</h2>
      <div className="results">
        {data.result.map((result) => {
          const [infoExpanded, setInfoExpanded] = useState(false);
          function expandInfo() {
            setInfoExpanded(!infoExpanded);
          }
          return (
            <Fragment key={result.connection + "result"}>
              <div className="result">
                <p className="resultPercentage">{result.percentage}</p>
                <p className="resultConnection">{result.connection}</p>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 -960 960 960"
                  onClick={expandInfo}
                >
                  <path d="M440-280h80v-240h-80zm40-320q17 0 28.5-11.5T520-640t-11.5-28.5T480-680t-28.5 11.5T440-640t11.5 28.5T480-600m0 520q-83 0-156-31.5T197-197t-85.5-127T80-480t31.5-156T197-763t127-85.5T480-880t156 31.5T763-763t85.5 127T880-480t-31.5 156T763-197t-127 85.5T480-80m0-80q134 0 227-93t93-227-93-227-227-93-227 93-93 227 93 227 227 93m0-320" />
                </svg>
              </div>
              {infoExpanded ? (
                <>
                  <p className="explanation">{result.explanation}</p>
                </>
              ) : null}
            </Fragment>
          );
        })}
      </div>
    </>
  );
}
