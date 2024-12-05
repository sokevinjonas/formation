"use server";

import { revalidatePath } from "next/cache";

let todos: string[] = [];

export async function addTodo(FormData: FormData) {
  const todo = FormData.get("todo") as string;
  if (todo) {
    console.log("Ajout de", todo, "dans la liste");
    todos.push(todo);
    revalidatePath("/");
  }
}

export async function getTodos() {
  return todos;
}
