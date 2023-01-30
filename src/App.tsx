/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './routes/Routes';
import useStore from './store/useStore';
import { auth } from './api';


function App(): JSX.Element {
  const isAuthenticated = useStore(state => state.isAuthenticated)
  const setLogin = useStore(state => state.setLogin)
  const setUser = useStore(state => state.setUser)

  const onAuthStateChanged = useCallback((user: any) => {
    setLogin(!!user)
    setUser(user)
  }, [])

  useEffect(() => {
    const subscriber = auth.onAuthStateChanged(onAuthStateChanged);
    return subscriber
  }, []);

  return (
    <NavigationContainer>
      <Routes
        isAuthenticated={isAuthenticated}
      />
    </NavigationContainer>
  );
}

export default App;
