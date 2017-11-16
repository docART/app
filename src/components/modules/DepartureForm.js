import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveDocumentRequested } from '../../actions';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';

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
                <Label for="motivations">Motivaciones</Label>
                <Field name="motivations" id="motivations" component="textarea" className="form-control" placeholder="Motivaciones" required/>
                <FormText>¿De donde nace tu interés?</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="expectations">Expectativas</Label>
                <Field name="expectations" id="expectations" component="textarea" className="form-control" placeholder="Expectativos" required/>
                <FormText>¿A donde quieres llegar?</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="skills">Habilidades</Label>
                <Field name="skills" id="skills" component="textarea" className="form-control" placeholder="Habilidades" required/>
                <FormText>¿Qué destreza tienes?</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="resources">Recursos de partida</Label>
                <Field name="resources" id="resources" component="textarea" className="form-control" placeholder="Recursos de partida" required/>
                <FormText>¿Partes de cero?</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="difficulties">Dificultades</Label>
                <Field name="difficulties" id="difficulties" component="textarea" className="form-control" placeholder="Dificultades" required/>
                <FormText>¿Como pudiste llegar aquí?</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="other">Otros</Label>
                <Field name="other" id="other" component="textarea" className="form-control" placeholder="Otros" required/>
                <FormText>¿Como pudiste llegar aquí?</FormText>
            </FormGroup>
            <FormGroup>
                <Label for="url">Url</Label>
                <Field name="url" id="url" component="input" className="form-control" type="url" placeholder="Url" required/>
                <FormText>¿Qué quieres compartir?</FormText>
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
            <Button type="submit">Guardar</Button>
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
    form: 'departure',
    onSubmit: (values, dispatch) => {
        dispatch(saveDocumentRequested(values.prototype, values));
    }
})(DepartureForm));
