async function dataOrError(response, setError) {
  if (!response.ok) {
    if (response.status === 503) {
      setError("the ai server is overloaded, please try again shortly");
    } else {
      setError("could not connect to ai server");
    }
    throw new Error(response);
  } else {
    setError(false);
    return response.json();
  }
}
export async function apiCall(
  inputText,
  placeholderText,
  setConnectionData,
  setLoading,
  setError
) {
  let input = inputText;
  if (!input) {
    input = placeholderText;
  }
  setLoading(true);
  fetch("https://word-connector.onrender.com/data", {
    method: "POST",
    body: "userInput=" + input,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  })
    .then((res) => {
      return dataOrError(res, setError);
    })
    .catch((error) => {
      return error;
    })
    .then((data) => {
      setLoading(false);
      if (data instanceof Error) {
        return;
      }
      setConnectionData({ result: data.result, input: input });
    });
}
