/**
 * If attribute is an object's property, set `attributeIsForObject: true` and pass in the object
 * Use setAttribute as the function to update the object.\
 */

const Switch = (props: { attribute: boolean, setAttribute: Function, label: string, attributeIsForObject?: boolean, object?: object, attributeTag?: string }) => {
  const { attribute, setAttribute, label, attributeIsForObject, object, attributeTag } = props

  if (attributeIsForObject && (!object || !attributeTag)) {
    return <p>You set this switch up wrong!</p>
  }

  const update = () => {
    if (attributeIsForObject) {
      if (!object || !attributeTag) {
      } else {
        let newObject = { ...object }
        // @ts-expect-error
        newObject[attributeTag] = !attribute
        setAttribute(newObject)
      }
    } else {
      setAttribute(!attribute)
    }
  }

  return (
    <div className="flex gap-2 items-center justify-between w-full">
      {/* switch label */}
      <p className="w-fit m-0 text-lg">{label}</p>
      {/* Visual switch, call update on click */}
      <button className={`button border m-0 relative w-[60px] h-[25px] rounded-full shadow-inner ${attribute ? "bg-green-200 hover:bg-green-300 dark:bg-green-800 dark:hover:bg-green-700" : "bg-stone-200 hover:bg-stone-300"}`} onClick={e => update()}>
        <div className={`rounded-full w-[20px] h-[20px] absolute transition-all shadow ${attribute ? "right-[2px] bg-stone-400 border dark:border-none" : "right-[37px] bg-stone-700 dark:bg-stone-400"}`} />
      </button>
    </div>
  )
}

export default Switch