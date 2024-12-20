import { useItemsContextProvider } from "../lib/hooks";
import { useItemStore } from "../stores/itemStore";

export default function Counter() {
  const items = useItemStore((state) => state.items);
  const numberOfItemsPacked = () => {
    const packedItems = items.filter((item) => item.packed);
    return packedItems.length;
  };
  return (
    <p>
      <b>{numberOfItemsPacked()}</b> / {items.length} Items packed
    </p>
  );
}
