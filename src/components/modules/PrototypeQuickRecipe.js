import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Header from './Navbar';
import { updatePrototypeRequested } from '../../actions';
import { Button, Form, FormGroup, Label, FormText } from 'reactstrap';

let PrototypeQuickRecipe = ({handleSubmit, match, isPosting}) => {
    return (
        <div>
            <Header match={match} />
            <div className="form section">
                <div className="w-container">
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
                            <Field name="summary" id="summary" component="textarea" className="form-control" placeholder="Resumen" required  />
                        </FormGroup>
                        <FormGroup>
                            <Label for="motivations">Motivaciones</Label>
                            <Field name="motivations" id="motivations" component="textarea" className="form-control" placeholder="Motivaciones" required />
                        </FormGroup>
                        <FormGroup>
                            <Label for="team">Equipo</Label>
                            <Field name="team" component="textarea" className="form-control" placeholder="Equipo"/>
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
                            <Field name="video" id="video" component="input" className="form-control" type="url" placeholder="Video" required/>
                        </FormGroup>
                        <Button type="submit" color="primary" disabled={isPosting}>Update</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    isPosting: state.prototypes.isPosting,
    initialValues: state.prototypes.items[ownProps.match.params.name]
 });

export default connect(mapStateToProps)(reduxForm({
    form: 'edit prototype',
    onSubmit: (values, dispatch) => {
        dispatch(updatePrototypeRequested(values));
      }
})(PrototypeQuickRecipe));
