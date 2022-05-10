import { addRoom } from '../../lib/redis';

export default async function handler(req, res) {
  const id = await addRoom(req.body);
  res.status(200).json({ id })
}