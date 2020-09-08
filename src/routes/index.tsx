import React from 'react';
import {Switch, Route} from 'react-router-dom';


import Dashboard from '../pages/Dashboard';
import Worker from '../pages/Worker';



const Routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard}/>
        <Route path="/Worker" component={Worker}/>
    </Switch>
);


export default Routes;