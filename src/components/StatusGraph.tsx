import { useState } from "react"
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from "recharts"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MyPokemon } from "@/types"

type Props = {
  pokemon: MyPokemon
}

type CustomTickProps = {
  payload: any
  x: number
  y: number
  textAnchor: string
}

function customTick({ payload, x, y, textAnchor }: CustomTickProps) {
  return (
    <g className="recharts-layer recharts-polar-angle-axis-tick">
      <text
        x={x}
        y={y}
        className="recharts-text recharts-polar-angle-axis-tick-value"
        text-anchor={textAnchor}
      >
        <tspan dy={5}>{payload.value}</tspan>
      </text>
    </g>
  )
}

const StatusGraph = ({ pokemon }: Props) => {
  const [showEv, setShowEv] = useState(true)
  const data = [
    { subject: "HP", realValue: 300, effortValue: 70 },
    { subject: "A", realValue: 250, effortValue: 0 },
    { subject: "B", realValue: 200, effortValue: 0 },
    { subject: "S", realValue: 280, effortValue: 180 },
    { subject: "D", realValue: 180, effortValue: 0 },
    { subject: "C", realValue: 350, effortValue: 252 },
  ]

  return (
    <>
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-4">
          <Switch
            id="effort-values"
            checked={showEv}
            onCheckedChange={setShowEv}
          />
          <Label htmlFor="effort-values">努力値表示</Label>
        </div>
        <div>
          <RadarChart
            cx={80}
            cy={80}
            outerRadius={60}
            width={150}
            height={200}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" tick={customTick} />
            <Radar
              name="実数値"
              dataKey="realValue"
              stroke="#8FBC8F"
              fill="#8FBC8F"
              fillOpacity={0.6}
              animationDuration={500}
            />
            {showEv && (
              <Radar
                name="努力値"
                dataKey="effortValue"
                stroke="#FFD700"
                fill="#FFD700"
                fillOpacity={0.3}
                animationDuration={500}
              />
            )}
          </RadarChart>
        </div>
      </div>
    </>
  )
}

export default StatusGraph
