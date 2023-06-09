import { Stack } from "@mui/material";
import React from "react";
import circle from "../image/circle.png";
import { useNavigate } from "react-router-dom";

function Menu() {
  const navigate = useNavigate();

  return (
    <Stack
      bgcolor="white"
      width="22%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      padding="50px 0 0 0px"
      position="fixed"
    >
      <Stack margin="0 0 20px 80px">
        <img
          src={circle}
          alt="circle"
          width="210px"
          style={{ cursor: "pointer" }}
        />
      </Stack>
      <Stack
        fontSize="30px"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
      >
        > Log 🍭
      </Stack>
      <Stack
        fontSize="30px"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/listening");
        }}
      >
        > Listening 🎧
      </Stack>
      <Stack
        fontSize="30px"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/interests");
        }}
      >
        > Interests 💖
      </Stack>
      <Stack
        fontSize="30px"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/emotion");
        }}
      >
        > Emotion 😀
      </Stack>
      <Stack
        fontSize="30px"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
        onClick={() => {
          navigate("/hashtag");
        }}
      >
        > Hash Tag #
      </Stack>
    </Stack>
  );
}

export default Menu;
