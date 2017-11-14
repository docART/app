import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PrototypeListItem } from './Prototype';


const PrototypeList = ({prototypes}) => (
    <div className="section">
        <div className="w-container ">
            <h2>Prototipos</h2>
            <div className="divider grey"></div>
            <div className="w-row">
                {Object.entries(prototypes).map((prototype, index) => (
                  <Link key={index} to={`/prototype/${prototype[0]}`}>
                    <PrototypeListItem {...prototype[1]} />
                  </Link>
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
