import cn from 'classnames';
import React, { SyntheticEvent } from 'react';
import { TextField, TextFieldProps } from '../TextField';
import styles from './Input.module.scss';

export interface InputPropsBase {
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: SyntheticEvent) => void;
  name?: string;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
}

interface InputProps extends Omit<TextFieldProps, 'children'>, InputPropsBase {
  type?: 'text' | 'password' | 'email' | 'file' | 'tel' | 'number';
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    {
      className,
      type,
      onChange,
      onInput,
      onBlur,
      value,
      name,
      placeholder,
      startAdornment,
      endAdornment,
      required,
      error,
      disabled,
    },
    ref
  ) {
    return (
      <TextField
        className={className}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        error={error}
        disabled={disabled}
      >
        <input
          className={cn(styles.input)}
          ref={ref}
          type={type}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onInput={onInput}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      </TextField>
    );
  }
);
