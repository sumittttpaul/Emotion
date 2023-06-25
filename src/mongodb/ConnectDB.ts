import mongoose from 'mongoose';

const { EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI } = process.env;

const connectMongoDB = async () => {
  try {
    if (!EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI) {
      throw new Error(
        'Environment variable is not defined: "EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI"'
      );
    }

    const { connection } = await mongoose.connect(
      EMOTION_CLOUD_CLUSTER_MONGO_USERDB_URI
    );
    if (connection.readyState == 1) {
      console.log('Users database connected to emotion-cloud-cluster/users');
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongoDB;
