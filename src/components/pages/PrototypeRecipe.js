import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import {connect} from 'react-redux';
import {CardBody, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import Header from '../modules/Header';
import RecipeItem from '../modules/RecipeItem';
import {fetchDocumentsRequested} from '../../actions';

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
            const fieldMap = {
                other: 'Otros',
                motivations: 'Motivaciones',
                expectations: 'Expectativas',
                skills: 'Habilidades',
                difficulties: 'Dificultades',
                resources: 'Recursos de partida',
                url: 'URL'
            };
            if (field[0] === 'title') {
                return '## ' + field[1];
            } else if (field[0] === 'image') {
                return '![imagen de la nota](' + field[1] + ')\n';
            } else if (field[0] === 'imagesreferences') {
                return field[1];
            }
            return '### ' + fieldMap[field[0]] + '\n\n'  + field[1];
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
                        prototyping.push(markdown);
                        prototypingLinks.push(<Link to={`/prototypes/${match.params.name}/recipes/${currentValue[0]}`} className="btn btn-primary">Editar</Link>);
                    } else if (currentValue[0].startsWith('future')) {
                        let markdown = Object.entries(currentValue[1]).map(toMarkdown).join('\n');
                        future.push(markdown);
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
                <h1>{`${match.params.name}`}</h1>
                <RecipeItem header="Antes" isOpen>
                    <CardBody>
                        {departure.map((currentValue, index) => (
                            <ReactMarkdown key={index} source={currentValue}/>
                        ))}
                        <p className="mb-0">
                            {departureLinks[0]}
                        </p>
                    </CardBody>
                </RecipeItem>
                <RecipeItem header="Durante">
                    <ListGroup className="list-group-flush">
                        {prototyping.map((currentValue, index) => (
                            <ListGroupItem key={index}>
                                <ReactMarkdown source={currentValue}/>
                                {prototypingLinks[index]}
                            </ListGroupItem>
                        ))}
                    </ListGroup>
                    <CardBody>
                        {prototypingLinks.pop()}
                    </CardBody>
                </RecipeItem>
                <RecipeItem header="Después">
                    <CardBody>
                        {future.map((currentValue, index) => (
                            <ReactMarkdown key={index} source={currentValue}/>
                        ))}
                        <p className="mb-0">
                            {futureLinks[0]}
                        </p>
                    </CardBody>
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
    {fetchDocumentsRequested}
)(PrototypeRecipe);
