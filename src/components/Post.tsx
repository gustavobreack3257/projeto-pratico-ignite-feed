import styles from "./Post.module.css";

export function Post(props) {
  return (
    <div className={styles.div}>
      <h1 className={styles.h1}>{props.author}</h1>
      <h1 className={styles.h1}>{props.content}</h1>
    </div>
  );
}
