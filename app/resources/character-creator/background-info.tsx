import { TextAreaInput, TextAreaWithInfo } from "@/util/input-components/input-elements"

type props = {
  goalsAndMotives: string | undefined,
  setGoalsAndMotives: Function,
  flawsAndWeaknesses: string | undefined,
  setFlawsAndWeaknesses: Function,
  personalMorals: string | undefined,
  setPersonalMorals: Function,
  importantConnections: string | undefined,
  setImportantConnections: Function
}

export default function BackgroundInfo(props: props) {
  return (
    <>
      <h2>Background Information</h2>
      <div className="grid md:grid-cols-2 w-fit mx-auto gap-x-10 gap-y-4 mb-4 mt-6">
        <TextAreaWithInfo state={props.goalsAndMotives} setState={props.setGoalsAndMotives} required={false} id={"goalsAndMotives"} label="Goals & Motives">
          <p><strong>Goals & Motives</strong> are what drive your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to go out and make some money to send back to them. Perhaps they&apos;re seeking revenge on someone, or they want to open up a small business and settle down. The world is your oyster here and anything you think of can work.</p>
        </TextAreaWithInfo>

        <TextAreaWithInfo state={props.flawsAndWeaknesses} setState={props.setFlawsAndWeaknesses} required={false} id={"flawsAndWeaknesses"} label="Flaws & Weaknesses">
          <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they&apos;re a kleptomaniac (impulsively steals things), or maybe they&apos;re terrified of fire. Perhaps they will always do what an attractive person wants them to do, or they&apos;re easily distracted.</p>
        </TextAreaWithInfo>

        <TextAreaWithInfo state={props.personalMorals} setState={props.setPersonalMorals} required={false} id={"personalMorals"} label="Personal Morals" >
          <p><strong>Personal Morals</strong> are your character&apos;s personal code of ethics. Perhaps they are completely against all violence. Or maybe they think killing a person they don&apos;t know is completely okay. Maybe their okay with stealing, or maybe they&apos;re very rigid about following the law. </p>
        </TextAreaWithInfo>

        <TextAreaWithInfo state={props.importantConnections} setState={props.setImportantConnections} required={false} id={"importantConnections"} label="Important Connections">
          <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game.</p>
        </TextAreaWithInfo>
      </div>
    </>
  )
}