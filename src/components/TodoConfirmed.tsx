"use client";
import { edit, remove, Todo } from "@/redux/actions";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import CheckBox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

type Props = {
  todo: Todo;
  onEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function TodoConfirmed({ todo, onEdit }: Props) {
  const dispatch = useDispatch();
  return (
    <Box display={"flex"} alignItems={"center"} gap={2}>
      <CheckBox
        size="large"
        color="success"
        checked={todo.done}
        onChange={(e) => {
          dispatch(edit({ ...todo, done: e.target.checked }));
        }}
      />
      <Typography flexGrow={1} textTransform={"capitalize"}>
        {todo.data}
      </Typography>
      <Button variant="contained" color="primary" size="large" onClick={onEdit}>
        <Edit />
      </Button>
      <Button
        variant="outlined"
        color="error"
        size="large"
        onClick={() => dispatch(remove(todo.id))}
      >
        <Delete />
      </Button>
    </Box>
  );
}

export default TodoConfirmed;
