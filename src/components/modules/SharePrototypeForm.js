import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPrototypeRequested } from '../../actions';

let SharePrototypeForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <Field name="title" component="input" type="text" placeholder="Título" maxLength="256" required className="darker field w-input" />
        <Field name="nick" component="input" type="text" placeholder="Apodo" maxLength="256" required className="darker field w-input" />
        <Field name="summary" component="textarea" placeholder="Resumen" className="darker field w-input" />
        <Field name="motivations" component="textarea" placeholder="Motivaciones" className="darker field w-input" />
        <Field name="team" component="textarea" type="" placeholder="Equipo" className="darker field w-input" />
        <Field name="promoter" component="input" type="text" placeholder="Promotor" maxLength="256" className="darker field w-input" />
        <Field name="email" component="input" type="text" placeholder="Correo electrónico" maxLength="256" className="darker field w-input" />
        <Field name="license" component="select" className="darker field w-input">
            <option></option>
            <option>GNU Free Documentation License</option>
            <option>Creative Commons Zero v1.0 Universal</option>
            <option>Creative Commons Attribution 4.0</option>
            <option>Creative Commons Attribution Share Alike 4.0</option>
        </Field>
        <button className="button" type="submit">Enviar</button>
    </form>
  );
};

export default reduxForm({
    form: 'share prototype',
    onSubmit: (values, dispatch) => {
        dispatch(createPrototypeRequested(values));
    }
})(SharePrototypeForm);
