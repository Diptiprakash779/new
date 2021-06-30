import React from "react";
import {HashRouter, Route} from 'react-router-dom';
import Login from "./account/login.js";
import Register from "./account/register.js";
import New from "./new.js";
import Newtwo from "./new2.js";
function App() {
  return (
    <HashRouter>
        <Route exact path="/" component={Login}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/new" component={New}/>
        <Route exact path="/newtwo" component={Newtwo}/>
    </HashRouter>
  );
}

export default App;
