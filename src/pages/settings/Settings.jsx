import React, { useEffect } from "react";
import useStyles from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";

const Settings = () => {
  const classes = useStyles();
  const [state, setState] = useState({
    file: null,
    username: "",
    email: "",
    password: "",
    success: false,
  });

  const { user, dispatch } = useContext(Context);
  const publicFolder = "http://localhost:5000/images/";

  useEffect(() => {
    console.log(user)
    console.log(user.profile)
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username: state.username,
      email: state.email,
      password: state.password,
    };

    if (state.file) {
      const data = new FormData();
      const filename = Date.now() + state.file.name;
      data.append("name", filename);
      data.append("file", state.file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("http://localhost:5000/api/upload", data);
      } catch (err) {}
      try {
        const res = await axios.put("http://localhost:5000/api/users/" + user._id, updatedUser);
        setState({...state, success: true});
        dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
        window.location.replace("/home");
      } catch (err) {
        dispatch({ type: "UPDATE_FAILURE" });
      }
    }
  };
  return (
    <div className={classes.settings}>
      <div className={classes.settingsWrapper}>
        <div className={classes.settingsTitle}>
          <span className={classes.settingsTitleUpdate}>Update Account</span>
          <span className={classes.settingsTitleDelete}>Delete Account</span>
        </div>
        <form className={classes.settingsForm} onSubmit={handleSubmit}>
          <label className={classes.label}>Profile Picture</label>
          <div className={classes.settingsPP}>
            <img
              className={classes.image}
              src={state.file ? URL.createObjectURL(state.file) : `${publicFolder}${user.profilePic}`} alt=""
            />
            <label htmlFor="fileInput">
              <AccountCircleIcon
                className={classes.settingsPPIcon}
              ></AccountCircleIcon>{" "}
            </label>
            <input id="fileInput" type="file" style={{ display: "none" }} onChange={(e) => setState({...state, file: e.target.files[0]})}
/>
          </div>
          <label className={classes.label}>Username</label>
          <input
            className={classes.settingsInput}
            type="text"
            placeholder="username..."
            name="name"
            onChange={(e) => setState({...state, username: e.target.vallue})}
          />
          <label className={classes.label}>Email</label>
          <input
            className={classes.settingsInput}
            type="email"
            placeholder="username@gmail.com"
            name="email"
            onChange={(e) => setState({...state, email: e.target.value})}
          />
          <label className={classes.label}>Password</label>
          <input
            className={classes.settingsInput}
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => setState({...state, password: e.target.value})}
          />
          <button className={classes.settingsSubmitButton} type="submit">
            Update
          </button>
          {state.success && (
            <span
              style={{ color: "green", textAlign: "center", marginTop: "20px" }}
            >
              Profile has been updated...
            </span>
          )}
        </form>
      </div>
    </div>
  );
};

export default Settings;
