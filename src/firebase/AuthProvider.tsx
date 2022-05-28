import { useContext, useEffect, useState, FC, ReactNode } from 'react';
import { firebaseClient } from './clientApp';
import { AuthContext } from './AuthContext';
import firebase from 'firebase/compat/app';
import nookies from 'nookies';
import 'firebase/compat/auth';

interface IProps {
  children: ReactNode;
}

export const AuthProvider: FC<IProps> = ({ children }) => {
  firebaseClient();
  const [user, setUser] = useState<firebase.User | null>(null);

  useEffect(() => {
    if (!firebase.auth()) {
      return;
    }

    return firebase.auth().onIdTokenChanged(async (user) => {
      if (!user) {
        setUser(null);
        // nookies.set(undefined, 'token', '', {})
        nookies.destroy(undefined, 'token');
        return;
      }
      const token = await user.getIdToken();
      setUser(user);
      nookies.set(undefined, 'token', token, {});
    });
  }, []);

  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('AuthProvider must be used within a AuthContext');
  }
  return context;
};
