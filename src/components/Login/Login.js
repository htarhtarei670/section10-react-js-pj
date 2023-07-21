import React, {  useEffect, useReducer, useRef, useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import Input from '../UI/Input/Input';

const emailReducer=(state,action)=>{
  if(action.type==="USER_INPUT"){
    return{val:action.val,isvalid:action.val.includes("@")}
  }

  if(action.type==="INPUT_BLUR"){
    return({val:state.val ,isvalid:state.val.includes("@")})
  }
  return {val:"",isvalid:null}
}

const passwordReducer=(state,action)=>{
  if(action.type==="USER_PASSWORD"){
    return({
      val:action.val,
      isvalid:action.val.trim().length > 6
    })
  }

  if(action.type==="PASSWORD_BLUR"){
    return({
      val:state.val,
      isvalid:state.val.trim().length > 6
    })
  }

  return({
    val:"",
    isvalid:null
  })
}

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

// using useReducer hook
  const[emailState,dispatchEmail]=useReducer(emailReducer,{val:"",isvalid:null})
  const[passwordState,dispatchPassword]=useReducer(passwordReducer,{val:" ",isvalid:null})


//to use useEffect
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  const emailRef=useRef();
  const passwordRef=useRef();

  useEffect(() => {
    const identifier = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
  
    return () => {
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({type:"USER_INPUT",val:event.target.value})
    // setFormIsValid(
    //   emailState.isvalid && passwordState.isvalid
    //  );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:"USER_PASSWORD",val:event.target.value})
    setFormIsValid(
      emailState.isvalid && passwordState.isvalid
     );
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:"INPUT_BLUR"})
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:"PASSWORD_BLUR"});
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if(formIsValid){
      props.onLogIn(emailState.val, passwordState);
    }
    else if(!emailIsValid){
      emailRef.current.activate();
    }else{
      passwordRef.current.activate();
    }
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input  
         id="email"
         label="Email"
         type="email"
         isValid={emailIsValid}
         value={emailState.val}
         onChange={emailChangeHandler}
         onBlur={validateEmailHandler}
         ref={emailRef}
        />
        <Input  
         id="password"
         label="Password"
         type="password"
         isValid={passwordIsValid}
         onChange={passwordChangeHandler}
         onBlur={validatePasswordHandler}
         ref={passwordRef}
        />
        
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
