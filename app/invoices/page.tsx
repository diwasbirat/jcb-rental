"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Calendar, Download, FileText, Plus, Printer, Search } from "lucide-react"
import { useApp } from "@/context/app-context"
import { useState } from "react"
import Link from "next/link"
import { getCustomerById, formatCurrency } from "@/lib/data"
import type { customers } from "@/lib/placeholder-data"

export default function InvoicesPage() {
  const { invoices, loading } = useApp()
  const [searchTerm, setSearchTerm] = useState("")

  // Calculate totals
  const totalAmount = invoices.reduce((sum, invoice) => sum + invoice.amount, 0)
  const totalPaid = invoices.reduce((sum, invoice) => sum + invoice.paidAmount, 0)
  const totalDue = invoices.reduce((sum, invoice) => sum + invoice.dueAmount, 0)

  // Filter invoices based on search term
  const filteredInvoices = invoices.filter((invoice) => {
    const customer = getCustomerById(invoice.customerId)
    return (
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer?.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.bookingId.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })

  // Group invoices by customer
  const invoicesByCustomer = filteredInvoices.reduce(
    (acc, invoice) => {
      const customer = getCustomerById(invoice.customerId)
      if (!customer) return acc

      if (!acc[customer.id]) {
        acc[customer.id] = {
          customer,
          invoices: [],
        }
      }

      acc[customer.id].invoices.push(invoice)
      return acc
    },
    {} as Record<string, { customer: (typeof customers)[0]; invoices: typeof invoices }>,
  )

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Invoices</h1>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Invoices</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalAmount)}</div>
            <p className="text-xs text-muted-foreground">{invoices.length} invoices total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Paid</CardTitle>
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
            <CardTitle className="text-sm font-medium">Outstanding</CardTitle>
            <FileText className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{formatCurrency(totalDue)}</div>
            <p className="text-xs text-muted-foreground">
              {invoices.filter((inv) => inv.dueAmount > 0).length} invoices pending/overdue
            </p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Invoice Management</CardTitle>
          <CardDescription>View and manage all customer invoices.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search invoices or customers..."
                className="pl-8 w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Button variant="outline" className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>Date Range</span>
              </Button>
            </div>
          </div>

          {loading ? (
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-lg">Loading invoices...</p>
              </div>
            </div>
          ) : Object.keys(invoicesByCustomer).length === 0 ? (
            <div className="text-center py-10">
              <FileText className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-lg font-medium">No invoices found</h3>
              <p className="text-muted-foreground">Try adjusting your search terms</p>
            </div>
          ) : (
            <div className="space-y-6">
              {Object.entries(invoicesByCustomer).map(([customerId, { customer, invoices }]) => (
                <div key={customerId} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Link
                      href={`/customers/${customer.id}`}
                      className="text-lg font-semibold hover:underline text-blue-600"
                    >
                      {customer.name}
                    </Link>
                    <span className="text-sm text-muted-foreground">
                      {invoices.length} invoice{invoices.length !== 1 ? "s" : ""}
                    </span>
                  </div>

                  <div className="rounded-md border">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Invoice #</TableHead>
                          <TableHead>Booking ID</TableHead>
                          <TableHead>Date</TableHead>
                          <TableHead>Due Date</TableHead>
                          <TableHead>Amount</TableHead>
                          <TableHead>Paid</TableHead>
                          <TableHead>Due</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead className="text-right">Actions</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {invoices.map((invoice) => (
                          <TableRow key={invoice.id}>
                            <TableCell className="font-medium">{invoice.id}</TableCell>
                            <TableCell>{invoice.bookingId}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.dueDate}</TableCell>
                            <TableCell>{formatCurrency(invoice.amount)}</TableCell>
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
                              <Button variant="ghost" size="icon">
                                <Printer className="h-4 w-4" />
                                <span className="sr-only">Print</span>
                              </Button>
                              <Button variant="ghost" size="icon">
                                <Download className="h-4 w-4" />
                                <span className="sr-only">Download</span>
                              </Button>
                              <Button variant="ghost" size="sm">
                                View
                              </Button>
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

