import styles from './user.module.css';
import data from '../../data/data.json';
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
  const currentUser = data.users.find(user => user.id === ctx.params.userId);
  return {
    props: {
      user: currentUser,
    }
  }
}
export default UserPage;