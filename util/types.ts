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
    compentence: number,
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