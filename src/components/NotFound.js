import React from "react";
import {Route, Redirect} from 'react-router-dom';


export default function NotFound() {
  return (
    <Route exact path="/">
      <Redirect to="/dashboard" />
    </Route>
  );
}
