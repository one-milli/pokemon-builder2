import { Pokemon } from "@/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import PokemonIconM from "./PokemonIconM"
import PokemonStatus from "./PokemonStatus"
import StatusGraph from "./StatusGraph"

type Props = {
  pokemon: Pokemon
  pid: number
  pokemonNameJa: string
}

const pokedex = require("pokemon")

const PokemonCard = ({ pokemon, pid, pokemonNameJa }: Props) => {
  return (
    <>
      <Card className="flex justify-between w-2/3 mx-auto my-6 min-w-max min-h-max">
        <div className="flex">
          <PokemonIconM pid={pid} />
          <div>
            <CardHeader>
              <CardTitle>{pokemonNameJa}</CardTitle>
              <CardDescription>{pokemon.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <PokemonStatus pokemon={pokemon} />
            </CardContent>
          </div>
        </div>
        <StatusGraph pokemon={pokemon} />
      </Card>
    </>
  )
}

export default PokemonCard
