import { Link } from "react-router-dom";
import toTop from "../../../js/toTop";
import BackToContents from "../../../components/backToContents";
import '../../../css/creature-block.css';

const HonorGuard = () => {
  return (
    <main>
      <div className="creatureBlock">
        <h1 className="title">Honor Guard (T3, +3)</h1>
        <div className="stats">
          <p>Tough +3 | Nimble +2 </p>
          <p>Competence +2 | Constitution +2</p>
          <p>Harm 7 | Armor 4</p>
        </div>
        <p className="creatureDescription">An Honor Guard protects the highest of nobility and other political figures. They are aggressive and severe with anyone that looks even remotely like they might cause trouble. They take their duties very seriously and they have been trained extensively in combat. Their honor is everything to them and all their honor lies in their duty to protect the person they’ve been sworn to protect.</p>
        <div className="actions">
          <p className="actionHead">Actions</p>

          <p><strong>Tempered Heavy Sword</strong> (+5) – The Honor Guard swings a mighty claymore to cleave you in half.</p>

          <p><strong>Tempered Heavy Rifle</strong> (+8) – The Honor Guard wields a specialized rifle.</p>

          <p><strong>Light Pistol</strong> (+3) – The Honor Guard fires at you with their pistol.</p>

          <p><strong>Caltrops</strong> – The Honor Guard lays a set of caltrops on the ground. Any soft footed creatures that walk through them must roll a Nimble check 10+ or get <Link onClick={toTop} to="/rules/combat#conditions">Knocked Down</Link> and take 1 Harm.</p>

          <p>Bola – The Honor Captain throws a bola at their victim. If successful, the victim becomes <Link onClick={toTop} to="/rules/combat#conditions">Entangled</Link> for 20 seconds (2 combat rounds).</p>

          <p><strong>1 Health Elixir</strong> – The Honor Guard takes a swig of this special elixir that heals 2 Harm.</p>
        </div>
      </div>
      <BackToContents to='/bestiary/people' />
    </main>
  )
}

export default HonorGuard