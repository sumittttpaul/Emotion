import {
  IUserProfile,
  IUserProfileDataUpdate,
} from '../schema/Schema.UserProfile';

export const _userProfileEndURL = '/api/users/profile';

export const getUserProfile = async (_uid: string | undefined) => {
  if (!_uid) return;
  try {
    const response = await fetch(`${_userProfileEndURL}/${_uid}`);
    const json = await response.json();
    if (!json) return {};
    return json as IUserProfile;
  } catch (error) {
    return error;
  }
};

export const postUserProfile = async (_data: IUserProfile) => {
  if (!_data) return;
  try {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(_data),
    };
    const response = await fetch(`${_userProfileEndURL}`, options);
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
  if (!_uid && !_data) return;
  try {
    const options = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(_data),
    };
    const response = await fetch(`${_userProfileEndURL}/${_uid}`, options);
    const json = await response.json();
    if (!json) return {};
    return json as IUserProfile;
  } catch (error) {
    return error;
  }
};

export const deleteUserProfile = async (_uid: string | undefined) => {
  if (!_uid) return;
  try {
    const options = {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    };
    const response = await fetch(`${_userProfileEndURL}/${_uid}`, options);
    const json = await response.json();
    if (!json) return {};
    return json as IUserProfile;
  } catch (error) {
    return error;
  }
};
