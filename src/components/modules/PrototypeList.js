import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Prototype from './Prototype';

const PrototypeList = ({prototypes}) => (
    <ul>
        {prototypes.map((prototype, index) => (
            <Prototype key={index} {...prototype} />
        ))}
    </ul>
);

PrototypeList.propTypes = {
    prototypes: PropTypes.arrayOf(
        PropTypes.shape({
            'name': PropTypes.string.isRequired
        }).isRequired
    ).isRequired
};

const mapStateToProps = (state) => ({
   prototypes: state.prototypes.items
});

export default connect(
    mapStateToProps
)(PrototypeList);
