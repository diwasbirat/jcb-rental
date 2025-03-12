"use client"

import React from "react"

import { useApp } from "@/context/app-context"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Building, Calendar, Clock, FileText, MapPin, Phone, Mail, User } from "lucide-react"
import {
  getCustomerById,
  getBookingsByCustomerId,
  getInvoicesByCustomerId,
  getSitesByCustomerId,
  getMachineById,
  getSiteById,
  getWorkLogsByBookingId,
  formatCurrency,
} from "@/lib/data"
import Link from "next/link"

export default function CustomerDetailPage() {
  const params = useParams()
  const router = useRouter()
  const { loading } = useApp()
  const customerId = params.id as string

  const customer = getCustomerById(customerId)
  const bookings = getBookingsByCustomerId(customerId)
  const invoices = getInvoicesByCustomerId(customerId)
  const sites = getSitesByCustomerId(customerId)

  if (loading) {
    return (
      <div className="flex items-center justify-center h-[calc(100vh-200px)]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-lg">Loading customer data...</p>
        </div>
      </div>
    )
  }

  if (!customer) {
    return (
      <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
        <h1 className="text-2xl font-bold mb-4">Customer Not Found</h1>
        <p className="text-muted-foreground mb-6">The customer you're looking for doesn't exist or has been removed.</p>
        <Button asChild>
          <Link href="/customers">Back to Customers</Link>
        </Button>
      </div>
    )
  }

  // Calculate totals
  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const totalPaid = invoices.reduce((sum, invoice) => sum + invoice.paidAmount, 0)
  const totalDue = invoices.reduce((sum, invoice) => sum + invoice.dueAmount, 0)
  const totalAdvance = invoices.reduce((sum, invoice) => sum + invoice.advancePayment, 0)
  const totalHours = bookings.reduce((sum, booking) => sum + booking.totalHours, 0)

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-3xl font-bold">{customer.name}</h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Amount</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalAmount)}</div>
            <p className="text-xs text-muted-foreground">{invoices.length} invoices total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid Amount</CardTitle>
            <FileText className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalPaid)}</div>
            <p className="text-xs text-muted-foreground">
              {invoices.filter((inv) => inv.status === "Paid").length} invoices paid
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Due Amount</CardTitle>
            <FileText className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalDue)}</div>
            <p className="text-xs text-muted-foreground">
              {invoices.filter((inv) => inv.dueAmount > 0).length} invoices with balance
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Hours</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{totalHours} hrs</div>
            <p className="text-xs text-muted-foreground">{bookings.length} bookings</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Customer Information</CardTitle>
          <CardDescription>Contact details and information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <User className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Contact Person:</span>
                <span>{customer.contact}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Email:</span>
                <span>{customer.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Phone:</span>
                <span>{customer.phone}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Address:</span>
                <span>{customer.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Building className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Active Sites:</span>
                <span>{sites.filter((site) => site.status === "Active").length}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-muted-foreground" />
                <span className="font-medium">Active Bookings:</span>
                <span>{bookings.filter((booking) => booking.status === "Active").length}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="invoices">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="invoices">Invoices</TabsTrigger>
          <TabsTrigger value="bookings">Bookings & Hours</TabsTrigger>
          <TabsTrigger value="sites">Construction Sites</TabsTrigger>
        </TabsList>

        <TabsContent value="invoices" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Invoices</CardTitle>
              <CardDescription>All invoices for {customer.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Invoice #</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Due Date</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Advance</TableHead>
                      <TableHead>Paid</TableHead>
                      <TableHead>Due</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {invoices.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={9} className="h-24 text-center">
                          No invoices found for this customer.
                        </TableCell>
                      </TableRow>
                    ) : (
                      invoices.map((invoice) => (
                        <TableRow key={invoice.id}>
                          <TableCell className="font-medium">{invoice.id}</TableCell>
                          <TableCell>{invoice.date}</TableCell>
                          <TableCell>{invoice.dueDate}</TableCell>
                          <TableCell>{formatCurrency(invoice.amount)}</TableCell>
                          <TableCell>{formatCurrency(invoice.advancePayment)}</TableCell>
                          <TableCell>{formatCurrency(invoice.paidAmount)}</TableCell>
                          <TableCell>{formatCurrency(invoice.dueAmount)}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                invoice.status === "Paid"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  : invoice.status === "Pending"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                    : invoice.status === "Draft"
                                      ? "bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300"
                                      : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300"
                              }`}
                            >
                              {invoice.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="bookings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bookings & Work Hours</CardTitle>
              <CardDescription>Machine bookings and work logs for {customer.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Machine</TableHead>
                      <TableHead>Site</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Hours</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookings.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={9} className="h-24 text-center">
                          No bookings found for this customer.
                        </TableCell>
                      </TableRow>
                    ) : (
                      bookings.map((booking) => {
                        const machine = getMachineById(booking.machineId)
                        const site = getSiteById(booking.siteId)
                        const workLogs = getWorkLogsByBookingId(booking.id)

                        return (
                          <React.Fragment key={booking.id}>
                            <TableRow>
                              <TableCell className="font-medium">{booking.id}</TableCell>
                              <TableCell>{machine?.name || "Unknown"}</TableCell>
                              <TableCell>{site?.name || "Unknown"}</TableCell>
                              <TableCell>{booking.startDate}</TableCell>
                              <TableCell>{booking.endDate}</TableCell>
                              <TableCell>{booking.totalHours} hrs</TableCell>
                              <TableCell>{formatCurrency(booking.amount)}</TableCell>
                              <TableCell>
                                <span
                                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                    booking.status === "Active"
                                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                      : booking.status === "Completed"
                                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                        : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                                  }`}
                                >
                                  {booking.status}
                                </span>
                              </TableCell>
                              <TableCell className="text-right">
                                <Button variant="ghost" size="sm">
                                  View
                                </Button>
                              </TableCell>
                            </TableRow>
                            {workLogs.length > 0 && (
                              <TableRow className="bg-muted/50">
                                <TableCell colSpan={9} className="p-0">
                                  <div className="p-2">
                                    <h4 className="font-medium text-sm mb-2">Work Logs</h4>
                                    <div className="grid grid-cols-3 gap-2">
                                      {workLogs.map((log) => (
                                        <div key={log.id} className="bg-background p-2 rounded-md text-sm">
                                          <div className="flex justify-between">
                                            <span className="font-medium">{log.date}</span>
                                            <span>{log.hours} hrs</span>
                                          </div>
                                          <p className="text-muted-foreground text-xs mt-1">{log.description}</p>
                                        </div>
                                      ))}
                                    </div>
                                  </div>
                                </TableCell>
                              </TableRow>
                            )}
                          </React.Fragment>
                        )
                      })
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="sites" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Construction Sites</CardTitle>
              <CardDescription>All construction sites for {customer.name}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Site ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Address</TableHead>
                      <TableHead>City</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead className="text-right">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {sites.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center">
                          No construction sites found for this customer.
                        </TableCell>
                      </TableRow>
                    ) : (
                      sites.map((site) => (
                        <TableRow key={site.id}>
                          <TableCell className="font-medium">{site.id}</TableCell>
                          <TableCell>{site.name}</TableCell>
                          <TableCell>{site.address}</TableCell>
                          <TableCell>{site.city}</TableCell>
                          <TableCell>
                            <span
                              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                                site.status === "Active"
                                  ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
                                  : site.status === "Completed"
                                    ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                                    : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300"
                              }`}
                            >
                              {site.status}
                            </span>
                          </TableCell>
                          <TableCell className="text-right">
                            <Button variant="ghost" size="sm">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

