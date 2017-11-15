import React from 'react';
import PropTypes from 'prop-types';
import {Col} from 'reactstrap';

const PrototypeListItem = ({nick, logo}) => (
    <div>
      <Col>
        <img className="img-thumbnail rounded prototype-image" src={logo} alt={nick}/>
        <h3 className="team-title">{nick}</h3>
      </Col>
    </div>
);

PrototypeListItem.propTypes = {
    title: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    logo: PropTypes.string
};

export { PrototypeListItem };
