"use client";
import ClearAll from "@mui/icons-material/ClearAll";
import SpeedDial from "@mui/material/SpeedDial";
import { useState } from "react";
import ClearConfirmation from "./ClearConfirmation";

const ClearTodos = () => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <SpeedDial
        onClick={() => setModalOpen(true)}
        ariaLabel="Clear todos"
        icon={<ClearAll color="inherit" />}
        sx={{
          position: "fixed",
          bottom: {
            xs: "120px",
            md: "1rem",
          },
          right: "1rem",
        }}
      />
      <ClearConfirmation open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
};

export default ClearTodos;
