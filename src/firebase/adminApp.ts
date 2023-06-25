const admin = require('firebase-admin');

const SERVER_ACCOUNT = {
  type: process.env.NEXT_SERVER_FIREBASE_TYPE,
  project_id: process.env.NEXT_SERVER_FIREBASE_PROJECT_ID,
  private_key_id: process.env.NEXT_SERVER_FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.NEXT_SERVER_FIREBASE_PRIVATE_KEY,
  client_email: process.env.NEXT_SERVER_FIREBASE_CLIENT_EMAIL,
  client_id: process.env.NEXT_SERVER_FIREBASE_CLIENT_ID,
  auth_uri: process.env.NEXT_SERVER_FIREBASE_AUTH_URI,
  token_uri: process.env.NEXT_SERVER_FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url:
    process.env.NEXT_SERVER_FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.NEXT_SERVER_FIREBASE_CLIENT_X509_CERT_URL,
};

export const verfyIdToken = (token: any) => {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(SERVER_ACCOUNT),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    });
  }
  return admin
    .auth()
    .verifyIdToken(token)
    .catch((error: any) => {
      throw error;
    });
};
