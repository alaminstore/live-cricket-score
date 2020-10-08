import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";
function MyCard({ match }) {
  const getMatchCard = () => {
    return (
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <Grid container justify="center" spacing={5} alignItems="center">
            <Grid item>
              <Typography variant="h6">{match}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 85 }}
                src={require("../img/vs.png")}
                alt="vs"
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">Second Team</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <Button variant="contained" color="primary">
              See Details
            </Button>
            <Button variant="contained" color="primary">
              {new Date().toString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };
  return getMatchCard();
}

export default MyCard;
