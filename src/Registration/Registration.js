import { Component } from 'react'
import logo from '../logo.png';
import s from './Registration.module.css';

class Registration extends Component {

    render() {
        const { setPage } = this.props;
        return (
            <div className={s.registration}>

                <div className={s.registration_logo}>
                    <img src={logo} alt="logo" />
                </div>

                <div className={s.registration_form}>
                    <div className={s.registration_pole}>

                        <p>Регистрация</p>
                        <div className={s.registration_newUser}>
                            Уже зарегистрирован?
                            <button className={s.registrationBtn} type="submit" onClick={() => setPage('login')}>Войти</button>
                        </div>

                        <form onSubmit={() => setPage('map')} >
                            <div>
                                <label>
                                    Адрес электронной почты*
                                    <input type='mail' name="mail" />
                                </label>
                            </div>
                            <div className={s.registration_userName}>
                                <div>
                                    <label>
                                        <p>Имя*</p>
                                        <input type='text' name="text" />
                                    </label>
                                </div>
                                <div>
                                    <label>
                                        <p>Фамилия</p>
                                        <input type='text' name="text" />
                                    </label>
                                </div>
                            </div>
                            <div>
                                <label>
                                    <p>Пароль*</p>
                                    <input type='password' name="password" />
                                </label>
                            </div>
                            <button className={s.comeInBtn} type="submit">Зарегистрироваться</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Registration;