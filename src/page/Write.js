import React from "react";
import { Stack } from "@mui/material";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Date from "../component/Date";
import circle from "../image/circle.png";

function Write() {
  return (
    <Stack>
      <Stack
        width="100%"
        height="100%"
        minHeight="100vh"
        bgcolor="white"
        padding="200px 0 0 400px"
      >
        <Stack width="500px">
          <Stack>
            <Date />
          </Stack>
          <Stack margin="10px 0 0 0" width="900px">
            <input />
          </Stack>
          <Stack>interests</Stack>
          <Stack direction="row">
            <Stack margin="20px 20px 20px 0">
              <img
                src={circle}
                alt="circle"
                width="130px"
                style={{ cursor: "pointer" }}
              />
            </Stack>
            <Stack>
              <input />
              <input />
            </Stack>
          </Stack>
          <Stack width="900px">
            <input />
          </Stack>
          
        </Stack>
      </Stack>
      <Menu />
      <Header />
    </Stack>
  );
}

export default Write;
