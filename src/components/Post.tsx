import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

interface AuthorProps {
  avatarUrl: string;
  name: string;
  role: string;
}

type ContentType = "paragraph" | "link";

interface ContentItemProps {
  id: string;
  type: ContentType;
  content: string;
}

export type PostProps = {
  id: string;
  author: AuthorProps;
  content: ContentItemProps[];
  publishAt: Date;
};

export function Post({ id, author, content, publishAt }: PostProps) {
  return (
    <article className={styles.post} key={id}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} hasborder />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishAt.toLocaleString()}
          dateTime={publishAt.toISOString()}
        >
          Publicado em {publishAt.toLocaleDateString()}
        </time>
      </header>

      <div className={styles.content}>
        {content.map((item) => {
          if (item.type === "paragraph") {
            return <p key={item.id}>{item.content}</p>;
          }

          if (item.type === "link") {
            return (
              <p key={item.id}>
                <a href="//#endregion">{item.content}</a>
              </p>
            );
          }
        })}

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

      <Comment />
    </article>
  );
}
