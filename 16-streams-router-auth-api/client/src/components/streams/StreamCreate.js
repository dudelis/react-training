import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {connect} from 'react-redux';

import {createStream} from '../../actions';

class StreamCreate extends Component {

  renderInput({input, label, meta: {touched, error}}){
    return (
      <div className={`field ${touched && error ? 'error' : ''}`}>
        <label htmlFor={label}>{label}:</label>
        <input {...input} placeholder={label} autoComplete="off"/>
        {touched && (error && <div className="ui basic red pointing prompt label transition visible">{error}</div>)}
      </div>
      
    )
  }
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <form className="ui form error" onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Field name="title" component={this.renderInput} type="text" label="Title" />
        <Field name="description" component={this.renderInput} type="text" label="Description" />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}
const validate = values => {
  const errors = {};
  if (!values.title){
    errors.title = 'Required!'
  }
  if (!values.description){
    errors.description = 'Required!'
  }
  return errors;
}

const formWrapped = reduxForm({
  form:'streamCreate',
  validate
})(StreamCreate)

export default connect(null, {
  createStream
})(formWrapped);
