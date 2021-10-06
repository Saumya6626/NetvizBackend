import useStyles from "./styles";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import axios from "axios";
import { useContext, useRef } from "react";
// import { Link } from "react-router-dom";
import { Context } from "../../context/Context";

const Login = () => {
  const classes = useStyles();
  const userRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      window.location.replace("/home");
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className={classes.login}>
        <form className={classes.loginForm} onSubmit={handleSubmit}>
        <div className={classes.loginTitles}>
          <div className={classes.loginTitle1}>
            <span>NETVIZ</span>
          </div>
          <div className={classes.loginTitle2}>
            <span>
              Welcome <CheckCircleIcon />
            </span>
          </div>
        </div>
          <div className={classes.formArea}>
            <div className={classes.formItem}>
              <h4 className={classes.labels}>Username</h4>
              <input
                className={classes.loginInput}
                type="text"
                placeholder="username..."
                ref={userRef}
              />
            </div>
            <div className={classes.formItem}>
              <h4 className={classes.labels}>Password</h4>
              <input
                className={classes.loginInput}
                type="password"
                placeholder="password..."
                ref={passwordRef}
              />
            </div>
            <button className={classes.loginBtn} type="submit" style={{color: "white"}} disabled={isFetching}>
              LOGIN
            </button>
          </div>
        </form>
    </div>
  );
};

export default Login;
