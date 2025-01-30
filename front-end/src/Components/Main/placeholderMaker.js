import nounList from "/nouns";

function randomNoun() {
  const randomNumber = Math.round(Math.random() * (nounList.length - 1));
  return nounList[randomNumber];
}

export function placeholderMaker() {
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
