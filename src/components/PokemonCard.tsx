import { MyPokemon } from "@/types"
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
  pokemon: MyPokemon
}

const PokemonCard = ({ pokemon }: Props) => {
  return (
    <>
      <Card className="flex justify-between w-2/3 mx-auto my-6 min-w-max min-h-max">
        <div className="flex">
          <PokemonIconM pokemon={pokemon} />
          <div>
            <CardHeader>
              <CardTitle>{pokemon.pokedex_data.name_jp}</CardTitle>
              <CardDescription>{pokemon.pokedex_data.name}</CardDescription>
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
