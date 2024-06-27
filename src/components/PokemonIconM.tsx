import Image from "next/image"
import { MyPokemon } from "@/types"

type Props = {
  pokemon: MyPokemon
}

const ICON_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const PokemonIconM = ({ pokemon }: Props) => {
  return (
    <>
      <div className="w-1/4 min-w-max">
        <Image
          src={`${ICON_URL + pokemon.pokedex_data.pid}.png`}
          width={150}
          height={150}
          alt={pokemon.pokedex_data.name_jp}
        />
      </div>
    </>
  )
}

export default PokemonIconM
