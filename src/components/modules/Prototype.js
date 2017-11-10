import React from 'react';
import PropTypes from 'prop-types';

const Prototype = ({name}) => (
    <li>{name}</li>
);

Prototype.propTypes = {
    name: PropTypes.string.isRequired
};

export default Prototype;