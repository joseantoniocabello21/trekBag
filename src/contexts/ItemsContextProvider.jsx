import { initialItems } from "../lib/constants";
import { useEffect, useState, createContext } from "react";

export const ItemsContext = createContext();

export default function ItemsContextProvider({ children }) {
  const [items, setItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || initialItems
  );

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: new Date().getTime(),
      name: newItemText,
      packed: false,
    };
    //Add new to curren array
    const newItems = [...items, newItem];
    setItems(newItems);
  };
  //
  const handleDeleteItem = (Id) => {
    const newItems = items.filter((item) => item.id != Id);
    setItems(newItems);
  };
  //
  const handleToggleItem = (Id) => {
    const newItems = items.map((item) => {
      if (item.id === Id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };
  //
  const handleRemoveAllItems = () => {
    setItems([]);
  };
  //
  const handleResetToInitial = () => {
    setItems(initialItems);
  };
  //
  const handleMarlAllAsComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: true };
    });
    setItems(newItems);
  };
  //
  const handleMarlAllAsInComplete = () => {
    const newItems = items.map((item) => {
      return { ...item, packed: false };
    });
    setItems(newItems);
  };
  //
  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  //
  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        handleDeleteItem,
        handleToggleItem,
        handleRemoveAllItems,
        handleResetToInitial,
        handleMarlAllAsComplete,
        handleMarlAllAsInComplete,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
