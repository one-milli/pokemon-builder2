import Image from "next/image"
import { Pokemon } from "@/types"

type Props = {
  pid: number
}

const ICON_URL =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"

const PokemonIconM = ({ pid }: Props) => {
  return (
    <>
      <div className="w-1/4 min-w-max">
        <Image src={`${ICON_URL + pid}.png`} width={150} height={150} alt="" />
      </div>
    </>
  )
}

export default PokemonIconM
