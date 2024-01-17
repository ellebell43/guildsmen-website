import EditableList from "@/util/components/editable-list";
import { Character } from "@/util/types";
import { useEffect, useState } from "react";

export default function GearScreen(props: { character: Character, setCharacter: Function }) {
  const [items, setItems] = useState([...props.character.gear])

  useEffect(() => {
    let newChar = { ...props.character }
    newChar.gear = items
    props.setCharacter(newChar)
  }, [items])

  return (
    <>
      <EditableList state={items} setState={setItems} placeholder="New Item" />
    </>
  )
}