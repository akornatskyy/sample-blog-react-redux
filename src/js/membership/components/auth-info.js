import React from 'react';
import PropTypes from 'prop-types';
import {LinkContainer} from 'react-router-bootstrap';
import {NavLink} from 'react-bootstrap';


const AuthInfo = ({user, show, onSignout}) => {
    if (!show) {
        return null;
    }

    if (!user) {
        return (
            <LinkContainer to="/signin">
                <NavLink>Sign in</NavLink>
            </LinkContainer>
        );
    }

    return <NavLink onClick={onSignout}>Sign out</NavLink>;
};

AuthInfo.propTypes = {
    user: PropTypes.object,
    show: PropTypes.bool,
    onSignout: PropTypes.func,
};

export default AuthInfo;
