import React from "react";
import { Stack, TextField } from "@mui/material";
import Header from "../component/Header";
import Menu from "../component/Menu";
import Date from "../component/Date";
import rectangular from "../image/rectangular.png";

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
            <TextField
              id="outlined-basic"
              // label="Outlined"
              placeholder="관심사를 입력하세요!"
              variant="outlined"
              sx={{ width: "900px" }}
            />
          </Stack>
          <Stack>interests</Stack>
          <Stack>
            <TextField
              id="outlined-basic"
              // label="Outlined"
              placeholder="노래 제목을 입력하세요"
              variant="outlined"
              sx={{ width: "900px" }}
            />
            <TextField
              sx={{ width: "900px" }}
              id="outlined-multiline-static"
              multiline
              rows={20}
              placeholder="오늘 하루는 어땠어요?"
            />
          </Stack>
          <Stack direction="row">
            <Stack>
              <img src={rectangular} alt="rectangular" width="130px" />
            </Stack>
            <Stack>
              <TextField
                id="outlined-basic"
                // label="Outlined"
                placeholder="오늘 기분은 어땠나요?"
                variant="outlined"
                sx={{ width: "740px" }}
              />
              <TextField
                id="outlined-basic"
                // label="Outlined"
                placeholder="오늘 하루를 짧게 표현해보세요!"
                variant="outlined"
                sx={{ width: "740px" }}
                multiline
                rows={2}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Menu />
      <Header />
    </Stack>
  );
}

export default Write;
