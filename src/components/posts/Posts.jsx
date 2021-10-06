import React from "react";
import useStyles from "./styles";
import Post from './post/Post';

const Posts = ({posts}) => {
  const classes = useStyles();
  
  return (
    <div className={classes.posts}>
      {posts.map((p) => (
        <Post post={p}></Post>
      ))}
    </div>
  
  );
};

export default Posts;
