import type { NextApiRequest, NextApiResponse } from 'next';
import {
  IUserProfile,
  IUserProfileDataUpdate,
} from '../types/Type.UserProfile';
import userProfileDB from '../schema/Schema.UserProfile';

// GET : http://localhost:3000/api/users/profile
export async function getAllUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const userProfileData: Array<IUserProfile> = await userProfileDB.find({});
    if (!userProfileData)
      res.status(404).json({ Error: 'Data not exist/found' });
    if (req.method === 'OPTIONS') return res.status(200).end();
    return res.status(200).json(userProfileData);
  } catch (error) {
    res.status(404).json({ Error: 'Error while fetching data' });
  }
}

// GET : http://localhost:3000/api/users/profile/${_uid}
export async function getUserData(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { _uid } = req.query;
    const userProfileData: IUserProfile | null = await userProfileDB.findOne({
      _uid: _uid,
    });
    if (!userProfileData)
      return res.status(404).json({ Error: 'Data not exist/found' });
    res.status(200).json(userProfileData);
  } catch (error) {
    res.status(404).json({ Error: 'Error while fetching data' });
  }
}

// POST : http://localhost:3000/api/users/profile
export async function createUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const _data: IUserProfile = req.body; // postUserData
    if (!_data) return res.status(404).json({ Error: 'Data not found' });
    await userProfileDB.create(_data).then((value) => {
      res.status(200).json(value);
    });
  } catch (error) {
    res.status(404).json({ Error: 'UserId already exist' });
  }
}

// PUT : http://localhost:3000/api/users/profile/${_uid}
export async function updateUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { _uid } = req.query;
    const _data: IUserProfileDataUpdate = req.body;
    if (!_data) return res.status(404).json({ Error: 'Data not found' });
    await userProfileDB
      .findOneAndUpdate({ _uid: _uid }, { $set: _data })
      .then((value) => {
        res.status(200).json(value);
      });
  } catch (error) {
    res.status(404).json({ Error: 'Error while updating data' });
  }
}

// DELETE : http://localhost:3000/api/users/profile/${_uid}
export async function deleteUserData(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { _uid } = req.query;
    await userProfileDB
      .findOneAndDelete({
        _uid: _uid,
      })
      .then(() => {
        res
          .status(200)
          .json({ Success: 'user profile deleted successfully !' });
      });
  } catch (error) {
    res.status(404).json({ Error: 'Error while deleting data' });
  }
}

// const postUserData: IUserProfile = {
//   _uid: '1234567890',
//   _data: {
//     fullName: 'Sumeet Kumar Paul',
//     emailAddress: 'sumitpaul16102002@gmail.com',
//     phoneNumber: '+918794007994',
//     photoURL: '---photoURL-goes-here---',
//     dateOfBirth: '16-10-2002',
//     age: '20',
//     gender: 'male',
//     isVerified: {
//       phoneNumber: false,
//       emailAddress: false,
//     },
//   },
// };

// const putUserData: IUserProfileDataUpdate = {
//   '_data.fullName': 'Sumit Paul',
//   '_data.emailAddress': 'sumitpaul.informal@gmail.com',
//   '_data.isVerified.emailAddress': true,
// };
