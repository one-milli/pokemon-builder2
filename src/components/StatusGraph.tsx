import { useState } from "react"
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Legend,
} from "recharts"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { MyPokemon } from "@/types"

type Props = {
  pokemon: MyPokemon
}

const StatusGraph = ({ pokemon }: Props) => {
  const [showEv, setShowEv] = useState(true)
  const data = [
    { subject: "HP", realValue: 300, effortValue: 150 },
    { subject: "攻撃", realValue: 250, effortValue: 200 },
    { subject: "防御", realValue: 200, effortValue: 100 },
    { subject: "素早さ", realValue: 280, effortValue: 180 },
    { subject: "特防", realValue: 180, effortValue: 50 },
    { subject: "特攻", realValue: 350, effortValue: 252 },
  ]

  return (
    <>
      <div className="w-full max-w-xl mx-auto p-4">
        <div className="flex items-center space-x-2 mb-4">
          <Switch
            id="effort-values"
            checked={showEv}
            onCheckedChange={setShowEv}
          />
          <Label htmlFor="effort-values">努力値の表示</Label>
        </div>
        <div className="w-full h-[200px]">
          <RadarChart
            cx={100}
            cy={80}
            outerRadius={60}
            width={300}
            height={300}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <Radar
              name="実数値"
              dataKey="realValue"
              stroke="#8FBC8F"
              fill="#8FBC8F"
              fillOpacity={0.6}
            />
            {showEv && (
              <Radar
                name="努力値"
                dataKey="effortValue"
                stroke="#FFD700"
                fill="#FFD700"
                fillOpacity={0.3}
              />
            )}
            <Legend />
          </RadarChart>
        </div>
      </div>
    </>
  )
}

export default StatusGraph
