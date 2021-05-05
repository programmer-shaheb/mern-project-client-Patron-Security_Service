import "../node_modules/jquery/dist/jquery.min";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Service from "./Components/Home/Dashboard/Service/Service";
import MyService from "./Components/Home/Dashboard/MyService/MyService";
import Review from "./Components/Home/Dashboard/Review/Review";
import OrderList from "./Components/Home/Dashboard/Admin/OrderList/OrderList";
import AddService from "./Components/Home/Dashboard/Admin/AddService/AddService";
import MakeAdmin from "./Components/Home/Dashboard/Admin/MakeAdmin/MakeAdmin";
import ManageServices from "./Components/Home/Dashboard/Admin/ManageServices/ManageServices";
import Login from "./Components/Home/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./Components/Home/Login/PrivateRoute";

export const userContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState("");
  return (
    <userContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <PrivateRoute exact path="/service/:id">
            <Service></Service>
          </PrivateRoute>
          <PrivateRoute exact path="/myService">
            <MyService></MyService>
          </PrivateRoute>
          <PrivateRoute exact path="/review">
            <Review></Review>
          </PrivateRoute>
          <PrivateRoute exact path="/allOrder">
            <OrderList></OrderList>
          </PrivateRoute>
          <PrivateRoute exact path="/addService">
            <AddService></AddService>
          </PrivateRoute>
          <PrivateRoute exact path="/addAdmin">
            <MakeAdmin></MakeAdmin>
          </PrivateRoute>
          <PrivateRoute exact path="/admin/setting">
            <ManageServices></ManageServices>
          </PrivateRoute>
          <Route exact path="/login">
            <Login></Login>
          </Route>
        </Switch>
      </Router>
    </userContext.Provider>
  );
}

export default App;
