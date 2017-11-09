import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SharePrototypeForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <Field name="name" component="input" type="text" placeholder="Título" maxLength="256" required="" className="darker field w-input" />
        <Field name="nick" component="input" type="text" placeholder="Apodo" maxLength="256" required="" className="darker field w-input" />
        <Field name="summary" component="textarea" placeholder="Resumen" required="" className="darker field w-input" />
        <Field name="motivations" component="textarea" placeholder="Motivaciones" required="" className="darker field w-input" />
        <Field name="team" component="textarea" type="" placeholder="Equipo" required="" className="darker field w-input" />
        <Field name="promoter" component="input" type="text" placeholder="Promotor" maxLength="256" required="" className="darker field w-input" />
        <Field name="email" component="input" type="text" placeholder="Correo Electrónico" maxLength="256" required="" className="darker field w-input" />
        <Field name="license" component="select" required="" className="darker field w-input" />
    </form>
  );
};

export default reduxForm({
  form: 'share prototype'
})(SharePrototypeForm);
