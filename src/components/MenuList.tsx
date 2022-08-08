import MenuItem from "./MenuItem";
import { Item } from "../Item";

export default function MenuList() {
  let menuItems: Item[] = [
    {
      id: "xyz",
      name: "mac and cheese",
      description: "orange and cheesy",
      calories: 500,
      price: 7.0,
      vegetarian: true,
    },

    {
      id: "abc",
      name: "pizza",
      description: "meat lovers",
      calories: 650,
      price: 13.0,
      vegetarian: false,
    },
  ];

  return (
    <div className="MenuList">
      {menuItems.map((item) => (
        <MenuItem item={item} />
      ))}
    </div>
  );
}
