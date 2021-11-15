import './App.css';
import React from 'react';
import Main from "./homepage"
import { HashRouter, Route, Redirect, Switch } from "react-router-dom";
import IndexNavbar from "./IndexNavbar";
import IndexHeader from "./IndexHeader";
import BasicHeader from "./BasicHeader";
import IndexFooter from "./IndexFooter";
import NewNavbar from "./newNavbar";
import Other from "./Other"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/css/paper-kit.css";
import PageNotFound from './PageNotFound';

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
    <HashRouter basename='/personal-wesbite/#/'>
      <Switch>
        <Route path="/other">
          <BasicHeader />
          <Other />
        </Route>
        <Route path="/">
          <IndexHeader/>
          <Main />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
        <Redirect to="/" />
      </Switch>
        {/* <Home /> */}
    </HashRouter>
    <IndexFooter />
   </>
  );
}

export default App;
