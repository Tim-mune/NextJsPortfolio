import { createContext } from "react";
const appContext = createContext();

const provider = () => {
  return appContext.provider();
};
