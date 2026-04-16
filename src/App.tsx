import { Header } from "./components/Header";
import { Post } from "./components/Post";

export function App() {
  return (
    <div>
      <Header />
      <Post
        author="Gustavo costa"
        content="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi voluptatem quis eaque expedita mollitia culpa dolorum maiores sed animi, nihil distinctio reprehenderit fugiat facere nobis tenetur perspiciatis non commodi impedit!"
      />
    </div>
  );
}
