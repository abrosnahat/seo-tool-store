import cn from 'classnames';
import React, { SyntheticEvent } from 'react';
import { TextField, TextFieldProps } from '../TextField';
import styles from './Textarea.module.scss';

interface TextareaProps extends Omit<TextFieldProps, 'children'> {
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: SyntheticEvent) => void;
  rows?: number;
  name?: string;
  value?: string | number;
  placeholder?: string;
  required?: boolean;
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    {
      className,
      onChange,
      onBlur,
      value,
      name,
      placeholder,
      startAdornment,
      endAdornment,
      rows,
      required,
      error,
      disabled,
    },
    ref
  ) {
    return (
      <TextField
        className={cn(styles.root, className)}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        error={error}
        disabled={disabled}
      >
        <textarea
          className={cn(styles.textarea)}
          ref={ref}
          rows={rows}
          name={name}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
        />
      </TextField>
    );
  }
);
