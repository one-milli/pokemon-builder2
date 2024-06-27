import PokemonCard from "@/components/PokemonCard"

const pokemon = {
  pid: 151,
  name: "mew",
  name_jp: "ミュウ",
}

const my_pokemon = {
  id: 1,
  pokedex_data: pokemon,
  level: 50,
  ability: "シンクロ",
  nature: "おくびょう",
  item: "こだわりスカーフ",
  evs: {
    hp: 0,
    atk: 0,
    def: 0,
    spa: 252,
    spd: 4,
    spe: 252,
  },
  ivs: {
    hp: 31,
    atk: 31,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31,
  },
}

const Detail = () => {
  return (
    <div>
      <PokemonCard pokemon={my_pokemon} />
    </div>
  )
}

export default Detail
