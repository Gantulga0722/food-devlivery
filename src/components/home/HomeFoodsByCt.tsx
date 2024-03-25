import { ButtonBase, Stack, Typography } from "@mui/material";
import { CardDataFood } from "@/utils/dummy-data-cards";

export const HomeFoodsByCt = ({
  filteredCategory,
}: {
  filteredCategory: string;
}) => {
  const filteredData = CardDataFood.filter(
    (food) => food.category == `${filteredCategory}`
  );

  return (
    <Stack direction={"row"} justifyContent={"space-between"}>
      {filteredData.map((data, index) => (
        <ButtonBase onClick={() => {}} key={index}>
          <Stack gap={"14px"}>
            <Stack
              width={"282px"}
              height={"186px"}
              borderRadius={"16px"}
              boxShadow={
                "0px 3px 6px -2px rgba(0, 0, 0, 0.10), 0px 6px 10px 0px rgba(0, 0, 0, 0.07)"
              }
              sx={{
                backgroundImage: `URL(${data.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              position={"relative"}
            >
              {data.saleProcent ? (
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
                  <Typography
                    fontSize={"18px"}
                    fontWeight={600}
                    color={"white"}
                  >
                    {data.saleProcent}
                  </Typography>
                </Stack>
              ) : (
                <Stack></Stack>
              )}
            </Stack>
            <Stack width={"282px"} gap={"2px"}>
              <Stack alignItems={"flex-start"}>
                <Typography fontSize={"18px"} fontWeight={600} color={"#000"}>
                  {data.name}
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={"16px"}>
                <Typography
                  fontSize={"18px"}
                  fontWeight={600}
                  color={"#18BA51"}
                >
                  {data.price}₮
                </Typography>
                {data.salePrice ? (
                  <Typography
                    fontSize={"18px"}
                    fontWeight={400}
                    color={"#272727"}
                    sx={{ textDecoration: "line-through" }}
                  >
                    {data.salePrice}₮
                  </Typography>
                ) : (
                  <Typography></Typography>
                )}
              </Stack>
            </Stack>
          </Stack>
        </ButtonBase>
      ))}
    </Stack>
  );
};
