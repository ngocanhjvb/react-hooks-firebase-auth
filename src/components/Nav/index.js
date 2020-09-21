import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import withRouter from "react-router-dom/withRouter";

const Nav = props => {
    return (
        <nav>
            <ul>
                <li><Link to="/">ReactReduxFireBase</Link></li>
            </ul>
            <ul>
                <li><Link to="/create">New Post</Link></li>
            </ul>
        </nav>
    );
};

Nav.propTypes = {};

export default withRouter(Nav);