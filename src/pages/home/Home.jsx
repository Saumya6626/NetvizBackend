import useStyles from "./styles";
import Navbar from "../../components/navbar/Navbar";
import Posts from "../../components/posts/Posts";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const classes = useStyles();

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    FetchPosts();
  }, []);

  const FetchPosts = async () => {
    const res = await axios.get("http://localhost:5000/api/posts");
    console.log(res);
    setPosts(res.data);
  };

  return (
    <>
      <div className={classes.home}>
        <Navbar></Navbar>
        <Posts posts={posts} />
      </div>
    </>
  );
};

export default Home;
