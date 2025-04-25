import { creature, action } from "@/util/types";

export default function CreatureBlock(props: { creature: creature }) {
  const creature = props.creature;

  const getModifier = (num: number) => {
    return num < 0 ? `${num}` : `+${num}`
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

  let hazardWord: string = creature.hazardWord
  hazardWord = hazardWord[0].toUpperCase() + hazardWord.substring(1)

  return (
    <>
      <div className="creatureBlock">
        <div>
          <h1 className="title mb-0 pb-0">{creature.name} ({hazardWord}, {getModifier(creature.modifier)})</h1>
          <p className="mt-0 pt-0"><em>{creature.reactive ? "Reactive" : "Un-Reactive"}</em></p>
        </div>
        <div className="stats">
          <p>Tough {getModifier(creature.stats.tough)} | Nimble {getModifier(creature.stats.nimble)} | Spirit {getModifier(creature.stats.spirit)}</p>
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