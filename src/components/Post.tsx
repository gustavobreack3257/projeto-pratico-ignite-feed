import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post(props) {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar />
          <div className={styles.authorInfo}>
            <strong>Gustavo Costa</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="22 de abril ás 9:00" dateTime="2026-4-22 09:00:00">
          Publicado ha 1 hora
        </time>
      </header>
    </article>
  );
}
