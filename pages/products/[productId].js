import styles from './product.module.css';
const ProductPage = ({
  product
}) => {
  return (
    <article className={styles.card}>
      <h2>{product.name}</h2>
      <p>{product.price}</p>
    </article>
  )
}

export async function getServerSideProps(ctx) {
  const response = await fetch(`http://localhost:3000/api/products/${ctx.params.productId}`);
  const currentProduct = await response.json();
  return {
    props: {
      product: currentProduct,
    }
  }
}
export default ProductPage;