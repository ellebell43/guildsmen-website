import EditableList from "@/util/components/editable-list";

export default function GearList(props: { gear: string[] | undefined, setGear: Function }) {
  return (
    <div>
      <h2>Gear</h2>

      <p>For the final step, give your character whatever items make sense due to your skills, background, and guild. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

      <p>We suggest you read the rest of the rules chapters in their entirety as well to get a good grasp of the game and its mechanics. It&apos;s not necessary but it might be good to see what can be accomplished.</p>

      <EditableList state={props.gear} setState={props.setGear} placeholder="New Gear Item" />
    </div>
  )
}