import React, {Component} from 'react';
import {connect} from 'react-redux';
import NoteForm from './NoteForm';
import InsightForm from './InsightForm';

class SlowWizard extends Component {

    constructor(props) {
        super(props);
        this.nextPage = this.nextPage.bind(this);
        this.previousPage = this.previousPage.bind(this);
        this.state = {
            page: 1
        };
    }

    nextPage() {
        this.setState({page: this.state.page + 1});
    }

    previousPage() {
        this.setState({page: this.state.page - 1});
    }

    render() {
        const {onSubmit, prototype, section, path} = this.props;
        const {page} = this.state;
        return (
            <div>
                {page === 1 && <NoteForm prototype={prototype} section={section} path={path} onSubmit={this.props.isToggled ? this.nextPage : onSubmit} />}
                {page === 2 && (
                    <InsightForm prototype={prototype} section={section} path={path}
                        previousPage={this.previousPage}
                        onSubmit={onSubmit}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    if (state.form.note) {
        return {isToggled: state.form.note.values.insight};
    } else {
        return {isToggled: false};
    }
};

export default connect(mapStateToProps)(SlowWizard);
