import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { saveDocumentRequested } from '../../actions';

const FutureForm = (props) => {
    const { handleSubmit } = props;
    return (
    <form onSubmit={ handleSubmit }>
        <Field name="prototype" component="input" type="hidden"/>
        <Field name="path" component="input" type="hidden"/>
        <p>
            Hacia el final del proceso el equipo debe tomar decisiones sobre cómo compartir, comunicar y licenciar el trabajo realizado.
            Todas estos compromisos deben quedar registrados.
            Este es el momento para recomendar algunas referencias: videos, blogs, libros, artículos, redes, informe,..
            Quizás lo más importante sea dedicar un tiempo para indicar desarrollos futuros, formas de uso, alianzas estratégicas,...
        </p>
        <Field name="share" component="textarea" placeholder="Compartir" required className="darker field w-input" />
        <label htmlFor="share">¿Cómo se comparte el prototipo? </label>
        <Field name="future_development" component="textarea" placeholder="Desarrollo Futuro" required className="darker field w-input" />
        <label htmlFor="future_development">¿Hay alguna estrategia para continuar?</label>
        <Field name="maintenance" component="textarea" placeholder="Mantenimiento" required className="darker field w-input" />
        <label htmlFor="maintenance">¿Qué cosas hay que hacer para su mantenimiento?</label>
        <Field name="references" component="textarea" placeholder="Referencias" required className="darker field w-input" />
        <label htmlFor="references" >¿Qué referencias deberían tomar en cuenta los interesados?</label>
        <Field name="image" component="input" type="url" placeholder="Url de la imagen" required className="darker field w-input" />
        <label htmlFor="image" >¿Qué imagen quieres compartir?</label>
        <Field name="imagesreferences" component="textarea" placeholder="Referencias de la imagen" required className="darker field w-input" />
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
    form: 'future',
    onSubmit: (values, dispatch) => {
        dispatch(saveDocumentRequested(values.prototype, values));
    }
})(FutureForm));
