import BackToContents from "../../../components/backToContents";
import '../../../css/creature-block.css';

const Crocodile = () => {
  return (
    <main>
      <div className="creatureBlock">
        <h1 className="title">Crocodile (T5, +0)</h1>

        <div className="stats">
          <p>Tough +9 | Nimble +7</p>
          <p>Competence +0 | Constitution +4</p>
          <p>Harm 10 | Armor 2</p>
        </div>

        <p className="creatureDescription">Crocodiles are medium sized creatures that grow up to 15ft long and can weigh up to 2,300lbs. They are generally territorial and solitary creatures, lurking in rivers or lakes. They hunt from underneath the water and attack with incredibly powerful jaws. They will also drag their victim under the water to drown them if the initial attack doesn’t kill.</p>

        <div className="actions">
          <p className="actionHead">Actions</p>

          <p><strong>Chomp</strong> (+4) – The Crocodile chomps down with its jaws that are powerful enough to crush a person’s body.</p>

          <p><strong>Drowning Drag</strong> – The Crocodile grabs you and drags you into the water. It grapples you via an opposed Tough check. If the crocodile succeeds, then you take 3 Harm and are then dragged into the water to cause 1 Harm (ignoring armor) for every round that you are held under the water.
          </p>
        </div>
      </div>
      <BackToContents to='/bestiary/beasts' />
    </main>
  )
}

export default Crocodile;