import React from 'react';
import PropTypes from 'prop-types';
import {Switch, Route} from "react-router-dom";
import Main from "../components/main";

const Routes = props => {
    return (
        <Switch>
            <Route exact path="/" component={Main} />
        </Switch>
    );
};

Routes.propTypes = {};

export default Routes;
