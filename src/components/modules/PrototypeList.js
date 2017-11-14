import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { PrototypeListItem } from './Prototype';
import Navbar from './Navbar';

<<<<<<< 6e21f2f8e88271f8477e1cfd33638b52e3b11513
const PrototypeList = ({prototypes, match}) => (
    <div>
        <Navbar match={match} />
        <div className="section">
            <div className="w-container">
                <h2>Prototipos</h2>
                <div className="divider grey"></div>
                <div className="w-row">
                    {Object.entries(prototypes).map((prototype, index) => (
                      <Link key={index} to={`/prototypes/${prototype[0]}`}>
                        <PrototypeListItem {...prototype[1]} />
                      </Link>
                    ))}
                </div>
=======

const PrototypeList = ({prototypes}) => (
    <div className="section">
        <div className="w-container">
            <h2>Prototipos</h2>
            <div className="divider grey"></div>
            <div className="w-row">
                {Object.entries(prototypes).map((prototype, index) => (
                  <Link key={index} to={`/prototypes/${prototype[0]}`}>
                    <PrototypeListItem {...prototype[1]} />
                  </Link>
                ))}
>>>>>>> add quick recipe
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
