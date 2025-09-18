import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import InputField from './InputField';

test('renders label and helper text', () => {
  render(<InputField label="Email" helperText="We will never share" />);
  expect(screen.getByText('Email')).toBeInTheDocument();
  expect(screen.getByText('We will never share')).toBeInTheDocument();
});

test('clear button clears value', () => {
  render(<InputField showClear value="hello" onChange={() => {}} />);
  const clearBtn = screen.getByLabelText('clear input');
  fireEvent.click(clearBtn);
  const input = screen.getByRole('textbox');
  expect((input as HTMLInputElement).value).toBe('');
});
