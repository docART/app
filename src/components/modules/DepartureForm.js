import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveDocumentRequested } from '../../actions';

const DepartureForm = (props) => {
    const { handleSubmit } = props;
    return (
        <form onSubmit={ handleSubmit }>
            <Field name="prototype" component="input" type="hidden"/>
            <Field name="path" component="input" type="hidden"/>
            <p>
                Lo que más nos importa es entender los motivos de tu interés y las consecuencias políticas, sociales, culturales de tu propuesta.
                Nos gustaría que nos contagiaras tu pasión y tu visión.
                También nos importan las dificultades, las dudas y las oportunidades.
                Importa  mucho el contexto de partida, el trabajo previo, la gestiones necesarias, los recursos disponibles, y en general todo lo que tenga que ver con las materialidades asociadas a este proyecto.
            </p>
            <Field name="motivations" component="textarea" placeholder="Motivaciones" required className="darker field w-input" />
            <label htmlFor="motivations" >¿De donde nace tu interés?</label>
            <Field name="expectetions" component="textarea" placeholder="Expectativas" required className="darker field w-input" />
            <label htmlFor="expectations" >¿A donde quieres llegar?</label>
            <Field name="skills" component="textarea" placeholder="Habilidades" required className="darker field w-input" />
            <label htmlFor="skills" >¿Qué destreza tienes?</label>
            <Field name="resources" component="textarea" placeholder="Recursos de partida" required className="darker field w-input" />
            <label htmlFor="resources" >¿Partes de cero?</label>
            <Field name="difficulties" component="textarea" placeholder="Dificultades" required className="darker field w-input" />
            <label htmlFor="difficulties" >¿Como pudiste llegar aquí?</label>
            <Field name="other" component="textarea" placeholder="Otros" required className="darker field w-input" />
            <label htmlFor="other" >¿Algo más que quieres contar?</label>
            <Field name="url" component="textarea" placeholder="Url" required className="darker field w-input" />
            <label htmlFor="url" >¿Qué quieres compartir?</label>
            <Field name="image" component="textarea" placeholder="Url de la imagen" required className="darker field w-input" />
            <label htmlFor="image" >¿Qué imagen quieres compartir?</label>
            <Field name="images_references" component="textarea" placeholder="Referencias de la imagen" required className="darker field w-input" />
            <label htmlFor="image" >¿No olvides la referencia de la imagen?</label>
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
        dispatch(saveDocumentRequested(values.protoype, values));
    }
})(DepartureForm));
