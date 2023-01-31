import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

interface TodoProps {
  todoId: number;
  todoContent: string;
  todoStatus: string;
  onClickDelete: (todoId: number) => Promise<void>;
  onClickChangeStatus: (todoId: number) => void;
}

const TodoCard = (props: TodoProps) => {
  return (
    <Card
      sx={{ minWidth: 275 }}
      style={{
        marginTop: 10,
        marginBottom: 10,
        width: "100%",
      }}
    >
      <CardContent>
        {props.todoStatus === "ASSIGNED" ? (
          <>
            <Typography color="text.primary">{props.todoContent}</Typography>
          </>
        ) : (
          <>
            <Typography color="text.secondary">
              {props.todoContent} (Done)
            </Typography>
          </>
        )}
      </CardContent>
      <CardActions>
        {props.todoStatus === "ASSIGNED" ? (
          <Button
            size="small"
            onClick={() => props.onClickChangeStatus(props.todoId)}
          >
            Done
          </Button>
        ) : (
          <Button
            size="small"
            onClick={() => props.onClickChangeStatus(props.todoId)}
          >
            Assign
          </Button>
        )}

        <Button size="small" onClick={() => props.onClickDelete(props.todoId)}>
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

export default TodoCard;
