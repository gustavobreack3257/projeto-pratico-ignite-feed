import { useState } from "react";
import { formatDistanceToNow, format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";

export interface AuthorProps {
  avatarUrl: string;
  name: string;
  role?: string;
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
  const publishedDateFormatted = format(
    publishAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateFormattedDistanceNow = formatDistanceToNow(publishAt, {
    locale: ptBR,
    addSuffix: true,
  });
  const [comments, setComment] = useState(["Comentário aqui"]);

  const commentsNow = new Date("2026-04-29 09:15:00");

  const [newComment, setNewComment] = useState("");

  function handleAddComment(event: React.FormEvent) {
    event.preventDefault();
    setComment([...comments, newComment]);
    setNewComment("");
  }

  function handleNewCommentChange(event) {
    setNewComment(event.target.value);
  }

  function deleteComment(commentToDelete) {
    console.log(`Deletar comentário ${commentToDelete}`);

    const commentsWithoutDeleted = comments.filter(
      (comment) => comment !== commentToDelete,
    );

    setComment(commentsWithoutDeleted);
  }
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

        <time title={publishedDateFormatted} dateTime={publishAt.toISOString()}>
          {publishedDateFormattedDistanceNow}
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

      <form onSubmit={handleAddComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          name="comment"
          value={newComment}
          onChange={handleNewCommentChange}
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {comments.map((comment) => {
        return (
          <Comment
            key={comment}
            author={author}
            comment={comment}
            publishedAt={commentsNow}
            onDeleteComment={deleteComment}
          />
        );
      })}
    </article>
  );
}
