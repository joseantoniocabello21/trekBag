import AddItemForm from "./AddItemForm";
import ButtonGroup from "./ButtonGroup";
import { useItemsContextProvider } from "../lib/hooks";
import { useItemStore } from "../stores/itemStore";

export default function Sidebar() {
  // const {
  //   addItem,
  //   removeAllItems,
  //   resetToInitial,
  //   markAllAsComplete,
  //   markAllAsInComplete,
  // } = useItemStore();
  const addItem = useItemStore((state) => state.addItem);
  const removeAllItems = useItemStore((state) => state.removeAllItems);
  const resetToInitial = useItemStore((state) => state.resetToInitial);
  const markAllAsComplete = useItemStore((state) => state.markAllAsComplete);
  const markAllAsInComplete = useItemStore(
    (state) => state.markAllAsInComplete
  );

  console.log("Check performance");
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup
        handleRemoveAllItems={removeAllItems}
        handleResetToInitial={resetToInitial}
        handleMarlAllAsComplete={markAllAsComplete}
        handleMarlAllAsInComplete={markAllAsInComplete}
      />
    </div>
  );
}
