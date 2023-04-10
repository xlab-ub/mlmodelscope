import React from "react";
import Routes from "./config";
import {Route, Switch} from "react-router-dom";

export default function Router() {
    return (
        <Switch>
            {
                Routes.map((route, i) =>
                    <Route exact={route.exact !== false} key={i} path={route.path} component={route.component}/>)
            }
        </Switch>
    );
}
