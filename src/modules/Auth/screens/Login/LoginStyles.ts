import styled from 'styled-components';

export const LoginContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background-color: black;
`;

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 35vw;
  height: 35vw;
  border-radius: 2vw;
  background-color: white;
`;

export const LoginTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: black;
  margin: 0px;
  margin-bottom: 12px;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 60%;
`;