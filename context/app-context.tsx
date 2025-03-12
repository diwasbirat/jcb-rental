"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import {
  customers,
  bookings,
  invoices,
  machines,
  constructionSites,
  workLogs,
  getBookingsByCustomerId,
  getInvoicesByCustomerId,
  getSitesByCustomerId,
} from "@/lib/data"

type AppContextType = {
  customers: typeof customers
  bookings: typeof bookings
  invoices: typeof invoices
  machines: typeof machines
  constructionSites: typeof constructionSites
  workLogs: typeof workLogs
  getCustomerBookings: (customerId: string) => typeof bookings
  getCustomerInvoices: (customerId: string) => typeof invoices
  getCustomerSites: (customerId: string) => typeof constructionSites
  loading: boolean
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true)

  // Simulate data loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const getCustomerBookings = (customerId: string) => {
    return getBookingsByCustomerId(customerId)
  }

  const getCustomerInvoices = (customerId: string) => {
    return getInvoicesByCustomerId(customerId)
  }

  const getCustomerSites = (customerId: string) => {
    return getSitesByCustomerId(customerId)
  }

  return (
    <AppContext.Provider
      value={{
        customers,
        bookings,
        invoices,
        machines,
        constructionSites,
        workLogs,
        getCustomerBookings,
        getCustomerInvoices,
        getCustomerSites,
        loading,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error("useApp must be used within an AppProvider")
  }
  return context
}

