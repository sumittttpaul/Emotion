import { KeyboardEvent, ChangeEvent, FocusEvent } from 'react';

export interface IconNumberTextFieldProps {
  value: string;
  placeholder?: string;
  icon: string;
  type?: string;
  dataPhonecode?: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface IconPasswordTextFieldProps {
  value: string;
  placeholder: string;
  icon: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface IconTextFieldProps {
  value: string;
  placeholder?: string;
  icon: string;
  type?: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface NumberTextFieldProps {
  value: string;
  placeholder?: string;
  type?: string;
  dataPhonecode?: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface PlainTextFieldProps {
  value: string;
  placeholder: string;
  type: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface PasswordTextFieldProps {
  value: string;
  placeholder: string;
  error?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onFocus?: (event: FocusEvent<HTMLInputElement>) => void;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
}

export interface OTPTextFieldProps {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onkeyUp?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onkeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
  onKeyPress?: (event: KeyboardEvent<HTMLInputElement>) => void;
  className?: string;
}
