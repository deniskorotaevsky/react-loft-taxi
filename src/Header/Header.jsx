import React from "react";
import logo from '../logo.png';
import s from './Header.module.css';



class Header extends React.Component {

  handleSubmit = event => {
    event.preventDefault()

    const userName = event.target.userName.value;
    const userPass = event.target.userPass.value;

    console.log(userPass, userName)

  }


  render() {
    return (
      <header className={s.header}>

        <div className={s.header_logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={s.header_form}>
          <div className={s.header_pole}>

            <p>Войти</p>
            <div className={s.header_newUser}>
              Новый пользователь?
              <button className={s.registrationBtn} type="submit" value='Submit'>Зарегистрируйтесь</button>
            </div>

            <form onSubmit={this.handleSubmit} className={s.form} action="#">
              <div>
                <label>
                  Имя пользователя*
                  <input type='text' name="userName" />
                </label>
              </div>

              <div>
                <label>
                  <p>Пароль*</p>
                  <input type='password' name="userPass" />
                </label>
              </div>

              <button className={s.comeInBtn} type="submit" value='Submit'>Войти</button>
            </form>
          </div>
        </div>
      </header>


    )
  }
}

export default Header;
