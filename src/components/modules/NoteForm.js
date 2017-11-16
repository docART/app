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
                <Button type="submit" color="primary">Guardar</Button>
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
