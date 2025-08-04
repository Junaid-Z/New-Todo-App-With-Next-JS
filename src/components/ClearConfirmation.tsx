"use client";
import { clear } from "@/redux/actions";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Modal from "@mui/material/Modal";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";

type Props = {
  open: boolean;
  onClose?: () => void;
};

function ClearConfirmation({ open, onClose }: Props) {
  const dispatch = useDispatch();
  return (
    <Modal open={open} onClose={onClose}>
      <Paper
        sx={{
          width: 350,
          p: 4,
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "TranslateX(-50%) TranslateY(-50%)",
        }}
      >
        <Typography variant="h6" fontWeight={"bold"}>
          Are you sure you want to clear all todos?
        </Typography>
        <Typography variant="body1" mt={1}>
          This action is irreversible
        </Typography>
        <Grid container sx={{ mt: 2 }} spacing={1}>
          <Grid size={{ xs: 6 }}>
            <Button
              fullWidth
              variant="outlined"
              color="error"
              onClick={() => onClose?.()}
            >
              Cancel
            </Button>
          </Grid>
          <Grid size={{ xs: 6 }}>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              onClick={() => {
                dispatch(clear());
                onClose?.();
              }}
            >
              Confirm
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Modal>
  );
}

export default ClearConfirmation;
