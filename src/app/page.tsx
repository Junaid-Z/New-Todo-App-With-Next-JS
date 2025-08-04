import React from "react";
import ClearTodos from "@/components/Clear";
import TodoInputDrawer from "@/components/TodoInputDrawer";
import TodosList from "@/components/TodosList";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Page = () => {
  return (
    <>
      <TodoInputDrawer />
      <Box
        sx={{
          ml: {
            md: "250px",
          },
          mb: {
            md: "unset",
            xs: "117px",
          },
          maxWidth: {
            md: "calc(100% - 250px)",
          },
          p: 1,
        }}
      >
        <Typography
          variant="h6"
          textAlign={"center"}
          fontWeight={"bold"}
          mb={2}
        >
          TODOS
        </Typography>
        <TodosList />
      </Box>
      <ClearTodos />
    </>
  );
};

export default Page;
