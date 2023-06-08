import { Stack } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import "../App.css";

function Main() {
  return (
    <Stack bgcolor="green" width="100%" height="100vh" minHeight="100vh">
      {/* 화면이 100vh고 스크롤 하게 될 경우 넘어가버리니까 100% 따로 설정 Main,배경 민간요법*/}
      <Header />
      <Stack width="100%" height="100%" bgcolor="#000000" direction="row">
        <Menu />
        <Stack width="56%" height="100%" bgcolor="yellow">
          <Stack
            width="100%"
            height="40%"
            bgcolor="white"
            justifyContent="flex-end"
          >
            <Stack fontSize="xx-large" margin="0 0 20px 0">
              수돌로그
            </Stack>
            <Stack fontSize="large" margin="0 0 10px 0n">
              수돌이의 소중한 하루를 기록해요
            </Stack>
          </Stack>
          <Stack width="100%" height="60%" bgcolor="#FFF4FD"></Stack>
        </Stack>
        <Stack width="22%" height="100%" bgcolor="white"></Stack>
      </Stack>
    </Stack>
  );
}

export default Main;
//%로 해야된다
