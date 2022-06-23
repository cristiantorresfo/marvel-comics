import './LoginGoogle.css'
import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { addUser, logInWithGoogle, logout } from "../../firebase";


const LoginGoogle = () => {

  const { userLog, users } = useContext(UserContext);

  let newUser = {
    uid: userLog.uid,
    autor: userLog.displayName,
    email: userLog.email,
    favorites: []
  }
  const validationUser = users.some((user) => {
    return user.uid === userLog.uid;
  });

  const handleSubmitUser = () => {
    validationUser ? <Navigate replace to ='/main' /> 
    : addUser(newUser) 
  }
  return (
    <div className="LogInGoogle">
    <p>Welcome to Cristian's social network</p>
    <p>Comparte tus opiniones y pensamientos e interactúa con los posts de los demás usuarios</p>
    <br />
    
      <div className="LogIn" onClick={logInWithGoogle}>
        <div className="googleLogo">
          <img src="./images/googleLogo.svg" alt="" />
        </div>
        <button className="login-btn">Sign in with Google</button>
      </div>
    <Link to = {newUser.uid.length !== 0 && "/main"} > 
     <button onClick={handleSubmitUser}>Continuar</button>/
    </Link>

    </div>

  )
}

export default LoginGoogle