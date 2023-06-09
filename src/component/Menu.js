import { Stack } from "@mui/material";
import React from "react";
import circle from "../image/circle.png";

function Menu() {
  return (
    <Stack
      bgcolor="white"
      width="22%"
      height="100%"
      flexDirection="column"
      justifyContent="center"
      padding="50px 0 0 0"
    >
      <img
        src={circle}
        alt="circle"
        width="200px"
        margin="0 0 0 10px"
        style={{ cursor: "pointer" }}
      />
      <Stack
        fontSize="30px"
        fontWeight="lighter"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
      >
        > Log 🍭
      </Stack>
      <Stack
        fontSize="30px"
        fontWeight="lighter"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
      >
        > Listening 🎧
      </Stack>
      <Stack
        fontSize="30px"
        fontWeight="lighter"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
      >
        > Interests 💖
      </Stack>
      <Stack
        fontSize="30px"
        fontWeight="lighter"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
      >
        > Emotion 😀
      </Stack>
      <Stack
        fontSize="30px"
        fontWeight="lighter"
        margin="0 0 20px 120px"
        style={{ cursor: "pointer" }}
      >
        > Hash Tag #
      </Stack>
    </Stack>
  );
}

export default Menu;
