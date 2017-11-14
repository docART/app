import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror';
import { options, menu } from '@aeaton/react-prosemirror-config-default';
import Navbar from './Navbar';

class PrototypeEditor extends Component {

    render = () => {
        const prototype = this.props.match.params.name;
        return (
            <div>
                <Navbar match={this.props.match}/>
                <h2>Receta breve</h2>
                <div className="form section">
                    <HtmlEditor
                        options={options}
                        value={this.props.content}
                        render={({ editor, state, dispatch }) => (
                            <div className="w-container">
                                <MenuBar menu={menu} state={state} dispatch={dispatch}/>
                                {editor}
                            </div>
                        )}
                    />
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

