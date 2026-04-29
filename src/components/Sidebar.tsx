import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";
import { PencilLineIcon } from "@phosphor-icons/react";
export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?q=50&w=500&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Imagem de capa"
        className={styles.cover}
      />
      <div className={styles.profile}>
        <Avatar src="https://github.com/gustavobreack3257.png" hasborder />

        <strong>Gustavo costa</strong>
        <span>React developer</span>
      </div>

      <footer>
        {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a href="#">
          <PencilLineIcon size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
