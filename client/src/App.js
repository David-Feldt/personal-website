import './App.css';
import React from 'react';
import Main from "./homepage"
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
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
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <IndexHeader/>
          <Main />
        </Route>
        <Route path="/404">
          <PageNotFound />
        </Route>
        <Route path="/other">
          <BasicHeader />
          <Other />
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
