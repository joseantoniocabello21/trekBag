import { useMemo, useState } from "react";
import EmptyView from "./EmptyView";
import Select from "react-select";

import { useItemsContextProvider } from "../lib/hooks";
import { useItemStore } from "../stores/itemStore";

const sortingOptions = [
  {
    label: "Sort by Default",
    value: "default",
  },
  {
    label: "Sort by packed",
    value: "packed",
  },
  {
    label: "Sort by unpacked",
    value: "unpacked",
  },
];

export default function ItemList() {
  //const { items, deleteItem, toggleItem } = useItemStore();
  const items = useItemStore((state) => state.items);
  const deleteItem = useItemStore((state) => state.deleteItem);
  const toggleItem = useItemStore((state) => state.toggleItem);
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === "packed") {
          return b.packed - a.packed;
        }
        //
        if (sortBy === "unpacked") {
          return a.packed - b.packed;
        }
        //
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {!items.length ? (
        <EmptyView />
      ) : (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
          />
        </section>
      )}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.name}
            item={item}
            onDeleteItem={deleteItem}
            onToggleItem={toggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          onChange={() => onToggleItem(item.id)}
          checked={item.packed}
          type="checkbox"
        ></input>
        {item.name}
      </label>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
