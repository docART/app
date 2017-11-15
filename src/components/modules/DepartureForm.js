import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveDocumentRequested } from '../../actions';

const DepartureForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Field name="prototype" component="input" type="hidden"/>
            <Field name="file" component="input" type="hidden"/>
            <Field name="content" component="textarea" className="darker field w-input" required/>
            <button type="submit" className="button form w-button">Guardar</button>
        </form>
    );
};

const mapStateToProps = (state, ownProps) => ({
    initialValues: {
        prototype: ownProps.prototype,
        path: ownProps.path,
        content: state.documents[ownProps.prototype][ownProps.path]
    }
});

export default connect(mapStateToProps)(reduxForm({
    form: 'departure',
    onSubmit: (values, dispatch) => {
      dispatch(saveDocumentRequested(values));
    }
})(DepartureForm));
