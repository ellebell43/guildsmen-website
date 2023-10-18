import { wealthRange } from "@/util/types";

export default function WealthInput(props: { wealth: wealthRange | undefined, setWealth: Function }) {
  return (
    <div className="w-fit">
      <WealthAdj adj="Destitute" value={0} setWealth={props.setWealth} wealth={props.wealth} />
      <WealthAdj adj="Poor" value={1} setWealth={props.setWealth} wealth={props.wealth} />
      <WealthAdj adj="Moderate" value={2} setWealth={props.setWealth} wealth={props.wealth} />
      <WealthAdj adj="Wealthy" value={3} setWealth={props.setWealth} wealth={props.wealth} />
      <WealthAdj adj="Exquisite" value={4} setWealth={props.setWealth} wealth={props.wealth} />
    </div>
  )
}

function WealthAdj(props: { adj: string, value: number, setWealth: Function, wealth: wealthRange | undefined }) {
  return (
    <div className="flex gap-2 items-center">
      <button
        className={`rounded-full w-4 h-4 border cursor-pointer transition-all ${props.wealth != undefined && props.wealth == props.value ? "bg-stone-400 dark:bg-stone-200" : "dark:bg-stone-400 bg-stone-200"}`}
        onClick={e => props.setWealth(props.value)}
      />
      <p className="m-0">{props.adj}</p>

    </div>
  )
}