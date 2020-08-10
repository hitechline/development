import React, { forwardRef, RefForwardingComponent } from 'react';
import { Form } from '@unform/web';
import { ValidationError } from 'yup';
import { FormHandles, Omit, FormProps as UnformProps } from '@unform/core';

interface FormProps extends Omit<UnformProps, 'ref' | 'onSubmit'> {
  scrollOnError?: boolean;
  handleSubmit: UnformProps['onSubmit'];
}

export const MyComponent: <T = any>(p: FormProps) => React.FC = props => {
  return <div>Hello Typescript</div>;
};

export const FormComponent: RefForwardingComponent<FormHandles, FormProps> = (
  { handleSubmit: defaultSubmit, scrollOnError = false, children, ...rest },
  formRef,
) => {
  function handleSubmit(data: any, ): void {
    try {
    } catch (e) {
    } finally {
    }
  }

  return (
    <Form ref={formRef} onSubmit={handleSubmit} {...rest}>
      {children}
    </Form>
  );
};

export default MyComponent
