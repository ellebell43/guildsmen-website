import { modRange, skills } from "../types";
import { skillName } from "../types";
import { Info } from "./input-elements";
import Link from "next/link";

export default function SkillsInputGrid(props: { skills: skills, setSkills: Function, setError: Function }) {
  const skillNames: skillName[] = ["craft", "leadership", "stardew", "performance", "sneaky", "investigate", "medic", "nature", "social", "tech", "throwdown"]

  const getSkillDescription = (skill: skillName) => {
    switch (skill) {
      case "craft":
        return <p><strong>Craft</strong> is your ability to take materials and then skillfully and artistically create items from them.</p>
      case "investigate":
        return <p><strong>Investigate</strong> is your ability to discover and examine hidden things in the world around you. This can be searching for hidden doors, looking for items, etc. It also allows you to survey the area around you and track creatures.</p>
      case "leadership":
        return <p><strong>Leadership</strong> is your ability to guide groups or establishments and be a figure of authority. It is used primarily in Establishments (see the <Link href="/rules/establishments"><em>Establishments chapter</em></Link>), but can also be used to be an authority to NPCs (non-player characters)</p>
      case "medic":
        return <p><strong>Medic</strong> is your ability to heal and care for injured creatures. This is used to restore Harm and remove combat conditions (see the <a href="/rules/combat"><em>Combat chapter</em></a>).</p>
      case "stardew":
        return <p><strong>Stardew</strong> is your ability to use and control the powers that come from Stardew, an addictive drug refined from the blood of magical creatures. It is also used to refined raw Starborne blood into Stardew (see the <a href="/rules/stardew"><em>Stardew chapter</em></a>).</p>
      case "nature":
        return <p><strong>Nature</strong> is your knowledge of the natural world and ability to survive in the wild effectively. This can be used to track wild creatures, navigate through uncivilized areas, and to perform basic survival actions in the wild.</p>
      case "performance":
        return <p><strong>Performance</strong> is your ability to perform to a crowd. This include speeches, acrobatic stunts, pretending to be another person, and many other scenarios. Anytime you are showing off to an outside party, you would be performing.</p>
      case "sneaky":
        return <p><strong>Sneaky</strong> is your ability to perform sneaky actions. This includes pickpocketing, lockpicking, hiding, and simple “magic” tricks.</p>
      case "social":
        return <p><strong>Social</strong> is your ability to navigate social situations. Whenever you are interacting with a creature socially and attempting to get a specific reaction or outcome, the social skill would be used.</p>
      case "tech":
        return <p><strong>Tech</strong> is your ability to design contraptions and machines, as well as use them. This is used to invent things - creating blueprints, then prototypes, then devices to create things that wouldn&apos;t normally exist in the game world.</p>
      case "throwdown":
        return <p><strong>Throwdown</strong> is your ability to fight. The higher this skill is, the more damage you can deal in one blow.</p>
    }
  }

  return (
    <div className="relative md:left-[56px] left-[6px] grid md:grid-cols-3">
      {skillNames.map((el, i) => {
        return (
          <div key={i} className="relative flex md:justify-between gap-3 md:pr-28 py-3 pl-3">
            <div className="relative md:left-3 left-[275px] top-2">
              <Info>
                {getSkillDescription(el)}
              </Info>
            </div>
            <p className="m-0 relative top-1 text-right w-[125px] md:w-full">{el[0].toUpperCase() + el.slice(1)}</p>
            <div className="flex gap-2">
              <BubbleButton skill={el} value={-1} skills={props.skills} setSkills={props.setSkills} setError={props.setError} />
              <BubbleButton skill={el} value={0} skills={props.skills} setSkills={props.setSkills} setError={props.setError} />
              <BubbleButton skill={el} value={1} skills={props.skills} setSkills={props.setSkills} setError={props.setError} />
              <BubbleButton skill={el} value={2} skills={props.skills} setSkills={props.setSkills} setError={props.setError} />
            </div>
          </div>
        )
      })}
    </div>
  )
}

const BubbleButton = (props: { skill: skillName, value: modRange, skills: skills, setSkills: Function, setError: Function }) => {
  const skillNames: skillName[] = ["craft", "leadership", "stardew", "performance", "sneaky", "investigate", "medic", "nature", "social", "tech", "throwdown"]

  return (
    <div className="relative">
      <p className={`text-xs text-center absolute -top-4 ${props.value != -1 ? "left-[6px]" : "left-[2px]"}`}>{props.value}</p>
      <button
        className={`rounded-full w-4 h-4 border cursor-pointer transition-all ${props.skills[props.skill] >= props.value ? "bg-stone-400" : "bg-stone-200"}`}
        onClick={() => {
          const tempSkills = { ...props.skills }
          tempSkills[props.skill] = props.value

          let total = 0
          let keys = Object.keys(tempSkills)
          keys.forEach(element => {
            //@ts-ignore
            total += tempSkills[element]
          });
          if (total > -7) {
            props.setError("You cannot fill in more than four other bubbles.")
          } else {
            props.setSkills(tempSkills)
          }

        }}
      />
    </div>
  )
}