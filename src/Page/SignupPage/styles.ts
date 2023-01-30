import styled from "styled-components";
import { ButtonCSS } from "@/Styles/Buttons/styles";
import { Container } from "@/Styles/Container/styles";

export const SignupContainer = styled(Container)`
  background-color: #effbfb;
`;

export const Title = styled.h1`
  margin-bottom: 10px;
  color: #000;
`;

export const SignupForm = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 1.3rem;
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
`;
export const FormInput = styled.input`
  width: 100%;
  padding: 10px 13px;
  margin-bottom: 10px;
  border-radius: 10px;
  text-align: center;
  background-color: #ffffff;
  color: #000;
`;

export const FormInputButton = styled.input`
  ${ButtonCSS}
`;

export const CommonButton = styled.button`
  ${ButtonCSS}
`;
