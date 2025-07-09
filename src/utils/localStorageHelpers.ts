export const loadTodos = (): any[] => {
  if (typeof window !== "undefined") {
    const todos = localStorage.getItem("todoList");
    return todos ? JSON.parse(todos) : [];
  }
  return [];
};

export const saveTodos = (todos: any[]) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("todoList", JSON.stringify(todos));
  }
};
