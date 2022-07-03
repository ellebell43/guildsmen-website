import { Link } from "react-router-dom";
import toTop from "../../../js/toTop";
import BackToContents from "../../../components/backToContents";
import '../../../css/creature-block.css';

const Bandit = () => {
  return (
    <main>
      <div className="creatureBlock">
        <h1 className="title">Bandit (Moderate, +1)</h1>
        <div className="stats">
          <p>Tough +2 | Nimble +1</p>
          <p>Competence +0 | Constitution +0</p>
          <p>Harm 7 | Armor 2</p>
        </div>
        <p className="creatureDescription">Bandits are desperate people who have turned to highway robbery, kidnaping, and killing to make money. These people are on the cusp of all-out savagery. If you run into one, be wary – there’s always more than just one.</p>
        <div className="actions">
          <p className="actionHead">Actions</p>

          <p className="noMargin"><strong>Light sword</strong> (+1) – The bandit attacks with a simple shortsword to slice their enemy open.</p>
          <p className="or">or</p>

          <p className="noMargin"><strong>Light Crossbow</strong> (+1) – The bandit attacks from a distance with a simple crossbow, staying out of the main fray of battle.</p>
          <p className="or">or</p>

          <p className="noMargin"><strong>Light Club</strong> (+1) – The bandit attacks with a heavy club, aggressively pushing their enemy to where they want them.</p>

          <p><strong>Choke Wire</strong> (+1) – Using choke wire gives them advantage to <Link onClick={toTop} to="/rules/combat#conditions">Grapple</Link> their victim, and to hold the grapple.</p>

          <p><strong>Caltrops</strong> – The bandit lays a set of caltrops on the ground. Any soft footed creatures that walk through them must roll a Nimble check 10+ or get <Link onClick={toTop} to="/rules/combat#conditions">Knocked Down</Link> and take 1 Harm.</p>
        </div>
      </div>
      <BackToContents to='/bestiary/people' />
    </main>
  )
}

export default Bandit;