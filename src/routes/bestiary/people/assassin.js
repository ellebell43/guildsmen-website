import { Link } from "react-router-dom";
import toTop from "../../../js/toTop";
import BackToContents from "../../../components/backToContents";
import '../../../css/creature-block.css';

const Assassin = () => {
  return (
    <main>
      <div className="creatureBlock">
        <h1 className="title">Assassin (Severe, +3)</h1>
        <div className="stats">
          <p>Tough +1 | Nimble +3</p>
          <p>Compentence +2 | Constitution +1</p>
          <p>Harm 7 | Armor 2</p>
        </div>

        <p className="creatureDescription">Assassins are killers for hire. You can hire them at a wealth category of Wealthy, but they can also be purchased at Exquisite and Exquisite+. The higher the wealth category they are hired at, the more successful the assassin will be. If one of these professional killers are after you, it's best to flee as far away as possible. They strike from the shadows and are never seen coming</p>

        <div className="actions">
          <p className="actionHead">Actions</p>

          <p><strong>Improved Light Dagger</strong> (+2) - The Assassin attacks with a dagger. This weapon may be poisoned and <em>could</em> cause a <Link to="/rules/combat#conditions" onClick={toTop}>Slow Poison</Link> if scratched by it.</p>

          <p><strong>Poison Darts</strong> (+0, fast poison) - A silent weapon fired from the shadows. The victim feels a slight prick as if being bitten by a bug. It causing a <Link to="/rules/combat#conditions" onClick={toTop}>Quick Poison</Link> that deals 1 Harm every combat round (10 seconds)</p>

          <p><strong>Light Crossbow</strong> (+1) - An Assassin generaly carries around a hand-crossbow that can be concealed easily. It is used to take out targets quietly, and form a distance.</p>

          <p><strong>Smoke Bomb</strong> - The Assassin throws a smoke bomb thata creates a thick smoke that  obscures everything within a 20-foot radius. All creatures receve disadvantage to any actions that rely on sight while in the area of effect.</p>

          <p><strong>Choke Wire</strong> (+1) - The Assassin is equipped with choke wire and can use it to grapple their victim. Using choke wire gives them advantage to <Link to="/rules/combat#conditions" onClick={toTop}>Grapple</Link> their victim, and to hold the grapple.</p>
        </div>
      </div>
      <BackToContents to='/bestiary/people' />
    </main>
  )
}

export default Assassin