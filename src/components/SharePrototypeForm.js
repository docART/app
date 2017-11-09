import React from 'react';
import { Field, reduxForm } from 'redux-form';

let SharePrototypeForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
      <p>
        <label htmlFor="name">Título</label>
        <Field name="name" component="input" type="text" />
      </p>
      <p>
        <label htmlFor="nick">Apodo</label>
        <Field name="nick" component="input" type="text" />
      </p>
      <p>
        <label htmlFor="summary">Resumen</label>
        <Field name="summary" component="textarea" type="text" />
      </p>
      <p>
        <label htmlFor="motivation">Motivaciones</label>
        <Field name="motivation" component="textarea" type="text" />
      </p>
      <p>
        <label htmlFor="team">Equipo</label>
        <Field name="team" component="textarea" type="text" />
      </p>
      <p>
        <label htmlFor="promoter">Promotor</label>
        <Field name="team" component="input" type="text" />
      </p>
      <p>
        <label htmlFor="email">Correo electrónico</label>
        <Field name="email" component="input" type="email" />
      </p>
      <p>
        <label htmlFor="license">Licenciar</label>
        <Field name="license" component="select" type="text" />
      </p>
    </form>
  );
};

export default reduxForm({
  form: 'share prototype'
})(SharePrototypeForm);
