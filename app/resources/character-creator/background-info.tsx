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

      <p>The next step is to round out your character with flavor text. All characters need a past that defines them. On the back of the character sheet are four large boxes labeled Goals & Motives, Personal Morals, Flaws & Weaknesses, and Important Connections.</p>

      <p>These four boxes help define who your character really is, the relationships that define their past, and they inform how your character makes decision and. In each box, jot down one or two brief sentences to add some depth to your character. If you can&apos;t think of anything right away, that&apos;s okay. You can slowly fill these out during play. As situations arise, try to decide why your character would do what you want them to do. Then see if that reason would fall under one of these four categories. If it does, then jot down a quick note so you remember in the future.</p>

      <p>Try to keep these somewhat general. Trying to be too specific can make it much harder to find things to put here. Working on this with your fellow players is highly encouraged! Bounce ideas off of each other, use each other's characters as plot points, and see if you can forge a connected story.</p>

      <div className="grid md:grid-cols-2 w-fit mx-auto gap-x-10 gap-y-8 mb-4 mt-6">
        <TextAreaWithInfo state={props.goalsAndMotives} setState={props.setGoalsAndMotives} required={false} id={"goalsAndMotives"} label="Goals & Motives">
          <p><strong>Goals & Motives</strong> are what drive your character. Perhaps they want to be the greatest thief that ever lived, or perhaps their family is motivating them to take on any job just to provide for them. Perhaps they&apos;re seeking revenge on someone and it's all they can think about, or they want to open up a small business and settle down, but need to take on jobs until their life is in a spot that allows that. The world is your oyster here and anything you think of can work.</p>
        </TextAreaWithInfo>

        <TextAreaWithInfo state={props.flawsAndWeaknesses} setState={props.setFlawsAndWeaknesses} required={false} id={"flawsAndWeaknesses"} label="Flaws & Weaknesses">
          <p><strong>Flaws & Weaknesses</strong> are the things that your character struggles with. Perhaps they&apos;re terrified of fire. Perhaps they will always do what an attractive person wants them to do, or maybe they&apos;re easily distracted. These can be as serious or non-serious as you want. It's all about just adding a little bit of detail that will be fun to play off of in the game.</p>
        </TextAreaWithInfo>

        <TextAreaWithInfo state={props.personalMorals} setState={props.setPersonalMorals} required={false} id={"personalMorals"} label="Personal Morals" >
          <p><strong>Personal Morals</strong> are your character&apos;s personal code of ethics. Perhaps they are completely against all violence, or maybe they think that there&apos;s a certain amount of moral grey era and getting the job done is ultimately what matters. Maybe their okay with stealing, or maybe they&apos;re very rigid about following the law.</p>
        </TextAreaWithInfo>

        <TextAreaWithInfo state={props.importantConnections} setState={props.setImportantConnections} required={false} id={"importantConnections"} label="Important Connections">
          <p><strong>Important Connections</strong> are connections from your past. These can be tutors, trainers, parents, professors, criminal contacts, and other important connections your character could have made in their past. This is primarily useful for the Game Master so that they can tie connections from the past into the game, but it's also a great way to create a shared backstory with your fellow player. Perhaps you&apos;ve done a job together before, but it ended catastrophe. Maybe you're old friends and have done jobs on and off together for years.</p>
        </TextAreaWithInfo>
      </div>
    </>
  )
}