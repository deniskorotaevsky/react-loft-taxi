import { Component } from 'react'
import logo from '../logo.png';
import s from './Login.module.css';

class Login extends Component {

  render() {
    const { setPage } = this.props;

    return (
      <div className={s.login}>
        <div className={s.login_logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={s.login_form}>
          <div className={s.login_pole}>
            <h1>Войти</h1>
            <div className={s.login_newUser}>
              <p>Новый пользователь?</p>
              <button className={s.registrationBtn} type="submit" onClick={() => setPage('registration')}>Зарегистрируйтесь</button>
            </div>
            <form onSubmit={() => setPage('map')} >
              <div>
                <label>
                  <p>Имя пользователя*</p>
                  <input type='text' name="login" />
                </label>
              </div>
              <div>
                <label>
                  <p>Пароль*</p>
                  <input type='password' name="password" />
                </label>
              </div>
              <button className={s.comeInBtn} type="submit">Войти</button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;