import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPrototypeRequested } from '../../actions';

let PrototypeWizardPage2 = (props) => {
  const { handleSubmit, isPosting } = props;
  return (
    <form onSubmit={ handleSubmit }>
        <Field name="procedure" component="textarea" placeholder="Procedimiento"  required className="darker field w-input" />
        <Field name="schedule" component="textarea" placeholder="Cronograma"  required className="darker field w-input" />
        <Field name="requirements" component="textarea" placeholder="Necesidades"  required className="darker field w-input" />
        <Field name="references" component="textarea" placeholder="Referencias"  required className="darker field w-input" />
        <Field name="logo" component="input" type="url" placeholder="Logo" className="darker field w-input" />
        <Field name="video" component="input" type="url" placeholder="Video" maxLength="256" className="darker field w-input" />
        <button className="button form w-button" type="submit" disabled={isPosting}>Dale</button>
    </form>
  );
};

const mapStateToProps = (state) => ({
   isPosting: state.prototypes.isPosting
});

export default connect(mapStateToProps)(reduxForm({
    form: 'share prototype',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
    onSubmit: (values, dispatch) => {
      dispatch(createPrototypeRequested(values));
    }
})(PrototypeWizardPage2));
