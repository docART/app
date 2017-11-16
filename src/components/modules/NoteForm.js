import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveDocumentRequested } from '../../actions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const NoteForm = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={ handleSubmit }>
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
            <label for="image">Url de la imagen</label>
            <Field name="image" id="image" component="input" className="form-control" type="textarea" placeholder="Url de la imagen" required/>
            <Field for="image" component={ FormText }>¿Qué imagen quieres compartir?</Field>
            </FormGroup>
            <FormGroup>
                <label for="imagesreferences">Referencias de la imagen</label>
                <Field name="imagesreferences" id="imagesreferences" component="input" className="form-control" type="textarea" placeholder="Referencias de la imagen" required/>
                <Field for="imagesreferences" component={ FormText }>¿No olvides la referencia de la imagen?</Field>
            </FormGroup>
            <FormGroup>
                <label for="other">Texto</label>
                <Field name="other" id="other" component="input" className="form-control" type="textarea" placeholder="Texto" required/>
                <Field for="other" component={ FormText }>Como es una nota, también está compuesta de dos partes: un grafema y un texto explicativo.</Field>
            </FormGroup>
            <FormGroup>
                <Label for="author">Autor/es</Label>
                <Field name="author" component="input" className="form-control" type="text" placeholder="Autor/es" maxLength="256" required/>
            </FormGroup>
            <FormGroup>
                <Field component={Button} type="submit">Guardar</Field>
            </FormGroup> 
        </Form>
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
    form: 'prototyping',
    onSubmit: (values, dispatch) => {
        dispatch(saveDocumentRequested(values.prototype, values));
    }
})(NoteForm));
