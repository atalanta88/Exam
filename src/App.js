import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/pages/contact/Contact";
import Login from "./components/pages/login/Login";
import AdminPage from "./components/pages/admin/AdminPage";
import NavbarLayout from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import HousingList from "./components/pages/housing/HousingList";
import HousingDetails from "./components/pages/housing/HousingDetails";
import FooterLayout from "./components/layout/Footer";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavbarLayout />
          <Switch>
            <Route exact path="/housing" exact component={HousingList} />
            <Route path="/housing/:id" exact component={HousingDetails} />
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
          <FooterLayout />
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
