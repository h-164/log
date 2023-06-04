import { Stack } from "@mui/material";
import React from "react";
import Header from "../component/Header";

function Main() {
  return (
    <Stack bgcolor="blue" minHeight="100vh" height="100%">
      {/* 화면이 100vh고 스크롤 하게 될 경우 넘어가버리니까 100% 따로 설정 Main,배경 */}
      <Header />
    </Stack>
  );
}

export default Main;
