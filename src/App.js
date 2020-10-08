import React, { useEffect, useState } from "react";
import "./App.css";
import { Button, Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import getMatches from "./api/Api";
function App() {
  const [Matches, setMatches] = useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => {
        console.log("Data", data);
        setMatches(data.matches);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <h3>Cricket Live Score</h3>
      <Button variant="outlined" color="primary">
        Primary
      </Button>

      <Grid container>
        <Grid sm="3"></Grid>
        <Grid sm="6">
          {Matches.map((match) => (
            <MyCard match="match" />
          ))}
        </Grid>
        <Grid sm="3"></Grid>
      </Grid>
    </div>
  );
}

export default App;
