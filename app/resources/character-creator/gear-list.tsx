import EditableList, { WeaponList } from "@/util/components/editable-list";
import { EquipmentObjectInput } from "@/util/input-components/input-elements";
import { equipment } from "@/util/types";
import Link from "next/link";

type props = {
  gear: string[] | undefined, setGear: Function,
  armor: equipment | undefined, setArmor: Function,
  weapons: equipment[] | undefined, setWeapons: Function
}

export default function GearList(props: props) {

  return (
    <div>
      <h2>Gear</h2>

      <p>For the final step, give your character whatever items make sense due to your skills, background, and guild. These are items you should just write in. <Link target="_blank" href="/rules/the-market">The Market</Link> chapter outlines a few items that are special to this world or require special rules to use. Feel free to use this list to add items to your character and also feel free to write in whatever items you can think of that would make narrative sense for your character. Next, go on to the next chapter to learn about skills, what they are, what they can do, and how to increase them.</p>

      <p>We suggest you read the rest of the rules chapters in their entirety as well to get a good grasp of the game and its mechanics. It&apos;s not necessary but it might be good to see what can be accomplished.</p>

      <h3 className="border-none">Armor</h3>
      <EquipmentObjectInput state={props.armor ? props.armor : { name: "", modifier: "+1" }} setState={props.setArmor} entries={["+1", "+2"]} placeholder="Armor" />
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center gap-4">
        <div>
          <h3 className="border-none">Weapons</h3>
          <WeaponList state={props.weapons} setState={props.setWeapons} placeholder="New Weapon Item" />
        </div>
        <div>
          <h3 className="border-none">Gear</h3>
          <EditableList state={props.gear} setState={props.setGear} placeholder="New Gear Item" />
        </div>
      </div>
    </div>
  )
}