import React, { Component } from 'react'
import {Field, reduxForm} from 'redux-form';
 class StreamForm extends Component {

    renderError ({error, touched}){
        if(touched && error){
            return(
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }

    }
    renderInput = ({input, label, meta})=>  {
        const classname = `field ${meta.error && meta.touched ? 'error': ' ' }`
        return (
            <div className={classname}>
                    <label>{label}</label>
                      <input {...input}/>
                    {this.renderError(meta)}
            </div>

        )
    }
    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }
    render() {
        return (
            <form
            onSubmit={this.props.handleSubmit(this.onSubmit)} 
            className="ui form error">
                <Field name="title" component={this.renderInput} label="Enter Title" />
                <Field name="desp" component={this.renderInput} label="Enter Description"/>
            <button className="ui button primary">Submit</button>
            </form>
        )
    }
}
const validate = formValues => {
    const errors = {};
    if(!formValues.title){
        errors.title = "You must enter a title";
    }
    if(!formValues.desp){
        errors.desp = "You must enter a desription";
    }
    return errors;
}
export default reduxForm({
    form: 'streamform',
    validate
})(StreamForm);
