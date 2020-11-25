import React from 'react';
import {MemoryRouter as Router} from 'react-router-dom';
import {render, screen} from '@testing-library/react';

import AuthInfo from './auth-info';

describe('membership component', () => {
    describe('auth-info', () => {
        it('is not rendered if not shown', () => {
            const {container} = render(<AuthInfo />);

            expect(container.firstChild).toBeNull();
        });

        it('shows signin link', () => {
            render(<Router><AuthInfo show={true} /></Router>);

            expect(screen.getByText('Sign in')).toBeVisible();
        });

        it('shows signout link', () => {
            render(<Router><AuthInfo show={true} user={{}} /></Router>);

            expect(screen.getByText('Sign out')).toBeVisible();
        });
    });
});
