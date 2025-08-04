"use client";
import { edit, remove, Todo } from "@/redux/actions";
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { Chip, IconButton } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Check from "@mui/icons-material/Check";
import Clear from "@mui/icons-material/Clear";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

type Props = {
  todo: Todo;
  onEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

function TodoConfirmed({ todo, onEdit }: Props) {
  const dispatch = useDispatch();
  return (
    <Box
      display={"grid"}
      gridTemplateColumns={{
        md: "min-content 1fr min-content",
        xs: "min-content 1fr",
      }}
      gridTemplateRows={{
        md: "1fr",
        xs: "min-content min-content",
      }}
      alignItems={"center"}
      gap={2}
    >
      <Chip
        variant="outlined"
        onClick={() => {
          dispatch(edit({ ...todo, done: !todo.done }));
        }}
        size="medium"
        label={
          <Box
            sx={{
              display: "flex",
              color: (theme) => {
                return todo.done
                  ? theme.palette.success.main
                  : theme.palette.error.light;
              },
            }}
          >
            {todo.done ? (
              <>
                <Check />
                <Typography>Done</Typography>
              </>
            ) : (
              <>
                <Clear />
                <Typography>Pending</Typography>
              </>
            )}
          </Box>
        }
      />
      <Typography
        component={"span"}
        textTransform={"capitalize"}
        textOverflow={"ellipsis"}
        overflow={"hidden"}
      >
        {todo.data}
      </Typography>
      <Box
        sx={{
          gridColumnStart: { md: "unset", xs: 1 },
          gridColumnEnd: { md: "unset", xs: 3 },
        }}
        aria-label="options"
        display={"grid"}
        gridTemplateColumns={{
          md: "repeat(2, min-content)",
          xs: "repeat(2, 1fr)",
        }}
        alignItems={"center"}
        columnGap={2}
      >
        <Button
          aria-label="edit"
          variant="contained"
          color="primary"
          size="large"
          onClick={onEdit}
          startIcon={<Edit />}
        >
          Edit
        </Button>
        <Button
          aria-label="delete"
          variant="outlined"
          color="error"
          size={"large"}
          onClick={() => dispatch(remove(todo.id))}
          startIcon={<Delete />}
        >
          Delete
        </Button>
      </Box>
    </Box>
  );
}

export default TodoConfirmed;
