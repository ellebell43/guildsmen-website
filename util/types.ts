export type action = {
  name: string,
  modifier?: number,
  modifierNote?: string,
  description: string
}

export type creatureType = "person" | "beast" | "mythical"

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
  actions: action[]
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
export type experienceProgress = 0 | 1 | 2 | 3 | 4
export type species = "Locess" | "Mausca" | "Orc" | "Matari" | "Slated" | "Ungal"

export type skills = {
  craft: modRange,
  leadership: modRange,
  myth: modRange,
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
  constitution: modRange
}

export type guild = "Assassins" | "Mythic Hunters" | "Explorers" | "Mercenaries" | "Thieves"
export type statName = "nimble" | "tough" | "competence" | "constitution"
export type skillName = "craft" | "leadership" | "myth" | "performance" | "sneaky" | "investigate" | "medic" | "nature" | "social" | "tech" | "throwdown"

export class Character {
  name: string
  species: species
  demeanor: string
  physique: string
  skills: skills
  stats: stats
  wealth: wealthRange
  luck: luckRange
  guild: guild
  addiction: number
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
  mythUses: number

  constructor(name: string, species: species, demeanor: string, physique: string, skills: skills, stats: stats, wealth: wealthRange, luck: luckRange, guild: guild, addiction: number = 0, goalsAndMotive: string = "", flawsAndWeaknesses: string = "", personalMorals: string = "", importantConnections: string = "", owner: string) {
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
    this.mythUses = 0
    this.owner = owner
  }

  dieRoll() {
    return Math.floor(Math.random() * 6 + 1)
  }

  diceRoll() {
    return ({ num1: this.dieRoll(), num2: this.dieRoll() })
  }
}