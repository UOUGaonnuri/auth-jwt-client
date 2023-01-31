import { useEffect, useState } from "react";
import { MainContainer } from "./styles";
import { TodoContent } from "@/Data/Type/Todo";
import { useSelector } from "react-redux";
import { RootStore } from "@/Data/Store/Store";
import {
  addTodoRequest,
  changeTodoStatus,
  deleteTodoRequest,
  getAllTodoRequest,
} from "@/Service/Todo";
import AddTodo from "@/Component/AddTodo";
import { List } from "@mui/material";
import TodoCard from "@/Component/TodoCard";

const MainPage = () => {
  const [todos, setTodos] = useState<TodoContent[]>([]);
  const user = useSelector((state: RootStore) => state.AuthReducer);

  const fetchTodo = () => {
    console.log(user);
    getAllTodoRequest(user.user.userId)
      .then((res) => {
        const response: TodoContent[] = res.data.data;
        console.log(response);
        setTodos(response);
      })
      .catch((ex) => {
        console.log(ex);
      });
  };

  const handleSubmitTodo = async (
    e: React.MouseEvent<HTMLButtonElement>,
    todoContent: string
  ) => {
    if (todoContent === "") {
      return;
    }
    e.preventDefault();
    await addTodoRequest({
      userId: user.user.userId,
      content: todoContent,
    })
      .then(() => {
        alert("Todo 가 등록되었습니다.");
        fetchTodo();
      })
      .catch(() => {
        alert("Todo 등록에 실패하였습니다.");
      });
  };

  const onClickDelete = async (todoId: number) => {
    const ok = window.confirm("삭제 하시겠습니까?");
    if (ok) {
      await deleteTodoRequest(todoId)
        .then(() => {
          alert("삭제 되었습니다.");
          fetchTodo();
        })
        .catch(() => {
          alert("삭제하는 데 실패하였습니다.");
        });
    }
  };

  useEffect(() => {
    fetchTodo();
  }, []);

  const onClickChangeStatus = (todoId: number) => {
    changeTodoStatus(todoId)
      .then(() => {
        alert("변경 되었습니다.");
        fetchTodo();
      })
      .catch(() => {
        alert("변경하는 데 실패하였습니다.");
      });
  };

  return (
    <MainContainer>
      <AddTodo addTodo={handleSubmitTodo} />
      <List
        sx={{
          marginTop: "15px",
          width: "100%",
          maxWidth: 750,
          position: "relative",
          overflow: "auto",
          maxHeight: 400,
          "& ul": { padding: 0 },
        }}
      >
        {todos.map((todo, index) => (
          <TodoCard
            key={index.toString()}
            todoId={todo.todoId}
            todoStatus={todo.status}
            todoContent={todo.content}
            onClickChangeStatus={onClickChangeStatus}
            onClickDelete={onClickDelete}
          />
        ))}
      </List>
    </MainContainer>
  );
};
export default MainPage;
