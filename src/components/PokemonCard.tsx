import { MyPokemon } from "@/types"
import PokemonIconM from "./PokemonIconM"
import PokemonStatus from "./PokemonStatus"

type Props = {
  pokemon: MyPokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <>
      <div className="flex justify-between border-2 rounded-xl p-4 w-2/3 mx-auto my-6 min-w-max min-h-max">
        <div className="flex justify-start">
          <PokemonIconM pokemon={pokemon} />
          <PokemonStatus pokemon={pokemon} />
        </div>
        <div className="w-40">graph</div>
      </div>
    </>
  )
}

export default PokemonCard
