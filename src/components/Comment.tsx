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
};
export function Comment({ comment, author, publishedAt }: CommentProps) {
  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'ás' HH:mm'h'",
    { locale: ptBR },
  );
  const publishedDateFormattedDistanceNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });
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

            <button type="button">
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
