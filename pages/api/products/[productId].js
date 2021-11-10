import data from '../../../data/products.json';

export default function handler(req, res) {
  const currentProduct = data.products.find(product => product.id === req.query.productId);
  res.status(200).json(currentProduct);
}
