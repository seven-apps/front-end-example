import React, { useState } from 'react';
import { Button, Input } from 'core/components';
import {
  LoginContainer,
  LoginFormContainer,
  FormContainer,
  LoginTitle,
} from './LoginStyles';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <LoginContainer>
      <LoginFormContainer>
        <LoginTitle>Login</LoginTitle>
        <FormContainer>
          <Input
            type="e-mail"
            placeholder="E-mail"
            value={email}
            onChangeText={(text: string) => setEmail(text)}
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChangeText={(text: string) => setPassword(text)}
          />
          <Button text="Entrar" onClickMethod={() => { }} />
        </FormContainer>
      </LoginFormContainer>
    </LoginContainer>
  );
}