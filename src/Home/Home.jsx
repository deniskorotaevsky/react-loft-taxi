import React from "react";
import { PropTypes } from 'prop-types'
import { withAuth } from "../AuthContext";
import logo from '../logo.png';
import s from './Home.module.css';
import { useContext } from 'react';
import AuthContext from '../AuthContext'

const Home = () => {

const {logIn, logOut} = useContext(AuthContext)

  const goToProfile = (event) => {
    event.preventDefault();
    props.navigate("profile");
  };

  const authenticate = (event) => {
    event.preventDefault();
    const { email, password } = event.target;
    props.logIn(email.value, password.value);
    props.setPage('map')
  };


    const { setPage } = props;
    return (
      <>
        {props.isLoggedIn ? (
          <p>
            You are logged in{" "}
            <button onClick={goToProfile}>
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
                  <button onClick={() => setPage('registration')} className={s.registrationBtn} type="submit">Зарегистрируйтесь</button>
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
  }


Home.propTypes = {
  isLoggedIn: PropTypes.bool,
  logIn: PropTypes.func,
  navigate: PropTypes.func,
};

export const HomeWithAuth = withAuth(Home);


















// import React from 'react';
// import logo from '../logo.png';
// import s from './Home.module.css';
// import { PropTypes } from 'prop-types';
// import { useEffect, useState } from 'react';
// import { withAuth } from "./AuthContext";

// const Home = (props) => {

//   const { setPage } = props;

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [emailDirty, setEmailDirty] = useState(false);
//   const [passwordDirty, setPasswordDirty] = useState(false);
//   const [emailError, setEmailError] = useState('Поле не может быть пустым');
//   const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
//   const [formValid, setFormValid] = useState(false);

//   useEffect(() => {
//     if (emailError || passwordError) {
//       setFormValid(false)
//     } else {
//       setFormValid(true)
//     }
//   }, [emailError, passwordError])

//   const emailHandler = (e) => {
//     setEmail(e.target.value)
//     const re =
//       /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//     if (!re.test(String(e.target.value).toLowerCase())) {
//       setEmailError('Некорректный емейл')
//     } else {
//       setEmailError('')
//     }
//   }

//   const blurHandler = (e) => {
//     switch (e.target.name) {
//       case 'email':
//         setEmailDirty(true)
//         break
//       case 'password':
//         setPasswordDirty(true)
//         break
//     }
//   }

//   const passwordHandler = (e) => {
//     setPassword(e.target.value)
//     if (e.target.value.length < 7) {
//       console.log(e.target.value.length)
//       setPasswordError('Пароль сдолжен содержать более 3 и меньше 8')
//       if (!e.target.value) {
//         setPasswordError('Поле не может быть пустым')
//       }
//     } else {
//       setPasswordError('')
//     }
//   }

//   return (
//     <div className={s.home}>
//       <div className={s.home_logo}>
//         <img src={logo} alt="logo" />
//       </div>
//       <div className={s.home_form}>
//         <div className={s.home_pole}>
//           <h1>Войти</h1>
//           <div className={s.home_newUser}>
//             <p>Новый пользователь?</p>
//             <button className={s.registrationBtn} type="submit" onClick={() => setPage('registration')}>Зарегистрируйтесь</button>
//           </div>
//           <form onSubmit={() => setPage('map')} >
//             <div>
//               <label>
//                 <p>Имя пользователя*</p>
//                 <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type='text' name="email" />
//                 {(emailDirty && emailError) && <div className={s.warning}></div>}
//               </label>
//             </div>
//             <div>
//               <label>
//                 <p>Пароль*</p>
//                 <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type='password' name="password" />
//                 {(passwordError && passwordDirty) && <div className={s.warning}></div>}
//               </label>
//             </div>
//             <button disabled={!formValid} className={s.comeInBtn} type="submit">Войти</button>
//           </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// Home.propTypes = {
//   setPage: PropTypes.func
// }

// export const HomeWithAuth = withAuth(Home);