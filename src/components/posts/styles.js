import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  posts: {
    display: "flex",
    flexWrap: "wrap",
    height: "fit-content",
    margin: theme.spacing(1),
    marginTop: theme.spacing(8)
  },

  }));

export default useStyles;
