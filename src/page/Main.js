import { Stack } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import "../App.css";

function Main() {
  return (
    <Stack bgcolor="green" width="100%" height="100%" minHeight="100vh">
      {/* 화면이 100vh고 스크롤 하게 될 경우 넘어가버리니까 100% 따로 설정 Main,배경 민간요법*/}

      <Stack
        width="100%"
        height="100%"
        minHeight="100vh"
        bgcolor="#000000"
        direction="row"
      >
        <Menu />
        <Stack width="78%" height="100%" minHeight="100vh" bgcolor="yellow">
          <Stack
            width="100%"
            height="40%"
            minHeight="40vh"
            bgcolor="white"
            justifyContent="flex-end"
            padding="0 0 0 360px"
          >
            <Stack fontSize="50px" margin="0 0 10px 0px">
              수돌로그
            </Stack>
            <Stack fontSize="30px" margin="0 0 20px 0px">
              수돌이의 소중한 하루를 기록해요 ♡
            </Stack>
          </Stack>
          <Stack
            width="100%"
            height="60%"
            minHeight="60vh"
            bgcolor="#FFF4FD"
          ></Stack>
        </Stack>
        <Stack
          width="22%"
          height="100%"
          minHeight="100vh"
          bgcolor="white"
        ></Stack>
      </Stack>
      <Header />
    </Stack>
  );
}

export default Main;
//%로 해야된다
