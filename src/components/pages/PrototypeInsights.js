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
            items = insights[match.params.name].items.filter(
                item => item.commit.message.indexOf('\n') > -1
            );
        }

        return (
            <div>
                <Header match={match}/>
                <h1>Hitos</h1>
                <ul>
                    {items.map((currentValue, index) => (
                        <li key={index}>{currentValue.commit.message}</li>
                    ))}
                </ul>
            </div>
        );
    };
}

const mapStateToProps = (state) => ({
    insights: state.insights
});

export default connect(
    mapStateToProps,
    {fetchInsightsRequested}
)(PrototypeInsights);
