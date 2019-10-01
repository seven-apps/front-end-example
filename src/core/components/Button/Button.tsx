import React from 'react';
import { ButtonContainer } from './ButtonStyle';

interface IProps {
  onClickMethod(): void;
  text: string;
}

export const Button = (props: IProps) => {
  const { onClickMethod, text } = props;
  return (
    <ButtonContainer onClick={onClickMethod}>
      {text}
    </ButtonContainer>
  )
}