import { ButtonContainer } from "@/Styles/Buttons/styles";
import {
  AuthContainer,
  AuthForm,
  CommonButton,
  FormInput,
  FormInputButton,
  Title,
} from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginForm } from "@/Data/Type/Auth";
import { loginRequest } from "@/Service/Auth";

const AuthPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "username") {
      setUsername(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginForm: LoginForm = {
      userName: username,
      password: password,
    };

    loginRequest(loginForm)
      .then((res) => {
        alert("로그인 되었습니다.");
        window.location.reload();
      })
      .catch(() => {
        alert("로그인 과정에서 에러가 발생했습니다. ");
      });
  };

  return (
    <AuthContainer>
      <Title> Hello</Title>
      <AuthForm onSubmit={onSubmit}>
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
          <FormInputButton type="submit" value="Sign In" />
          <CommonButton onClick={() => navigate("/signup")}>
            Sign Up
          </CommonButton>
        </ButtonContainer>
      </AuthForm>
    </AuthContainer>
  );
};
export default AuthPage;
