import { create } from "zustand";
import { initialItems } from "../lib/constants";
import { persist } from "zustand/middleware";

export const useItemStore = create(
  persist(
    (set) => ({
      items: initialItems,
      addItem: (newItemText) => {
        const newItem = {
          id: new Date().getTime(),
          name: newItemText,
          packed: false,
        };
        //Add new to curren array
        set((state) => {
          const newItems = [...state.items, newItem];
          return { items: newItems };
        });
      },
      deleteItem: (Id) => {
        set((state) => {
          const newItems = state.items.filter((item) => item.id != Id);
          return { items: newItems };
        });
      },
      toggleItem: (Id) => {
        set((state) => {
          const newItems = state.items.map((item) => {
            if (item.id === Id) {
              return { ...item, packed: !item.packed };
            }
            return item;
          });
          return { items: newItems };
        });
      },
      removeAllItems: () => {
        set(() => ({ items: [] }));
      },
      resetToInitial: () => {
        set(() => ({ items: initialItems }));
      },
      markAllAsComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: true };
          });
          return { items: newItems };
        });
      },
      markAllAsInComplete: () => {
        set((state) => {
          const newItems = state.items.map((item) => {
            return { ...item, packed: false };
          });
          return { items: newItems };
        });
      },
    }),
    { name: "items" }
  )
);
