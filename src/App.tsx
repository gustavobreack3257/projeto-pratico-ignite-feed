import { Header } from "./components/Header";
import { Post, type PostProps } from "./components/Post";

import styles from "./App.module.css";
import "./global.css";
import { Sidebar } from "./components/Sidebar";

const post: PostProps[] = [
  {
    id: "1",
    author: {
      avatarUrl: "https://github.com/gustavobreack3257.png",
      name: "Gustavo Costa Souza",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋", id: "01" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        id: "02",
      },
      { type: "link", content: "jane.design/doctorcare", id: "03" },
    ],
    publishAt: new Date("2026-04-29 09:15:00"),
  },
  {
    id: "2",
    author: {
      avatarUrl: "https://github.com/imbitubadigital.png",
      name: "Antonio Joaquim Fernandes",
      role: "Web developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋", id: "04" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
        id: "05",
      },
      { type: "link", content: "jane.design/doctorcare", id: "06" },
    ],
    publishAt: new Date("2026-04-29 09:15:00"),
  },
];
export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {post.map((post) => {
            return (
              <Post
                key={post.id}
                id={post.id}
                author={post.author}
                content={post.content}
                publishAt={post.publishAt}
              />
            );
          })}
        </main>
      </div>
    </div>
  );
}
