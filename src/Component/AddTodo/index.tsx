import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";

interface props {
  addTodo: (
    e: React.MouseEvent<HTMLButtonElement>,
    todoContent: string
  ) => Promise<void>;
}

const AddTodo = (addTodo: props) => {
  const [todoContent, setTodoContent] = useState("");

  const onChangeTodoContent = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setTodoContent(e.target.value);
  };

  return (
    <Grid container style={{ marginTop: 10, width: "100%", maxWidth: "750px" }}>
      <Grid xs={11} md={11} item style={{ paddingRight: 16 }}>
        <TextField
          placeholder="Add Todo here"
          fullWidth
          value={todoContent}
          onChange={onChangeTodoContent}
        ></TextField>
      </Grid>
      <Grid xs={1} md={1} item>
        <Button
          fullWidth
          style={{ height: "100%" }}
          color="secondary"
          variant="outlined"
          onClick={(e) => addTodo.addTodo(e, todoContent)}
        >
          +
        </Button>
      </Grid>
    </Grid>
  );
};

export default AddTodo;
