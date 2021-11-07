import styles from './user.module.css';
const UserPage = ({
  user
}) => {
  return (
    <article className={styles.card}>
      <h2>{user.name}</h2>
      <p>{user.description}</p>
    </article>
  )
}

export async function getServerSideProps(ctx) {
  const response = await fetch(`http://localhost:3000/api/users/${ctx.params.userId}`);
  const currentUser = await response.json();
  return {
    props: {
      user: currentUser,
    }
  }
}
export default UserPage;