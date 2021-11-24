import React, { createContext, useState } from "react";
import { Food } from "../../models/Food";
import { Meal } from "../../models/Meal";

interface RootContextInterface {
  selectedFood?: Food;
  setSelectedFood: React.Dispatch<React.SetStateAction<Food | any>>;
  meal?: Meal;
  setMeal: React.Dispatch<React.SetStateAction<Meal | any>>;
};

export const RootContext = createContext<RootContextInterface>({
  setSelectedFood: () => {},
  setMeal: () => {},
});

const RootContextWrap: React.FC = ({ children }) => {
  const [selectedFood, setSelectedFood] = useState<Food>();
  const [meal, setMeal] = useState<Meal>();

  const defaultContext : RootContextInterface = {
    selectedFood: selectedFood,
    setSelectedFood: setSelectedFood,
    meal: meal,
    setMeal: setMeal,
  };

  return (
    <RootContext.Provider value={defaultContext}>
      { children }
    </RootContext.Provider>
  );
};

export default RootContextWrap;

