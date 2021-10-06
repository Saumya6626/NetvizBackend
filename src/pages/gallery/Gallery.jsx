import React from "react";
import useStyles from "./styles";
import EditAllPosts from "./components/EditAllPosts";
import Navbar from "../../components/navbar/Navbar";

const Gallery = () => {
  const classes = useStyles();

  return (
  <div className={classes.singlePost}>
    <Navbar></Navbar>
    <EditAllPosts></EditAllPosts>
  </div>);
};

export default Gallery;
