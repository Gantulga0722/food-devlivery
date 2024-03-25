import { Container, Stack, Typography } from "@mui/material";
import { CardDataComertial } from "@/utils/dummy-data-cards";
import Image from "next/image";

export const HomeInfo = () => {
  return (
    <Stack
      width={"100%"}
      height={"400px"}
      justifyContent={"center"}
      alignContent={"center"}
    >
      <Container>
        <Stack
          width={"1200px"}
          height={"155px"}
          justifyContent={"space-between"}
          direction={"row"}
        >
          {CardDataComertial.map((data, index) => (
            <Stack
              key={index}
              justifyContent={"center"}
              alignItems={"flex-start"}
              gap={"15px"}
              borderRadius={"16px"}
              border={"1px solid"}
              borderColor={"#D6D8DB"}
              boxShadow={"4px 4px 12px 0px rgba(0, 0, 0, 0.10)"}
              padding={"16px"}
            >
              <Stack
                padding={"15px"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <Image
                  src={`${data.icon}`}
                  alt={"image13"}
                  width={30}
                  height={30}
                />
              </Stack>
              <Stack
                justifyContent={"center"}
                alignItems={"center"}
                gap={"4px"}
              >
                <Typography
                  color={"#272727"}
                  fontSize={"18px"}
                  fontWeight={700}
                >
                  {data.title}
                </Typography>
                <Typography
                  color={"#272727"}
                  fontSize={"14px"}
                  fontWeight={400}
                  sx={{ opacity: 0.75 }}
                >
                  {data.text}
                </Typography>
              </Stack>
            </Stack>
          ))}
        </Stack>
      </Container>
    </Stack>
  );
};
