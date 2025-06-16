import { useState } from "react"
import TextInputWithInfo from "../input-components/text-with-info"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faX } from "@fortawesome/free-solid-svg-icons"
import { Reorder } from "framer-motion"
import { TextInput } from "../input-components/input-elements"
import { equipment, equipmentModifier } from "../types"
import BulletDropList from "../input-components/bullet-drop-list"

export default function EditableList(props: { state: string[] | undefined, setState: Function, placeholder: string, isTemplate?: boolean, edit?: boolean }) {
  const { state, setState } = props
  const [newItem, setNewItem] = useState<string>("")
  // const [itemArr, setItemArr] = useState<string[]>([])
  return (
    <div>
      <div className="flex gap-4 items-center justify-center relative left-2 sm:left-0 mr-4">
        <TextInput label={props.placeholder} id={props.placeholder} required={false} state={newItem} setState={setNewItem} />
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
              key={`${el}`}
              value={el}
              className="relative border-b list-none left-2 sm:left-0 pt-2"
            >
              {el}
              {/* Delete Button */}
              {props.isTemplate && !props.edit ? <></> :
                <button
                  onClick={e => {
                    let newArr = [...state.slice(0, i), ...state.slice(i + 1, state.length)]
                    setState(newArr)
                  }}
                  className={`absolute -left-6 top-[8px] text-[16px] opacity-50`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>}
            </Reorder.Item>
          )
        }) : <></>}
      </Reorder.Group>
    </div>
  )
}

export function WeaponList(props: { state: equipment[] | undefined, setState: Function, placeholder: string, isTemplate?: boolean, edit?: boolean }) {
  const { state, setState } = props
  const [name, setName] = useState<string>()
  const [modifier, setModifier] = useState<equipmentModifier>()
  return (
    <div>
      <div className="flex gap-4 items-center justify-center relative left-2 sm:left-0 mr-4">
        <TextInput label={props.placeholder} id={props.placeholder} required={false} state={name} setState={setName} />
        <BulletDropList entries={["+1", "+2", "-2/+2", "-2/+4", "+3/-4", "+6/-4"]} state={modifier} setState={setModifier} placeholder="Mod." small={true} />
        <button
          className="button px-2 sm:px-5 py-1 text-sm rounded m-0"
          onClick={e => {
            let arr = state ? [...state] : []
            if (name && modifier) {
              const newItem: equipment = { name: name.trim(), modifier }
              arr.push(newItem)
            }
            setName("")
            setModifier("+1")
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
              key={`${el}`}
              value={el}
              className="relative border-b list-none left-2 sm:left-0 pt-2"
            >
              {`${el.name} ${el.modifier}`}
              {/* Delete Button */}
              {props.isTemplate && !props.edit ? <></> :
                <button
                  onClick={e => {
                    let newArr = [...state.slice(0, i), ...state.slice(i + 1, state.length)]
                    setState(newArr)
                  }}
                  className={`absolute -left-6 top-[8px] text-[16px] opacity-50`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>}
            </Reorder.Item>
          )
        }) : <></>}
      </Reorder.Group>
    </div>
  )
}