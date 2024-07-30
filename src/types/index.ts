export type Pokemon = {
  pid: number
  name: string
  name_jp: string
}

export type PokemonStatus = {
  hp: number
  atk: number
  def: number
  spa: number
  spd: number
  spe: number
}

export type Move = {
  id: number
  name: string
  name_jp: string
  type: string
  category: string
  power: number
  accuracy: number
  pp: number
}

export type MyPokemon = {
  id: number
  pokedex_data: Pokemon
  level: number
  ability: string
  nature: string
  item: string
  evs: PokemonStatus
  ivs: PokemonStatus
  moves: Move[]
}
