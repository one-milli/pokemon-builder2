import { Separator } from "./ui/separator"
import { Pokemon } from "@/types"

type Props = {
  pokemon: Pokemon
}

const PokemonStatus = ({ pokemon }: Props) => {
  return (
    <>
      <div className="w-full">
        <div className="flex h-5 space-x-2 text-sm">
          <div>Lv.{pokemon.level}</div>
          <Separator orientation="vertical" />
          <div>{pokemon.ability}</div>
          <Separator orientation="vertical" />
          <div>{pokemon.nature}</div>
          <Separator orientation="vertical" />
          <div>{pokemon.item}</div>
        </div>
      </div>
    </>
  )
}

export default PokemonStatus
