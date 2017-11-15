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
                <Field name="title" component="Input" type="text" placeholder="Título" maxLength="256" required/>
            </FormGroup>    
            <Field name="image" component="input" type="url" placeholder="Imagen" className="darker field w-input" />
            <Field name="imagesreferences" component="input" type="text" placeholder="Referencias de la imagen" className="darker field w-input" />
            <Field name="text" component="textarea"  placeholder="Text" required className="darker field w-input" />
            <label htmlFor="text">Como es una nota, también está compuesta de dos partes: un grafema y un texto explicativo.</label>
            <Field name="author" component="input" type="text" placeholder="Autor/es" maxLength="256" required className="darker field w-input" />
            <button type="submit" className="button form w-button">Guardar</button>
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
