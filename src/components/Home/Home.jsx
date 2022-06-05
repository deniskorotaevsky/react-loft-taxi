import React from "react";
import { PropTypes } from 'prop-types'
import { AuthContext } from "../../contexts/AuthContext";
import logo from '../../logo.png';
import s from './Home.module.css';
import { useContext } from "react";

export const Home = (props) => {

  const { logIn, isLoggedIn } = useContext(AuthContext)

  const goToProfile = () => {
    props.navigate("profile");
  };

  const registration = () => {
    props.navigate("registration");
  }

  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    logIn(email.value, password.value);
  };

  return (
    <>
      {isLoggedIn ? (
        <p>
          You are logged in <button onClick={goToProfile}>
            go to profile
          </button>
        </p>
      ) : (
        <div className={s.home}>
          <div className={s.home_logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className={s.home_form}>
            <div className={s.home_pole}>
              <h1>Войти</h1>
              <div className={s.home_newUser}>
                <p>Новый пользователь?</p>
                <button onClick={() => {}} className={s.registrationBtn} type="submit">Зарегистрируйтесь</button>
              </div>
              <form onSubmit={authenticate}>
                <div>
                  <label>
                    <p>Имя пользователя*</p>
                    <input id="email" type='text' name="email" size="28" />
                  </label>
                </div>
                <div>
                  <label>
                    <p>Пароль*</p>
                    <input id="password" type='password' name="password" size="28" />

                  </label>
                </div>
                <button className={s.comeInBtn} type="submit">Войти</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );

};

Home.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export default Home;