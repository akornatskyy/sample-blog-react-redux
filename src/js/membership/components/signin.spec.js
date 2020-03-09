import React from 'react';
import {Button, FormControl} from 'react-bootstrap';
import {shallow, mount} from 'enzyme';
import {Provider} from 'react-redux';
import {ConnectedRouter as Router} from 'connected-react-router';
import {createMemoryHistory} from 'history';

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
            expect(c.find('form').props().onSubmit).toBeUndefined();
        });

        it('resets form validation state', () => {
            const props = setup({errors: {}});

            const c = shallow(<SignIn {...props} />);
            const formControls = c.find(FormControl);

            expect(formControls).toHaveLength(2);
            formControls.forEach(fg =>
                expect(fg.props().isInvalid).toBe(false));
        });

        it('shows form error', () => {
            const props = setup({
                errors: {
                    username: 'x',
                    password: 'x'
                }
            });

            const c = shallow(<SignIn {...props} />);
            const formControls = c.find(FormControl);

            expect(formControls).toHaveLength(2);
            formControls.forEach(fg =>
                expect(fg.props().isInvalid).toBe(true));
        });

        it('handles submit', () => {
            const {props, options} = setup(
                {
                    onSubmit: jest.fn()
                },
                {
                    shared: {
                        quote: {
                            message: 'm',
                            author: 'a'
                        }
                    }
                }
            );
            const history = createMemoryHistory();

            const c = mount(
                <Provider store={options.context.store}>
                    <Router history={history}>
                        <SignIn {...props} />
                    </Router>
                </Provider>
            );

            c.find('form').simulate('submit');

            expect(props.onSubmit).toBeCalledWith({
                username: '',
                password: ''
            });
        });
    });
});
