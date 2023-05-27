import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from '../firebase';

//creamos el contexto para exportar el provider
const AuthContext = createContext();
//esta funcion devuelve el uso de Auth context y asi ya no se usa el hook usecontext
//para importarla
export const useAuth = () => useContext(AuthContext);
//provider
export const AuthProvider = (props) => {
//pregunta el estado del usuario
  const [currentUser, setCurrentUser] = useState({});
//si existe un usuario cambiar el valor de user
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    })
  }, [])

  const signup = (email, password) => {
    return auth.createUserWithEmailAndPassword(email, password);
  }

  const login = (email, password) => {
    return auth.signInWithEmailAndPassword(email, password);
  }

  const logout = () => auth.signOut();

  const value = {
    currentUser,
    login,
    logout,
    signup
  };
  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  )
}

