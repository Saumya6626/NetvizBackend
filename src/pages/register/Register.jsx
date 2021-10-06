import { Button } from "@material-ui/core";
import { useState } from "react";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import useStyles from "./styles";
import axios from "axios";

const Register = () => {
  const classes = useStyles();
  const [state, setstate] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(false)

  // Methods/Functions to change the values of the formfield/state
  const changeEmail = (e) => {
    setstate({ ...state, email: e.target.value });
  };
  const changeUserName = (e) => {
    setstate({ ...state, username: e.target.value });
  };

  const changePassword = (e) => {
    setstate({ ...state, password: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //User data is saved to on object called registered
    const registered = {
      username: state.username,
      email: state.email,
      password: state.password,
    };
    setError(false);
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        registered
      );
      res.data && window.location.replace("/login");
      setstate({
        username: "",
        email: "",
        password: "",
      });
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className={classes.register}>
      <form className={classes.regForm} onSubmit={handleSubmit}>
        <div className={classes.regTitles}>
          <div className={classes.regTitle1}>
            <span>NETVIZ</span>
          </div>
          <div className={classes.regTitle2}>
            <span>
              Sign Up <CheckCircleIcon />
            </span>
          </div>
        </div>
        <div className={classes.formArea}>
          <div className={classes.formItem}>
            <h4 className={classes.labels}>Username</h4>
            <input
              className={classes.registerInput}
              type="text"
              placeholder="username..."
              onChange={changeUserName}
              value={state.username}
            />
          </div>
          <div className={classes.formItem}>
            <h4 className={classes.labels}>Email</h4>
            <input
              className={classes.registerInput}
              type="text"
              placeholder="email..."
              onChange={changeEmail}
              value={state.email}
            />
          </div>
          <div className={classes.formItem}>
            <h4 className={classes.labels}>Password</h4>
            <input
              className={classes.registerInput}
              type="password"
              placeholder="password..."
              onChange={changePassword}
              value={state.password}
            />
          </div>
        </div>
        <div className={classes.formBtns}>
          <Button
            type="submit"
            className={classes.formBtn1}
            variant="outlined"
            color="primary"
          >
            Register
          </Button>
          <Button
            className={classes.formBtn2}
            variant="outlined"
            color="secondary"
          >
            <a href="/login" style={{textDecoration: "none", color: "white"}}>Login</a>
          </Button>
        </div>
        <div className={classes.regBtns}>
        {error && <span>Something went wrong!!..</span>}
        </div>
      </form>
    </div>
  );
};

export default Register;
