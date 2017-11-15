import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Container, Row} from 'reactstrap';
import { PrototypeListItem } from './Prototype';
import Header from './Navbar';

const PrototypeList = ({prototypes, match}) => (
  <div>
  <Header match={match} />
      <h2>Prototipos</h2>
        <Container>
          <Row>
            {Object.entries(prototypes).map((prototype, index) => (
                <Link key={index} to={`/prototypes/${prototype[0]}`}>
                <PrototypeListItem {...prototype[1]} />
                </Link>
            ))}
          </Row>
        </Container>
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
