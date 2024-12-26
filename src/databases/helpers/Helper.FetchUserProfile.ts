import { TagForUserProfile } from 'databases/TagDB';
import {
  instanceOfErrorOverUserProfile,
  instanceOfUserProfileOverError,
} from 'utils/intanceOf';

const FETCH_API = 'http://localhost:3000/api/users/profile';

export async function FetchUserProfile(uid: string | undefined) {
  if (!uid) return { userProfile: undefined, error: undefined };
  const _response = await fetch(`${FETCH_API}/${uid}`, {
    cache: 'no-cache',
    next: {
      tags: [TagForUserProfile],
    },
  });
  const _data: IUserProfile | IError = await _response.json();
  const userProfile = instanceOfUserProfileOverError(_data)
    ? (_data as IUserProfile)
    : undefined;
  const error = instanceOfErrorOverUserProfile(_data)
    ? (_data as IError)
    : undefined;
  return { userProfile, error };
}
