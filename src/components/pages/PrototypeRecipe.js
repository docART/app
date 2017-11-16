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
        const departureLinks = [];
        const prototyping = [];
        const prototypingLinks = [];
        const future = [];
        const futureLinks = [];
        const toMarkdown = function (field) {
            return '### ' + field[0] + '\n\n'  + field[1];
        }

        if (documents[match.params.name]) {
            Object.entries(documents[match.params.name].items).forEach((currentValue) => {
                if (!currentValue[0].endsWith('README.md')) {
                    if (currentValue[0].startsWith('departure')) {
                        let markdown = Object.entries(currentValue[1]).map(toMarkdown).join('\n');
                        departure.push(markdown);
                        departureLinks.push(<Link to={`/prototypes/${match.params.name}/recipes/${currentValue[0]}`} className="btn btn-primary">Editar</Link>);
                    } else if (currentValue[0].startsWith('prototyping')) {
                        let markdown = Object.entries(currentValue[1]).map(toMarkdown).join('\n');
                        departure.push(markdown);
                        prototyping.push(currentValue[1]);
                        prototypingLinks.push(<Link to={`/prototypes/${match.params.name}/recipes/${currentValue[0]}`} className="btn btn-primary">Editar</Link>);
                    } else if (currentValue[0].startsWith('future')) {
                        let markdown = Object.entries(currentValue[1]).map(toMarkdown).join('\n');
                        departure.push(markdown);
                        future.push(currentValue[1]);
                        futureLinks.push(<Link to={`/prototypes/${match.params.name}/recipes/${currentValue[0]}`} className="btn btn-primary">Editar</Link>);
                    }
                }
            });
        }

        if (departureLinks.length === 0) {
            departureLinks.push(<Link to={`/prototypes/${match.params.name}/recipes/departure`} className="btn btn-primary rounded-circle">+</Link>);
        }

        if (futureLinks.length === 0) {
            futureLinks.push(<Link to={`/prototypes/${match.params.name}/recipes/future`} className="btn btn-primary rounded-circle">+</Link>);
        }

        prototypingLinks.push(<Link to={`/prototypes/${match.params.name}/recipes/prototyping`} className="btn btn-primary rounded-circle">+</Link>);

        return (
            <div>
                <Header match={match}/>
                <RecipeItem header="Antes" isOpen>
                    {departure.map((currentValue, index) => (
                        <ReactMarkdown key={index} source={currentValue}/>
                    ))}
                    <p>
                        {departureLinks[0]}
                    </p>
                </RecipeItem>
                <RecipeItem header="Durante">
                    {prototyping.map((currentValue, index) => (
                        <ReactMarkdown key={index} source={currentValue}/>,
                        prototypingLinks[index]
                    ))}
                    <p>
                        {prototypingLinks.pop()}
                    </p>
                </RecipeItem>
                <RecipeItem header="Después">
                    {future.map((currentValue, index) => (
                        <ReactMarkdown key={index} source={currentValue}/>
                    ))}
                    <p>
                        {futureLinks[0]}
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
