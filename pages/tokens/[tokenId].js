import styles from './token.module.css';
const TokenPage = ({
  token
}) => {
  return (
    <article className={styles.card}>
      <h2>{token.name}</h2>
      <p>{token.description}</p>
    </article>
  )
}

export async function getServerSideProps(ctx) {
  const response = await fetch(`http://localhost:3000/api/tokens/${ctx.params.tokenId}`);
  const currentToken = await response.json();
  return {
    props: {
      token: currentToken,
    }
  }
}
export default TokenPage;