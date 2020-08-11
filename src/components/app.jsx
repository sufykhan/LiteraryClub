import React from "react";
import Edetail from "./Eventdetail";
import Whole from "./Newcombine";
import {
  Switch,
  Route
} from "react-router-dom";

function App()
{
    // i need to optimize loading page css looks dynamic
    return (
        <React.Fragment>
        <Switch>
        <Route exact path="/" component={Whole} />
        <Route path="/eventdetail/:id" component={Edetail} />
        </Switch>
        </React.Fragment>
    );
}
export default App;