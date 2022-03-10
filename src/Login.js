import React, { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "./context/AuthProvider"

const Login = () => {
  const {setAuth} = useContext(AuthContext);
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(()=>{
    userRef.current.focus();
  },[])

  useEffect(()=>{
    setErrMsg('');
  },[user, pwd])

  const handleSubmit = async(e) => {
    // preventDefault => form이 제출될 경우 페이지 리렌더링 방지
    e.preventDefault();
    console.log(user, pwd);
    // 제출되면 유저명, 비번 필드 초기화
    setUser('');
    setPwd('');
    setSuccess(true);
  }


  return (
    <>
      {success ? (
        <section>
          <h1>로그인에 성공하셨습니다!</h1>
          <br/>
          <p>
            <a href='#'>메인 페이지로 돌아가기</a>
          </p>
        </section>
      ): (
        <section>
          <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
          <h1>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor='username'>Username:</label>
            <input 
              type="text" 
              id="username" 
              ref={userRef}
              autoComplete="off"
              onChange={(e)=>setUser(e.target.value)}
              value={user}
              required
              // 로그인 기능에서는 회원가입과 달리 유효성 검사가 필요하지 않기 때문에 aria 속성을 사용하지 않는다. 
            />
            <label htmlFor='password'>Password:</label>
            <input 
              type="password" 
              id="password" 
              onChange={(e)=>setPwd(e.target.value)}
              value={pwd}
              required
              // 로그인 기능에서는 회원가입과 달리 유효성 검사가 필요하지 않기 때문에 aria 속성을 사용하지 않는다. 
            />
            <button>Login</button>
          </form>
          <p>
            계정이 없으신가요?<br/>
            <span className='line'>
              <a href='#'>회원가입</a>
            </span>
          </p>
        </section>
      )}
    </>
  )
}

export default Login