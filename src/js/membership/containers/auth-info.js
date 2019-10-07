import {connect} from 'react-redux';

import {signout} from '../actions';
import AuthInfo from '../components/auth-info';


export default connect(
    state => ({
        user: state.membership.auth.user,
        show: state.router.location.pathname.match(/^\/?signin$/) === null
    }),
    dispatch => ({
        onSignout: () => dispatch(signout())
    })
)(AuthInfo);
