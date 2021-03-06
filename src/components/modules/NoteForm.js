import React from 'react';
import {connect} from 'react-redux';
import {Button, Form, FormGroup, Label, FormText} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import {saveDocumentRequested} from '../../actions';

const NoteForm = (props) => {
    const {handleSubmit} = props;
    return (
        <Form onSubmit={handleSubmit}>
            <h1>Nota</h1>
            <Field name="prototype" component="input" type="hidden"/>
            <Field name="path" component="input" type="hidden"/>
            <p>
                Lo que necesitamos es dar cuenta de todos los detalles prácticos imprescindibles para poder  replicar del prototipo.
                En caso de duda lo mejor es documentar lo sucedido.
                Cada nota tendrá una URL propia para poder relacionarlas unas con otras.
                Las notas pueden incluir videos, imágenes, archivos de sonido o textos.
                Con frecuencia el equipo se divide en grupos, y cada uno de ellos hará sus propias notas.
            </p>
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
                <Label className="form-check-label" check>
                <Field name="insight" id="insight" component="input" type="checkbox" className="form-check-input" />{' '}
                Añadir Hito
                </Label>
            </FormGroup>
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
})(NoteForm));
