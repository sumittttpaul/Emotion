import { useAuthState } from 'react-firebase-hooks/auth';
import { useEffect } from 'react';
import nookies from 'nookies';
import { FirebaseAuth, _firebaseAuth } from './clientApp';

export const useAuth = () => {
  const [user, loading, error] = useAuthState(FirebaseAuth);

  useEffect(() => {
    if (!FirebaseAuth) {
      return;
    }
    return FirebaseAuth.onIdTokenChanged(async (user) => {
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
  }, []);

  // useEffect(() => {
  //   const handle = setInterval(async () => {
  //     const user = FirebaseAuth.currentUser;
  //     if (user) await user.getIdToken(true);
  //   }, 10 * 60 * 1000);
  //   return () => clearInterval(handle);
  // }, []);

  return { FirebaseUser: user, FirebaseLoading: loading, FirebaseError: error };
};

export type UserType = _firebaseAuth.User | null | undefined;
