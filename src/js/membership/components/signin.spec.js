import React from 'react';
import PropTypes from 'prop-types';
import {Button, FormGroup} from 'react-bootstrap';
import {shallow} from 'enzyme';

import SignIn from './signin';


const setup = (overrides, state) => {
    const props = Object.assign({
        pending: false,
        errors: {},
        onSubmit: () => {}
    }, overrides);

    if (!state) {
        return props;
    }

    return {
        props,
        options: {
            context: {
                store: {
                    subscribe: () => {},
                    dispatch: () => {},
                    getState: () => state
                }
            },
            childContextTypes: {
                store: PropTypes.object.isRequired
            }
        }
    };
};

describe('membership component', () => {
    describe('signin', () => {
        it('renders correctly', () => {
            const props = setup();

            const c = shallow(<SignIn {...props} />);

            expect(c.find(Button).props().disabled).toBe(false);
            expect(c.find('form').props().onSubmit).toBeInstanceOf(Function);
        });

        it('disables button and form submit', () => {
            const props = setup({pending: true});

            const c = shallow(<SignIn {...props} />);

            expect(c.find(Button).props().disabled).toBe(true);
            expect(c.find('form').props().onSubmit).toBe(false);
        });

        it('resets form group validation state', () => {
            const props = setup({errors: {}});

            const c = shallow(<SignIn {...props} />);
            const formGroups = c.find(FormGroup);

            expect(formGroups).toHaveLength(2);
            formGroups.forEach(fg =>
                expect(fg.props().validationState).toBeUndefined());
        });
    });
});