import React, { useRef, useState, useEffect } from 'react'
import { faCheck, faTimes, faInfoCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// USER_REGEX는 반드시 소문자 혹은 대문자로 시작해야하고 4-23자
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
// PWD_REGEX는 반드시 하나 이상의 소문자, 대문자, 특수 문자, 숫자를 요구하며 8-24자
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  // 유저명으로 적합한가.
  const [validName, setValidName] = useState(false);
  // user 인풋 필드에 포커스를 할 것인가 말것인가
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  // 페이지 렌더링 되자마자, 유저명에 포커스
  useEffect(()=>{
    userRef.current.focus();
  },[])

  return (
    <div>Register</div>
  )
}

export default Register