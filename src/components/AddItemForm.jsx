import { useRef, useState } from "react";
import Button from "./Button";

export default function AddItemForm({ onAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();
  //
  const changeHandler = (event) => {
    const newText = event.target.value;
    setItemText(newText);
  };
  //
  const submitHandler = (event) => {
    event.preventDefault();
    //
    if (!itemText) {
      alert(`Item can't be added`);
      inputRef.current.focus();
      return;
    }
    //
    onAddItem(itemText);
    //
    setItemText("");
  };
  //
  return (
    <form onSubmit={submitHandler}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={changeHandler}
        autoFocus={true}
      />
      <Button>Add to list</Button>
    </form>
  );
}
