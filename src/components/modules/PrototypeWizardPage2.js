import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { createPrototypeRequested } from '../../actions';

let PrototypeWizardPage2 = (props) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <Field name="procedure" component="textarea" placeholder="Procedimiento"  required className="darker field w-input" />
        <Field name="schedule" component="textarea" placeholder="Cronograma"  required className="darker field w-input" />
        <Field name="requirements" component="textarea" placeholder="Necesidades"  required className="darker field w-input" />
        <Field name="references" component="textarea" placeholder="Referencias"  required className="darker field w-input" />
        <Field name="logo" component="input" type="url" placeholder="Logo" className="darker field w-input" />
        <Field name="video" component="input" type="url" placeholder="Video" maxLength="256" className="darker field w-input" />
    
        <button className="button" type="submit">Dale</button>
    </form>
  );
};

export default reduxForm({
    form: 'share prototype', 
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    onSubmit: (values, dispatch) => {
      dispatch(createPrototypeRequested(values));
  }
})(PrototypeWizardPage2);
