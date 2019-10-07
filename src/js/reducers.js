import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';

import membership from './membership/reducers';
import posts from './posts/reducers';
import shared from './shared/reducers';


const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    membership, posts, shared
});

export default createRootReducer;
