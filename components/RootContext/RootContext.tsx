import React, { createContext, useState } from "react";
import { Food } from "../../models/Food";

interface RootContextInterface {
  selectedFood?: Food;
  setSelectedFood: React.Dispatch<React.SetStateAction<Food | any>>;
};

export const RootContext = createContext<RootContextInterface>({
  setSelectedFood: () => {}
});

const RootContextWrap: React.FC = ({ children }) => {
  const [selectedFood, setSelectedFood] = useState<Food>();

  const defaultContext : RootContextInterface = {
    selectedFood: selectedFood,
    setSelectedFood: setSelectedFood
  };

  return (
    <RootContext.Provider value={defaultContext}>
      { children }
    </RootContext.Provider>
  );
};

export default RootContextWrap;

