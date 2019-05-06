import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import AdminRouter from "./AdminRouter";
import Header from "../components/Header";
import Footer from "../components/Footer";
import GalleryArts from "../features/home-gallery";
import Login from "../components/Login";

const DefaultRouter = () => (
  <>
    <Header />
    <Router>
      <Switch>
        <Route path="/admin" component={AdminRouter} />
        <Route exact path="/login" component={Login} />
        <Route path="/" component={GalleryArts} />
      </Switch>
    </Router>
    <Footer />
  </>
);

export default DefaultRouter;
