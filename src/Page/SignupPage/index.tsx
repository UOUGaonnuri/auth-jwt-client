import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RegisterForm } from "@/Data/Type/Auth";
import { ButtonContainer } from "@/Styles/Buttons/styles";
import {
  CommonButton,
  FormInput,
  FormInputButton,
  SignupContainer,
  SignupForm,
  Title,
} from "./styles";
import { registerRequest } from "@/Service/Auth";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "username") {
      setUsername(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    } else if (target.name === "email") {
      setUserEmail(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const registerForm: RegisterForm = {
      userName: username,
      userEmail: userEmail,
      password: password,
    };

    registerRequest(registerForm)
      .then(() => {
        alert("회원 가입에 성공하였습니다.");
        navigate("/");
      })
      .catch(() => {
        alert("회원 가입에 실패하였습니다.0");
      });
  };

  return (
    <SignupContainer>
      <Title>Sign Up</Title>
      <SignupForm onSubmit={onSubmit}>
        <FormInput
          name="email"
          type="text"
          placeholder="Email"
          onChange={onChangeInput}
          pattern="[a-z0-9]+@[a-z]+.[a-z]{2,3}"
          value={userEmail}
          required
        />
        <FormInput
          name="username"
          type="text"
          placeholder="Username"
          onChange={onChangeInput}
          value={username}
          required
        />
        <FormInput
          name="password"
          type="password"
          placeholder="Password"
          onChange={onChangeInput}
          value={password}
          required
        />
        <ButtonContainer>
          <FormInputButton type="submit" value="Sign Up" />
          <CommonButton onClick={() => navigate("/")}>Cancel</CommonButton>
        </ButtonContainer>
      </SignupForm>
    </SignupContainer>
  );
};

export default SignupPage;
