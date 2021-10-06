import React from 'react'
import useStyles from './styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Context } from "../../../context/Context";

const EditAllPosts = () => {
    const classes = useStyles()

    const location = useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const publicFolder = "http://localhost:5000/images/";
    const { user } = useContext(Context);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [updateMode, setUpdateMode] = useState(false);
  
    useEffect(() => {
      getPost();
    }, [path]);

    const getPost = async () => {
      await axios.get("http://localhost:5000/api/posts/" + path)
      .then((res) => {
        console.log(res);
        setPost(res.data)
        setTitle(res.data.title);
        setDesc(res.data.desc)
      })
      .catch((err) => {
        console.log(err);
      })
    };
  
    const handleDelete = async () => {
      try {
        await axios.delete(`http://localhost:5000/api/posts/${post._id}`, {
          data: { username: user.username },
        });
        window.location.replace("/home");
      } catch (err) {}
    };
  
    const handleUpdate = async () => {
      try {
        await axios.put(`http://localhost:5000/api/posts/${post._id}`, {
          username: user.username,
          title,
          desc,
        });
        setUpdateMode(false)
      } catch (err) {}
    };

    return (
      <div className={classes.singlePost}>
      <div className={classes.singlePostWrapper}>
        {post.photo && (
          <img src={publicFolder + post.photo} alt="" className={classes.singlePostImg} />
        )}
        {updateMode ? (
          <input
            type="text"
            value={title}
            className={classes.singlePostTitleInput}
            autoFocus
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <h1 className={classes.singlePostTitle}>
            {title}
            {post.username === user?.username && (
              <div className={classes.singlePostEdit}>
                <EditIcon
                  className={classes.singlePostIcon}
                  onClick={() => setUpdateMode(true)}
                >Edit</EditIcon>
                <DeleteForeverIcon
                  className={classes.singlePostIcon}
                  onClick={handleDelete}
                ></DeleteForeverIcon>
              </div>
            )}
          </h1>
        )}
        <div className={classes.singlePostInfo}>
          <span className={classes.singlePostAuthor}>
            Author:
            <Link to={`/home/?user=${post.username}`} className={classes.link}>
              <b> {post.username}</b>
            </Link>
          </span>
          <span className={classes.singlePostDate}>
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        {updateMode ? (
          <textarea
            className={classes.singlePostDescInput}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className={classes.singlePostDesc}>{desc}</p>
        )}
        {updateMode && (
          <button className={classes.singlePostButton} onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>
    </div>
    )
}
export default EditAllPosts
