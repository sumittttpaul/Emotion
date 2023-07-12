'use server';

import mongoose from 'mongoose';
import { IError } from 'types/Error.Constructor';

const { EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI } = process.env;

const connectdatabase = async () => {
  try {
    if (!EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI) {
      throw new IError({
        name: 'Environment Error',
        message:
          'Environment variable is not defined: "EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI"',
      });
    }

    const { connection } = await mongoose.connect(
      EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI
    );
    if (connection.readyState == 1) {
      console.log('Users database connected to emotion-cloud-cluster/users');
    }
  } catch (error) {
    if (error instanceof Error) {
      // return Promise.reject(error);
      throw new IError({ name: error.name, message: error.message });
    }
  }
};

export default connectdatabase;
