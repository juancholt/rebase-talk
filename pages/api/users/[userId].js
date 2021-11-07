import data from '../../../data/data.json';

export default function handler(req, res) {
  const currentUser = data.users.find(user => user.id === req.query.userId);
  res.status(200).json(currentUser)
}
