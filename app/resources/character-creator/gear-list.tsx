import EditableList from "@/util/components/editable-list";

export default function GearList(props: { gear: string[] | undefined, setGear: Function }) {
  return (
    <div>
      <h2>Gear</h2>
      <EditableList state={props.gear} setState={props.setGear} placeholder="New Gear Item" />
    </div>
  )
}