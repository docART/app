import React from 'react';
import PropTypes from 'prop-types';

const PrototypeListItem = ({nick, logo}) => (
    <div className="w-col w-col-3 w-col-small-6">
        <img className="team-image" src={logo} alt={nick}/>
        <h3 className="team-title">{nick}</h3>
    </div>
);

PrototypeListItem.propTypes = {
    title: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    logo: PropTypes.string
};

export { PrototypeListItem };
