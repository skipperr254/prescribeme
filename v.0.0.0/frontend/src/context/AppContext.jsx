import { createContext } from "react";
import { doctors, specialityData } from "../assets/data";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const value = {
    doctors,
    specialityData,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
