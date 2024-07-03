export default function MarketItem(props: {
  name: string,
  cost: "Destitute" | "Poor" | "Moderate" | "Wealthy" | "Exquisite" | "Exquisite+",
  description?: string,
  crystal?: boolean
}) {
  return (
    <div className="w-full mb-4">
      <div className={`flex justify-between border-b border-dotted border-stone-400`}>
        <p className="font-bold text-lg m-0">{props.name}</p>
        <p className="itemCost m-0">{props.cost}</p>
      </div>
      {props.description ? <p className="mt-0 p-0 opacity-50 border-none -z-10 relative">{props.description}</p> : <></>}
    </div>
  )
}