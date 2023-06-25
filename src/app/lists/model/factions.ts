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
  adepta_sororitas: '1Zw6HBPeVkzWSvJ5B2HoPC5G8MwAH_dUb',
  adeptus_custodes: '1rosuo8Z3APoDXpFvEyvyiUMz0J8zzcpZ',
  adeptus_mechanicus: '1TBWohX-5Cfk4YO7vMORvyGIOdZGf3jLQ',
  astra_militarum: '1kuhKJDFTJ7I3JbRSwmS65_Dm9LMO8zSF',
  black_templars: '1-9Wd6CEtbqCTD4f4KzAjXCzHN-xnK-_L',
  blood_angels: '1hnGktNBw3FDrsQiHgJn-J5j6MrQM2VQE',
  dark_angels: '159WnjY-ExRB83qxaClNinRfAINlWYyiJ',
  deathwatch: '1dFhSQ7WVgadxpXAsfRgV1L10VHiV3Ywt',
  grey_knights: '1ASoJ-is2oCreFaVHbS-3wL8hLIHQxfgt',
  imperial_agents: '1XUruvFrcxQZgquUnM-GKSdcuhk1fGyfI',
  imperial_knights: '1_nO3wFSmwA2evjuP9h1sr1h4BQwXDtBY',
  space_marines: '1vSbVrCj5bMqFGvH3Fg38DT9VOSB7Gfxn',
  space_wolves: '1Uxupu8OGA9w6lrllaSnMQiSvYzgJE4tK',
  chaos_demons: '1ohtyOOTNG0iFnV7BN4rkAc5LHediEZrl',
  chaos_knights: '1UTrvj7ssUU5KTwhAmmE9Kqsdbt06LgZE',
  chaos_space_marines: '12v1DiC1rHU16C5vVkjJjRkGMTy0t7UYc',
  death_guard: '1jD1RsF-j7ZalpXGJUXsp76SONOsa4tYy',
  thousand_sons: '1u5pzDipKfPPj5GqQCU5VnXVAd6Fvqxsu',
  world_eaters: '1vzNAXtOvGw-hSdF90Zf7FlWCph1mRQeu',
  aeldari: '1QWQLSnaJXPqAi2yM-nz2BdsPv3roujXb',
  drukhari: '1Jo8U_VOWZ408kXdv70vmbBtMlGNpvKYJ',
  genestealer_cults: '1BrIZOR-Ki43F85QksYoUirgwqL9IDetq',
  leagues_of_votann: '1HE94piNqgH-NNJYSuJr-FTLQi5Clb8Hi',
  necrons: '1-U6HOyaFLSbq5R42Es6DzcWPdSbAHF9_',
  orks: '1rMZEOcW0-BGlkGTU0tHX1LNrUIkDUsCp',
  tau_empire: '1F6Y5xY6979cLlZjEn8FfrtcWzyd3N3D4',
  tyranids: '1H6cmeuUbmTwnM9SvoRjJ9OtvbbOue58N',
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
