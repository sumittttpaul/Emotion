'use server';

import { cookies } from 'next/headers';
import { FirebaseAuthUsingServer } from './serverApp';

async function UseServerAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  return token
    ? (await FirebaseAuthUsingServer()).verifyIdToken(token.value)
    : undefined;
}

export default UseServerAuth;
