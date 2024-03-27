import React, {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";

interface FoodType {
  id: number;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
}

interface FoodPropsContextType {
  allFood: FoodType[];
  setAllFood: Dispatch<SetStateAction<FoodType[]>>;
}

const FoodContext = createContext<FoodPropsContextType>({
  allFood: [],
  setAllFood: () => {},
});

const FoodContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [allFood, setAllFood] = useState<FoodType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/dummyData.json"
        );
        const data = await response.json();
        setAllFood(data);
        console.log("food data", data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <FoodContext.Provider value={{ allFood, setAllFood }}>
      {children}
    </FoodContext.Provider>
  );
};

export { FoodContext, FoodContextProvider };
