import data from '../../../data/tokens.json';

export default function handler(req, res) {
  const currentToken = data.tokens.find(user => user.id === req.query.tokenId);
  res.status(200).json(currentToken);
}
