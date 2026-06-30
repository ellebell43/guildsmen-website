import SkillsInputGrid from "@/util/input-components/skills-input-grid";
import { skills } from "@/util/types";
import Link from "next/link";

export default function StartingSkills(props: { skills: skills, setSkills: Function, setError: Function, unmutableSkills: skills }) {
  return (
    <>
      <h2>Starting Skills</h2>
      <p>From here, you need to give your character some additional skills. This is after filling in some character details because picking your starting skills can be overwhelming. Lean on what you&apos;ve written out for your characters details to choose skills that feel like they just <em>fit</em> your character. Or, you can do the inverse if you're struggling to find things to put in your details! Pick out your starting skills and use that to inform who your character is.</p>

      <p> You get four skill bubbles to fill in. That means that you may increase your skills 4 times. You can increase 4 skills once, you can condense them into just a couple skills, or any combination of that kind, as long as you only increase your skills 4 times. <em>However, you cannot increase any skill past +2 during character creation.</em></p>

      <p>Each bubble represents your level of skill for that particular skill. All skills start at -1, meaning your character has no experience with that skill. You're guild will increase a few sills to +0. And now you essentially have four skill points to distribute however you&apos;d like. For details on what skill do and how they're used, see the <Link href="/rules/skills" target="_blank">Skills Chapter.</Link></p>

      <p>A black bubble represents the minimum that skill is allowed to be. Skills that have a black bubble on 0 are skills you obtained through your guild and cannot be decreased tp -1</p>

      <p className="text-center"><strong><em>Do not start with the Stardew skill before reading through the <Link href="/rules/Stardew" target="_blank">Stardew chapter</Link></em></strong></p>

      <SkillsInputGrid skills={props.skills} setSkills={props.setSkills} setError={props.setError} unmutableSkills={props.unmutableSkills} />
    </>
  )
}