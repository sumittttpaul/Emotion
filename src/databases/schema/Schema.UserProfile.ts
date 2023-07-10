'use server';

import { Schema, models, model, Document, Model } from 'mongoose';
import { IUserProfile } from 'databases/types/Type.UserProfile';

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
