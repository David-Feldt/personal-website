import './App.css';
import React from 'react';
import Main from "./homepage"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import IndexNavbar from "./IndexNavbar";
import IndexHeader from "./IndexHeader";
import NewNavbar from "./newNavbar"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/paper-kit.css";

function App() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("index");
    return function cleanup() {
      document.body.classList.remove("index");
    };
  });
  return (
    <>
    <IndexNavbar />
    <BrowserRouter>
      <Switch>
        <Route path="/">
          <IndexHeader />
          <Main />
        </Route>
        <Redirect to="/" />
      </Switch>
        {/* <Home /> */}
    </BrowserRouter>
   </>
  );
}

export default App;
