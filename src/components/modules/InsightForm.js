import React from 'react';
import {connect } from 'react-redux';
import {Button, Form, FormGroup, Label, FormText } from 'reactstrap';
import {Field, FormSection, reduxForm} from 'redux-form';
import {saveDocumentRequested} from '../../actions';

const InsightForm = (props) => {
    const {handleSubmit} = props;
    return (
        <Form onSubmit={handleSubmit}>
            <FormSection name="insight">
                <FormGroup>
                    <Label for="title">Título</Label>
                    <Field name="title" component="input" className="form-control" type="text" placeholder="Título" maxLength="256" required/>
                </FormGroup>
                <FormGroup>
                    <Label for="image">Url de la imagen</Label>
                    <Field name="image" id="image" component="input" className="form-control" type="url" placeholder="Url de la imagen" required/>
                <FormText>¿Qué imagen quieres compartir?</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="imagesreferences">Referencias de la imagen</Label>
                    <Field name="imagesreferences" id="imagesreferences" component="textarea" className="form-control" placeholder="Referencias de la imagen" required/>
                    <FormText>¿No olvides la referencia de la imagen?</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="other">Texto</Label>
                    <Field name="other" id="other" component="textarea" className="form-control" placeholder="Texto" required/>
                    <FormText>Como es una nota, también está compuesta de dos partes: un grafema y un texto explicativo.</FormText>
                </FormGroup>
                <FormGroup>
                    <Label for="author">Autor/es</Label>
                    <Field name="author" component="input" className="form-control" type="text" placeholder="Autor/es" maxLength="256" required/>
                </FormGroup>
            </FormSection>
            <Button type="submit" color="primary">Guardar</Button>
        </Form>
    );
};

const mapStateToProps = (state, ownProps) => ({
    initialValues: {
        prototype: ownProps.prototype,
        section: ownProps.section,
        path: ownProps.path,
        ...state.documents[ownProps.prototype].items[ownProps.path]
    }
});

export default connect(mapStateToProps)(reduxForm({
    form: 'note',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    onSubmit: (values, dispatch) => {
        dispatch(saveDocumentRequested(values.prototype, values));
    }
})(InsightForm));
