import React, { Component} from 'react';
import Header from '../modules/Header';
import PrototypeWizardPage1 from '../modules/PrototypeWizardPage1';
import PrototypeWizardPage2 from '../modules/PrototypeWizardPage2';

class PrototypeWizard extends Component {

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
        const {onSubmit} = this.props;
        const {page} = this.state;
        return (
            <div>
                <Header match={this.props.match}/>
                <div className="form section">
                    <div className="w-container">
                        {page === 1 && <PrototypeWizardPage1 onSubmit={this.nextPage} />}
                        {page === 2 && (
                        <PrototypeWizardPage2
                            previousPage={this.previousPage}
                            onSubmit={onSubmit}
                        />
                        )}
                    </div>
                </div>
            </div>
        );
    }
}

export default PrototypeWizard;
