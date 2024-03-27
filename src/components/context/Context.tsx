import { useState,
  createContext,
  useContext,
  SetStateAction,
  Dispatch,} from 
"react";

interface FoodType {
  id: number;
  foodName: string;
  price: number;
  imagePath: string;
  ingredients: string[];
  stock: number;
  sale: number;
}

const basketFoodPrimer: FoodType[] = [];

interface FoodPropsContextType {
  allFood: FoodType[];
  setAllfood: Dispatch<SetStateAction<FoodType[]>>;
}

const dataFetch = async (url: string) => {
    let data = await fetch(url);
    let newData = await data.json();

    console.log(typeof newData);
    return newData[0];
};

dataFetch("/utils/dummyData.json");

const FoodContext = createContext<FoodPropsContextType>({

    allFood:  dataFetch("/utils/dummyData.json"),
    setAllFood: ()=>{}

});

const FoodContextProvider = ({ children }: React.ReactNode) => {

  const [allFood, setAllfood] = useState();
  const [basketFood, setBasketFood] = useState();

  return <FoodContext.Provider value={{allFood, setAllfood}}>{children}</FoodContext.Provider>;
};

export { FoodContextProvider };
