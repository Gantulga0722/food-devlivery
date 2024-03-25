import { Stack } from "@mui/material";
import Image from "next/image";

export const HomePic = () => {
  return (
    <Stack position={"relative"} width={"600px"} height={"438px"}>
      <Stack position={"absolute"} width={"443px"} height={"438px"} left={0}>
        <Image
          src={"/homePic/image13.png"}
          alt={"image13"}
          width={443}
          height={438}
        />
      </Stack>
      <Stack
        position={"absolute"}
        width={"313px"}
        height={"313px"}
        left={"275px"}
        zIndex={2}
        top={"113px"}
      >
        <Image
          src={"/homePic/image14.png"}
          alt={"image14"}
          width={313}
          height={313}
        />
      </Stack>
    </Stack>
  );
};
