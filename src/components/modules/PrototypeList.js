import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Prototype from './Prototype';

const PrototypeList = ({prototypes}) => (
    <div className="section">
        <div className="w-container">
            <h2>Prototipos</h2>
            <div className="divider grey"></div>
            <div className="w-row">
                {prototypes.map((prototype, index) => (
                    <Prototype key={index} {...prototype} />
                ))}
            </div>
        </div>
    </div>
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
