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
            <label htmlFor="share">Compartir</label>
            <Field name="share" id="share" component={Input} type="textarea" placeholder="Compartir" required/>
            <Field htmlFor="share" component={ FormText }>¿Como se comparte el prototipo?</Field>
        </FormGroup>
        <FormGroup>
            <label htmlFor="future_development">Desarrollo futuro</label>
            <Field name="future_development" id="future_development" component={Input} type="textarea" placeholder="Desarrollo futuro" required/>
            <Field htmlFor="future_development" component={ FormText }>¿Hay alguna estrategia para continuar?</Field>
        </FormGroup>
        <FormGroup>
            <label htmlFor="maintenance">Mantenimiento</label>
            <Field name="maintenance" id="maintenance" component={Input} type="textarea" placeholder="Mantenimiento" required/>
            <Field htmlFor="maintenance" component={ FormText }>¿Qué cosas hay que hacer para su mantenimiento?</Field>
        </FormGroup>
        <FormGroup>
            <label htmlFor="references">Referencias</label>
            <Field name="references" id="references" component={Input} type="textarea" placeholder="Referencias" required/>
            <Field htmlFor="references" component={ FormText }>¿Qué referencias deberían tomar en cuenta los interesados?</Field>
        </FormGroup>
        <FormGroup>
            <label htmlFor="image">Url de la imagen</label>
            <Field name="image" id="image" component={Input} type="textarea" placeholder="Url de la imagen" required/>
            <Field htmlFor="image" component={ FormText }>¿Qué imagen quieres compartir?</Field>
        </FormGroup>
        <FormGroup>
            <label htmlFor="image">Url de la imagen</label>
            <Field name="image" id="image" component={Input} type="textarea" placeholder="Url de la imagen" required/>
            <Field htmlFor="image" component={ FormText }>¿Qué imagen quieres compartir?</Field>
        </FormGroup>
        <FormGroup>
            <label htmlFor="imagesreferences">Referencias de la imagen</label>
            <Field name="imagesreferences" id="imagesreferences" component={Input} type="textarea" placeholder="Referencias de la imagen" required/>
            <Field htmlFor="imagesreferences" component={ FormText }>¿No olvides la referencia de la imagen?</Field>
        <FormGroup>
        </FormGroup>
            <Field component={Button} type="submit">Update</Field>
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
    form: 'future',
    onSubmit: (values, dispatch) => {
        dispatch(saveDocumentRequested(values.prototype, values));
    }
})(FutureForm));
