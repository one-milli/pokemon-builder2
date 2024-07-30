import { Move } from "@smogon/calc"

export { Pokemon, Move } from "@smogon/calc"

export type PokemonStatus = {
  hp: number
  atk: number
  def: number
  spa: number
  spd: number
  spe: number
}

export type PokemonConfig = {
  id: number
  pid: number
  level: number
  ability: string
  nature: string
  item: string
  evs: PokemonStatus
  ivs: PokemonStatus
  moves: Move[]
}
