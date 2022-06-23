import './App.css';
import Header from './components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import Login from './pages/Main/LoginGoogle/LoginGoogle';
import { useContext, useEffect } from 'react';
import { UserContext } from './contexts/UserContext';
import { auth } from './firebase';
import Comics from './components/Comics/Comics';

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
      <Header/>
      <div className="container mt-3">
      <Comics/>
      <Routes>
          <Route exact path="/" element={<Login />} /> 

          {/* <Route
            path="/comics"
            element={<Comics addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/detalle" element={<Detalle />} />
          <Route
            path="/resultados"
            element = {<Resultados addOrRemoveFromFavs={addOrRemoveFromFavs} />}
          />
          <Route path="/favoritos" element={<Favoritos favoritos={favoritos} addOrRemoveFromFavs={addOrRemoveFromFavs}/>} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
