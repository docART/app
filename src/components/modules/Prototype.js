import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PrototypeListItem = ({nick, logo, name}) => (
    <Link to={`/prototypes/${name}`}>
        <figure className="text-center">
            <img className="rounded-circle img-fluid" src={logo} alt={nick}/>
            <figcaption className="figure-caption text-center">{nick}</figcaption>
        </figure>
    </Link>
);

PrototypeListItem.propTypes = {
    title: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    logo: PropTypes.string
};

export { PrototypeListItem };
