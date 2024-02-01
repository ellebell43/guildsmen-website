import EditableList from "@/util/components/editable-list";
import { Character } from "@/util/types";
import useWindowDimensions from "@/util/useWindowDimenstions";
import { useEffect, useState } from "react";

export default function GearScreen(props: { character: Character, setCharacter: Function, headerClass: string, containerClass: string }) {
  const [items, setItems] = useState([...props.character.gear])

  const { width, height } = useWindowDimensions()

  useEffect(() => {
    let newChar = { ...props.character }
    newChar.gear = items
    props.setCharacter(newChar)
  }, [items])

  return (
    <div className={`${props.containerClass} flex flex-col pl-8 mt-4 max-h-[700px] overflow-y-scroll`}>
      <h2 className={`${props.headerClass} ${width >= 1280 ? "" : "hidden"}`}>Gear</h2>
      <EditableList state={items} setState={setItems} placeholder="New Item" />
    </div>
  )
}