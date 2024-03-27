import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface IFoodType {
  id: number;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
}

interface IFoodPropsContextType {
  allFood: IFoodType[];
  setAllFood: Dispatch<SetStateAction<IFoodType[]>>;
}

const FoodContext = createContext<IFoodPropsContextType>({
  allFood: [],
  setAllFood: () => {},
});

const FoodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFood, setAllFood] = useState<IFoodType[]>([]);

  // Fetch data asynchronously and update the state
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/utils/dummyData.json"); // Update the URL to match the location of your JSON file
        const data = await response.json();
        setAllFood(data);
        console.log("food data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once

  return (
    <FoodContext.Provider value={{ allFood, setAllFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodContextProvider };
