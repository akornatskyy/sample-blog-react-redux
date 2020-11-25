import React from 'react';
import {Provider} from 'react-redux';
import {createMemoryHistory} from 'history';
import {ConnectedRouter as Router} from 'connected-react-router';
import {render as rtlRender, screen, fireEvent} from '@testing-library/react';

import SignIn from './signin';

function render(ui, initialState) {
    const state = {shared: {}, ...initialState};
    const store = {
        subscribe: () => () => {},
        dispatch: () => {},
        getState: () => state,
    };
    const history = createMemoryHistory();
    const wrapper = ({children}) => (
        <Provider store={store}>
            <Router history={history}>
                {children}
            </Router>
        </Provider>
    );
    return rtlRender(ui, {wrapper});
}

describe('membership component', () => {
    describe('signin', () => {
        it('renders correctly', () => {
            render(<SignIn />);

            expect(screen.getByRole('button')).toBeEnabled();
        });

        it('disables button if pending', () => {
            render(<SignIn pending={true} />);

            expect(screen.getByRole('button')).toBeDisabled();
        });

        it('shows form error', () => {
            const errors = {
                username: 'Name error',
                password: 'Password error'
            };

            render(<SignIn errors={errors} />);

            expect(screen.getByText(errors.username)).toBeVisible();
            expect(screen.getByText(errors.password)).toBeVisible();
        });

        it('handles submit', () => {
            const onSubmit = jest.fn();

            render(<SignIn onSubmit={onSubmit} />);

            fireEvent.click(screen.getByRole('button'));
            expect(onSubmit).toBeCalled();
        });
    });
});
