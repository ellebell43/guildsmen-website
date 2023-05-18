import Link from "next/link"
import NextButton from "../next-button"

export default function Combat() {
  return (
    <article>
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

        <p>In Guildsmen, each combat round lasts 10 seconds of in-game time.</p>

        <h3>Establishing the Turn Order</h3>
        <p>In combat, it doesn't matter who goes first, let the narrative decide that. But do separate participants into factions (such as enemies vs allies). All the players would be considered the allies and all the creatures that they're fighting would be considered the enemies. Which faction goes first is up to the narrative and Game Master discretion.</p>

        <p>At times, certain players or creatures will go into combat with some sort of advantage such as being hidden from their enemy, attacking suddenly and without warning, or other scenarios that gives a party the upper hand at the beginning of combat.</p>

        <p>When this happens, give the creatures and players with the advantage a full combat round to themselves and then add other players to the Turn Order on the second combat round.</p>

        <h2>Actions & Reactions</h2>
        <p>The goal of combat is to deal Harm to your enemy until they either stand down, run away, fall unconscious, or die. Harm is caused by creating bodily harm to your enemy by performing actions.</p>

        <p>You get 1 action per combat round. You perform an action by rolling a relevant skill or stat check. The enemy then reacts in any way they think would negate your attack and they also roll a relevant skill or stat check. If the attacker rolls higher, then the attack is successful, and the defender takes harm. If the defender rolls higher, then the attack is unsuccessful, and no harm is dealt.</p>

        <p>Anytime an action is performed against another creature, they may react against the action. There is not a limit to the number of reactions you can make in a combat round.</p>
      </section>

      <section id="groups-vs-individuals">
        <h2>Groups vs Individuals</h2>
        <p>In combat there are 2 different ways to fight. You may fight as an individual or as a group. When acting as an individual, you take an action against your opponent and your opponent reacts, just as outlined above.</p>

        <p>When acting as a group, all individuals in the group roll dice at the same time. They add their results together and the enemy must react to that number. So, if a group of 4 players all want to attack a bear at the same time, then each player rolls their dice and adds their numbers together. So, if the players rolled a 10, 4, 7, and 8, then the total number for the group would be 29. The bear now has to beat 29 in order to successfully react to the attack (which would make it impossible for the bear to avoid the attack).</p>

        <p><em>When acting as a group, it is important to establish before hand if the action is intended to kill, knock out, maime, or something else. That way the action is controlled enough so that the target isn't guarunteed to die.</em></p>

        <p>You can also react as a group. When reacting as a group, you must be able to justify how the group is reacting as one entity. For example, if a player was being attacked by a bear, the player being directly attacked could try to dodge and another player nearby could try to pull the other out of the way. </p>

        <p>Under this circumstance, they may react as a group. The principle is the same, both of the players would roll dice and add their results together. If the total number is greater than the number that the bear rolled, than the two players reacted successfully and take no damage. </p>

        <p>If the group fails to react, then the damage is dispersed between the individuals of the group in whatever way makes most sense.</p>

        <p>That being said, a party can split up in whatever way they want to accomplish their needs. If you have a party of 5, 2 people could form one group and 3 could form another, or any combination of groups and individuals. Essentially, if you and some of your teammates want to do similar things, form a group. If you want to something all on your own, then don't team up for a group.</p>
      </section>

      <section id="dealing-harm">
        <h2>Dealing Harm</h2>
        <p>When you successfully attack another creature, you will deal Harm. The harm you deal is <strong>equal to the difference between the dice rolls plus the bonus of your weapon</strong>. Light weapons get a bonus of +1 and heavy weapons get a bonus of +2. If the victim rolls the higher number, then the attack deals no damage.</p>

        <p>For example, you have +2 <em>throwdown</em>, and you attack a bandit that has +1 Nimble with a light weapon. You roll a 9 and add 2 for your modifier in the skill you used, giving you a total of 11. The bandit rolls to run away with an 8 and adds 1 for their Nimble modifier, giving them a total of 9. You have the higher number, so your attack is successful! The difference between your roll and the bandit's roll is 2 and the bonus of a light blade is 1, which means that you deal 3 Harm in total to the bandit.</p>

        <p>This works the same when attacking as a group. The entire party rolls to attack and, if successful, adds their bonuses to the overall result to determine harm.</p>

        <p>The amount of Harm you can take is represented by a set of 10 bubbles above your skills chart. If all 10 bubbles get filled in, then you die. When something traumatic happens and you take Harm because of it, you will be told to fill in the dying bubble. When this happens, you will begin to take harm periodically, at Game Master discretion, until you die - unless you find a way to recover from what is causing your dying condition. Getting to the point of dying may also cause you to fall unconscious.</p>

        <p>If you end up dealing more Harm than you intend to - for example, you wanted to frighten a bandit, but end up dealing enough Harm to kill - then let the Game Master know what you intended right away. At the discretion of the Game Master, you will either do what you intended, or your character accidently deals the full amount of Harm.</p>

        <p>When doing combat, the mechanics work on the idea that you're going in for the kill. If that’s not the case, let your Game Master know before you start rolling dice.</p>
      </section>

      <section id="recovering-from-damage">
        <h2>Recovering from Damage</h2>
        <p>Recovering from damage can only be done through another character's <em>medic</em> skill check or by using a consumable item (see the <Link href="/rules/the-market#consumables"><em>Market chapter</em></Link>). On a relevant skill check of 10 or more, the wounded person may recover from 2 Harm. This can only be done outside of combat and only periodically.
        </p>
      </section>

      <section id="weapons">
        <h2>Weapons</h2>
        <p>All weapons have a bonus that is added to your roll when an attack is successful. There are 2 types of weapons, Heavy and Light. Light weapons give a +1 bonus and heavy weapons give a +2 bonus. However, <strong>heavy weapons require a Tough stat of +2</strong> or more in order for you to use them. </p>

        <p>If you are <strong><em>using a bow</em></strong>, you have disadvantage to attack when at close range, but get twice the bonus when an attack is successful (+2 for a light bow, +4 for a heavy bow). If you are <strong><em>using a gun</em></strong>, you have disadvantage at long range and always have triple the normal bonus when an attack is successful (+3 for light guns, +6 for heavy guns).</p>
      </section>

      <section id="armor">
        <h2>Armor</h2>
        <p>Armor will negate Harm when you are hurt. They negate Harm equal to their score. Light armors give you 2 points of armor, meaning they negate 2 points of Harm from all incoming attacks. Heavy armors give you 4 points of armor, meaning they negate 4 points of Harm from all incoming attacks. <strong>Heavy armor requires a Tough score of +2 or more in order to use</strong>.</p>
      </section>

      <section id="skill-shots">
        <h2>Skill Shots</h2>
        <p>If you want to attack a creature in a very specific way (i.e., putting a dagger through their eye), then you may roll a difficult to very difficult skill check (10+ or 12+). If you are successful, then the Game Master will give a special outcome (such as your enemy dying immediately). When this happens, you will struggle alone, meaning you cannot get any help from an ally. Skill shots are not opposed (meaning only the person performing the action rolls). However, if you fail the roll your opponent gets to roll thier dice. If they roll higher than you did, then they can cause Harm to you and your allies cannot help to deflect it, so be careful. </p>
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
          <li><strong>Blinded</strong>: You are unable to see for a length of time. When blinded, any skill checks that rely on vision are done with disadvantage. This cannot be ended early.</li>

          <li><strong>Burning</strong>: You are on fire. Take 1 harm every combat round until the fire is put out.</li>

          <li><strong>Calmed</strong>: You can do nothing violent for a length of time. A Competence check of 12 or more may end the condition early.</li>

          <li><strong>Charmed</strong>: You cannot attempt to harm the charmer in any way, and you must be friendly toward the charmer for a time. A Competence score of 12 or more may end the condition early.</li>

          <li><strong>Entangled</strong>: You are bound and cannot move for a length of time. A Tough stat check of 10 or more may end the condition early.</li>

          <li><strong>Exhausted</strong>: You have disadvantage to all skill and stat checks that require physical movement for a length of time. Resting may end the condition early.</li>

          <li><strong>Frenzied</strong>: You will uncontrollably attack all creatures nearby for a length of time. A Competence check of 12 or more may end the condition early.</li>

          <li><strong>Frightened</strong>: You have disadvantage to all skill and stat checks that require mental exertion for a length of time. A Competence check of 10 or more may end the effect early.</li>

          <li><strong>Frozen</strong>: All physical movement is done with disadvantage for a length of time. A Tough check of 12 or more may end the condition early.</li>

          <li><strong>Grappled</strong>: Both the victim and the attacker can no longer move. The victim may attempt to end the grapple via an opposed Tough check. On the next turn, if the grapple is still in effect, the attacker may knock the victim down or back, disarm the victim, make an attack with a small weapon such as a knife, or continue the grapple to prevent the victim from being able to move.</li>

          <li><strong>Knocked Back</strong>: you are pushed backward a distance specified by the Game Master. A Tough check of 10 or more may half the effect (done as a reaction).</li>

          <li><strong>Knocked Down</strong>: you are pushed to the ground and now have disadvantage to all reactions until you get up.</li>

          <li><strong>Poisoned</strong>: you take an amount of Harm specified by the Game Master every combat round (for quick poisons) or every in-game hour (for slow poisons) until cured. You may make a Constitution check of 10 or more every combat round or hour to prevent the damage from happening for that round or hour. Whiteroot (see the Market chapter) may cure poison.</li>

          <li><strong>Stunned</strong>: you are unable to move or act for a length of time. A Competence check of 12 or more may end the effect early.</li>

          <li><strong>Weakened</strong>: All physical attack effects are halved for a length of time. A Tough check of 12 or more may end the condition early.</li>
        </ul>
      </section>
      <NextButton href="/rules/myth" />
    </article>
  )
}