import { Link } from "react-router-dom";
import toTop from "../../../js/toTop";
import BackToContents from "../../../components/backToContents";
import '../../../css/creature-block.css';

const Mercenary = () => {
  return (
    <main>
      <div className="creatureBlock">
        <h1 className="title">Mercenary (T2, +2)</h1>
        <div className="stats">
          <p>Tough +3 | Nimble +0 </p>
          <p>Competence +1 | Constitution +2</p>
          <p>Harm 7 | Armor 4</p>
        </div>
        <p className="creatureDescription">Mercenaries come from the Mercenary Guild. They are muscle for hire, but they’re not thugs. They can usually be found protecting caravans or taking care of rabble that the regular police won’t take care of. They are seen as protectors of the people.</p>
        <div className="actions">
          <p className="actionHead">Actions</p>

          <p className="noMargin"><strong>Heavy Hammer</strong> (+2) – The Mercenary attacks with a great hammer to bash your bones in.</p>
          <p className="or">or</p>

          <p className="noMargin"><strong>Heavy Sword</strong> (+2) – The Mercenary attacks with a great sword to hack your limbs off.</p>
          <p className="or">or</p>

          <p className="noMargin"><strong>Light Gun</strong> (+3) – The Mercenary fires off a simple rifle.</p>

          <p><strong>1 Health Elixir</strong> – The Mercenary takes a swig of this special elixir that heals 2 Harm.</p>

          <p><strong>Bola</strong> – The Mercenary throws a bola at their victim. If successful, the victim becomes <Link onClick={toTop} to="/rules/combat#conditions">Entangled</Link> for 20 seconds (2 combat rounds).</p>
        </div>
      </div>
      <BackToContents to='/bestiary/people' />
    </main>
  )
}

export default Mercenary;