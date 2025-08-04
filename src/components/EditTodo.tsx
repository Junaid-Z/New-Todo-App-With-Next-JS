"use client";
import { edit, Todo } from "@/redux/actions";
import { useStoreDispatch } from "@/redux/store";
import Block from "@mui/icons-material/Block";
import Check from "@mui/icons-material/Check";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";

type Props = {
  todo: Todo;
  onConfirm?: (e: React.BaseSyntheticEvent) => void;
  onCancel?: (e: React.BaseSyntheticEvent) => void;
};

type TodoEditForm = {
  data: string;
};

function EditTodo({ todo, onCancel, onConfirm }: Props) {
  const { register, handleSubmit } = useForm<TodoEditForm>({
    defaultValues: { data: todo.data },
  });
  const dispatch = useStoreDispatch();
  const onSumbit = handleSubmit(({ data }, e?: React.BaseSyntheticEvent) => {
    dispatch(
      edit({
        ...todo,
        data,
      })
    );
    onConfirm?.(e!);
  });
  return (
    <Box display={"flex"} alignItems={"center"} gap={2}>
      <TextField
        fullWidth
        {...register("data")}
        size="small"
        label={"Data"}
        placeholder="new data"
        onKeyDown={(e) => {
          if (e.key == "enter") onSumbit(e);
        }}
      />
      <Box flexShrink={0} display={"flex"} alignItems={"center"}>
        <Button
          onClick={onCancel}
          size="large"
          variant="outlined"
          color="error"
        >
          <Block />
        </Button>
      </Box>
      <Box flexShrink={0} display={"flex"} alignItems={"center"}>
        <Button
          size="large"
          onClick={onSumbit}
          variant="contained"
          color="primary"
        >
          <Check />
        </Button>
      </Box>
    </Box>
  );
}

export default EditTodo;
