import { ReactNode, useState } from "react";
import { Item } from "../Item";
import OrderContext from "./OrderContext";

interface Props {
  children: ReactNode;
}

export default function OrderContextProvider({ children }: Props) {
  const [items, setItems] = useState<Item[]>([]);

  function addItem(item: Item): void {
    setItems((prev) => [...prev, item]);
  }

  function removeItem(id: string): void {
    let index = items.findIndex((item) => {
      return item.id === id;
    });
  }

  return (
    <OrderContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </OrderContext.Provider>
  );
}
