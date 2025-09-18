import React, { useState } from 'react';

export interface InputFieldProps {
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  helperText?: string;
  errorMessage?: string;
  disabled?: boolean;
  invalid?: boolean;
  variant?: 'filled' | 'outlined' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  showClear?: boolean;
  showPasswordToggle?: boolean;
  type?: string;
}

const sizeClasses: Record<NonNullable<InputFieldProps['size']>, string> = {
  sm: 'px-2 py-1 text-sm rounded-md',
  md: 'px-3 py-2 text-base rounded-lg',
  lg: 'px-4 py-3 text-lg rounded-xl',
};

const variantClasses = {
  filled: 'bg-gray-100 dark:bg-gray-800 border border-transparent',
  outlined: 'bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700',
  ghost: 'bg-transparent border border-transparent',
};

export const InputField: React.FC<InputFieldProps> = ({
  value,
  onChange,
  label,
  placeholder,
  helperText,
  errorMessage,
  disabled = false,
  invalid = false,
  variant = 'outlined',
  size = 'md',
  showClear = false,
  showPasswordToggle = false,
  type = 'text',
}) => {
  const [internalValue, setInternalValue] = useState(value ?? '');
  const [showPassword, setShowPassword] = useState(false);

  React.useEffect(() => setInternalValue(value ?? ''), [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInternalValue(e.target.value);
    onChange?.(e);
  };

  const inputType = type === 'password' && showPasswordToggle ? (showPassword ? 'text' : 'password') : type;

  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
          {label}
        </label>
      )}

      <div className={`relative flex items-center ${disabled ? 'opacity-60' : ''}`}>
        <input
          aria-invalid={invalid}
          aria-disabled={disabled}
          aria-label={label ?? placeholder ?? 'input'}
          className={
            `w-full ${sizeClasses[size]} ${variantClasses[variant]} ` +
            `${invalid ? 'border-red-400 focus:ring-red-500' : 'focus:border-indigo-500 focus:ring-indigo-500'} ` +
            `focus:outline-none transition-shadow duration-150`
          }
          placeholder={placeholder}
          value={internalValue}
          onChange={handleChange}
          disabled={disabled}
          type={inputType}
        />

        {showClear && !disabled && internalValue && (
          <button
            aria-label="clear input"
            onClick={() => {
              setInternalValue('');
              onChange?.({} as any);
            }}
            className="absolute right-2"
            type="button"
          >
            ✕
          </button>
        )}

        {showPasswordToggle && type === 'password' && (
          <button
            aria-label={showPassword ? 'hide password' : 'show password'}
            onClick={() => setShowPassword((s) => !s)}
            type="button"
            className="absolute right-2"
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>

      <div className="mt-1 min-h-[1rem]">
        {invalid && errorMessage ? (
          <p className="text-sm text-red-600" role="alert">
            {errorMessage}
          </p>
        ) : helperText ? (
          <p className="text-sm text-gray-500 dark:text-gray-400">{helperText}</p>
        ) : null}
      </div>
    </div>
  );
};

export default InputField;
