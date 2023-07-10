import type { NextApiRequest, NextApiResponse } from 'next';
import connectdatabases from '../../../databases/ConnectDB';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectdatabases();
  res.status(200).json({ name: 'Emotion by Sumit - Users' });
}
