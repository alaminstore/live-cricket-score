const Api_Key = "8p0e9XqJ1oQMiwfb24sLOdoNSVh1";
function getMatches() {
  const url = `https://cricapi.com/api/matches?apikey=${Api_Key}`;
  return fetch(url)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error));
}



export const getMatchesDetails= (id) => {
  const url = `https://cricapi.com/api/cricketScore?apikey=${Api_Key}&unique_id=${id}`
  return fetch(url)
    .then(response=>response.json())
    .catch(error=>console.log('Error: ',error)) 
}

export default getMatches;
