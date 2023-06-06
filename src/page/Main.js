import { Stack } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";

function Main() {
  return (
    <Stack bgcolor="white" minHeight="100vh" height="100%">
      {/* 화면이 100vh고 스크롤 하게 될 경우 넘어가버리니까 100% 따로 설정 Main,배경 */}
      <Header />
      <Stack width="100%" height="100vh" bgcolor="blue" direction="row">
        <Menu />
        <Stack width="900px" height="100vh" bgcolor="pink">
          <Stack width="100%" height="40vh" bgcolor="white"></Stack>
          <Stack width="100%" height="60vh" bgcolor="#FFF4FD"></Stack>
        </Stack>
        <Stack width="300px" height="100vh" bgcolor="white"></Stack>
      </Stack>
    </Stack>
  );
}

export default Main;
