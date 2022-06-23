import { useContext } from "react";

const LoginGoogle = () => {

  const { userLog, users } = useContext(UserContext);


  return (
    <div className="LogInGoogle">
    <p>Welcome to Cristian's social network</p>
    <p>Comparte tus opiniones y pensamientos e interactúa con los posts de los demás usuarios</p>
    <br />
    {userLog.uid.length !== 0 ? (
      <Link to={usersfilter === true ? "/feed" : "/welcome"}>          
        <button className="continueBtn">Continue</button>
      </Link>
    ) : (
      <div className="LogIn" onClick={logInWithGoogle}>
        <div className="googleLogo">
          <img src="./images/googleLogo.svg" alt="" />
        </div>
        <button className="login-btn">Sign in with Google</button>
      </div>
    )}
    </div>

  )
}

export default LoginGoogle