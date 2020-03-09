import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../../shared/components/layout';
import LeadBreak from '../../shared/components/lead-break';
import {formatDateOrTime} from '../../shared/utils';

import CommentWell from './comment-well';
import Comments from './comments';


class Post extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.onGetPost) {
            this.props.onGetPost(this.props.match.params.slug);
        }
    }

    render() {
        const {
            pending, post, authenticated, errors, onAddComment
        } = this.props;
        const permitted = post.permissions && post.permissions.create_comment;

        return (
            <Layout>
                <article>
                    <h1>{post.title}</h1>
                    <p className="lead">
                        by {post.author.first_name} {post.author.last_name}
                    </p>
                    <hr/>
                    <p>
                        <i className="fa fa-clock-o"></i> Posted {
                            formatDateOrTime(post.created_on)
                        }
                    </p>
                    <hr/>
                    <LeadBreak text={post.message} />
                </article>
                <hr/>
                <CommentWell authenticated={authenticated}
                    permitted={permitted}
                    disabled={pending}
                    errors={errors}
                    onSubmit={onAddComment} />
                <Comments items={post.comments} />
            </Layout>
        );
    }
}

Post.propTypes = {
    pending: PropTypes.bool,
    post: PropTypes.shape({
        'title': PropTypes.string,
        'author': PropTypes.shape({
            'first_name': PropTypes.string,
            'last_name': PropTypes.string
        }),
        'created_on': PropTypes.string,
        'message': PropTypes.string,
        'permissions': PropTypes.shape({
            'create_comment': PropTypes.boolean
        }),
        'comments': PropTypes.arrayOf(PropTypes.object)
    }),
    errors: PropTypes.object,
    authenticated: PropTypes.bool,
    match: PropTypes.shape({
        params: PropTypes.shape({
            slug: PropTypes.string.isRequired
        }),
    }),
    onGetPost: PropTypes.func,
    onAddComment: PropTypes.func
};

export default Post;
