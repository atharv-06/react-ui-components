import React from 'react';
import { Meta, Story } from '@storybook/react';
import InputField, { InputFieldProps } from './InputField';

export default {
  title: 'Components/InputField',
  component: InputField,
  args: {
    label: 'Full name',
    placeholder: 'Enter your name',
    helperText: 'Helper text example',
    variant: 'outlined',
    size: 'md',
  },
} as Meta;

const Template: Story<InputFieldProps> = (args) => <InputField {...args} />;

export const Default = Template.bind({});

export const Filled = Template.bind({});
Filled.args = { variant: 'filled' };

export const WithError = Template.bind({});
WithError.args = { invalid: true, errorMessage: 'Invalid value' };

export const PasswordToggle = Template.bind({});
PasswordToggle.args = { type: 'password', showPasswordToggle: true };

export const Clearable = Template.bind({});
Clearable.args = { showClear: true, value: 'Some text' };
