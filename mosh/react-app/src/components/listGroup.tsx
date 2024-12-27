import { MouseEvent, useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //items = [];

  //   const getMessage = () => {
  //     return items.length === 0 ? (
  //       <p className="text-danger">No Item Found</p>
  //     ) : null;
  //   };

  const handleClick = (event: MouseEvent) => console.warn(event);
  return (
    <>
      {" "}
      <h2>List of {heading}</h2>
      {items.length === 0 && <p className="text-danger">No Items Found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              selectedIndex == index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
