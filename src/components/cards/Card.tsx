import { ButtonBase, Stack, Typography } from "@mui/material";
type PropType = {
  food: {
    image: string;
    saleProcent: number;
    name: string;
    price: number;
    onClick: () => void;
  };
};
export const FoodCard = ({ food }: PropType) => {
  const { image, saleProcent, name, price, onClick } = food;
  const salePrice = (price * saleProcent) / 100;
  return (
    <ButtonBase onClick={onClick}>
      <Stack gap={"14px"}>
        <Stack
          width={"282px"}
          height={"186px"}
          borderRadius={"16px"}
          boxShadow={
            "0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
          }
          sx={{
            backgroundImage: `URL(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          position={"relative"}
        >
          {saleProcent ? (
            <Stack
              padding={"4px 16px"}
              justifyContent={"center"}
              alignItems={"center"}
              borderRadius={"16px"}
              border={"1px solid #FFF"}
              sx={{
                backgroundColor: "#18BA51",
                backdropFilter: "blur(50px)",
              }}
              position={"absolute"}
              top={"16px"}
              right={"16px"}
            >
              <Typography fontSize={"18px"} fontWeight={600} color={"white"}>
                {saleProcent}
              </Typography>
            </Stack>
          ) : (
            <Stack></Stack>
          )}
        </Stack>
        <Stack width={"282px"} gap={"2px"}>
          <Stack alignItems={"flex-start"}>
            <Typography fontSize={"18px"} fontWeight={600} color={"#000"}>
              {name}
            </Typography>
          </Stack>

          <Stack direction={"row"} gap={"16px"}>
            <Typography fontSize={"18px"} fontWeight={600} color={"#18BA51"}>
              {salePrice}₮
            </Typography>
            {saleProcent ? (
              <Typography
                fontSize={"18px"}
                fontWeight={400}
                color={"#272727"}
                sx={{ textDecoration: "line-through" }}
              >
                {price}
              </Typography>
            ) : (
              <Typography></Typography>
            )}
          </Stack>
        </Stack>
      </Stack>
    </ButtonBase>
  );
};
