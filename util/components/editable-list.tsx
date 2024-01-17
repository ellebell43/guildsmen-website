import { useState } from "react"
import TextInputWithInfo from "../input-components/text-with-info"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons"
import { Reorder } from "framer-motion"

export default function EditableList(props: { state: string[] | undefined, setState: Function, placeholder: string }) {
  const { state, setState } = props
  const [newItem, setNewItem] = useState<string>("")
  // const [itemArr, setItemArr] = useState<string[]>([])
  return (
    <div>
      <div className="flex gap-4 items-center justify-center relative left-2 sm:left-0">
        <TextInputWithInfo label={props.placeholder} id={props.placeholder} required={false} state={newItem} setState={setNewItem}>
          <p>Info test</p>
        </TextInputWithInfo>
        <button
          className="button px-2 sm:px-5 py-1 text-sm rounded m-0"
          onClick={e => {
            let arr = state ? [...state] : []
            if (newItem) arr.push(newItem.trim())
            setNewItem("")
            setState(arr)
            document.getElementById(props.placeholder)?.focus()
          }}
        >
          Add
        </button>
      </div>

      <p className="text-xs italic opacity-70 text-center m-0 relative bottom-2">Drag to reorder</p>

      {/* @ts-expect-error */}
      <Reorder.Group axis="y" values={state ? state : []} onReorder={setState} className="max-w-[300px] mx-auto p-0">
        {state ? state.map((el, i) => {
          return (
            <Reorder.Item
              key={el}
              value={el}
              className="relative border-b list-none left-2 sm:left-0 pt-2"
            >
              {el}
              <button
                onClick={e => {
                  let newArr = [...state.slice(0, i), ...state.slice(i + 1, state.length)]
                  setState(newArr)
                }}
                className="absolute -left-6 top-[8px] text-[16px] opacity-50"
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </Reorder.Item>
          )
        }) : <></>}
      </Reorder.Group>
    </div>
  )
}