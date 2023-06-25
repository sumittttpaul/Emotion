import {
  IUserProfile,
  IUserProfileDataUpdate,
} from '../schema/Schema.UserProfile';

const BASE_URL = 'http://localhost:3000';

export const getUserProfile = async (_uid: string | undefined) => {
  if (_uid)
    try {
      const response = await fetch(`${BASE_URL}/api/users/profile/${_uid}`);
      const json = await response.json();
      if (!json) return {};
      return json as IUserProfile;
    } catch (error) {
      return error;
    }
};

export const postUserProfile = async (_data: IUserProfile) => {
  if (_data)
    try {
      const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_data),
      };
      const response = await fetch(`${BASE_URL}/api/users/profile`, options);
      const json = await response.json();
      if (!json) return {};
      return json as IUserProfile;
    } catch (error) {
      return error;
    }
};

export const putUserProfile = async (
  _uid: string | undefined,
  _data: IUserProfileDataUpdate
) => {
  if (_uid && _data)
    try {
      const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(_data),
      };
      const response = await fetch(
        `${BASE_URL}/api/users/profile/${_uid}`,
        options
      );
      const json = await response.json();
      if (!json) return {};
      return json as IUserProfile;
    } catch (error) {
      return error;
    }
};

export const deleteUserProfile = async (_uid: string | undefined) => {
  if (_uid)
    try {
      const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      };
      const response = await fetch(
        `${BASE_URL}/api/users/profile/${_uid}`,
        options
      );
      const json = await response.json();
      if (!json) return {};
      return json as IUserProfile;
    } catch (error) {
      return error;
    }
};
