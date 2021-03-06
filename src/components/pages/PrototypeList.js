import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {Col, Row} from 'reactstrap';
import {PrototypeListItem} from '../modules/Prototype';
import Header from '../modules/Header';

const PrototypeList = ({prototypes, match}) => (
    <div>
        <Header match={match} />
        <h1>Lista de prototipos</h1>
        <Row>
            {Object.entries(prototypes).map((prototype, index) => (
                <Col key={index} lg="3" md="4" sm="6" xs="12">
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
