import React, { useEffect, useState } from "react";
import "./App.css";
import {Grid, Typography } from "@material-ui/core";
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
      <Typography variant="h3" style={{ marginTop: 10 }}>
        Cricket Live Score
      </Typography>{" "}
      <Grid container  direction="row">
        <Grid item md={3} sm={0} xs={0}></Grid>
        <Grid item md={6} sm={12} xs={12}>
          {Matches.map((match) => (
            <MyCard key={match.unique_id} match={match} />
          ))}
        </Grid>
        <Grid item md={3} sm={0} xs={0}></Grid>
        
      </Grid>
    </div>
  );
}

export default App;
