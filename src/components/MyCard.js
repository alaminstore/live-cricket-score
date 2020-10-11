import React ,{Fragment, useState} from "react";
import {getMatchesDetails} from '../api/Api'
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Typography,
} from "@material-ui/core";
function MyCard({ match }) {

  const [Details, setDetails] = useState({})
  const [Open, setOpen] = useState(false)

  const handleClick=(id)=>{
    getMatchesDetails(id)
    .then(data=>{console.log(data)
    setDetails(data)
    handleOpen();
  })
    .catch(error=>console.log(error))
  } 

  const handleClose=()=>{
    setOpen(false)
  }
  const handleOpen=()=>{
    setOpen(true)
  }
  const getMatchCard = () => {
    return (
      <Card style={{ marginTop: 20 }}>
        <CardContent>
          <Grid container justify="center" spacing={5} alignItems="center">
            <Grid item>
              <Typography variant="p">{match["team-1"]}</Typography>
            </Grid>
            <Grid item>
              <img
                style={{ width: 80 }}
                src={require("../img/vs.png")}
                alt="vs"
              />
            </Grid>
            <Grid item>
              <Typography variant="p">{match["team-2"]}</Typography>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Grid container justify="center">
            <Button onClick={()=>{
              handleClick(match.unique_id)
              }}
              style={{ marginRight: 5 }}
              variant="contained"
              color="primary"
            >
              See Details
            </Button>
            <Button
              style={{ marginLeft: 5 }}
              variant="outlined"
              color="primary"
            >
              {/* {new Date().toString()} */}
              Start At: {new Date(match.dateTimeGMT).toLocaleDateString()}
            </Button>
          </Grid>
        </CardActions>
      </Card>
    );
  };
  const getDialogue = ()=>(
    <Dialog open={Open} onClose={handleClose}> 
    {/* small open is a variable */}
    <DialogTitle id="alert-dialog-title">
      <Typography>Match Details...</Typography>
    </DialogTitle>
    <DialogContent>
    <DialogContentText id="alert-dialog-description">
    <Typography>
      {Details.stat}
    </Typography>
    <Typography>
      Match: 
      <span style={{fontStyle:"italic",fontWeight:"bold",color:"red"}}>
        {Details.matchStarted?" Started":" Still not Started"}
      </span>
    </Typography>
    <Typography>
      Score: &nbsp; 
      <span style={{fontWeight:"bold"}}>
        {Details.score}
      </span>
    </Typography>
    </DialogContentText>
    </DialogContent>

    <DialogActions>
      <Button onClick={handleClose} color="primary" autoFocus>
        Close
      </Button>
    </DialogActions>

    </Dialog>
  )
  return <Fragment>
    {getMatchCard()}
    {getDialogue()}
  </Fragment>
  
}

export default MyCard;
