import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
import { auth } from './firebase';
import Comics from './components/Comics/Comics';
import LoginGoogle from './pages/LoginGoogle/LoginGoogle';
import Main from './pages/Main/Main';

function App() {

  const { setUserLog, USER_INITIAL } = useContext(UserContext);

  useEffect(() => {
    const unsubscribeAuth = auth.onAuthStateChanged((user) => {
      setUserLog(user || USER_INITIAL);
    });
    return () => {
      unsubscribeAuth();
    };
  }, [setUserLog, USER_INITIAL]);
  

  return (
    
    <div className="App">
      <div className="container">
      <Routes>
          <Route exact path="/" element={<LoginGoogle />} />
          <Route path='/main' element={<Main/>} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
