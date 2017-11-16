import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveDocumentRequested } from '../../actions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const FutureForm = (props) => {
    const { handleSubmit } = props;
    return (
    <Form onSubmit={ handleSubmit }>
        <Field name="prototype" component="input" type="hidden"/>
        <Field name="path" component="input" type="hidden"/>
        <Field name="section" component="input" type="hidden"/>
        <p>
            Hacia el final del proceso el equipo debe tomar decisiones sobre cómo compartir, comunicar y licenciar el trabajo realizado.
            Todas estos compromisos deben quedar registrados.
            Este es el momento para recomendar algunas referencias: videos, blogs, libros, artículos, redes, informe,..
            Quizás lo más importante sea dedicar un tiempo para indicar desarrollos futuros, formas de uso, alianzas estratégicas,...
        </p>
        <FormGroup>
            <Label for="share">Compartir</Label>
            <Field name="share" id="share" component="textarea" className="form-control" placeholder="Compartir" required/>
            <FormText>¿Como se comparte el prototipo?</FormText>
        </FormGroup>
        <FormGroup>
            <Label for="future_development">Desarrollo futuro</Label>
            <Field name="future_development" id="future_development" component="textarea" className="form-control" placeholder="Desarrollo futuro" required/>
            <FormText>¿Hay alguna estrategia para continuar?</FormText>
        </FormGroup>
        <FormGroup>
            <Label for="maintenance">Mantenimiento</Label>
            <Field name="maintenance" id="maintenance" component="textarea" className="form-control" placeholder="Mantenimiento" required/>
            <FormText>¿Qué cosas hay que hacer para su mantenimiento?</FormText>
        </FormGroup>
        <FormGroup>
            <Label for="references">Referencias</Label>
            <Field name="references" id="references" component="textarea" className="form-control" placeholder="Referencias" required/>
            <FormText>¿Qué referencias deberían tomar en cuenta los interesados?</FormText>
        </FormGroup>
        <FormGroup>
            <Label for="image">Url de la imagen</Label>
            <Field name="image" id="image" component="input" type="url" className="form-control" placeholder="Url de la imagen" required/>
            <FormText>¿Qué imagen quieres compartir?</FormText>
        </FormGroup>
        <FormGroup>
            <Label for="imagesreferences">Referencias de la imagen</Label>
            <Field name="imagesreferences" id="imagesreferences" component="textarea" className="form-control" placeholder="Referencias de la imagen" required/>
            <FormText>¿No olvides la referencia de la imagen?</FormText>
        </FormGroup>
            <Button type="submit">Guardar</Button>
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
    form: 'future',
    onSubmit: (values, dispatch) => {
        dispatch(saveDocumentRequested(values.prototype, values));
    }
})(FutureForm));
