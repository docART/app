import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPrototypeRequested } from '../../actions';

let SharePrototypeSecondForm = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <Field name="procedure" component="input" type="text" placeholder="Procedimiento" maxLength="256" required className="darker field w-input" />
        <Field name="schedule" component="input" type="text" placeholder="Cronograma" maxLength="256" required className="darker field w-input" />
        <Field name="needs" component="input" type="text" placeholder="Necesidades" maxLength="256" required className="darker field w-input" />
        <Field name="references" component="input" type="text" placeholder="Referencias" maxLength="256" required className="darker field w-input" />
        <Field name="video" component="input" type="text" placeholder="Video" maxLength="256" required className="darker field w-input" />
    
        <button className="button" type="submit">Dale</button>
    </form>
  );
};

export default reduxForm({
    form: 'edit prototype',
})(SharePrototypeSecondForm);

