
"use client"

import * as React from "react"
import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Sector, Cell } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart"
import type { ChartConfig } from "@/components/ui/chart"
import { Button } from "@/components/ui/button"
import { SwitchCamera, Layers } from "lucide-react"

const pieData = [
  { browser: "binance", volume: 41.14, fill: "var(--color-binance)" },
  { browser: "htx", volume: 15.2, fill: "var(--color-htx)" },
  { browser: "coinbase", volume: 8.6, fill: "var(--color-coinbase)" },
  { browser: "other", volume: 35.06, fill: "var(--color-other)" },
]

const barData = [
  { month: "Binance", volume: 262.37 },
  { month: "HTX", volume: 58.8 },
  { month: "Coinbase", volume: 33.4 },
]

const chartConfig = {
  volume: {
    label: "Volume",
  },
  binance: {
    label: "Binance",
    color: "hsl(var(--primary))",
  },
  htx: {
    label: "HTX",
    color: "hsl(var(--chart-2))",
  },
  coinbase: {
    label: "Coinbase",
    color: "hsl(var(--chart-3))",
  },
  other: {
    label: "Other",
    color: "hsl(var(--muted-foreground))",
  },
} satisfies ChartConfig

const renderActiveShape = (props: any) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill, payload } = props;

  return (
    <g>
      <text x={cx} y={cy - 12} dy={8} textAnchor="middle" fill={fill} className="text-lg font-bold transition-all">
        {`${payload.volume}%`}
      </text>
      <text x={cx} y={cy + 12} dy={8} textAnchor="middle" fill="hsl(var(--muted-foreground))" className="text-sm capitalize transition-all">
        {payload.browser}
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius + 8}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
        stroke="hsl(var(--background))"
        strokeWidth={3}
      />
    </g>
  );
};


export function MarketShareChart() {
  const [chartType, setChartType] = React.useState<"pie" | "bar">("pie")
  const [activeIndex, setActiveIndex] = React.useState<number>(0)

  const onPieEnter = React.useCallback(
    (_: any, index: number) => {
      setActiveIndex(index)
    },
    [setActiveIndex]
  )

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Unassailable Market Leadership</CardTitle>
          <CardDescription>Binance's share of global spot trading volume vs. competitors.</CardDescription>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setChartType(chartType === "pie" ? "bar" : "pie")}>
          {chartType === 'pie' ? <Layers aria-hidden="true" /> : <SwitchCamera aria-hidden="true" />}
          <span className="sr-only">Toggle chart type</span>
        </Button>
      </CardHeader>
      <CardContent>
        <div className="w-full h-[350px] relative">
          <div className={`absolute inset-0 transition-all duration-500 ${chartType === 'pie' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <ChartContainer config={chartConfig} className="mx-auto aspect-square max-h-[350px]">
              <PieChart>
                <Pie
                  activeIndex={activeIndex}
                  activeShape={renderActiveShape}
                  data={pieData}
                  dataKey="volume"
                  nameKey="browser"
                  innerRadius={80}
                  outerRadius={110}
                  strokeWidth={5}
                  onMouseEnter={onPieEnter}
                >
                    {pieData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.fill} className="transition-all duration-300" />
                    ))}
                </Pie>
                 <ChartLegend
                    content={<ChartLegendContent nameKey="browser" />}
                    className="-translate-y-[2rem] flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
                />
              </PieChart>
            </ChartContainer>
          </div>
          <div className={`absolute inset-0 transition-all duration-500 ${chartType === 'bar' ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={barData} layout="vertical" margin={{ left: 10, right: 10 }}>
                <XAxis type="number" hide />
                <YAxis
                  type="category"
                  dataKey="month"
                  stroke="hsl(var(--foreground))"
                  axisLine={false}
                  tickLine={false}
                  width={60}
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
                <Bar dataKey="volume" fill="hsl(var(--primary))" radius={[0, 4, 4, 0]} isAnimationActive={chartType === 'bar'} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
