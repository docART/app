import React from 'react';
import PropTypes from 'prop-types';

const PrototypeListItem = ({nick, logo, summary, motivations, team, promoter, email, license, procedure, schedule, requirements, references, video}) => (
    <div className="w-col w-col-3 w-col-small-6">
        <img className="team-image" src={logo} alt={nick}/>
        <h3 className="team-title">{nick}</h3>
        <div>{summary}</div>
        <div>{motivations}</div>
        <div>{team}</div>
        <div>{promoter}</div>
        <div>{email}</div>
        <div>{license}</div>
        <div>{procedure}</div>
        <div>{schedule}</div>
        <div>{requirements}</div>
        <div>{references}</div>
        <div>{video}</div>
    </div>
);

PrototypeListItem.propTypes = {
    title: PropTypes.string.isRequired,
    nick: PropTypes.string.isRequired,
    logo: PropTypes.string,
    summary: PropTypes.string
};

export { PrototypeListItem };
