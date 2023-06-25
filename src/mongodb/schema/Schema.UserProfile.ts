import { Schema, models, model, Document, Model } from 'mongoose';

export interface IUserProfileDataUpdate {
  '_data.fullName'?: string;
  '_data.emailAddress'?: string;
  '_data.phoneNumber'?: string;
  '_data.photoURL'?: string;
  '_data.dateOfBirth'?: string;
  '_data.age'?: string;
  '_data.gender'?: string;
  '_data.isVerified.phoneNumber'?: boolean;
  '_data.isVerified.emailAddress'?: boolean;
}

export interface IUserProfileData {
  fullName?: string;
  emailAddress?: string;
  phoneNumber?: string;
  photoURL?: string;
  dateOfBirth?: string;
  age?: string;
  gender?: string;
  isVerified?: {
    phoneNumber?: boolean;
    emailAddress?: boolean;
  };
}

export interface IUserProfileDataConstructor {
  _data: IUserProfileData;
}

export interface IUserProfileID {
  _uid: string;
}

export interface IUserProfile
  extends IUserProfileID,
    IUserProfileDataConstructor {}

export interface IUserProfileDocument extends IUserProfile, Document {}

export interface IUserProfileModel extends Model<IUserProfileDocument> {
  buildUserProfile(args: IUserProfile): IUserProfileDocument;
}

const userProfileSchema: Schema<IUserProfileDocument> = new Schema(
  {
    _uid: { type: String, required: true, unique: true },
    _data: {
      fullName: String,
      emailAddress: String,
      phoneNumber: String,
      photoURL: String,
      dateOfBirth: String,
      age: String,
      gender: String,
      isVerified: {
        phoneNumber: Boolean,
        emailAddress: Boolean,
      },
    },
  },
  { timestamps: true }
);

userProfileSchema.statics.buildUserProfile = (args: IUserProfile) => {
  return new userProfileDB(args);
};

const userProfileDB =
  models.user_profile ||
  model<IUserProfileDocument, IUserProfileModel>(
    'user_profile',
    userProfileSchema
  );

export default userProfileDB;
