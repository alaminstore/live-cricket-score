import React, { useEffect } from "react";
import "./App.css";
import { Button } from "@material-ui/core";
import Navbar from "./components/Navbar";
import MyCard from "./components/MyCard";
import getMatches from "./api/Api";
function App() {
  useEffect(() => {
    getMatches()
      .then((data) => console.log("Data", data))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <h3>Cricket Live Score</h3>
      <Button variant="outlined" color="primary">
        Primary
      </Button>

      <MyCard />
    </div>
  );
}

export default App;
