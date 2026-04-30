import styles from "./Comment.module.css";
import type { AuthorProps } from "./Post";

import { Avatar } from "./Avatar";

import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react";
import { format, formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";

type CommentProps = {
  comment: string;
  author: AuthorProps;
  publishedAt: Date;
  onDeleteComment?: (comment: string) => void;
};
export function Comment({
  comment,
  author,
  publishedAt,
  onDeleteComment,
}: CommentProps) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateFormattedDistanceNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleDeleteComment() {
    onDeleteComment(comment);
  }
  return (
    <div className={styles.commentContainer}>
      <Avatar src={author.avatarUrl} />
      <div className={styles.commentPost}>
        <section>
          <header className={styles.commentPostHeader}>
            <div>
              <p>{author.name}</p>

              <time
                title={publishedDateFormatted}
                dateTime={publishedAt.toISOString()}
              >
                {publishedDateFormattedDistanceNow}
              </time>
            </div>

            <button type="button" onClick={handleDeleteComment}>
              <TrashIcon size={24} />
            </button>
          </header>

          <strong>{comment}</strong>
        </section>

        <footer>
          <button className={styles.commentLike} type="button">
            <ThumbsUpIcon size={20} />
            <span>Aplaudir 20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
