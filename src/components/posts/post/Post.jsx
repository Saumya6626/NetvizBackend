import React from "react";
import { Link } from "react-router-dom";
import useStyles from "./styles";

const Post = ({ post }) => {
  const classes = useStyles();
  const publicFolder = "http://localhost:5000/images/";
  
  return (
    <div className={classes.post}>
      {post.photo && <><div className={classes.imgwrapper}><img className={classes.postImg} src={publicFolder + post.photo} alt="" /></div> </>}
      <div className={classes.postInfo}>
        <div className={classes.postCats}>
          {post.categories.map((c) => (
            <span className={classes.postCat}>{c.name}</span>
          ))}
        </div>
        <Link to={`/post/${post._id}`} className={classes.link}>
          <span className={classes.postTitle}>{post.title}</span>
        </Link>
        <hr />
        <span className={classes.postDate}>
          {new Date(post.createdAt).toDateString()}
        </span>
      </div>
      <p className={classes.postDesc}>{post.desc}</p>
    </div>
  );
};

export default Post;
