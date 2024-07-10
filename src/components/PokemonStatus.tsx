import { MyPokemon } from "@/types"

type Props = {
  pokemon: MyPokemon
}
const PokemonStatus = ({ pokemon }: Props) => {
  return (
    <>
      <div className="w-full">
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
