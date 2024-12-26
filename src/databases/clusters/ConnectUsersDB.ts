import mongoose from 'mongoose';
import { IError } from 'types/Error.Constructor';

const { NEXT_PUBLIC_EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI } = process.env;

const ConnectUsersDatabase = async () => {
  try {
    if (!NEXT_PUBLIC_EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI) {
      throw new IError({
        name: 'Environment Error',
        message:
          'Environment variable is not defined: "NEXT_PUBLIC_EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI"',
      });
    }

    const { connection } = await mongoose.connect(
      NEXT_PUBLIC_EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI,
    );
    if (connection.readyState == 1) {
      console.log('Connected to emotion-cloud-cluster/users');
    }
  } catch (error) {
    if (error instanceof Error) {
      // return Promise.reject(error);
      throw new IError({
        name: 'Something went wrong',
        message: error.message,
      });
    }
  }
};

export default ConnectUsersDatabase;
