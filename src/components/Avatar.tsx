import styles from "./Avatar.module.css";

type AvatarProps = {
  src: string;
  hasborder?: boolean;
};
export function Avatar({ src, hasborder = false }: AvatarProps) {
  return (
    <img
      src={src}
      alt=""
      className={hasborder ? styles.avatarWithBorder : styles.avatar}
    />
  );
}
