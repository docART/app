import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveDocumentRequested } from '../../actions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const DepartureForm = (props) => {
    const { handleSubmit } = props;
    return (
        <Form onSubmit={ handleSubmit }>
            <Field name="prototype" component="input" type="hidden"/>
            <Field name="section" component="input" type="hidden"/>
            <Field name="path" component="input" type="hidden"/>
            <p>
                Lo que más nos importa es entender los motivos de tu interés y las consecuencias políticas, sociales, culturales de tu propuesta.
                Nos gustaría que nos contagiaras tu pasión y tu visión.
                También nos importan las dificultades, las dudas y las oportunidades.
                Importa  mucho el contexto de partida, el trabajo previo, la gestiones necesarias, los recursos disponibles, y en general todo lo que tenga que ver con las materialidades asociadas a este proyecto.
            </p>
            <FormGroup>
                <label for="motivations">Motivaciones</label>
                <Field name="motivations" id="motivations" component={Input} type="textarea" placeholder="Motivaciones" required/>
                <Field for="motivations" component={ FormText }>¿De donde nace tu interés?</Field>
            </FormGroup>
            <FormGroup>
                <label for="expectations">Expectativas</label>
                <Field name="expectations" id="expectations" component={Input} type="textarea" placeholder="Expectativos" required/>
                <Field for="expectations" component={ FormText }>¿A donde quieres llegar?</Field>
            </FormGroup>
            <FormGroup>
                <label for="skills">Habilidades</label>
                <Field name="skills" id="skills" component={Input} type="textarea" placeholder="Habilidades" required/>
                <Field for="skills" component={ FormText }>¿Qué destreza tienes?</Field>
            </FormGroup>
            <FormGroup>
                <label for="resources">Recursos de partida</label>
                <Field name="resources" id="resources" component={Input} type="textarea" placeholder="Recursos de partida" required/>
                <Field for="resources" component={ FormText }>¿Partes de cero?</Field>
            </FormGroup>
            <FormGroup>
                <label for="difficulties">Dificultades</label>
                <Field name="difficulties" id="difficulties" component={Input} type="textarea" placeholder="Dificultades" required/>
                <Field for="difficulties" component={ FormText }>¿Como pudiste llegar aquí?</Field>
            </FormGroup>
            <FormGroup>
                <label for="other">Otros</label>
                <Field name="other" id="other" component={Input} type="textarea" placeholder="Otros" required/>
                <Field for="other" component={ FormText }>¿Como pudiste llegar aquí?</Field>
            </FormGroup>
            <FormGroup>
                <label for="url">Url</label>
                <Field name="url" id="url" component={Input} type="url" placeholder="Url" required/>
                <Field for="url" component={ FormText }>¿Qué quieres compartir?</Field>
            </FormGroup>
            <FormGroup>
                <label for="image">Url de la imagen</label>
                <Field name="image" id="image" component={Input} type="textarea" placeholder="Url de la imagen" required/>
                <Field for="image" component={ FormText }>¿Qué imagen quieres compartir?</Field>
            </FormGroup>
            <FormGroup>
                <label for="imagesreferences">Referencias de la imagen</label>
                <Field name="imagesreferences" id="imagesreferences" component={Input} type="textarea" placeholder="Referencias de la imagen" required/>
                <Field for="imagesreferences" component={ FormText }>¿No olvides la referencia de la imagen?</Field>
            </FormGroup>
            <FormGroup>
                <Field component={Button} type="submit">Update</Field>
            </FormGroup> 
        </Form>
    );
};

const mapStateToProps = (state, ownProps) => ({
    initialValues: {
        prototype: ownProps.prototype,
        section: ownProps.section,
        path: ownProps.path,
        content: state.documents[ownProps.prototype][ownProps.path]
    }
});

export default connect(mapStateToProps)(reduxForm({
    form: 'departure',
    onSubmit: (values, dispatch) => {
        dispatch(saveDocumentRequested(values.prototype, values));
    }
})(DepartureForm));
