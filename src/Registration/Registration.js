// import logo from '../logo.png';
// import s from './Registration.module.css';
// import { PropTypes } from 'prop-types';
// import { useEffect, useState } from 'react';
// import { withAuth } from './AuthContext';

// const Registration = (props) => {

//     const { setPage } = props;

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [name, setName] = useState('');
//     const [surname, setSurname] = useState('');

//     const [emailDirty, setEmailDirty] = useState(false);
//     const [passwordDirty, setPasswordDirty] = useState(false);
//     const [nameDirty, setNameDirty] = useState(false);
//     const [surnameDirty, setSurnameDirty] = useState(false);

//     const [emailError, setEmailError] = useState('Поле не может быть пустым');
//     const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
//     const [nameError, setNameError] = useState('Заполните поле');
//     const [surnameError, setSurnameError] = useState('Заполните поле!');

//     const [formValid, setFormValid] = useState(false);


//     useEffect(() => {
//         if (emailError || passwordError || nameError || surnameError) {
//             setFormValid(false)
//         } else {
//             setFormValid(true)
//         }
//     }, [emailError, passwordError, nameError, surnameError]);

//     const emailHandler = (e) => {
//         setEmail(e.target.value)
//         const re =
//             /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//         if (!re.test(String(e.target.value).toLowerCase())) {
//             setEmailError('Некорректный емейл')
//         } else {
//             setEmailError('')
//         }
//     }

//     const blurHandler = (e) => {
//         switch (e.target.name) {
//             case 'email':
//                 setEmailDirty(true)
//                 break
//             case 'password':
//                 setPasswordDirty(true)
//                 break
//             case 'name':
//                 setNameDirty(true)
//                 break
//             case 'surname':
//                 setSurnameDirty(true)
//                 break
//         }
//     }

//     const passwordHandler = (e) => {
//         setPassword(e.target.value)
//         if (e.target.value.length < 7) {
//             setPasswordError('Пароль должен содержать более 8')
//             if (!e.target.value) {
//                 setPasswordError('Поле не может быть пустым')
//             }
//         } else {
//             setPasswordError('')
//         }
//     }

//     const nameHandler = (e) => {
//         setName(e.target.value)
//         const re =
//             /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i;
//         if (!re.test(String(e.target.value).toLowerCase())) {
//             setNameError('Введите имя')
//         } else {
//             setNameError('')
//         }
//     }

//     const surnameHandler = (e) => {
//         setSurname(e.target.value)
//         const re =
//             /^([А-Я]{1}[а-яё]{1,23}|[A-Z]{1}[a-z]{1,23})$/i;
//         if (!re.test(String(e.target.value).toLowerCase())) {
//             setSurnameError('Введите фамилию')
//         } else {
//             setSurnameError('')
//         }
//     }

//     return (
//         <div className={s.registration}>

//             <div className={s.registration_logo}>
//                 <img src={logo} alt="logo" />
//             </div>

//             <div className={s.registration_form}>
//                 <div className={s.registration_pole}>

//                     <h1>Регистрация</h1>
//                     <div className={s.registration_newUser}>
//                         <p>Уже зарегистрирован?</p>
//                         <button className={s.registrationBtn} type="submit" onClick={() => setPage('login')}>Войти</button>
//                     </div>

//                     <form onSubmit={() => setPage('map')} >
//                         <div>
//                             <label>
//                                 <p>Адрес электронной почты</p>
//                                 <input value={email} onChange={e => emailHandler(e)} onBlur={e => blurHandler(e)} type='text' name="email" />
//                                 {(emailDirty && emailError) && <div className={s.warning}></div>}
//                             </label>
//                         </div>
//                         <div className={s.registration_userName}>
//                             <div>
//                                 <label>
//                                     <p>Имя</p>
//                                     <input onChange={e => nameHandler(e)} className={s.input_userName} value={name} onBlur={e => blurHandler(e)} type='text' name="name" />
//                                     {(nameDirty && nameError) && <div className={s.warning}></div>}
//                                 </label>
//                             </div>
//                             <div>
//                                 <label>
//                                     <p>Фамилия</p>
//                                     <input onChange={e => surnameHandler(e)} className={s.input_userName} value={surname} onBlur={e => blurHandler(e)} type='text' name="surname" />
//                                     {(surnameDirty && surnameError) && <div className={s.warning}></div>}
//                                 </label>
//                             </div>
//                         </div>
//                         <div>
//                             <label>
//                                 <p>Пароль</p>
//                                 <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} type='password' name="password" />
//                                 {(passwordError && passwordDirty) && <div className={s.warning}></div>}
//                             </label>
//                         </div>
//                         <button disabled={!formValid} className={s.comeInBtn} type="submit">Зарегистрироваться</button>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     )
// }

// Registration.propTypes = {
//     setPage: PropTypes.func
// }

// export const RegistrationWithAuth = withAuth(Registration);
