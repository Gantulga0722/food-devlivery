import { Stack } from "@mui/material";
import { CardDataFood, CategoryData } from "@/utils/dummy-data-cards";
import { FoodCardCategory, FoodCard } from "@/components/cards";

const filterBySale = CardDataFood.filter(
  (food, index) => food.category == "Хямдралтай" && index <= 3
);
// const filterByMain = CardDataFood.filter(
//   (food, index) => food.category == "Үндсэн хоол" && index <= 3
// );
// const filterBySalad = CardDataFood.filter(
//   (food, index) => food.category == "Салад ба зууш" && index <= 3
// );
// const filterByDisert = CardDataFood.filter(
//   (food, index) => food.category == "Амттан" && index <= 3
// );

export const HomeFood = () => {
  return (
    <Stack gap={"80px"}>
      {CategoryData.map((cate, index) => (
        <Stack key={index} gap={"24px"}>
          <FoodCardCategory category={cate.name} />
          <FoodCard filteredData={filterBySale} />
        </Stack>
      ))}
    </Stack>
  );
};
