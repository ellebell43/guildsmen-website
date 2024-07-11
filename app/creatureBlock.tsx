import { creature, action } from "@/util/types";

export default function CreatureBlock(props: { creature: creature }) {
  const creature = props.creature;

  const getModifier = (num: number) => {
    return num < 0 ? `-${num}` : `+${num}`
  }

  const getAction = (action: action, i: number) => {
    let modifierText = "";

    if (action.modifier && action.modifierNote) {
      modifierText = `(${getModifier(action.modifier)} | ${action.modifierNote})`
    } else if (action.modifier) {
      modifierText = `(${getModifier(action.modifier)})`;
    } else if (action.modifierNote) {
      modifierText = `(${action.modifierNote})`
    }

    return <p key={i}><strong>{action.name}</strong> {modifierText} - {action.description} </p>
  }

  const mapActions = (arr: action[], set?: boolean): JSX.Element[] => {
    return arr.map((el: action, i: number) => {
      return getAction(el, i);
    });
  }

  return (
    <>
      <div className="creatureBlock">
        <h1 className="title">{creature.name} ({creature.hazardWord}, {getModifier(creature.modifier)})</h1>
        <div className="stats">
          <p>Tough {getModifier(creature.stats.tough)} | Nimble {getModifier(creature.stats.nimble)}</p>
          <p>Competence {getModifier(creature.stats.competence)} | Constitution {getModifier(creature.stats.constitution)}</p>
          <p>Harm {creature.stats.harm} | Armor {creature.stats.armor}</p>
        </div>

        <p className="description">{creature.description}</p>

        <div className="actions">
          <p className="actionHead text-center">Actions</p>

          {mapActions(creature.actions)}
        </div>
      </div >
    </>
  )
}