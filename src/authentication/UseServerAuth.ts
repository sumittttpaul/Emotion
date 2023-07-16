'use server';

import { FirebaseAuthUsingServer } from './serverApp';

async function UseServerAuth(token: string | undefined) {
  return token
    ? await FirebaseAuthUsingServer().verifyIdToken(token)
    : undefined;
}

export default UseServerAuth;
