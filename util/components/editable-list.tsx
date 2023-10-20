import { useState } from "react"
import TextInputWithInfo from "../input-components/text-with-info"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons"
import { Reorder } from "framer-motion"

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

      <p className="text-xs italic opacity-70 text-center m-0 relative bottom-2">Drag to reorder</p>

      <Reorder.Group axis="y" values={itemArr} onReorder={setItemArr} className="max-w-[300px] mx-auto p-0">
        {itemArr.map((el, i) => {
          return (
            <Reorder.Item
              key={el}
              value={el}
              className="relative border-b list-none"
            >
              {el}
              <button
                onClick={e => {
                  let newArr = [...itemArr.slice(0, i), ...itemArr.slice(i + 1, itemArr.length)]
                  setItemArr(newArr)
                }}
                className="absolute -left-4 top-[7px] text-[10px] opacity-50"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </Reorder.Item>
          )
        })}
      </Reorder.Group>
    </div>
  )
}