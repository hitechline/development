import { SubmitHandler, FormProps as UnformProps } from '@unform/core';
import React from 'react';

interface FormProps extends UnformProps {
  scrollOnError?: boolean;
  handleSubmit: SubmitHandler;
}

const FormComponent: React.FC<FormProps> = () => <h1>Form</h1>;

export default FormComponent;
