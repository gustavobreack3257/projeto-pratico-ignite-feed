import styles from "./Comment.module.css";

import { Avatar } from "./Avatar";
import { ThumbsUpIcon, TrashIcon } from "@phosphor-icons/react";

type CommentProps = {
  comment: string;
};
export function Comment({ comment }: CommentProps) {
  return (
    <div className={styles.commentContainer}>
      <Avatar src="https://github.com/imbitubadigital.png" />
      <div className={styles.commentPost}>
        <section>
          <header className={styles.commentPostHeader}>
            <div>
              <p>Antonio Joaquim</p>

              <time title="22 de abril ás 9:00" dateTime="2026-4-22 09:00:00">
                Cerca de 2 hrs atrás
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
