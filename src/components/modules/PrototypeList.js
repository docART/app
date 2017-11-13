import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PrototypeListItem } from './Prototype';

const PrototypeList = ({prototypes}) => (
    <div className="section">
        <div className="w-container">
            <h2>Prototipos</h2>
            <div className="divider grey"></div>
            <div className="w-row">
                {Object.values(prototypes).map((prototype, index) => (
                    <PrototypeListItem key={index} {...prototype} />
                ))}
            </div>
        </div>
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
