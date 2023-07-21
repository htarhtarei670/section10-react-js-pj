import React from "react"

const AuthContext=React.createContext(
  {
      isLoggedIn: false,
      onLogOut: () => {},
  }
)


//to bulid custom component on context file
// export const AuthContextProvider=(props)=>{
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
  
//       useEffect(()=>{
//         const getLocalStorageLoggedIn=localStorage.getItem("isLoggedIn");

//         if (getLocalStorageLoggedIn === "1") {
//          setIsLoggedIn(true);
//         } 
//       },[])


//       const loginHandler = () => {
//         // We should of course check email and password
//         // But it's just a dummy/ demo anyways
//         setIsLoggedIn(true);
//         localStorage.setItem("isLoggedIn","1");
//       };

//       const logoutHandler = () => {
//         setIsLoggedIn(false);
//         localStorage.removeItem("isLoggedIn");
//       };


//     return(
//     <AuthContextProvider value={{ isLoggedIn:isLoggedIn ,onLogOut:logoutHandler,onLogIn:loginHandler }} >
//         {props.children}
//     </AuthContextProvider>)
// }


export default AuthContext;