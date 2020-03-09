import React from 'react';
import PropTypes from 'prop-types';
import {Card} from 'react-bootstrap';


const QuoteWell = ({quote}) => {
    if (!quote) {
        return null;
    }

    return (
        <Card bg="light">
            <Card.Body>
                <Card.Title>Quote of the Day</Card.Title>
                <Card.Text>
                    <q>{quote.message}</q>
                    <i> — {quote.author}</i>
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

QuoteWell.propTypes = {
    quote: PropTypes.shape({
        message: PropTypes.string.isRequired,
        author: PropTypes.string.isRequired
    }),
};

export default QuoteWell;
