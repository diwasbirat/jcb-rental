import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Plus, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Sample booking data
const bookings = [
  {
    id: "BK001",
    customer: "ABC Construction",
    machine: "JCB 3DX Backhoe Loader",
    startDate: "2023-10-15",
    endDate: "2023-10-20",
    status: "Completed",
    amount: "$2,250.00",
  },
  {
    id: "BK002",
    customer: "XYZ Developers",
    machine: "JCB 4DX Excavator",
    startDate: "2023-10-18",
    endDate: "2023-10-25",
    status: "Active",
    amount: "$3,500.00",
  },
  {
    id: "BK003",
    customer: "City Infrastructure Ltd",
    machine: "JCB Skid Steer Loader",
    startDate: "2023-10-20",
    endDate: "2023-10-27",
    status: "Active",
    amount: "$2,800.00",
  },
  {
    id: "BK004",
    customer: "Highway Builders Inc",
    machine: "JCB Telehandler",
    startDate: "2023-10-25",
    endDate: "2023-11-05",
    status: "Upcoming",
    amount: "$4,400.00",
  },
  {
    id: "BK005",
    customer: "Metro Excavation Co",
    machine: "JCB Mini Excavator",
    startDate: "2023-10-28",
    endDate: "2023-11-02",
    status: "Upcoming",
    amount: "$1,750.00",
  },
]

export default function BookingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Bookings</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Booking
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Booking Management</CardTitle>
          <CardDescription>View and manage all machine bookings in one place.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input type="search" placeholder="Search bookings..." className="pl-8 w-full" />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Statuses</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Date Range</span>
              </Button>
            </div>
          </div>

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Booking ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Machine</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bookings.map((booking) => (
                  <TableRow key={booking.id}>
                    <TableCell className="font-medium">{booking.id}</TableCell>
                    <TableCell>{booking.customer}</TableCell>
                    <TableCell>{booking.machine}</TableCell>
                    <TableCell>{booking.startDate}</TableCell>
                    <TableCell>{booking.endDate}</TableCell>
                    <TableCell>
                      <span
                        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          booking.status === "Active"
                            ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                            : booking.status === "Completed"
                              ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                              : booking.status === "Upcoming"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                        }`}
                      >
                        {booking.status}
                      </span>
                    </TableCell>
                    <TableCell>{booking.amount}</TableCell>
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

