import { useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Pokemon, PokemonStatus } from "@/types"

type Props = {
  pokemon: Pokemon
}

type CustomTickProps = {
  payload: any
  x: number
  y: number
  textAnchor: string
  orientation: string
  className: string
  index: number
}

type StatusData = {
  subject: string
  realValue: number
  normalizedRv: number
  effortValue: number
  normalizedEv: number
}

function subjectTick(props: CustomTickProps) {
  const offsetX = Math.sign(props.x - 100) * 5
  const offsetY =
    (Math.abs(Math.sign(props.x - 100)) ^ 1) * Math.sign(props.y - 100) * 4
  return (
    <g>
      <text x={props.x} y={props.y}>
        <tspan dx={-5 + offsetX} dy={5 + offsetY}>
          {props.payload.value}
        </tspan>
      </text>
    </g>
  )
}

function convertPokemonData2Stats(pokemon: Pokemon): StatusData[] {
  const statsMap: Record<string, string> = {
    hp: "H",
    atk: "A",
    def: "B",
    spa: "C",
    spd: "D",
    spe: "S",
  }
  const desiredOrder = ["H", "A", "B", "S", "D", "C"]

  return Object.entries(pokemon.stats)
    .map(([statKey, stat]) => {
      const realValue = stat
      const effortValue = pokemon.evs[statKey as keyof PokemonStatus]
      const subject = statsMap[statKey]

      const normalizedRv = 100 / (1 + Math.exp(-0.02 * (realValue - 80)))
      const normalizedEv = 10 + (effortValue * (100 - 10)) / 252
      return { subject, realValue, normalizedRv, effortValue, normalizedEv }
    })
    .sort(
      (a, b) =>
        desiredOrder.indexOf(a.subject) - desiredOrder.indexOf(b.subject)
    )
}

const StatusGraph = ({ pokemon }: Props) => {
  const [showEv, setShowEv] = useState(true)
  const data = convertPokemonData2Stats(pokemon)

  return (
    <>
      <div className="p-4">
        <div>
          <RadarChart
            cx={100}
            cy={100}
            outerRadius={70}
            width={200}
            height={200}
            data={data}
          >
            <PolarGrid />
            <Radar
              name="実数値"
              dataKey="normalizedRv"
              stroke="#8FBC8F"
              fill="#8FBC8F"
              fillOpacity={0.6}
              animationDuration={500}
            />
            {showEv && (
              <Radar
                name="努力値"
                dataKey="normalizedEv"
                stroke="#FFD700"
                fill="#FFD700"
                fillOpacity={0.3}
                animationDuration={500}
              />
            )}
            <PolarAngleAxis dataKey="subject" tick={subjectTick} />
          </RadarChart>
        </div>
        <div className="flex items-center space-x-2 mt-2">
          <Switch
            id="effort-values"
            checked={showEv}
            onCheckedChange={setShowEv}
          />
          <Label htmlFor="effort-values">努力値表示</Label>
        </div>
      </div>
    </>
  )
}

export default StatusGraph
