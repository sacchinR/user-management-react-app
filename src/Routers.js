import React from 'react';
import { Route, Switch } from "react-router-dom";
import Dashboard from './container/Dashboard';
import NewUser from "./container/NewUser"
import EditUser from './container/EditUser';
import Page404 from './components/Navigator/Page404';


function Routers() {
  return (
    <Switch>
      <Route
        exact
        path="/"
        component={Dashboard}
      />
      <Route
        exact
        path="/addUser"
        component={NewUser}
      />
      <Route
        exact
        path="/editUser/:id"
        component={EditUser}
      />
      <Route component={Page404} />
    </Switch>
  );
}

export default Routers;
