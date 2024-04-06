import { UserInfo, UserPhoto } from "@/components/userProfile";
import { Container, Stack } from "@mui/material";
import { useState } from "react";

const Userprofile = () => {
  const [state, setState] = useState("state");
  const [update, setUpdate] = useState("stable");

  return (
    <Stack justifyContent={"center"}>
      <Container sx={{ display: "flex", justifyContent: "center" }}>
        <Stack
          paddingY={"150px"}
          width={"432px"}
          alignItems={"center"}
          gap={"24px"}
        >
          <UserPhoto setState={setState} update={update} />
          <UserInfo state={state} setState={setState} setUpdate={setUpdate} />
        </Stack>
      </Container>
    </Stack>
  );
};
export default Userprofile;
