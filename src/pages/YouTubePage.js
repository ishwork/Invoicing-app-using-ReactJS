import React from "react";
import { Paper, Typography } from "@material-ui/core";
import ReactPlayer from "react-player";
import { makeStyles } from "@material-ui/core/styles";

export default function YouTubePage() {
  const styles = useStyles();
  return (
    <Paper style={{ paddingBottom: "50px" }}>
      <div className={styles.firstDiv}>
        <Typography className={styles.headings}>
          In this video, learn how to use FRINVOICE and create invoice of your
          own choice
        </Typography>
      </div>
      <div className={styles.youtubeDiv}>
        <ReactPlayer
          className={styles.youtubePlayer}
          url="https://www.youtube.com/watch?v=UVCP4bKy9Iw"
          width="100%"
          height="100%"
        />
      </div>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  firstDiv: {
    marginTop: "50px",
  },

  headings: {
    fontSize: "20px",
    fontFamily: "Arial",
    fontWeight: "bold",
    textAlign: "center",
  },
  youtubeDiv: {
    position: "relative",
    marginTop: "20px",
    width: "60%",
    height: "400px",
    marginLeft: "20%",
  },

  youtubePlayer: {
    position: "absolute",
    top: "0",
    left: "0",
  },
}));
