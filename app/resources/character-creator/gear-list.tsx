import EditableList from "@/util/components/editable-list";
import Link from "next/link";

export default function GearList(props: { gear: string[] | undefined, setGear: Function }) {
  return (
    <div>
      <h2>Gear</h2>

      <p>For the final step, give your character whatever items make sense due to your skills, background, and guild. These are items you should just write in. <Link target="_blank" href="/rules/the-market">The Market</Link> chapter outlines a few items that are special to this world or require special rules to use. Feel free to use this list to add items to your character and also feel free to write in whatever items you can think of that would make narrative sense for your character. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

      <p>We suggest you read the rest of the rules chapters in their entirety as well to get a good grasp of the game and its mechanics. It&apos;s not necessary but it might be good to see what can be accomplished.</p>

      <EditableList state={props.gear} setState={props.setGear} placeholder="New Gear Item" />
    </div>
  )
}