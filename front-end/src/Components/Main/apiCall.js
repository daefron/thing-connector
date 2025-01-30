export async function apiCall(
  inputText,
  placeholderText,
  setConnectionData,
  setLoading
) {
  let input = inputText;
  if (!input) {
    input = placeholderText;
  }
  setLoading(true);
  fetch("http://localhost:3000/data", {
    method: "POST",
    body: "userInput=" + input,
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
