import {Component } from 'react'
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
        
                    <p>Войти</p>
                    <div className={s.login_newUser}>
                      Новый пользователь?
                      <button className={s.registrationBtn} type="submit" onClick={() => setPage('registration')}>Зарегистрируйтесь</button>
                    </div>
        
                    <form onSubmit={() => setPage('map')} >
                      <div>
                        <label>
                          Имя пользователя*
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


//     import {Component } from 'react'

// class Login extends Component {
//     render() {
//         const { setPage } = this.props;
//         return (
//             <form onSubmit={() => setPage('map')} >
//                 <input name='login' />
//                 <input name='password' />
//                 <button type='submit'>Войти</button>
//                 <button onClick={() => setPage('registration')}>Зарегестрироваться</button>
//             </form >
//         )
//     }
// }