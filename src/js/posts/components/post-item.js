import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

import {formatDateOrTime} from '../../shared/utils';


class PostItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        e.preventDefault();
        if (this.props.onClick) {
            this.props.onClick(this.props.item.slug);
        }
    }

    render() {
        const p = this.props.item;

        return (
            <div>
                <h2>
                    <a href="" onClick={this.handleClick}>
                        {p.title}
                    </a>
                </h2>
                <p className="lead">
                    by {p.author.first_name} {p.author.last_name}
                </p>
                <p>
                    <i className="fa fa-clock-o"></i> Posted {
                        formatDateOrTime(p.created_on)
                    }
                </p>
                <hr/>
                <p>
                    {p.message}
                </p>
                <Button onClick={this.handleClick}>
                    Read More <i className="fa fa-chevron-right"></i>
                </Button>
                <hr/>
            </div>
        );
    }
}

PostItem.propTypes = {
    item: PropTypes.shape({
        'slug': PropTypes.string,
        'title': PropTypes.string,
        'author': PropTypes.shape({
            'first_name': PropTypes.string,
            'last_name': PropTypes.string
        }),
        'created_on': PropTypes.string,
        'message': PropTypes.string,
    }),
    onClick: PropTypes.func
};

export default PostItem;
