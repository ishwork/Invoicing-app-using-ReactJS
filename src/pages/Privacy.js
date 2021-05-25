import { Paper, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export default function Privacy() {
  const styles = useStyles();

  return (
    <Paper style={{ marginTop: "10px", height: "500px" }}>
      <Typography className={styles.textStyle}>
        This page is under construction...
      </Typography>
      <Typography className={styles.textStyle}>
        This page is for writing policies...
      </Typography>
    </Paper>
  );
}

const useStyles = makeStyles((theme) => ({
  textStyle: {
    fontFamily: "Arial",
    fontSize: "20px",
    textAlign: "center",
    paddingTop: "10px",
    marginLeft: "12%",
    fontWeight: "bold",
  },
}));
