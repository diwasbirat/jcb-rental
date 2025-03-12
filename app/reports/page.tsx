import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Download, BarChart3, PieChart, LineChart, TrendingUp } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Reports</h1>
        <div className="flex items-center gap-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Time Period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="flex items-center gap-2">
            <Download className="h-4 w-4" />
            <span>Export</span>
          </Button>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$24,500.00</div>
            <p className="text-xs text-muted-foreground">+12% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">18</div>
            <p className="text-xs text-muted-foreground">+5 from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Utilization Rate</CardTitle>
            <PieChart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">78%</div>
            <p className="text-xs text-muted-foreground">+8% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rental Duration</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5.2 days</div>
            <p className="text-xs text-muted-foreground">+0.8 days from last month</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="revenue">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="revenue">Revenue</TabsTrigger>
          <TabsTrigger value="utilization">Machine Utilization</TabsTrigger>
          <TabsTrigger value="customers">Customer Analysis</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
        </TabsList>
        <TabsContent value="revenue" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Revenue Overview</CardTitle>
              <CardDescription>Monthly revenue breakdown for the current period.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground ml-4">Revenue chart will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="utilization" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Machine Utilization</CardTitle>
              <CardDescription>Utilization rates for each machine in your fleet.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <PieChart className="h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground ml-4">Utilization chart will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="customers" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Customer Analysis</CardTitle>
              <CardDescription>Breakdown of revenue by customer and booking frequency.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <BarChart3 className="h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground ml-4">Customer analysis chart will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="performance" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Performance Metrics</CardTitle>
              <CardDescription>Key performance indicators over time.</CardDescription>
            </CardHeader>
            <CardContent className="h-[400px] flex items-center justify-center">
              <LineChart className="h-16 w-16 text-muted-foreground" />
              <p className="text-muted-foreground ml-4">Performance metrics chart will be displayed here</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

