import React, { useState } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";
import useStyles from "./styles";

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const fireIcon =
    "https://iconarchive.com/download/i82801/succodesign/love-is-in-the-web/heart.ico";
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Card className={classes.loginCard}>
        <CardMedia>{props.media}</CardMedia>
        <CardContent className={classes.ccWrapper}>
          <h3 className={classes.cardHeader}>
            Welcome to the amazing blog world-NETVIZ
            <img className={classes.fireImg} src={fireIcon} />
          </h3>
          <Typography variant="body2" color="textSecondary" component="p">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
           when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, 
            remaining essentially unchanged. It was popularised in the 1960s
             with the release of Letraset sheets containing Lorem Ipsum passages, 
             and more recently with desktop publishing software like Aldus PageMaker
             including versions of Lorem Ipsum.

            
            
            
            
            
            
            
            
            
            
            
          </Typography>
        </CardContent>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.ccWrapper}>{props.sidebar}</CardContent>
        </Collapse>
        <CardActions disableSpacing>
          <div
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={classes.expandIcon} />
          </div>
        </CardActions>
      </Card>
    </>
  );
}
