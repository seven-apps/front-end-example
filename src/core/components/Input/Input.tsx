import React from 'react';
import {
  InputContainer
} from './InputStyles';


interface IProps {
  value: string;
  type: string;
  secureText?: boolean;
  placeholder?: string;
  onChangeText(text: string): void;
}

export const Input = (props: IProps) => {
  const { onChangeText, placeholder, value, type } = props;
  return (
    <InputContainer
      onChange={event => onChangeText(event.target.value)}
      value={value}
      placeholder={placeholder}
      type={type}
    />
  )
}