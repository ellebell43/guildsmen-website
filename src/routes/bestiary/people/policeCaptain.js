import { Link } from "react-router-dom";
import toTop from "../../../js/toTop";
import BackToContents from "../../../components/backToContents";
import '../../../css/creature-block.css';

const PoliceCaptain = () => {
  return (
    <main>
      <div className="creatureBlock">
        <h1 className="title">Police Captain (T3, +3)</h1>
        <div className="stats">
          <p>Tough +3 | Nimble +2 </p>
          <p>Competence +2 | Constitution +2</p>
          <p>Harm 7 | Armor 4</p>
        </div>
        <p className="creatureDescription">The Police Captain is the head of the Police Officers. They are not someone to be taken lightly. They are far more aggressive about pursuing wrong-doers and enforcing the law than their subordinates would be.</p>
        <div className="actions">
          <p className="actionHead">Actions</p>

          <p><strong>Light Pistol</strong> (+3) – The Police Captain fires at you with their pistol.</p>

          <p><strong>Heavy Rifle</strong> (+6) – The Police Captain fires at you with their rifle.</p>

          <p><strong>Light Sword</strong> (+1) – The Police Captain slices with their sword when combat gets into close quarters.</p>

          <p><strong>Shock Rod</strong> (+3) - A light, melee weapon that most Police Captains carry. It causes intense electrical damage upon a successful hit, but drains a 1” Navidus Crystal. It also causes any affected creature to be <Link onClick={toTop} to="/rules/combat#conditions">Stunned</Link> for 10 seconds (1 combat round). This can be used on conductive surfaces to stun for 10 seconds and deal 3 Harm to anything touching the conductive surface.</p>

          <p><strong>Bola</strong> – The Police Captain throws a bola at their victim. If successful, the victim becomes <Link onClick={toTop} to="/rules/combat#conditions">Entangled</Link> for 20 seconds (2 combat rounds).</p>
        </div>
      </div>
      <BackToContents to='/bestiary/people' />
    </main>
  )
}

export default PoliceCaptain;