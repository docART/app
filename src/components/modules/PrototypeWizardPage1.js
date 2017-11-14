import React from 'react';
import { Field, reduxForm } from 'redux-form';

let PrototypeWizardPage1 = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <Field name="title" component="input" type="text" placeholder="Título" maxLength="256" required className="darker field w-input" />
        <Field name="nick" component="input" type="text" placeholder="Apodo" maxLength="256" required className="darker field w-input" />
        <Field name="summary" component="textarea" placeholder="Resumen" required className="darker field w-input" />
        <Field name="motivations" component="textarea" placeholder="Motivaciones" required className="darker field w-input" />
        <Field name="team" component="textarea" type="" placeholder="Equipo" required className="darker field w-input" />
        <Field name="promoter" component="input" type="text" placeholder="Promotor" maxLength="256" required className="darker field w-input" />
        <Field name="email" component="input" type="email" placeholder="Correo electrónico" maxLength="256" required className="darker field w-input" />
        <Field name="license" component="select" required className="darker field w-input">
            <option></option>
            <option>GNU Free Documentation License</option>
            <option>Creative Commons Zero v1.0 Universal</option>
            <option>Creative Commons Attribution 4.0</option>
            <option>Creative Commons Attribution Share Alike 4.0</option>
        </Field>
        <button className="button form w-button" type="submit">Siguiente</button>
    </form>
  );
};

export default reduxForm({
    form: 'share prototype',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(PrototypeWizardPage1);
