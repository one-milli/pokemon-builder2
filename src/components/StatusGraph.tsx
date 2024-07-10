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
    { subject: "特攻", realValue: 350, effortValue: 252 },
    { subject: "特防", realValue: 180, effortValue: 50 },
    { subject: "素早さ", realValue: 280, effortValue: 180 },
  ]

  return (
    <>
      <div className="w-full max-w-xl mx-auto p-4 border border-gray-300 rounded-lg">
        <div className="flex items-center space-x-2 mb-4">
          <Switch
            id="effort-values"
            checked={showEv}
            onCheckedChange={setShowEv}
          />
          <Label htmlFor="effort-values">努力値の表示</Label>
        </div>
        <div className="w-full h-[400px] bg-gray-100">
          <RadarChart
            cx={200}
            cy={200}
            outerRadius={150}
            width={400}
            height={400}
            data={data}
          >
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 600]} />
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
        <div className="mt-4">
          {data.map((entry, index) => (
            <div key={`value-${index}`} className="flex justify-between">
              <span>{entry.subject}</span>
              <span>
                実数値: {entry.realValue}, 努力値: {entry.effortValue}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default StatusGraph
