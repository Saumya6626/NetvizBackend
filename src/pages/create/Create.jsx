import useStyles from "./styles";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import axios from "axios";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";

const Create = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    title: "",
    desc: "",
    file: null,
  });
  const {user} = useContext(Context)

const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: state.title,
      desc: state.desc,
    };
    if (state.file) {
      const data =new FormData();
      const filename = Date.now() + state.file.name;
      data.append("name", filename);
      data.append("file", state.file);
      newPost.photo = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("http://localhost:5000/api/posts/create", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className={classes.write}>
      {state.file && (
        <img className={classes.writeImg} src={URL.createObjectURL(state.file)} alt="" />
      )}
      <form className={classes.writeForm} onSubmit={handleSubmit}>
        <div className={classes.writeFormGroup}>
          <div className={classes.writeImage}>
            <label htmlFor="fileInput">
              <AddCircleIcon className={classes.writeIcon}></AddCircleIcon>
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setState({...state, file: e.target.files[0]})}/>
          </div>
          <input
            className={classes.writeInput}
            placeholder="Title"
            type="text"
            autoFocus={true}
            onChange={(e) => setState({...state, title: e.target.value})}
          />
        </div>
        <div className={classes.writeFormGroup}>
          <textarea
            className={classes.writeText}
            placeholder="Tell your story..."
            type="text"
            autoFocus={true}
            onChange={(e) => setState({...state, desc: e.target.value})}
          />
        </div>
        <button className={classes.writeSubmit} type="submit">
          Publish
        </button>
      </form>
    </div>
  );
};

export default Create;
