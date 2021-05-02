import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/contact/Contact";
import Login from "./components/login/Login";
import AdminPage from "./components/admin/AdminPage";
import NavbarLayout from "./components/layout/Nav";
import { AuthProvider } from "./context/AuthContext";
import "./App.css";
import PostList from "./components/posts/PostList";
import PostDetails from "./components/posts/PostDetails";

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <NavbarLayout />
          <Switch>
            <Route exact path="/" exact component={PostList} />
            <Route path="/post/:id" exact component={PostDetails} />
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
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
