import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Collapse  } from 'reactstrap';

class RecipeItem extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = { collapse: this.props.isOpen };
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse });
    }

    render() {
        return (
            <Card>
                <CardHeader onClick={this.toggle}>{this.props.header}</CardHeader>
                <Collapse isOpen={this.state.collapse}>
                    {this.props.children}
                </Collapse>
            </Card>
        );
    }
}

export default RecipeItem;