"use client";
import { add } from "@/redux/actions";
import { useStoreDispatch } from "@/redux/store";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Drawer from "@mui/material/Drawer";
import TextField from "@mui/material/TextField";
import { Controller, useForm } from "react-hook-form";

type TodoInputForm = {
  data: string;
};

function TodoInputDrawer() {
  const { handleSubmit, control, reset } = useForm<TodoInputForm>({
    defaultValues: { data: "" },
  });
  const dispatch = useStoreDispatch();
  const onSubmit = handleSubmit(({ data }) => {
    if (data) {
      dispatch(add({ data, done: false }));
      reset();
    }
  });
  return (
    <>
      <Drawer
        variant={"permanent"}
        anchor={"left"}
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          width: { md: 250 },
          "& .MuiDrawer-paper": {
            width: { md: 250 },
            boxSizing: "border-box",
          },
        }}
      >
        <Box p={1} display={"flex"} flexDirection={"column"} gap={1}>
          <Controller
            name="data"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  label="TODO"
                  variant="outlined"
                  {...field}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      onSubmit(e);
                    }
                  }}
                />
              );
            }}
          />

          <Button variant="contained" onClick={onSubmit}>
            Add
          </Button>
        </Box>
      </Drawer>

      <Drawer
        variant={"permanent"}
        anchor={"bottom"}
        sx={{
          display: {
            md: "none",
          },
          width: { md: 250 },
          "& .MuiDrawer-paper": {
            width: { md: 250 },
            boxSizing: "border-box",
          },
        }}
      >
        <Box p={1} display={"flex"} flexDirection={"column"} gap={1}>
          <Controller
            name="data"
            control={control}
            render={({ field }) => {
              return (
                <TextField
                  label="TODO"
                  variant="outlined"
                  {...field}
                  onKeyUp={(e) => {
                    if (e.key === "Enter") {
                      onSubmit(e);
                    }
                  }}
                />
              );
            }}
          />
          <Button variant="contained" onClick={onSubmit}>
            Add
          </Button>
        </Box>
      </Drawer>
    </>
  );
}

export default TodoInputDrawer;
