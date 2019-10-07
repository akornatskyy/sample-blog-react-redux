import React from 'react';
import {Grid} from 'react-bootstrap';
import {Route, Switch} from 'react-router';

import AuthInfo from './membership/containers/auth-info';
import Footer from './shared/components/footer';
import Header from './shared/components/header';

import Posts from './posts/containers/posts';
import Post from './posts/containers/post';
import SignIn from './membership/containers/signin';
import SignUp from './membership/containers/signup';


const App = () => (
    <Grid>
        <Header>
            <AuthInfo />
        </Header>
        <Switch>
            <Route exact path="/" component={Posts} />
            <Route exact path="/posts" component={Posts} />
            <Route exact path="/post/:slug" component={Post} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
        </Switch>
        <hr />
        <Footer />
    </Grid>
);

export default (<Route path="/" component={App} />);
