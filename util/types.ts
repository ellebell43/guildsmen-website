import { ObjectId } from "mongodb"

export type action = {
  name: string,
  modifier?: number,
  modifierNote?: string,
  description: string
}

export type creatureType = "person" | "beast" | "starborne"

export type creature = {
  owner: string,
  type: creatureType,
  region?: "arbor",
  name: string,
  hazardWord: "none" | "mild" | "moderate" | "severe" | "deadly" | "unsurvivable",
  modifier: number,
  stats: {
    tough: number,
    nimble: number,
    competence: number,
    constitution: number,
    harm: number,
    armor: number
  },
  description: string,
  actions: action[],
  reactive: boolean
}

export type user = {
  username: string,
  email: string,
  password: string,
  created: Date,
  bio?: string,
  avatarUrl?: string
}

export type modRange = -1 | 0 | 1 | 2 | 3
export type luckRange = -3 | -2 | -1 | 1 | 2 | 3
export type wealthRange = 0 | 1 | 2 | 3 | 4
export type harm = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
export type addictionRange = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24
export type experienceProgress = 0 | 1 | 2 | 3 | 4
export type species = "Locess" | "Mausca" | "Isser" | "Matari" | "Slated" | "Ungal"

export type craftSpecialty = "Clay" | "Fabric" | "Metal" | "Stone" | "Wood"
export type investigateSpecialty = "Awareness" | "Searching" | "Situational" | "Tracking"
export type leadershipSpecialty = "Business" | "Government" | "Group"
export type medicSpecialty = "Beasts" | "People"
export type stardewSpecialty = "Refinement" | "Air" | "Fire" | "Lightning" | "Metal" | "Stone" | "Water" | string
export type natureSpecialty = "Animals" | "Geography" | "Plants" | "Survival"
export type performanceSpecialty = "Acrobatics" | "Acting" | "Contortion" | "Music"
export type socialSpecialty = "Deception" | "Intimidation" | "Persuasion"
export type sneakySpecialty = "Hiding" | "Lock-Picking" | "Pocket-Picking" | "Sleight-of-Hand"
export type throwdownSpecialty = "Melee" | "Personal" | "Ranged"
export type techSpecialty = "Biological" | "Large" | "Personal" | "Vehicles"

export type specialties = {
  craft: { primary: craftSpecialty | undefined, secondary: craftSpecialty | undefined },
  investigate: { primary: investigateSpecialty | undefined, secondary: investigateSpecialty | undefined },
  leadership: { primary: leadershipSpecialty | undefined, secondary: leadershipSpecialty | undefined },
  medic: { primary: medicSpecialty | undefined, secondary: medicSpecialty | undefined },
  stardew: { primary: stardewSpecialty | undefined, secondary: stardewSpecialty | undefined },
  nature: { primary: natureSpecialty | undefined, secondary: natureSpecialty | undefined },
  performance: { primary: performanceSpecialty | undefined, secondary: performanceSpecialty | undefined },
  social: { primary: socialSpecialty | undefined, secondary: socialSpecialty | undefined },
  sneaky: { primary: sneakySpecialty | undefined, secondary: sneakySpecialty | undefined },
  throwdown: { primary: throwdownSpecialty | undefined, secondary: throwdownSpecialty | undefined },
  tech: { primary: techSpecialty | undefined, secondary: techSpecialty | undefined },
}

export type skills = {
  craft: modRange,
  leadership: modRange,
  stardew: modRange,
  performance: modRange,
  sneaky: modRange,
  investigate: modRange,
  medic: modRange,
  nature: modRange,
  social: modRange,
  tech: modRange,
  throwdown: modRange
}

export type stats = {
  nimble: modRange,
  tough: modRange,
  competence: modRange,
  constitution: modRange,
  spirit: modRange
}

export type guild = "Assassins" | "Starborne Hunters" | "Explorers" | "Mercenaries" | "Thieves"
export type statName = "nimble" | "tough" | "competence" | "constitution" | "spirit"
export type skillName = "craft" | "leadership" | "stardew" | "performance" | "sneaky" | "investigate" | "medic" | "nature" | "social" | "tech" | "throwdown"

export class Character {
  name: string
  species: species
  demeanor: string
  physique: string
  skills: skills
  specialties: specialties
  stardewUses: number
  stats: stats
  wealth: wealthRange
  luck: luckRange
  guild: guild
  addiction: addictionRange
  need: number
  goalsAndMotive: string
  flawsAndWeaknesses: string
  personalMorals: string
  importantConnections: string
  owner: string
  harm: harm
  dying: boolean
  gear: string[]
  experience: number
  experienceProgress: experienceProgress
  notes: string[]
  backstory: string
  dateCreated: Date
  public: boolean
  _id: ObjectId
  fromTemplate?: boolean
  templateRef?: ObjectId
  refOwner?: string

  constructor(name: string, species: species, demeanor: string = "", physique: string = "", skills: skills, stats: stats, wealth: wealthRange, luck: luckRange, guild: guild, addiction: addictionRange = 0, goalsAndMotive: string = "", flawsAndWeaknesses: string = "", personalMorals: string = "", importantConnections: string = "", owner: string, fromTemplate?: boolean, templateRef?: ObjectId, refOwner?: string) {
    this._id = new ObjectId
    this.name = name
    this.species = species
    this.demeanor = demeanor
    this.physique = physique
    this.skills = skills
    this.stats = stats
    this.wealth = wealth
    this.luck = luck
    this.guild = guild
    this.addiction = addiction
    this.need = 0
    this.goalsAndMotive = goalsAndMotive
    this.flawsAndWeaknesses = flawsAndWeaknesses
    this.personalMorals = personalMorals
    this.importantConnections = importantConnections
    this.harm = 0
    this.dying = false
    this.gear = []
    this.experience = 0
    this.experienceProgress = 0
    this.notes = []
    this.backstory = ""
    this.stardewUses = 0
    this.owner = owner
    this.specialties = {
      craft: { primary: undefined, secondary: undefined },
      leadership: { primary: undefined, secondary: undefined },
      stardew: { primary: undefined, secondary: undefined },
      performance: { primary: undefined, secondary: undefined },
      sneaky: { primary: undefined, secondary: undefined },
      investigate: { primary: undefined, secondary: undefined },
      medic: { primary: undefined, secondary: undefined },
      nature: { primary: undefined, secondary: undefined },
      social: { primary: undefined, secondary: undefined },
      tech: { primary: undefined, secondary: undefined },
      throwdown: { primary: undefined, secondary: undefined },
    }
    this.dateCreated = new Date()
    this.public = false
    this.fromTemplate = fromTemplate
    this.templateRef = templateRef
    this.refOwner = refOwner
  }

  dieRoll() {
    return Math.floor(Math.random() * 6 + 1)
  }

  diceRoll() {
    return ({ num1: this.dieRoll(), num2: this.dieRoll() })
  }
}

export type projectedCharacter = { _id: ObjectId, name: string, demeanor?: string, physique?: string, species: species, dateCreated: Date, guild: guild }


export type projectedCharacterList = projectedCharacter[]

export type characterTemplate = {
  _id: ObjectId,
  reference: ObjectId,
  referenceOwner: string,
  created: Date,
  public: boolean,
  owner: string,
  character: Character
}
