import { Stack } from "@mui/material";
import React from "react";

function Header() {
  return (
    <Stack bgcolor="red" width="100%" height="150px">
      <Stack bgcolor="#FFF4FD" width="100%" height="35px"></Stack>
      <Stack
        direction="row"
        bgcolor="white"
        height="115px"
        justifyContent="space-between"
        padding="10px 120px 10px 120px"
      >
        <Stack bgcolor="pink" width="40px" height="95px">
          꽃
        </Stack>
        <Stack bgcolor="blue" width="40px" height="95px">
          물뿌리
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Header;
