import { useContext } from "react";
import { isTemplateSpan } from "typescript";
import OrderContext from "../context/OrderContext";
import { Item } from "../Item";

interface Props {
  item: Item;
}
//part of number 5
export default function MenuItem({ item }: Props) {
  const { items, addItem, removeItem } = useContext(OrderContext);

  return (
    <div>
      <div>Name:{item.name}</div>
      <div>Description:{item.description}</div>
      <div>Calories:{item.calories}</div>
      <div>Price:{item.price}</div>
      <div>{item.vegetarian ? "Vegetarian" : "Not Vegetarian"}</div>
      <button onClick={() => addItem(item)}>Add to order</button>
      <button onClick={() => removeItem(item.id)}>Remove from order</button>
    </div>
  );
}
