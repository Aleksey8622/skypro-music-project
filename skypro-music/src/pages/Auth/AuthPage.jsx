import { Link, useNavigate } from "react-router-dom";
import * as S from "./AuthPage.styles";
import { useContext, useEffect, useState } from "react";
import { loginUser, registerUser } from "../../api/auth";
import { getUserToken } from "../../api/auth";
import { AuthContext } from "../../store/AuthContext";
export default function AuthPage({ isLoginMode = false }) {
  const { login, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  // const checkValidation = () => {

  //   return
  // };

  const handleLogin = async ({ email, password }) => {
    if (email === "" && password === "") {
      setError("Заполните почту и пароль");
      return;
    }

    if (email === "") {
      setError("Заполните почту");
      return;
    }
    if (password === "") {
      setError("Заполните пароль");
      return;
    }
    const userData = await loginUser({ email, password });
    console.log(userData);
    login(userData);
    navigate("/");
    setError("Неизвестная ошибка входа");
  };

  const handleRegister = async () => {
    if (email === "" && password === "") {
      setError("Заполните почту и пароль");
      return;
    }

    if (email === "") {
      setError("Заполните почту");
      return;
    }
    if (password === "") {
      setError("Заполните пароль");
      return;
    }

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    const user = await registerUser({ email, password, username: email });

    const token = await getUserToken({ email, password });
    console.log(token);
    login(user);
    navigate("/");

    // setError("Неизвестная ошибка регистрации");
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  // Сбрасываем ошибку если пользователь меняет данные на форме или меняется режим формы
  useEffect(() => {
    setError(null);
  }, [isLoginMode, email, password, repeatPassword]);

  return (
    <S.PageContainer>
      <S.ModalForm>
        <Link to="/login">
          <S.ModalLogo>
            <S.ModalLogoImage src="/img/logo_modal.png" alt="logo" />
          </S.ModalLogo>
        </Link>
        {isLoginMode ? (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={() => handleLogin({ email, password })}>
                Войти
              </S.PrimaryButton>
              <Link to="/register">
                <S.SecondaryButton>Зарегистрироваться</S.SecondaryButton>
              </Link>
            </S.Buttons>
          </>
        ) : (
          <>
            <S.Inputs>
              <S.ModalInput
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              />
              <S.ModalInput
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(event) => {
                  setRepeatPassword(event.target.value);
                }}
              />
            </S.Inputs>
            {error && <S.Error>{error}</S.Error>}
            <S.Buttons>
              <S.PrimaryButton onClick={handleRegister}>
                Зарегистрироваться
              </S.PrimaryButton>
            </S.Buttons>
          </>
        )}
      </S.ModalForm>
    </S.PageContainer>
  );
}
