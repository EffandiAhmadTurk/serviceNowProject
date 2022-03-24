import { createContext, useReducer, useEffect, useContext } from 'react';
import Cookie from 'js-cookie';
import { getUserViaLocal } from '../utils/auth';

export const AuthContext = createContext();

const authReducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.payload,
      };
    case 'SET_USER_DATA':
      return {
        ...state,
        token: action.payload.jwt,
        user: action.payload.user,
      };
    default:
      return state;
  }
};

const AuthContextProvider = props => {
  const initialState = {
    user: null,
    token: null,
  };

  const [authState, dispatch] = useReducer(authReducer, initialState);

  const setUser = user => {
    dispatch({ type: 'SET_USER', payload: user });
  };

  const setUserData = userData => {
    dispatch({ type: 'SET_USER_DATA', payload: userData });
  };

  const logout = () => {
    Cookie.remove('felix-token');
    // Emit logout event for other windows to pick up
    window.localStorage.setItem('logout', Date.now());
    // Set user to null
    setUserData({ user: null, token: null });
  };

  const setUserInfo = async userInfo => {
    // set user & token in context
    setUserData(userInfo);
    // Store user token in cookie
    Cookie.set('felix-token', userInfo.jwt);
  };

  const syncLogout = event => {
    if (event.key === 'logout') {
      setUserData({ user: null, token: null });
    }
  };

  useEffect(() => {
    (async () => {
      // Check if token is in cookie jar
      const jwt = Cookie.get('felix-token');
      if (jwt) {
        // Fetch user from CMA
        const user = await getUserViaLocal(jwt);
        setUserData({ user, jwt });
      }
    })();
    // Attach listener to listen for storage event
    window.addEventListener('storage', syncLogout);
    return () => {
      window.removeEventListener('storage', syncLogout);
    };
  }, []);

  const value = {
    ...authState,
    isAuthenticated: !!authState.token,
    setUser,
    setUserInfo,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

const AuthContextConsumer = AuthContext.Consumer;

export { AuthContextProvider, AuthContextConsumer };
