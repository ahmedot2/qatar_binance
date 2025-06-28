"use client"

import * as React from "react"
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartTooltipContent } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { SwitchCamera, Layers } from "lucide-react"

const pieData = [
  { browser: "binance", volume: 41.14, fill: "hsl(var(--primary))" },
  { browser: "htx", volume: 15.2, fill: "hsl(var(--chart-2))" },
  { browser: "coinbase", volume: 8.6, fill: "hsl(var(--chart-3))" },
  { browser: "other", volume: 35.06, fill: "hsl(var(--muted-foreground))" },
]

const barData = [
  { month: "Binance", volume: 262.37 },
  { month: "HTX", volume: 58.8 },
  { month: "Coinbase", volume: 33.4 },
]

export function MarketShareChart() {
  const [chartType, setChartType] = React.useState<"pie" | "bar">("pie")

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Global Spot Trading Volume</CardTitle>
          <CardDescription>June 2025</CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setChartType(chartType === "pie" ? "bar" : "pie")}>
          {chartType === 'pie' ? <Layers /> : <SwitchCamera />}
          <span className="sr-only">Toggle chart type</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[350px] relative">
          <div className={`absolute inset-0 transition-opacity duration-500 ${chartType === 'pie' ? 'opacity-100' : 'opacity-0'}`}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Tooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <Pie
                  data={pieData}
                  dataKey="volume"
                  nameKey="browser"
                  innerRadius={100}
                  strokeWidth={5}
                >
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className={`absolute inset-0 transition-opacity duration-500 ${chartType === 'bar' ? 'opacity-100' : 'opacity-0'}`}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical" margin={{ left: 10, right: 10 }}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="month"
                  stroke="hsl(var(--foreground))"
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  cursor={{ fill: 'hsl(var(--muted))' }}
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-1 gap-1.5">
                            <span className="text-sm text-muted-foreground">{payload[0].payload.month}</span>
                            <span className="font-bold">${payload[0].value}B</span>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
                />
                <Bar dataKey="volume" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
