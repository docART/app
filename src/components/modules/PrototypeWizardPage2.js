import React from 'react';
import {connect} from 'react-redux';
import {Button, Form, FormGroup, Label} from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import {createPrototypeRequested} from '../../actions';


let PrototypeWizardPage2 = (props) => {
    const {handleSubmit, isPosting} = props;
    return (
        <Form onSubmit={handleSubmit}>
            <h1>Compartir Prototipo</h1>
            <FormGroup>
                <Label for="procedure">Procedimientos</Label>
                <Field name="procedure" id="procedure" component="textarea" className="form-control" placeholder="Procedimientos" required  />
            </FormGroup>
            <FormGroup>
                <Label for="schedule">Cronograma</Label>
                <Field name="schedule" id="schedule" component="textarea" className="form-control" placeholder="Cronograma" required  />
            </FormGroup>
            <FormGroup>
                <Label for="requirements">Requerimientos</Label>
                <Field name="requirements" id="requirements" component="textarea" className="form-control" placeholder="Requerimientos" required  />
            </FormGroup>
            <FormGroup>
                <Label for="references">Referencias</Label>
                <Field name="references" id="references" component="textarea" className="form-control" placeholder="Referencias" required  />
            </FormGroup>
            <FormGroup>
                <Label for="logo">Logo</Label>
                <Field name="logo" id="logo" component="input" className="form-control" type="url" placeholder="Logo" required/>
            </FormGroup>
            <FormGroup>
                <Label for="video">Video</Label>
                <Field name="video" id="video" component="input" className="form-control" type="url" placeholder="Video"/>
            </FormGroup>
            <Button type="submit" color="primary" disabled={isPosting}>Enviar</Button>
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
