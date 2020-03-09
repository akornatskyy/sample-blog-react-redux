import React from 'react';
import {shallow} from 'enzyme';

import {NavLink} from 'react-bootstrap';

import AuthInfo from './auth-info';


const initialProps = {
    show: false,
    onSignout: () => {}
};

describe('membership component', () => {
    describe('auth-info', () => {
        it('is not rendered if not shown', () => {
            const props = Object.assign({}, initialProps);

            const c = shallow(
                <AuthInfo {...props} />
            );

            expect(c.getElement()).toBeNull();
        });

        it('shows signin link', () => {
            const props = Object.assign({}, initialProps, {
                show: true
            });

            const c = shallow(
                <AuthInfo {...props} />
            );

            expect(c.find(NavLink).contains('Sign in')).toBe(true);
        });

        it('shows signout link', () => {
            const props = Object.assign({}, initialProps, {
                show: true,
                user: {}
            });

            const c = shallow(
                <AuthInfo {...props} />
            );

            expect(c.find(NavLink).contains('Sign out')).toBe(true);
        });
    });
});
