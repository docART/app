import React from 'react';
import ReactDOM from 'react-dom';
import { LiveMarkedArea } from 'react-markdown-area';
import {
  MarkedInput,
  MarkedPreview,
  Markedtoolbar } from 'react-markdown-area';
import { connect } from 'react-redux';
import Navbar from './Navbar';

// Here is a live preview editor

export class PrototypeEditor extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      value: props.defaultValue ? props.defaultValue : ''
    };
  }
  static defaultProps = {
    id: 'mmc-marked-area',
    label: '',
    classNames: {
      root: 'marked-area',
      header: 'marked-area-header',
      activeButton: 'marked-area-button active',
      defaultButton: 'marked-area-button',
      helpLink: 'marked-area-help-link',
      textContainer: 'marked-area-text-container',
      liveDivider: 'marked-area-live-divider'
    }
  };

  handleTextChange = (e) => {
    this.setState({value: e.target.value});
  };

  render = () => {
    const prototype = this.props.match.params.name;
    let {id, label, classNames, placeholder} = this.props;
    let {value} = this.state;
    return (
    <div>
    <Navbar match={this.props.match}/>
      <h2>Receta breve</h2>
      <div className="form section w-container">
      <section className={classNames.root}>

      <header className={classNames.header}>
        <label htmlFor={id}>{label}</label>
      </header>

        <MarkedInput
          placeholder={placeholder}
          classNames={classNames}
          onChange={this.handleTextChange}
          value={value} />

        <MarkedPreview classNames={classNames}
          value={value} />

      </section>
      </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
    const prototype = ownProps.match.params.name;
    state.documents = {
        [prototype]: {
            ['README.md']: 'Corrije el error'
        }
    };
    return {
        content: state.documents[prototype]['README.md']
    }
  };

export default connect(
     mapStateToProps
)(PrototypeEditor);
