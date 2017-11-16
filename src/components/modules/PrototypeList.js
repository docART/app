import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Col, Container, Row } from 'reactstrap';
import { PrototypeListItem } from './Prototype';
import Header from './Navbar';

const PrototypeList = ({prototypes, match}) => (
    <div>
        <Header match={match} />
        <Row>
            {Object.entries(prototypes).map((prototype, index) => (
                <Col key={index} sm="3" xs="6">
                    <PrototypeListItem name={prototype[0]} {...prototype[1]} />
                </Col>
            ))}
        </Row>
    </div>
);

PrototypeList.propTypes = {
    prototypes: PropTypes.objectOf(
        PropTypes.shape({
            'title': PropTypes.string.isRequired,
            'nick': PropTypes.string.isRequired,
            'logo': PropTypes.string
        }).isRequired
    ).isRequired
};

const mapStateToProps = (state) => ({
   prototypes: state.prototypes.items
});

export default connect(
    mapStateToProps
)(PrototypeList);
