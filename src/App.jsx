import React, { useContext } from "react";
import useStyles from "./styles";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Register from "./pages/register/Register";
import FrontPage from "./pages/frontPage/FrontPage";
import Settings from "./pages/settings/Settings";
import Create from "./pages/create/Create";
import Navbar from "./components/navbar/Navbar";
import Gallery from "./pages/gallery/Gallery";
import { Context } from "./context/Context";



const App = () => {
  const { user } = useContext(Context);
  return (
    <BrowserRouter>
        <Switch>
          <Route exact path="/">
             <FrontPage />
          </Route>
          <Route exact path="/home">
          {user ? <Home /> : <FrontPage />}
          </Route>
          <Route path="/register">
            {user ? <Home /> : <Register />}
          </Route>
          <Route path="/login">{user ? <Home /> : <Login />}</Route>
          <Route path="/create">
            {user ? (
              <>
                <Navbar />
                <Create />
              </>
            ) : (
              <Register />
            )}
          </Route>
          <Route path="/settings">
            {user ? <Settings /> : <Register />}
          </Route>
          <Route path="/post/:postId">
            <Gallery />
          </Route>
        </Switch>
    </BrowserRouter>
  );
};

export default App;
