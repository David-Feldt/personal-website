import './App.css';
import React from 'react';
import Main from "./homepage"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import IndexNavbar from "./IndexNavbar";
import IndexHeader from "./IndexHeader";
import BasicHeader from "./ProfilePageHeader";
import IndexFooter from "./IndexFooter";
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
        <Route exact path="/">
          <IndexHeader/>
          <Main />
        </Route>
        <Route path="/404">
        <div
        className="page-header section-dark"
        style={{
          backgroundImage:
            "url(" + require("./assets/img/lost-2.jpg").default + ")",
        }}
        >
        <div className="title-brand">
        <h1><b>404</b></h1>
        <h3><b>Page Not Found</b></h3>
        </div>
        </div>
        </Route>
        <Redirect to="/" />
      </Switch>
        {/* <Home /> */}
    </BrowserRouter>
    <IndexFooter />
   </>
  );
}

export default App;
