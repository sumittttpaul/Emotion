import type { NextApiRequest, NextApiResponse } from 'next';
import {
  createUserData,
  getAllUserData,
} from '../../../../mongodb/controller/Controller.UserProfile';
import connectMongoDB from '../../../../mongodb/ConnectDB';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  connectMongoDB().catch(() =>
    res.status(405).json({ Error: 'Error in the Connection' })
  );

  const { method } = req;

  switch (method) {
    case 'GET':
      getAllUserData(req, res);
      break;
    case 'POST':
      createUserData(req, res);
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
}

export const config = {
  api: {
    externalResolver: true,
  },
}