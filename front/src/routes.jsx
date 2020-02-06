import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import App2 from "./App";
import {LikeList} from "./views/likes";
import {STRUCTURE} from "./constants";
import {_Names} from "./components/Names"
import {_YourCat} from "./components/YourCat"
const MainRouter = () => (
    <Switch>
        <Route exact path='/' component={App2}/>
        <Route path={STRUCTURE.names.route} component={_Names}/>
        <Route path={STRUCTURE.share.route} component={_YourCat}/>

    </Switch>
);

export default withRouter(MainRouter);
