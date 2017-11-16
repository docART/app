import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../modules/Navbar';
import RecipeItem from '../modules/RecipeItem';
import { fetchDocumentsRequested } from '../../actions';

class PrototypeRecipe extends Component {

    componentWillMount = () => {
        this.props.fetchDocumentsRequested(this.props.match.params.name);
    }

    render = () => {
        const { documents, match } = this.props;
        const departure = [];
        const prototyping = [];
        const future = [];
        if (documents[match.params.name]) {
            Object.entries(documents[match.params.name].items).map((currentValue) => {
                if (currentValue[0].endsWith('README.md')) {
                    return;
                }
                if (currentValue[0].startsWith('departure')) {
                    let markdown = '';
                    Object.entries(currentValue[1]).map((field) => {
                        markdown += '### ' + field[0] + '\n\n'  + field[1] + '\n';
                    });
                    departure.push(markdown);
                } else if (currentValue[0].startsWith('prototyping')) {
                    let markdown = '';
                    Object.entries(currentValue[1]).map((field) => {
                        markdown += '### ' + field[0] + '\n\n'  + field[1] + '\n';
                    });
                    departure.push(markdown);
                    prototyping.push(currentValue[1]);
                } else if (currentValue[0].startsWith('future')) {
                    let markdown = '';
                    Object.entries(currentValue[1]).map((field) => {
                        markdown += '### ' + field[0] + '\n\n'  + field[1] + '\n';
                    });
                    departure.push(markdown);
                    future.push(currentValue[1]);
                }
            });
        }
        return (
            <div>
                <Header match={match}/>
                <RecipeItem header="Antes" isOpen>
                    {departure.map((currentValue, index) => (
                        <ReactMarkdown key={index} source={currentValue}/>
                    ))}
                    <p>
                        <Link to={`/prototypes/${match.params.name}/recipes/departure`} className="btn btn-primary">+</Link>
                    </p>
                </RecipeItem>
                <RecipeItem header="Durante">
                    {prototyping.map((currentValue, index) => (
                        <ReactMarkdown key={index} source={currentValue}/>
                    ))}
                    <p>
                        <Link to={`/prototypes/${match.params.name}/recipes/prototyping`} className="btn btn-primary">+</Link>
                    </p>
                </RecipeItem>
                <RecipeItem header="Después">
                    {future.map((currentValue, index) => (
                        <ReactMarkdown key={index} source={currentValue}/>
                    ))}
                    <p>
                        <Link to={`/prototypes/${match.params.name}/recipes/future`} className="btn btn-primary">+</Link>
                    </p>
                </RecipeItem>
            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {
        documents: state.documents
    };
};

export default connect(
    mapStateToProps,
    { fetchDocumentsRequested }
)(PrototypeRecipe);
