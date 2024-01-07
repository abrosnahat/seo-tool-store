'use client';

import cn from 'classnames';
import Image from 'next/image';
import React from 'react';
import styles from './Checkbox.module.scss';
import CheckIcon from './img/check.svg';

interface CheckboxProps {
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  label?: string | number;
  labelPosition?: 'left' | 'right';
  defaultChecked?: boolean;
  required?: boolean;
  name?: string;
  id?: string;
  disabled?: boolean;
  value?: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  type = 'checkbox',
  checked,
  onChange,
  className,
  label,
  labelPosition = 'right',
  defaultChecked,
  required,
  name,
  id,
  disabled,
}) => {
  return (
    <label className={cn(styles.root, disabled && styles.disabled, className)}>
      <input
        className={cn(styles.input, checked && styles.checked)}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        checked={checked}
        defaultChecked={defaultChecked}
        required={required}
        disabled={disabled}
        hidden
      />
      <span className={cn(styles[type])}>
        {type === 'checkbox' && (
          <Image
            src={CheckIcon}
            className={styles.icon}
            alt='Check icon'
          />
        )}
      </span>
      {label && (
        <span
          className={cn(
            styles.label,
            disabled && styles.disabled,
            labelPosition === 'left' && styles.leftLabel
          )}
        >
          {label}
        </span>
      )}
    </label>
  );
};
