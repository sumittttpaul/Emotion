import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import { useEffect } from 'react';
import firebase from './clientApp';
import nookies from 'nookies';

export const useAuth = () => {
  const FirebaseApp = getAuth(firebase.app());
  const [user, loading, error] = useAuthState(FirebaseApp);

  const FirebaseUser = user;
  const FirebaseLoading = loading;
  const FirebaseError = error;

  useEffect(() => {
    if (!FirebaseApp) {
      return;
    }
    return FirebaseApp.onIdTokenChanged(async (user) => {
      if (!user) {
        nookies.destroy(undefined, 'token');
        return;
      }
      const token = await user.getIdToken();
      nookies.set(undefined, 'token', token, {
        sameSite: 'None',
        secure: true,
      });
    });
  }, [FirebaseApp]);

  return { FirebaseUser, FirebaseLoading, FirebaseError };
};

export type UserType = firebase.UserInfo | null | undefined;
