import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

let PrototypeWizardPage1 = (props) => {
  const { handleSubmit } = props;
  return (
    <Form onSubmit={ handleSubmit }>
        <FormGroup>
            <Label for="title">Título</Label>
            <Field name="title" id="title" component="input" className="form-control" type="text" placeholder="Título" maxLength="256" required/>
        </FormGroup>
        <FormGroup>
            <Label for="nick">Apodo</Label>
            <Field name="nick" id="nick" component="input" className="form-control" type="text" placeholder="Apodo" maxLength="256" required/>
        </FormGroup>
        <FormGroup>
            <Label for="summary">Resumen</Label>
            <Field name="summary" id="summary" component="input" className="form-control" type="textarea" placeholder="Resumen" required  />
        </FormGroup>
        <FormGroup>
            <Label for="motivations">Motivaciones</Label>
            <Field name="motivations" id="motivations" component="input" className="form-control" type="textarea" placeholder="Motivaciones" required />
        </FormGroup>
        <FormGroup>
            <Label for="team">Equipo</Label>
            <Field name="team" component="input" className="form-control" type="textarea" placeholder="Equipo"/>
        </FormGroup>
        <FormGroup>
            <Label for="promoter">Promotor</Label>
            <Field name="promoter" id="promoter" component="input" className="form-control" type="text" placeholder="Promotor" maxLength="256" required />
        </FormGroup>
        <FormGroup>
            <Label for="email">Email</Label>
            <Field name="email" id="email" component="input" className="form-control" type="email" placeholder="Email" maxLength="256" required />
        </FormGroup>
        <FormGroup>
            <Label for="select">Select</Label>
            <Field name="select" id="select" component="input" className="form-control" type="select" required>
            <option></option>
            <option>GNU Free Documentation License</option>
            <option>Creative Commons Zero v1.0 Universal</option>
            <option>Creative Commons Attribution 4.0</option>
            <option>Creative Commons Attribution Share Alike 4.0</option>
            </Field>
        </FormGroup>
        <FormGroup>
            <Field component={Button} type="submit">Siguiente</Field>
        </FormGroup>
    </Form>
  );
};

export default reduxForm({
    form: 'share prototype',
    destroyOnUnmount: false,
    forceUnregisterOnUnmount: true,
})(PrototypeWizardPage1);
