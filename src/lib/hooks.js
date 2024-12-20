import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContextProvider";

export function useItemsContextProvider() {
  const context = useContext(ItemsContext);
  return context;
}
