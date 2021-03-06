import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";
import AdminPage from "./components/pages/admin/AdminPage";
import Home from "./components/pages/home/Home";
import ScrollToTop from "./components/common/ScrollToTop";

import NavbarLayout from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./sass/style.scss";

import HousingList from "./components/pages/housing/HousingList";
import HousingDetails from "./components/pages/housing/HousingDetails";
import FooterLayout from "./components/layout/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <ScrollToTop />
          <NavbarLayout />
          <div id="container">
            <div id="main-content">
              <Switch>
                <Route path="/housing" exact component={HousingList} />
                <Route path="/housing/:id" exact component={HousingDetails} />
                <Route path="/home">
                  <Home />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/admin" exact>
                  <AdminPage />
                </Route>
              </Switch>
            </div>
          </div>
          <FooterLayout />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
