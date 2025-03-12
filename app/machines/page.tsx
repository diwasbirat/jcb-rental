import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample machine data
const machines = [
  {
    id: "JCB001",
    name: "JCB 3DX Backhoe Loader",
    type: "Backhoe Loader",
    model: "3DX",
    year: "2020",
    status: "Available",
    dailyRate: "$450.00",
    weeklyRate: "$2,250.00",
    monthlyRate: "$8,100.00",
  },
  {
    id: "JCB002",
    name: "JCB 4DX Excavator",
    type: "Excavator",
    model: "4DX",
    year: "2021",
    status: "Rented",
    dailyRate: "$500.00",
    weeklyRate: "$3,500.00",
    monthlyRate: "$12,600.00",
  },
  {
    id: "JCB003",
    name: "JCB Skid Steer Loader",
    type: "Skid Steer Loader",
    model: "SSL 135",
    year: "2019",
    status: "Rented",
    dailyRate: "$400.00",
    weeklyRate: "$2,800.00",
    monthlyRate: "$10,080.00",
  },
  {
    id: "JCB004",
    name: "JCB Telehandler",
    type: "Telehandler",
    model: "TH 540-140",
    year: "2022",
    status: "Available",
    dailyRate: "$550.00",
    weeklyRate: "$3,850.00",
    monthlyRate: "$13,860.00",
  },
  {
    id: "JCB005",
    name: "JCB Mini Excavator",
    type: "Mini Excavator",
    model: "8025 ZTS",
    year: "2021",
    status: "Maintenance",
    dailyRate: "$350.00",
    weeklyRate: "$2,450.00",
    monthlyRate: "$8,820.00",
  },
]

export default function MachinesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Machines</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Add Machine
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Machine Management</CardTitle>
          <CardDescription>View and manage your fleet of JCB machines.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search machines..." className="pl-8 w-full" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Machine Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="backhoe">Backhoe Loader</SelectItem>
                  <SelectItem value="excavator">Excavator</SelectItem>
                  <SelectItem value="skid">Skid Steer Loader</SelectItem>
                  <SelectItem value="telehandler">Telehandler</SelectItem>
                  <SelectItem value="mini">Mini Excavator</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="available">Available</SelectItem>
                  <SelectItem value="rented">Rented</SelectItem>
                  <SelectItem value="maintenance">Maintenance</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>ID</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Year</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Daily Rate</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {machines.map((machine) => (
                  <TableRow key={machine.id}>
                    <TableCell className="font-medium">{machine.id}</TableCell>
                    <TableCell>{machine.name}</TableCell>
                    <TableCell>{machine.type}</TableCell>
                    <TableCell>{machine.model}</TableCell>
                    <TableCell>{machine.year}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          machine.status === "Available"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : machine.status === "Rented"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                        }`}
                      >
                        {machine.status}
                      </span>
                    </TableCell>
                    <TableCell>{machine.dailyRate}</TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        View
                      </Button>
                      <Button variant="ghost" size="sm">
                        Edit
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

