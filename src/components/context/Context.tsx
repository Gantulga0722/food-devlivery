import { Dispatch, SetStateAction, createContext, useState } from "react";

type FoodDataType = {
  id: number;
  category: string;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string;
  stock: number;
  sale: number;
};

const allFoodData: allFood[] = [];

const GetFoodData = async (url: string) => {
  const fetch_data = await fetch(url);
  const foodData = fetch_data.json();

  return foodData;
};

type FoodPropsContext = {
  allFood: allFood[];
  setAllFood: Dispatch<SetStateAction<allFood[]>>;
};

const FoodContext = createContext<FoodPropsContext>({
  allFood: GetFoodData("/pages/dummyData"),
  setAllFood: () => {},
});

const FoodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFood, setAllFood] = useState(FoodContext);

  return (
    <FoodContext.Provider value={{ allFood, setAllFood }}>
      {children}
    </FoodContext.Provider>
  );
};
export { FoodContext, FoodContextProvider };
