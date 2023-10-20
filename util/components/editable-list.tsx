import { useState } from "react"
import TextInputWithInfo from "../input-components/text-with-info"

export default function EditableList(props: { state: string[] | undefined, setState: Function, placeholder: string }) {
  const [newItem, setNewItem] = useState<string>("")
  const [itemArr, setItemArr] = useState<string[]>([])
  return (
    <div>
      <div className="flex gap-4 items-center justify-center relative">
        <TextInputWithInfo label={props.placeholder} id={props.placeholder} required={false} state={newItem} setState={setNewItem}>
          <p>Info test</p>
        </TextInputWithInfo>
        <button
          className="button px-5 py-1 text-sm rounded m-0"
          onClick={e => {
            let arr = [...itemArr]
            if (newItem) arr.push(newItem.trim())
            setNewItem("")
            setItemArr(arr)
            document.getElementById(props.placeholder)?.focus()
          }}
        >
          Add
        </button>
      </div>

      <ul className="max-w-[300px] mx-auto">
        {itemArr.map((el, i) => {
          return (
            <li
              key={i}
            >
              {el}
            </li>
          )
        })}
      </ul>
    </div>
  )
}