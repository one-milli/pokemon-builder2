import { MyPokemon } from "@/types"

type Props = {
  pokemon: MyPokemon
}
const PokemonStatus = ({ pokemon }: Props) => {
  return (
    <>
      <div className="w-full">
        <div className="text-2xl font-bold">{pokemon.pokedex_data.name_jp}</div>
        <div className="flex">
          <div>Lv.{pokemon.level}</div>
          <div>{pokemon.ability}</div>
          <div>{pokemon.nature}</div>
          <div>{pokemon.item}</div>
        </div>
      </div>
    </>
  )
}

export default PokemonStatus
