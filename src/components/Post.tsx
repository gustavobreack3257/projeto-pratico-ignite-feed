import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
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

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          <a href="//#endregion">👉 jane.design/doctorcare</a>
        </p>

        <p className={styles.link}>
          <a href="//#region ">#novoprojeto</a> <a href="//#region ">#nlw</a>
          <a href="//#endregion">#rocketseat</a>
        </p>
      </div>

      <form action="" className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
    </article>
  );
}
