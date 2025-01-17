import SkillsInputGrid from "@/util/input-components/skills-input-grid";
import { skills } from "@/util/types";

export default function StartingSkills(props: { skills: skills, setSkills: Function, setError: Function }) {
  return (
    <>
      <h2>Starting Skills</h2>
      <p>From here, you need to give your character some skills. Fill in 4 bubbles on the skills chart below. Each bubble represents your level of skill for that particular skill. All skills start at -1, meaning your character has no experience with that skill. Starting from the -1 mark, you my increase your skills 4 times. You can increase 4 skills once (up to +0), you can condense them into just a couple skills (2 skills at +1), or any combination of that kind, as long as you only increase your skills 4 times. You cannot increase any skill past +2 at this time.</p>

      <p className="text-center font-bold"><em>Do not start with the Stardew skill before reading through the <a href="/rules/stardew">Stardew chapter</a></em></p>

      <p>If you&apos;ve made a backstory, try to consider what skills would make sense for your backstory. If you haven&apos;t made a backstory, feel free to pick whatever skills you think would work for your character.</p>

      <SkillsInputGrid skills={props.skills} setSkills={props.setSkills} setError={props.setError} />
    </>
  )
}