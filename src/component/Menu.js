import { Stack } from "@mui/material";
import React from "react";
import circle from "../image/circle.png";

function Menu() {
  return (
    <Stack bgcolor="white" width="22%" height="100%">
      <Stack width="100%" height="190px"></Stack>
      <Stack margin="10px 10px 10px 75px">
        <img
          src={circle}
          alt="circle profile"
          style={{ cursor: "pointer" }}
          width="200px"
        />
      </Stack>
      <Stack></Stack>
    </Stack>
  );
}

export default Menu;
