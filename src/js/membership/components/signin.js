import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Card, FormGroup, FormControl, Button} from 'react-bootstrap';

import Errors from '../../shared/components/errors';
import Layout from '../../shared/components/layout';
import SignUpWell from '../../shared/components/signup-well';
import AccessWarn from './access-warn';


class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getChildContext() {
        return {errors: this.props.errors};
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit({
            username: this.username.value,
            password: this.password.value
        });
    }

    render() {
        const {pending, errors = {}} = this.props;
        return (
            <Layout sidebar={<SignUpWell/>}>
                <h1>Sign In</h1>
                <p>
                    Need an account? <Link to="/signup">Sign up</Link> free.
                    Your opinions and comments would be greatly
                    appreciated.
                </p>
                <hr/>
                <Errors.Summary />
                <Card bg="light">
                    <Card.Body>
                        <form autoComplete="off"
                            onSubmit={!pending ? this.handleSubmit : undefined}>
                            <FormGroup className="mb-3">
                                <FormControl ref={(e) => this.username = e}
                                    placeholder="Username" type="text"
                                    required
                                    isInvalid={!!errors.username} />
                                <Errors.Field name="username" />
                            </FormGroup>
                            <FormGroup className="mb-3">
                                <FormControl ref={(e) => this.password = e}
                                    placeholder="Password" type="password"
                                    required
                                    isInvalid={!!errors.password} />
                                <Errors.Field name="password" />
                            </FormGroup>
                            <Button disabled={pending} type="submit">
                                Sign In
                            </Button>
                        </form>
                    </Card.Body>
                </Card>
                <AccessWarn />
            </Layout>
        );
    }
}

SignIn.propTypes = {
    pending: PropTypes.bool,
    errors: PropTypes.object,
    onSubmit: PropTypes.func,
};

SignIn.childContextTypes = {
    errors: SignIn.propTypes.errors
};

export default SignIn;
