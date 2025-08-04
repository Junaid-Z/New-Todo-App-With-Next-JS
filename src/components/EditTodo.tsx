"use client";
import { edit, Todo } from "@/redux/actions";
import { useStoreDispatch } from "@/redux/store";
import Block from "@mui/icons-material/Block";
import Check from "@mui/icons-material/Check";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
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
    <Box
      display={"grid"}
      gap={2}
      gridTemplateColumns={{
        xs: "1fr",
        md: "1fr min-content",
      }}
      gridTemplateRows={{
        xs: "repeat(2, min-content)",
        md: "min-content",
      }}
      alignItems={"center"}
    >
      <TextField
        fullWidth
        {...register("data")}
        size="small"
        label={"Data"}
        placeholder="new data"
        onKeyDown={(e) => {
          if (e.key == "Enter") onSumbit(e);
        }}
      />
      <Box
        aria-label="options"
        display={"grid"}
        gridTemplateColumns={{
          md: "repeat(2, min-content)",
          xs: "repeat(2, 1fr)",
        }}
        columnGap={2}
      >
        <Button
          onClick={onCancel}
          size="large"
          variant="outlined"
          color="inherit"
          startIcon={<Block />}
        >
          Cancel
        </Button>
        <Button
          size="large"
          onClick={onSumbit}
          variant="contained"
          color="primary"
          startIcon={<Check />}
        >
          Confirm
        </Button>
      </Box>
    </Box>
  );
}

export default EditTodo;
