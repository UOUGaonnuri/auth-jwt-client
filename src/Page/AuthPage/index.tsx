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
import { useDispatch } from "react-redux";
import { login_success } from "@/Data/Slices/AuthReducer";

const AuthPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onChangeInput = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (target.name === "email") {
      setUserEmail(target.value);
    } else if (target.name === "password") {
      setPassword(target.value);
    }
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const loginForm: LoginForm = {
      userEmail: userEmail,
      password: password,
    };

    loginRequest(loginForm)
      .then((res) => {
        alert("로그인 되었습니다.");
        dispatch(login_success(res.data));
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
          name="email"
          type="text"
          placeholder="Email"
          onChange={onChangeInput}
          value={userEmail}
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
