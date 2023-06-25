export const imperium = {
  adepta_sororitas: 'Adepta Sororitas',
  adeptus_custodes: 'Adeptus Custodes',
  adeptus_mechanicus: 'Adeptus Mechanicus',
  astra_militarum: 'Astra Militarum',
  black_templars: 'Black Templars',
  blood_angels: 'Blood Angels',
  dark_angels: 'Dark Angels',
  deathwatch: 'Deathwatch',
  grey_knights: 'Grey Knights',
  imperial_agents: 'Imperial Agents',
  imperial_knights: 'Imperial Knights',
  space_marines: 'Space Marines',
  space_wolves: 'Space Wolves',
}

export const factionFiles = {
  black_templars: '1-9Wd6CEtbqCTD4f4KzAjXCzHN-xnK-_L',
  necrons: '1-U6HOyaFLSbq5R42Es6DzcWPdSbAHF9_',
}

export const chaos = {
  chaos_demons: 'Chaos Demons',
  chaos_knights: 'Chaos Knights',
  chaos_space_marines: 'Chaos Space Marines',
  death_guard: 'Death Guard',
  thousand_sons: 'Thousand Sons',
  world_eaters: 'World Eaters',
}

export const xenos = {
  aeldari: 'Aeldari',
  drukhari: 'Drukhari',
  genestealer_cults: 'Genestealer Cults',
  leagues_of_votann: 'Leagues of Votann',
  necrons: 'Necrons',
  orks: 'Orks',
  tau_empire: 'Tau Empire',
  tyranids: 'Tyranids',
}

export const factions = { imperium, xenos, chaos }

export type Strategem = {
  name: string
  type: string
  when: string
  target: string
  effect: string
  restrictions: string
  cost: string
  description: string
}

export type Faction = {
  name: string
  id: string
  rule: string[]
  strategems: Strategem[]
  units: Unit[]
}

export type Abilities = {
  ['CORE ABILITIES']: string[]
  ['FACTION ABILITIES']: string[]
  ['OTHER ABILITIES']: string[]
}

export enum WEAPON_TYPES {
  RANGED_WEAPONS = 'RANGED WEAPONS',
  MELEE_WEAPONS = 'MELEE WEAPONS',
}

export type Weapon = {
  WeaponName: string
  SpecialRules: string[]
  Range: string
  A: string
  WeaponSkill: string
  S: string
  AP: string
  D: string
}

export type Unit = {
  NAME: string
  ['RANGED WEAPONS']: Weapon[] | null
  ['MELEE WEAPONS']: Weapon[] | null
  ABILITIES?: Abilities
  LEADER: string[] | null
  ['WARGEAR ABILITIES']: string[] | null
  ['INVULNERABLE SAVE']: string | null
  KEYWORDS: string[] | null
  ['FACTION KEYWORDS']: string[] | null
  M?: string
  T?: string
  SV?: string
  W?: string
  LD?: string
  OC?: string
}
