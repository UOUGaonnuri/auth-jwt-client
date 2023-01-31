export interface CreateTodo {
  userId: number;
  content: string;
}

export interface UpdateTodo {
  todoId: number;
  content: string;
}

export interface TodoContent {
  todoId: number;
  userId: number;
  content: string;
  status: string;
}
