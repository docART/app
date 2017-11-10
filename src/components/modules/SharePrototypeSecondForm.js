import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPrototypeRequested } from '../../actions';

let SharePrototypeSecondForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <Field name="procedimiento" component="input" type="text" placeholder="Título" maxLength="256" required className="darker field w-input" />
        <Field name="" component="input" type="text" placeholder="Apodo" maxLength="256" required className="darker field w-input" />

        <button className="button" type="submit">Dale</button>
    </form>
  );
};

export default reduxForm({
    form: 'edit prototype',
})(SharePrototypeSecondForm);
