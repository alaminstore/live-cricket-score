import React from "react";
const Api_Key = "8p0e9XqJ1oQMiwfb24sLOdoNSVh1";
function getMatches() {
  const url = `https://cricapi.com/api/matches?apikey=${Api_Key}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
}

export default getMatches;
