import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Generations, Pokemon, Move } from "@smogon/calc"
import pokedex from "pokemon"
import PokemonCard from "@/components/PokemonCard"

const gen = Generations.get(9)

const pokemon_config = {
  id: 1,
  pid: 282,
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
    atk: 0,
    def: 31,
    spa: 31,
    spd: 31,
    spe: 31,
  },
  moves: [],
}

const pokemonName = pokedex.getName(pokemon_config.pid)
const pokemonNameJa = pokedex.getName(pokemon_config.pid, "ja")

const pokemon = new Pokemon(gen, pokemonName, {
  level: pokemon_config.level,
  evs: pokemon_config.evs,
  ivs: pokemon_config.ivs,
})

const Detail = () => {
  return (
    <>
      <Sheet>
        <SheetTrigger asChild>
          <Button>ポケモンを選択</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>ポケモンを選択</SheetHeader>
        </SheetContent>
      </Sheet>
      <div className="grow">
        <PokemonCard
          pokemon={pokemon}
          pid={pokemon_config.pid}
          pokemonNameJa={pokemonNameJa}
        />
      </div>
    </>
  )
}

export default Detail
