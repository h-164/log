import { Stack } from "@mui/material";
import React from "react";
import Header from "../component/Header";
import Menu from "../component/Menu";
import "../App.css";
import soksang from "../image/속상해요.gif";

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
            <Stack fontSize="40px" margin="0 0 0px 0px">
              SUDOLOG
            </Stack>
            <Stack fontSize="26px" margin="0 0 20px 0px">
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
          alignItems="center"
        >
          <Stack fontSize="20px" margin="180px 0 0 10px">
            요즘 나는
          </Stack>
          <img src={soksang} alt="sumung" width="80px" />
          <Stack fontSize="20px" margin="5px 0 0 0">
            배고파요
          </Stack>
        </Stack>
      </Stack>
      <Header />
    </Stack>
  );
}

export default Main;
//%로 해야된다
