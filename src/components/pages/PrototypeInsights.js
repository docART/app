import React, {Component} from 'react';
import {connect} from 'react-redux';
import Header from '../modules/Header';
import {fetchInsightsRequested} from '../../actions';


class PrototypeInsights extends Component {

    componentWillMount = () => {
        this.props.fetchInsightsRequested(this.props.match.params.name);
    }

    render = () => {
        const {match, insights} = this.props;
        let items = [];

        if (insights[match.params.name]) {
            items = insights[match.params.name].items
                .filter(item => item.commit.message.indexOf('\n') > -1)
                .map((currentValue) => {
                    const firstNewline = currentValue.commit.message.indexOf('\n');
                    return {
                        date: new Date(currentValue.commit.author.date),
                        subject: currentValue.commit.message.substr(0, firstNewline).trim(),
                        body: currentValue.commit.message.substr(firstNewline).trim()
                    }
                })
                .reverse();
        }

        return <div>
            <Header match={match}/>
            <h1>Hitos</h1>
            <ol className="list-unstyled insights">
                {items.map((currentValue, index) => (
                    <li className="insight" data-is={currentValue.date.toLocaleString('es')} key={index}>
                        <h2 className="insight__subject">{currentValue.subject}</h2>
                        <p className="insight__body">{currentValue.body}</p>
                    </li>
                ))}
            </ol>
        </div>;
    };
}

const mapStateToProps = (state) => ({
    insights: state.insights
});

export default connect(
    mapStateToProps,
    {fetchInsightsRequested}
)(PrototypeInsights);
