import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import Navbar from './Navbar';
import { updatePrototypeRequested } from '../../actions';

let PrototypeQuickRecipe = ({handleSubmit, match, isPosting}) => {
    return (
        <div>
            <Navbar match={match} />
            <div className="form section">
                <div className="w-container">
                    <form onSubmit={ handleSubmit }>
                        <Field name="title" component="input" type="text" placeholder="Título" maxLength="256" required className="darker field w-input" />
                        <Field name="nick" component="input" type="text" placeholder="Apodo" maxLength="256" required className="darker field w-input" />
                        <Field name="summary" component="textarea" placeholder="Resumen" required className="darker field w-input" />
                        <Field name="motivations" component="textarea" placeholder="Motivaciones" required className="darker field w-input" />
                        <Field name="team" component="textarea" type="" placeholder="Equipo" required className="darker field w-input" />
                        <Field name="promoter" component="input" type="text" placeholder="Promotor" maxLength="256" required className="darker field w-input" />
                        <Field name="email" component="input" type="email" placeholder="Correo electrónico" maxLength="256" required className="darker field w-input" />
                        <Field name="license" component="select" required className="darker field w-input">
                            <option></option>
                            <option>GNU Free Documentation License</option>
                            <option>Creative Commons Zero v1.0 Universal</option>
                            <option>Creative Commons Attribution 4.0</option>
                            <option>Creative Commons Attribution Share Alike 4.0</option>
                        </Field>
                        <Field name="procedure" component="textarea" placeholder="Procedimiento"  required className="darker field w-input" />
                        <Field name="schedule" component="textarea" placeholder="Cronograma"  required className="darker field w-input" />
                        <Field name="requirements" component="textarea" placeholder="Necesidades"  required className="darker field w-input" />
                        <Field name="references" component="textarea" placeholder="Referencias"  required className="darker field w-input" />
                        <Field name="logo" component="input" type="url" placeholder="Logo" className="darker field w-input" />
                        <Field name="video" component="input" type="url" placeholder="Video" maxLength="256" className="darker field w-input" />
                        <button className="button form w-button" type="submit" disabled={isPosting}>Dale</button>
                    </form>
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


