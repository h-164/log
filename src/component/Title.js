// import { Stack } from "@mui/material";
// import React from "react";

// function Title({ title, subTitle }) {
//   return (
//     <Stack>
//       <Stack fontSize="40px" margin="0 0 0px 0px">
//         {title}
//       </Stack>
//       <Stack fontSize="26px" margin="0 0 20px 0px">
//         {subTitle}
//       </Stack>
//     </Stack>
//   );
// }

// export default Title;
import { Stack } from "@mui/material";
import React from "react";

function Title(props) {
  return (
    <Stack>
      <Stack fontSize="40px" margin="0 0 0px 0px">
        {props.title}
      </Stack>
      <Stack fontSize="26px" margin="0 0 20px 0px">
        {props.subTitle}
      </Stack>
    </Stack>
  );
}

export default Title;
