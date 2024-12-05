import { addTodo, getTodos } from "@/actions";

export default async function Home() {
  const todos = await getTodos();
  return (
    <div className="flex-1 h-full w-full justify-center flex flex-col">
      <h1>Mon formulaire</h1>
      <form action={addTodo}>
        <input type="text" name="todo" className="border-s-violet-400" />
        <button type="submit">Enregistrer</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}
