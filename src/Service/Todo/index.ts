import { CreateTodo } from "@/Data/Type/Todo";
import { CustomAxios } from "../CustomAxios";

export function getAllTodoRequest(userId: number) {
  return CustomAxios.get("/api/v1/todo/getTodos", {
    params: { userId: userId },
  });
}

export function addTodoRequest(params: CreateTodo) {
  return CustomAxios.post("/api/v1/todo/createTodo", params);
}

export function changeTodoStatus(todoId: number) {
  return CustomAxios.put("/api/v1/todo/changeStatus", {
    todoId: todoId,
  });
}

export function deleteTodoRequest(todoId: number) {
  return CustomAxios.delete("/api/v1/todo/deleteTodo", {
    params: {
      todoId: todoId,
    },
  });
}
