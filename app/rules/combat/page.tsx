import Link from "next/link"
import NextButton from "../next-button"
import { Metadata } from "next"
import Contents from "@/util/components/contents"

export const metadata: Metadata = {
  title: "Guildsmen | Combat",
  description: "Learn how combat works and how not to die in Guildsmen TTRPG"
}

export default function Combat() {
  return (
    <article>
      <Contents />
      <h1>Combat</h1>
      <p>As you play, you may find yourself in a situation where you need to fight someone or something. When this
        happens, we strongly suggest you find ways of fighting other than going head on, guns blazing, swords swinging. Combat in Guildsmen is designed to be fast and deadly. An unprepared adventurer will die very, very quickly. Think outside the box and find other ways to handle tense situations other than bludgeoning your opponent to death. Also, make sure to cooperate with your party. A player who goes off alone is much more likely to die.</p>

      <section id="avoiding-combat">
        <h2>Avoiding Combat</h2>
        <p>As we said before, combat is deadly. In many situations, it's best to try to end combat early, or avoid it all together. There are a few ways to do this.</p>

        <p>If you want to fight your enemy, but are worried about dying, the best strategy is to catch them by surprise. That can mean setting up a trap or ambush, capturing them and making them defenseless, or attacking them out of nowhere when you're within a close proximity. When you get the drop on someone, you might have the opportunity to kill them instantly. See the Skill Shots section further down for more information on how to do that.</p>

        <p>You can also try to calm down or persuade the other party to avoid the fight. If you've angered an opponent to the point of violence, the <em>social</em> skill can come in very handy for talking them down.</p>

        <p>Another option is to make your opponent feel like they can't win, even if they totally could. This is another situation where the <em>social</em> skill comes in handy. Any items you have at your disposal to display a false amount of power could also be helpful in demoralizing your opponent.</p>

        <p>A last resort would be to simply run and hide. If you're worried about getting hurt or killed, it's best to flee the situation instead of trying to come out on top. But come to this decision with the other players. Don't run off and hide while your fellows get slaughtered by a bear. Run away, together.</p>

        <p>Now that you know how to avoid combat, this is what you do when you <em>don't</em> avoid combat:</p>
      </section>
      <section id="turn-based-combat">
        <h2>Turn-Based Combat</h2>
        <p>Combat in Guildsmen, as in similar games, is turn-based. This means that all players and NPCs are put into a turn order, and each takes a turn to perform actions. The sequence of turns creates the round, and rounds are repeated with the same turn sequence until the combat has ended.</p>

        <p>In Guildsmen, each combat round lasts 10 seconds of in-game time, and the distance your character, or any other character, can move in a given round is equal to 10 times your Nimble stat modifier in feet, with a minimum of 10 feet. So, if you have a +2 Nimble stat, you have 20 feet of movement, whereas a wolf with their +6 Nimble stat, would be able to travel 60 feet in one round of combat.</p>

        <h3>Establishing the Turn Order</h3>
        <p>In combat, it doesn't matter who goes first, let the narrative decide that. But do separate participants into factions (such as enemies vs allies). All the players would be considered the allies and all the creatures that they're fighting would be considered the enemies. Which faction goes first is up to the narrative and Game Master discretion.</p>

        <p>At times, certain players or creatures will go into combat with some sort of advantage such as being hidden from their enemy, attacking suddenly and without warning, or other scenarios that gives a party the upper hand at the beginning of combat.</p>

        <p>When this happens, give the creatures and players with the advantage a full combat round to themselves and then add other players to the Turn Order on the second combat round.</p>

        <h3>Actions & Reactions</h3>
        <p>The goal of combat is to deal Harm to your enemy until they either stand down, run away, fall unconscious, or die. Harm is caused by creating bodily harm to your enemy by performing actions.</p>

        <p>You get 1 action per combat round. You perform an action by rolling a relevant skill or stat check. The enemy then reacts in any way they think would negate your attack and they also roll a relevant skill or stat check. If the attacker rolls higher, then the attack is successful, and the defender takes harm. If the defender rolls higher, then the attack is unsuccessful, and no harm is dealt.</p>

        <p>Anytime an action is performed against another reactive creature, they may react against the action. There is not a limit to the number of reactions you can make in a combat round. However, not all characters and creatures are allowed reactions in all situations. When this happens, the rules that govern <Link href="#skill-shots">skill shots</Link> are used. There are two primary situations where this will happen: (1) if the victim is sufficiently surprised by the attacker, then the victim will not have time to react to the attack and (2) when fighting a beast, Starborne creature, or other creature marked as un-reactive. In either of these situation, use the <Link href="#skill-shots ">skill shot</Link> rules to determine the outcome of an attack.</p>

        <h3>Helping in Combat</h3>
        <p>In the <Link href="/rules/skills#helping">skills chapter</Link>, the ability to help other players was introduced. That can also be applied to combat, however it works a bit differently. When in combat, you can (and should) establish what specific target your character has. If any other allies have the same specific target, that automatically counts as a successful help action, so you will get a +1 to your dice roll for every other person attacking the same creature as you. So, if you're in a group of 3 people, and your being attacked by 3 bandits, and all 3 member of your team attack the same specific bandit, each person would get a +2 to their roll, since 2 other people are attacking the same creature.</p>

        <p>When reacting, the normal rules of the help action are applied, as defined in the <Link href="/rules/skills#helping">skills chapter</Link>.</p>
      </section>

      <h3 id="spirit-shields">Spirit Shields</h3>
      <p>If you are the target of a spell, it can be deflected by a reaction known as Spirit Shielding. This is where you push your Spirit out of yourself briefly to rebuff incoming spiritual energy, negating the effects of an incoming spell.</p>

      <p>When a spell is targeted at you from another creature or individual you can roll a Spirit stat check as a reaction. If the roll is greater than your opponent's, then the spell is deflected completely and no effect happens. If you're Spirit stat check is less that your opponent's but still greater than the difficulty of the spell (i.e. 8 or more for an Moderate spell), then you take half of the effect of the spell. If less than your opponent's check and less than the difficulty of the spell, then you take the full effect of the spell.</p>

      <p>If the spell is triggered by a device and no roll is used to cast the spell, you can still react to the spell with a Spirit Shield. The target number to successfully react will be the difficulty of the spell. On a mixed success (1 less than the target number), only half the effect of the spell happens.</p>

      <p>Spirit shields also work against attacks coming from a Stardew user when they use their Stardew powers.</p>

      <section id="dealing-harm">
        <h2>Dealing Harm</h2>
        <p>When you successfully attack another creature, you will deal Harm. The harm you deal is <strong>equal to the difference between the dice rolls plus the bonus of your weapon</strong>. Light weapons get a bonus of +1 and heavy weapons get a bonus of +2. If the victim rolls the higher number, then the attack deals no damage.</p>

        <p>For example, you have +2 <em>throwdown</em>, and you attack a bandit that has +1 Nimble with a light weapon. You roll a 9 and add 2 for your modifier in the skill you used, giving you a total of 11. The bandit rolls to run away with an 8 and adds 1 for their Nimble modifier, giving them a total of 9. You have the higher number, so your attack is successful! The difference between your roll and the bandit's roll is 2 and the bonus of a light blade is 1, which means that you deal 3 Harm in total to the bandit.</p>

        <p>This works the same when attacking as a group. The entire party rolls to attack and, if successful, adds their bonuses to the overall result to determine harm.</p>

        <p>The amount of Harm you can take is represented by a set of 10 bubbles above your skills chart. If all 10 bubbles get filled in, then you die. When something traumatic happens and you take Harm because of it, you will be told to fill in the dying bubble. When this happens, you will begin to take harm periodically, at Game Master discretion, until you die - unless you find a way to recover from what is causing your dying condition. Getting to the point of dying may also cause you to fall unconscious.</p>

        <p>If you end up dealing more Harm than you intend to - for example, you wanted to frighten a bandit, but end up dealing enough Harm to kill - then let the Game Master know what you intended right away. At the discretion of the Game Master, you will either do what you intended, or your character accidently deals the full amount of Harm.</p>

        <p>When doing combat, the mechanics work on the idea that you're going in for the kill. If that's not the case, let your Game Master know before you start rolling dice.</p>
      </section>

      <section id="recovering-from-damage">
        <h2>Recovering from Damage</h2>
        <p>Recovering from damage is generally done through another character's <em>medic</em> skill check or by using a consumable item (see the <Link href="/rules/the-market#consumables"><em>Market chapter</em></Link>). On a relevant skill check of 10 or more, the wounded person may recover from 2 Harm. This can only be done outside of combat and only periodically.
        </p>

        <p>Healing can be done through runes, but it requires a bespoke rune that is a minimum of Very Difficult to make. Every time you heal someone, you'll have to create a new rune for it, too, as the injury and person is always going to be different in some way. However, healing through runes will completely restore Harm to 0.</p>
      </section>

      <section id="weapons">
        <h2>Weapons</h2>
        <p>All weapons have a bonus that is added to your roll when an attack is successful. There are 2 types of weapons, Heavy and Light. Light weapons give a +1 bonus and heavy weapons give a +2 bonus. However, <strong>heavy weapons require a Tough stat of +2</strong> or more in order for you to use them. </p>

        <p>If you are <strong><em>using a bow</em></strong>, you have an additional -2 modifier to attack when at close range, but get twice the damage bonus when an attack is successful (+2 for a light bow, +4 for a heavy bow). If you are <strong><em>using a gun</em></strong>, you have -4 at long range and always have triple the normal damage bonus when an attack is successful (+3 for light guns, +6 for heavy guns).</p>
      </section>

      <section id="armor">
        <h2>Armor</h2>
        <p>Armor will negate Harm when you are hurt. They negate Harm equal to their score. Light armors give you 2 points of armor, meaning they negate 2 points of Harm from all incoming attacks. Heavy armors give you 4 points of armor, meaning they negate 4 points of Harm from all incoming attacks. <strong>Heavy armor requires a Tough score of +2 or more in order to use</strong>.</p>
      </section>

      <section id="skill-shots">
        <h2>Skill Shots</h2>
        <p>If you want to attack a an opponent and they will not be able to have a reaction, then you perform a skill shot. A skill shot is an attack that is based purely on the attackers skill rather than the contested rolls of both parties. When attacking an un-reactive opponent in no particularly special way, you will roll a Moderate (8+) <em>throwdown</em> skill check. If successful, the Harm you deal will be equal to the difference of your roll and the target number plus the modifier of your weapon. So, if you're attacking with a light sword and you roll a 10, you will deal 3 Harm since you rolled 2 higher than the target number of 8 and your weapon has a +1. On a failure against an un-reactive opponent, you simply deal 0 Harm and you also will not be harmed.</p>

        <p>If you have a very specific action in mind that would be difficult to pull off but provides a fun narrative flare to the combat (i.e., putting a dagger through the opponent's eye) then you may perform a skill shot. However, this dice roll must be of Difficult or higher difficulty (10+ or more). If you are successful, then the Game Master will give a special outcome (such as your enemy dying immediately or a specific wound that becomes part of the narrative) and you will deal Harm equal to the difference of your dice roll and the target number plus any modifiers your weapon adds. Your roll will not be opposed with a reaction from your opponent, but you will not get any help from an ally when performing a skill shot on a reactive opponent, meaning that any additional modifiers you would have gotten from your group will not be applied to this action. If you fail the skill shot roll, your opponent then gets to roll for a reaction. If your opponent rolls higher than you did, then you take Harm equal to the difference of their roll and your roll plus the modifier of their weapon. </p>
      </section>

      <section id="conditions">
        <h2>Conditions</h2>
        <p>Conditions are special effects that can happen to you during combat. When a condition happens, the duration of the effect will be mentioned. Generally, a condition will last 1 to 3 combat rounds (10 - 30 seconds of in-game time).</p>

        <p>Conditions could happen outside of combat as well. When this happens, the condition can last multiple in-game minutes, or even hours, if what caused the condition is powerful enough.</p>

        <p>Some conditions, such as the <strong><em>Burning</em></strong> condition will usually be ongoing. That means that the condition continues to affect your character until something specific happens (in the case of <strong><em>Burning</em></strong>, you must put out the fire to end the effect).
        </p>

        <p>If a condition lasts for multiple rounds, you may be able to end the condition early. Every round you may spend your action to attempt to end the condition early. Each condition will specify how to end it early, if applicable.</p>

        <p>As a player, you can cause any of these conditions to another creature so long as you have the means.</p>

        <ul>
          <li><strong>Blinded</strong>: You are unable to see for a length of time. When blinded, any skill checks that rely on vision are done with a -2 in addition to your regular modifiers. This cannot be ended early.</li>

          <li><strong>Burning</strong>: You are on fire. Take 1 harm every combat round until the fire is put out.</li>

          <li><strong>Calmed</strong>: You can do nothing violent for a length of time. A Competence check of 10 or more may end the condition early.</li>

          <li><strong>Charmed</strong>: You cannot attempt to harm the charmer in any way, and you must be friendly toward the charmer for a time. A Competence score of 10 or more may end the condition early.</li>

          <li><strong>Entangled</strong>: You are bound and cannot move for a length of time. A Tough stat check of 10 or more may end the condition early.</li>

          <li><strong>Exhausted</strong>: You have a -2 in addition to your regular modifiers to all skill and stat checks that require physical movement for a length of time. A Constitution check of 10 or more may end the condition early.</li>

          <li><strong>Frenzied</strong>: You will uncontrollably attack all creatures nearby for a length of time. A Competence check of 10 or more may end the condition early.</li>

          <li><strong>Frightened</strong>: You have a -2 in addition to your regular modifiers to all skill and stat checks that require mental exertion for a length of time. A Competence check of 10 or more may end the effect early.</li>

          <li><strong>Frozen</strong>: All physical movement is done with a -2 in addition to your regular modifiers for a length of time. A Constitution check of 10 or more may end the condition early.</li>

          <li><strong>Grappled</strong>: Both the victim and the attacker can no longer move. The victim may attempt to end the grapple via an opposed Tough check. On the next turn, if the grapple is still in effect, the attacker may knock the victim down or back, disarm the victim, make an attack with a small weapon such as a knife and get a +1 to it, or continue the grapple to prevent the victim from being able to move.</li>

          <li><strong>Knocked Back</strong>: you are pushed backward a distance specified by the Game Master. A Tough check of 10 or more may half the effect (done as a reaction).</li>

          <li><strong>Knocked Down</strong>: you are pushed to the ground and now have a -2 in addition to your regular modifiers to all reactions until you get up.</li>

          <li><strong>Poisoned</strong>: you take an amount of Harm specified by the Game Master every combat round (for quick poisons) or every in-game hour (for slow poisons) until cured. You may make a Constitution check of 10 or more every combat round or hour to prevent the damage from happening for that round or hour. Whiteroot (see the Market chapter) may cure poison.</li>

          <li><strong>Stunned</strong>: you are unable to move or act for a length of time. A Constitution check of 10 or more may end the effect early.</li>

          <li><strong>Weakened</strong>: All physical attack effects are halved for a length of time. A Constitution check of 10 or more may end the condition early.</li>
        </ul>
      </section>
      <NextButton href="/rules/stardew" />
    </article>
  )
}