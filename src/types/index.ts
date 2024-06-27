export interface Pokemon {
  pid: number
  name: string
  name_jp: string
}

export interface MyPokemon {
  id: number
  pokedex_data: Pokemon
  level: number
  ability: string
  nature: string
  item: string
  evs: {
    hp: number
    atk: number
    def: number
    spa: number
    spd: number
    spe: number
  }
  ivs: {
    hp: number
    atk: number
    def: number
    spa: number
    spd: number
    spe: number
  }
}
