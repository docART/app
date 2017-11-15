import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { createPrototypeRequested } from '../../actions';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

let PrototypeWizardPage2 = (props) => {
  const { handleSubmit, isPosting } = props;
  return (
    <Form onSubmit={ handleSubmit }>
        <FormGroup>
            <Label for="procedure">Procedimientos</Label>
            <Field name="procedure" id="procedure" component={Input} type="textarea" placeholder="Procedimientos" required  />
        </FormGroup>
        <FormGroup>
            <Label for="schedule">Cronograma</Label>
            <Field name="schedule" id="schedule" component={Input} type="textarea" placeholder="Cronograma" required  />
        </FormGroup>
        <FormGroup>
            <Label for="requirements">Requerimientos</Label>
            <Field name="requirements" id="requirements" component={Input} type="textarea" placeholder="Requerimientos" required  />
        </FormGroup>
        <FormGroup>
            <Label for="references">Referencias</Label>
            <Field name="references" id="references" component={Input} type="textarea" placeholder="Referencias" required  />
        </FormGroup>
        <FormGroup>
            <Label for="logo">Logo</Label>
            <Field name="logo" id="logo" component={Input} type="url" placeholder="Logo" required/>
        </FormGroup>
        <FormGroup>
            <Label for="video">Video</Label>
            <Field name="video" id="video" component={Input} type="url" placeholder="Video" required/>
        </FormGroup>
        <FormGroup>
            <Field component={Button} type="submit" disabled={isPosting}>Enviar</Field>
        </FormGroup>
    </Form>
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
