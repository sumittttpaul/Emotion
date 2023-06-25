import type { NextApiRequest, NextApiResponse } from 'next';
import connectMongoDB from '../../../mongodb/ConnectDB';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  connectMongoDB();
  res.status(200).json({ name: 'Emotion by Sumit - Users' });
}
