import "./LoginGoogle.css";
import { useContext } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { addUser, logInWithGoogle } from "../../firebase";

const LoginGoogle = () => {
  const { userLog, users } = useContext(UserContext);

  let newUser = {
    uid: userLog.uid,
    autor: userLog.displayName,
    email: userLog.email,
    favorites: [],
  };
  const validationUser = users.some((user) => {
    return user.uid === userLog.uid;
  });

  const handleSubmitUser = () => {
    validationUser ? <Navigate replace to="/main" /> : addUser(newUser);
  };
  return (
    <div className="loginContainer">
      <div className="LogInGoogle">
        <p>
          Binvenido/a, <br /> Busca tus comics de Marvel favoritos
        </p>
        <p>Por favor, inicia sesión para continuar</p>
        <img src="./images/marvel-logo.png" alt="logoMarvel" />
        <br />
        {userLog.uid.length === 0 ? (
          <div className="LogIn" onClick={logInWithGoogle}>
            <div className="googleLogo">
              <img src="./images/googleLogo.svg" alt="" />
            </div>
            <button className="login-btn">Sign in with Google</button>
          </div>
        ) : (
          <Link to={newUser.uid.length !== 0 && "/main"}>
            <button className="btn btn-primary" onClick={handleSubmitUser}>
              Continuar
            </button>
            /
          </Link>
        )}
      </div>
    </div>
  );
};

export default LoginGoogle;
