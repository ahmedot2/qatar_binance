"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartTooltipContent } from "@/components/ui/chart"

const data = [
  { name: "Base", moic: 1.2, value: 11.7, ev: 180 },
  { name: "Bull", moic: 1.6, value: 15.6, ev: 240 },
  { name: "Upside+", moic: 2.0, value: 19.5, ev: 300 },
]

export function ReturnScenariosChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Compelling Return Scenarios</CardTitle>
        <CardDescription>Projected returns based on growth cases for Binance's valuation over a 5-year horizon.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
                <XAxis
                    dataKey="name"
                    stroke="hsl(var(--foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="hsl(var(--foreground))"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) => `${value}x`}
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-1 gap-1.5 text-sm">
                            <div className="font-bold">{payload[0].payload.name} Case</div>
                            <div><span className="text-muted-foreground">MOIC:</span> {payload[0].payload.moic}x</div>
                            <div><span className="text-muted-foreground">Qatar Stake:</span> ${payload[0].payload.value}B</div>
                            <div><span className="text-muted-foreground">Binance EV:</span> ${payload[0].payload.ev}B</div>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
              <Bar dataKey="moic" fill="hsl(var(--primary))" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
