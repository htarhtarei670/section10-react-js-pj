import React, { useContext } from 'react';

import classes from './Navigation.module.css';
import AuthContext from '../../store/auth-context';

const Navigation = (props) => {
  //using react hook useContext
  const ctx=useContext(AuthContext);
  return(
    <nav className={classes.nav}>
    <ul>
      {ctx.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
      )}
      {ctx.isLoggedIn && (
        <li>
          <button onClick={ctx.onLogOut}>Logout</button>
        </li>
      )}
    </ul>
  </nav>
  )

  // ======using comsuma=========

  // return (
  //   <AuthContext.Consumer>
  //     {(ctx)=>{
  //       return(
        //   <nav className={classes.nav}>
        //   <ul>
        //     {ctx.isLoggedIn && (
        //       <li>
        //         <a href="/">Users</a>
        //       </li>
        //     )}
        //     {ctx.isLoggedIn && (
        //       <li>
        //         <a href="/">Admin</a>
        //       </li>
        //     )}
        //     {ctx.isLoggedIn && (
        //       <li>
        //         <button onClick={props.onLogout}>Logout</button>
        //       </li>
        //     )}
        //   </ul>
        // </nav>
  //       )
  //     }}
  //   </AuthContext.Consumer>
  // );
};

export default Navigation;
