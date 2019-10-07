import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose, applyMiddleware} from 'redux';
import {createHashHistory as createHistory} from 'history';
import {routerMiddleware, ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import createRootReducer from './reducers';
import routes from './routes';
import {dailyQuote} from './shared/actions';

import './app.scss';

const history = createHistory();

function configureStore(preloadedState) {
    return createStore(
        createRootReducer(history),
        preloadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history),
                thunk
            ),
        ),
    );
}

const store = configureStore();
store.dispatch(dailyQuote());

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            {routes}
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
);
