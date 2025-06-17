"use client"
import { DegreesOfSuccessTable, TaskDifficultyTable } from "@/app/rules/skills/client"
import { useEffect } from "react"

export default function Page() {
  useEffect(() => {
    document.getElementById("header")?.classList.add("hidden")
    document.getElementById("footer")?.classList.add("hidden")
    document.getElementById("footer")?.classList.remove("lg:grid")
    document.getElementById("main")?.classList.add("m-0", "p-0")
    document.getElementById("main")?.classList.remove("pt-5",)
  }, [])

  const pStyle = "m-0 text-left"
  const h1Style = "m-0 mb-2"
  const h2Style = "m-0 text-left text-lg border-b border-black"

  return (
    <div>

      {/* ===== PAGE 1 ====== */}
      <div className="bg-white w-[8.5in] h-[11in] mx-auto border-stone-300 border relative shadow-xl px-[.5in] pt-6 text-xs">
        <h1 className={h1Style}>Quick Reference</h1>
        <div className="flex justify-center items-start w-full gap-4 p-1">
          {/* ===== LEFT COLUMN ====== */}
          <div className="w-1/2 border-r border-black">
            <div className="flex gap-2 mb-2">
              <div className="w-1/2 h-full">
                {/* Stats */}
                <h2 className={h2Style}>Stats</h2>
                <p className={pStyle}><strong>Nimble</strong> - agility; move quickly, jump over objects, dodge, etc.</p>
                <p className={pStyle}><strong>Tough</strong> - strength; move heavy things, wrestle, etc.</p>
                <p className={pStyle}><strong>Competence</strong> - awareness; read situations, act under pressure, etc.</p>
                <p className={pStyle}><strong>Constitution</strong> - endurance; resist illness, exert self, endure stress, etc.</p>
                <p className={pStyle}><strong>Spirit</strong> - magic; charge runes, defend against runes, etc.</p>
              </div>
              {/* Skills */}
              <div className="w-1/2">
                <h2 className={h2Style}>Skills</h2>
                <p className={pStyle}><strong>Craft</strong> - create items and runes</p>
                <p className={pStyle}><strong>Investigate</strong> - find things</p>
                <p className={pStyle}><strong>Leadership</strong> - be an authority</p>
                <p className={pStyle}><strong>Medic</strong> - heal injuries</p>
                <p className={pStyle}><strong>Nature</strong> - survival knowledge</p>
                <p className={pStyle}><strong>Performance</strong> - acting to a crowd</p>
                <p className={pStyle}><strong>Social</strong> - navigating social situations</p>
                <p className={pStyle}><strong>Sneaky</strong> - hidden actions</p>
                <p className={pStyle}><strong>Stardew</strong> - controlling Stardew</p>
                <p className={pStyle}><strong>Tech</strong> - invent and use tech</p>
                <p className={pStyle}><strong>Throwdown</strong> - fighting</p>
              </div>
            </div>

            <div>
              <p className={pStyle}><strong>Task Difficulty</strong> - Target to hit depending on difficulty of task: very easy (4+), easy (6+), moderate (8+), difficult (10+), very difficult (12+), and super difficult (14+)</p>
              <p className={pStyle}><strong>Degree of Success</strong> - Difference between number rolled and target number: Extreme fail (-4), fail (-2), mixed success (-1), success (+0), extreme success (+4)</p>
              <p className={pStyle}><strong>Help Actions</strong> - Helper defines how they help, rolls relevant skill/stat check. If successful, target gets +1 to action. In combat, +1 per other person attacking the same target.</p>
              <p className={pStyle}><strong>Experience</strong> - Increase experience on every failed <em>skill</em> check.</p>
            </div>

            <div>
              {/* Combat */}
              <h2 className={h2Style}>Combat</h2>
              <p className={pStyle}><strong>Reactions</strong> - You always get a reaction if attacked. If you roll higher, no damage is taken. Damage should not be dealt via reaction.</p>
              <p className={pStyle}><strong>Damage</strong> - Damage is equal to the difference between your reaction roll and their attack roll plus their attack modifier.</p>
              <p className={pStyle}><strong>Unreactive</strong> - Attacking something that cannot react uses <em>Skill Shot</em> rules</p>
              <p className={pStyle}><strong>Spirit Shield</strong> - Use Spirit stat to deflect magic as a reaction. Higher reaction roll than opponent attack means no damage. Lower reaction vs attack, but higher reaction vs spell difficulty means half damage.</p>
              <p className={pStyle}><strong>Healing</strong> - Done via consumables or medic checks: -2 Harm per periodic, successful medic check or periodic consumable. Done via runes: at least 12+ bespoke rune creation and charging, but heals completely.</p>
              <p className={pStyle}><strong>Weapons</strong> - Weapons give an attack bonus that is added after a successful hit to increase damage. Weapon types: light melee (+1), heavy melee (+2), light bow (-2/+2), heavy bow (-2/+4), light gun (+3/-4), heavy gun (+6/-4). Heavy weapons can only be used if you have 2+ Tough.</p>
              <p className={pStyle}><strong>Armor</strong> - Armor negates damage equal to its modifier. Light armor is +1, heavy armor is +2. Heavy armor can only be used if you have 2+ Tough.</p>
              <p className={pStyle}><strong>Skill Shots</strong> - Used to bypass target reactions or for unreactive opponents. Damage is equal to the difference between your roll and the difficulty check, plus your weapon's modifier. Raising the difficulty to Difficult or higher can create a narrative outcome rather rather than standard combat. In this scenario, missing the target number on a reactive opponent allows them to then react to deal damage back.</p>
            </div>
          </div>

          {/* ===== RIGHT COLUMN ====== */}
          <div className="w-1/2 h-full">
            {/* Reactions */}
            <h3 className={h2Style}>Conditions</h3>
            <p className={pStyle}><strong>Blinded</strong> - Check relying on vision have -2 for set time. Cannot end early.</p>
            <p className={pStyle}><strong>Burning</strong> - 1 Harm per combat round till put out.</p>
            <p className={pStyle}><strong>Calmed</strong> - No violent actions for set time. Competence 10+ to end early.</p>
            <p className={pStyle}><strong>Charmed</strong> - Friendly towards charmer for set time. Competence 10+ to end early.</p>
            <p className={pStyle}><strong>Entangled</strong> - Cannot move for set time. Tough 10+ to end early</p>
            <p className={pStyle}><strong>Exhausted</strong> - All physical actions have -2 for set time. Constitution 10+ to end early.</p>
            <p className={pStyle}><strong>Frenzied</strong> - Attack uncontrollably for set time. Competence 10+ to end early</p>
            <p className={pStyle}><strong>Frightened</strong> - All mental actions have -2 for set time. Competence 10+ to end early</p>
            <p className={pStyle}><strong>Frozen</strong> - All movement has -2 for set time. Constitution 10+ to end early.</p>
            <p className={pStyle}><strong>Grappled</strong> - Attacker and opponent are immobile. Opposed Tough check to end. Attacker can knock down or back, disarm, make an attack with +1, or continue the grapple.</p>
            <p className={pStyle}><strong>Knocked Back</strong> - Pushed back a distance. Tough 10+ to half effect.</p>
            <p className={pStyle}><strong>Knocked Down</strong> - Reactions have -2 until you get up.</p>
            <p className={pStyle}><strong>Poisoned</strong> - Take Harm in intervals. Constitution 10+ to prevent Harm for 1 interval. Must be cured to end.</p>
            <p className={pStyle}><strong>Stunned</strong> - Unable to act for set time. Constitution 10+ to end early.</p>
            <p className={pStyle}><strong>Weakened</strong> - Effects of attacks are halved for set time. Constitution 10+ to end early.</p>

            {/* Stardew */}
            <h2 className={h2Style}>Stardew</h2>
            <p className={pStyle}><strong>First Dose</strong> - Set addiction to level one.</p>
            <p className={pStyle}><strong>Addiction</strong> - Any dice roll makes need go up (from the right). More Stardew resets need. If need hits addiction level, take Harm equal to addiction. Constitution 10+ to half the effect. If you have uses when need hits addiction level, Constitution 10+ or deal uses x 2 Harm to everything within 10 feet.</p>
            <p className={pStyle}><strong>Quality to Uses</strong> - Crude give 1, Average gives 2, Good gives 3, excellent gives 4. Gain addiction bars equal to usage on injection. Maximum of 6 uses at once, or character dies and deal 18 harm to everything within 15 feet.</p>
            <p className={pStyle}><strong>Using Stardew</strong> - Manipulate element based on Stardew type. GM determines difficulty. Use is consumed on success only.</p>
            <p className={pStyle}><strong>Common Types</strong> - Air, Fire, Lightning, Metal, Stone, and Water.</p>

            {/* Runes */}
            <h2 className={h2Style}>Runes</h2>
            <p className={pStyle}><strong>Inscription</strong> - Done via craft skill check. Difficulty is equal to spell difficulty. One item can have many runes, but all get activated at once. Two runes of the same difficulty makes the item one difficulty higher to use.</p>
            <p className={pStyle}><strong>Materials</strong> - Low quality materials get destroyed with high difficulty runes. Common materials can handle easy spells, uncommon can handle moderate, rare can handle difficult, exotic can handle very difficult.</p>
            <p className={pStyle}><strong>Attacks</strong> - Works the same as any other weapon. Damage modifier is determined by difficulty of the spell: very easy (-1), easy (+0), moderate (+1), difficult (+2), and very difficult (+3). Must roll at least the spell difficulty for anything to happen at all.</p>
          </div>
        </div>
      </div>

      {/* ===== PAGE 2 ====== */}
      <div className="bg-white w-[8.5in] h-[11in] mx-auto border-stone-300 border relative shadow-xl px-[.5in] pt-6 text-xs">
        {/* ===== LEFT COLUMN ====== */}
        <div className="flex justify-center items-start w-full gap-4 p-1">
          <div className="w-1/2 border-r border-black h-full">
            <h2 className={h2Style}>Runes Cont.</h2>
            <p className={pStyle}><strong>Linking</strong> - All participants touch same object or each other. Spirit 10+ successfully links. On fail, take Harm equal to difference between your roll and target number (10). Any linked member has access to participants' Spirit modifier to add to their own. On a failed Spirit check while linked, all participants take Harm equal to the difference between the number achieved and the target number.</p>

            {/* Crafting */}
            <h2 className={h2Style}>Crafting</h2>
            <p className={pStyle}><strong>Sponsor</strong> -  An NPC that will bank roll large crafting/invention projects. Found via role play.</p>
            <p className={pStyle}><strong>Improvement</strong> - Successful craft check increases weapon bonus or armor modifier by 1. Can be done up to 3 times. Requires wealth equal to items material cost. May reduce wealth. On a failed craft check, item is ruined. Also used to reinforce non-weapon and non-armor items.</p>
            {/* Invention */}
            <h2 className={h2Style}>Invention</h2>
            <p className={pStyle}><strong>Invention Process</strong> - Tech skill check to create blueprint, difficulty set by GM. Number of craft checks based on difficulty of blueprint to create successful prototype: very easy (1), easy (2), moderate (3), difficult (4), very difficult (5). On a failed craft check, the prototype fails and you must restart from the beginning, but you get +1 to all craft/tech skill checks during the next process. +1 per failed prototype. Once a prototype is made, craft 10+ to reproduce.</p>
          </div>

          {/* ===== RIGHT COLUMN ====== */}
          <div className="w-1/2 h-full">
            <p className={pStyle}><strong>Star Gems</strong> - Used to power spell items. The harder the spell, the larger the crystal needed: very easy (tiny), easy (small), medium (average), difficult (large), very difficult (very large). All devices that need a power source must use star gems. If the star gem breaks or fractures, it deals Harm equal to 3x its size in an area equal to 3x its size in feet. Break as easily as solid glass orbs.</p>
            <p className={pStyle}><strong>Star Gem Sizes</strong> - Tiny (0.5"), small (1"), medium (2"), large (3"), very large (4")</p>
            <p className={pStyle}><strong>Mechs</strong> - Robots (or any larger invention) created through invention process. Size determines invention difficulty: very small (1' or less, easy), small (1' - 2', moderate), medium (2' - 4', difficult), large (4' - 8', very difficult), very large (8' - 12', super difficult). Their size also determines the size of star gem needed to power it: very small (1 medium), small (1 large), medium (1 very large), large (2 very large), very large (3 very large).</p>
            <MechStats />
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const MechStats = () => {
  const style = "m-o text-xs"
  return (
    <table>
      <thead>
        <tr>
          <th className={style} colSpan={5}>Mech Stats</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className={`${style} bottom left text-left`}><strong>Class</strong></td>
          <td className={`${style} bottom`}><strong>Size</strong></td>
          <td className={`${style} bottom`}><strong>Tough</strong></td>
          <td className={`${style} bottom`}><strong>Nimble</strong></td>
          <td className={`${style} bottom right`}><strong>Harm</strong></td>
        </tr>
        <tr>
          <td className={`${style} bottom left text-left`}>Very Small</td>
          <td className={`${style} bottom`}>&lt;1&apos;</td>
          <td className={`${style} bottom`}>+0</td>
          <td className={`${style} bottom`}>+5</td>
          <td className={`${style} bottom right`}>5</td>
        </tr>
        <tr>
          <td className={`${style} bottom left text-left`}>Small</td>
          <td className={`${style} bottom`}>1&apos; - 2&apos;</td>
          <td className={`${style} bottom`}>+5</td>
          <td className={`${style} bottom`}>+3</td>
          <td className={`${style} bottom right`}>10</td>
        </tr>
        <tr>
          <td className={`${style} bottom left text-left`}>Medium</td>
          <td className={`${style} bottom`}>2&apos; - 4&apos;</td>
          <td className={`${style} bottom`}>+10</td>
          <td className={`${style} bottom`}>+1</td>
          <td className={`${style} bottom right`}>15</td>
        </tr>
        <tr>
          <td className={`${style} bottom left text-left`}>Large</td>
          <td className={`${style} bottom`}>4&apos; - 8&apos;</td>
          <td className={`${style} bottom`}>+15</td>
          <td className={`${style} bottom`}>-1</td>
          <td className={`${style} bottom right`}>20</td>
        </tr>
        <tr>
          <td className={`${style} bottom left text-left`}>Very Large</td>
          <td className={`${style} bottom`}>8&apos; - 12&apos;</td>
          <td className={`${style} bottom`}>+20</td>
          <td className={`${style} bottom`}>-1</td>
          <td className={`${style} bottom right`}>25</td>
        </tr>
      </tbody>
    </table>
  )
}