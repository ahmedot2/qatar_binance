"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  { year: "2020", users: 50 },
  { year: "2021", users: 90 },
  { year: "2022", users: 128 },
  { year: "2023", users: 170 },
  { year: "2024", users: 200 },
  { year: "2025", users: 250 },
]

export function UserGrowthChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>User Growth Trajectory</CardTitle>
        <CardDescription>Total users in millions</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[350px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={data}
              margin={{
                top: 5,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
                <XAxis
                    dataKey="year"
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
                    tickFormatter={(value) => `${value}M`}
                />
              <Tooltip
                 content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <div className="rounded-lg border bg-background p-2 shadow-sm">
                          <div className="grid grid-cols-1 gap-1.5">
                            <span className="text-sm font-bold">{payload[0].payload.year}</span>
                            <span className="text-sm text-muted-foreground">{payload[0].value} Million Users</span>
                          </div>
                        </div>
                      )
                    }
                    return null
                  }}
              />
              <Line
                type="monotone"
                strokeWidth={2}
                dataKey="users"
                activeDot={{
                  r: 6,
                  style: { fill: "hsl(var(--primary))", opacity: 0.25 },
                }}
                style={
                  {
                    stroke: "hsl(var(--primary))",
                  } as React.CSSProperties
                }
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  )
}
