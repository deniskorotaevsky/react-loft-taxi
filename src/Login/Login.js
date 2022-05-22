// import { Component } from 'react'
import logo from '../logo.png';
import s from './Login.module.css';
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

const Login = (props) => {

  const { setPage } = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailDirty, setemailDirty] = useState(false);
  const [passwordDirty, setpasswordDirty] = useState(false);
  const [emailError, setemailError] = useState('Eмеил не может быть пустым');
  const [passwordError, setpasswordError] = useState('Пароль не может быть пустым');
  const [formValid, setformValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setformValid(false)
    } else {
      setformValid(true)
    }
  })

  const emailHandler = (e) => {
    setEmail(e.target.value)
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setemailError('Некорректный емейл')
    } else {
      setemailError('')
    }
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case 'email':
        setemailDirty(true)
        break
      case 'password':
        setpasswordDirty(true)
        break
    }
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value)
    if (e.target.value.length < 3 || e.target.value.length > 8) {
      setpasswordError('Пароль сдолжен содержать более 3 и меньше 8')
      if (!e.target.value) {
        setpasswordError('Пароль сдолжен содержать более 3 и меньше 8')
      }
    } else {
      setpasswordError('')
    }
  }

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
                <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type='text' name="login" />
              </label>
            </div>
            <div>
              <label>
                <p>Пароль*</p>
                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type='password' name="password" />
              </label>
            </div>
            <button disabled={!formValid} className={s.comeInBtn} type="submit">Войти</button>
          </form>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {
  setPage: PropTypes.func
}

export default Login;