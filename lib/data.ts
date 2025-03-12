// Mock data for the JCB Rental Management System

// Customer data
export const customers = [
  {
    id: "CUST001",
    name: "ABC Construction",
    contact: "John Smith",
    email: "john@abcconstruction.com",
    phone: "555-123-4567",
    address: "123 Builder St, Construction City",
    status: "Active",
  },
  {
    id: "CUST002",
    name: "XYZ Developers",
    contact: "Jane Doe",
    email: "jane@xyzdevelopers.com",
    phone: "555-987-6543",
    address: "456 Developer Ave, Tech Town",
    status: "Active",
  },
  {
    id: "CUST003",
    name: "City Infrastructure Ltd",
    contact: "Robert Johnson",
    email: "robert@cityinfra.com",
    phone: "555-456-7890",
    address: "789 Municipal Rd, Cityville",
    status: "Active",
  },
  {
    id: "CUST004",
    name: "Highway Builders Inc",
    contact: "Sarah Williams",
    email: "sarah@highwaybuilders.com",
    phone: "555-234-5678",
    address: "321 Road Way, Highway City",
    status: "Inactive",
  },
  {
    id: "CUST005",
    name: "Metro Excavation Co",
    contact: "Michael Brown",
    email: "michael@metroexcavation.com",
    phone: "555-876-5432",
    address: "654 Digger Lane, Metro City",
    status: "Active",
  },
]

// Machine data
export const machines = [
  {
    id: "JCB001",
    name: "JCB 3DX Backhoe Loader",
    type: "Backhoe Loader",
    model: "3DX",
    year: "2020",
    status: "Available",
    dailyRate: 450,
    weeklyRate: 2250,
    monthlyRate: 8100,
    hourlyRate: 60,
  },
  {
    id: "JCB002",
    name: "JCB 4DX Excavator",
    type: "Excavator",
    model: "4DX",
    year: "2021",
    status: "Rented",
    dailyRate: 500,
    weeklyRate: 3500,
    monthlyRate: 12600,
    hourlyRate: 70,
  },
  {
    id: "JCB003",
    name: "JCB Skid Steer Loader",
    type: "Skid Steer Loader",
    model: "SSL 135",
    year: "2019",
    status: "Rented",
    dailyRate: 400,
    weeklyRate: 2800,
    monthlyRate: 10080,
    hourlyRate: 55,
  },
  {
    id: "JCB004",
    name: "JCB Telehandler",
    type: "Telehandler",
    model: "TH 540-140",
    year: "2022",
    status: "Available",
    dailyRate: 550,
    weeklyRate: 3850,
    monthlyRate: 13860,
    hourlyRate: 75,
  },
  {
    id: "JCB005",
    name: "JCB Mini Excavator",
    type: "Mini Excavator",
    model: "8025 ZTS",
    year: "2021",
    status: "Maintenance",
    dailyRate: 350,
    weeklyRate: 2450,
    monthlyRate: 8820,
    hourlyRate: 50,
  },
]

// Construction sites
export const constructionSites = [
  {
    id: "SITE001",
    name: "Downtown High-rise Project",
    address: "100 Main St, Downtown",
    city: "Metropolis",
    customerId: "CUST001",
    status: "Active",
  },
  {
    id: "SITE002",
    name: "Highway Extension Phase 1",
    address: "Route 66 Extension",
    city: "Highway City",
    customerId: "CUST004",
    status: "Active",
  },
  {
    id: "SITE003",
    name: "Metro Station Renovation",
    address: "Central Station, Metro Ave",
    city: "Metro City",
    customerId: "CUST005",
    status: "Active",
  },
  {
    id: "SITE004",
    name: "Shopping Mall Construction",
    address: "200 Retail Blvd",
    city: "Commerce Town",
    customerId: "CUST002",
    status: "Active",
  },
  {
    id: "SITE005",
    name: "Municipal Bridge Repair",
    address: "River Crossing, Municipal Rd",
    city: "Cityville",
    customerId: "CUST003",
    status: "Completed",
  },
  {
    id: "SITE006",
    name: "Office Park Development",
    address: "500 Business Park Way",
    city: "Tech Town",
    customerId: "CUST002",
    status: "Planning",
  },
  {
    id: "SITE007",
    name: "Residential Complex",
    address: "123 Housing Lane",
    city: "Construction City",
    customerId: "CUST001",
    status: "Active",
  },
]

// Booking data with references to customers, machines, and sites
export const bookings = [
  {
    id: "BK001",
    customerId: "CUST001",
    machineId: "JCB001",
    siteId: "SITE001",
    startDate: "2023-10-15",
    endDate: "2023-10-20",
    status: "Completed",
    totalHours: 40,
    hourlyRate: 60,
    amount: 2400,
  },
  {
    id: "BK002",
    customerId: "CUST002",
    machineId: "JCB002",
    siteId: "SITE004",
    startDate: "2023-10-18",
    endDate: "2023-10-25",
    status: "Active",
    totalHours: 56,
    hourlyRate: 70,
    amount: 3920,
  },
  {
    id: "BK003",
    customerId: "CUST003",
    machineId: "JCB003",
    siteId: "SITE005",
    startDate: "2023-10-20",
    endDate: "2023-10-27",
    status: "Active",
    totalHours: 48,
    hourlyRate: 55,
    amount: 2640,
  },
  {
    id: "BK004",
    customerId: "CUST004",
    machineId: "JCB004",
    siteId: "SITE002",
    startDate: "2023-10-25",
    endDate: "2023-11-05",
    status: "Upcoming",
    totalHours: 0,
    hourlyRate: 75,
    amount: 4400,
  },
  {
    id: "BK005",
    customerId: "CUST005",
    machineId: "JCB005",
    siteId: "SITE003",
    startDate: "2023-10-28",
    endDate: "2023-11-02",
    status: "Upcoming",
    totalHours: 0,
    hourlyRate: 50,
    amount: 1750,
  },
  {
    id: "BK006",
    customerId: "CUST001",
    machineId: "JCB003",
    siteId: "SITE007",
    startDate: "2023-11-01",
    endDate: "2023-11-10",
    status: "Upcoming",
    totalHours: 0,
    hourlyRate: 55,
    amount: 3300,
  },
  {
    id: "BK007",
    customerId: "CUST002",
    machineId: "JCB001",
    siteId: "SITE006",
    startDate: "2023-09-10",
    endDate: "2023-09-20",
    status: "Completed",
    totalHours: 80,
    hourlyRate: 60,
    amount: 4800,
  },
]

// Invoice data with references to customers and bookings
export const invoices = [
  {
    id: "INV-2023-001",
    customerId: "CUST001",
    bookingId: "BK001",
    date: "2023-10-21",
    dueDate: "2023-11-04",
    amount: 2400,
    advancePayment: 1000,
    paidAmount: 2400,
    dueAmount: 0,
    status: "Paid",
  },
  {
    id: "INV-2023-002",
    customerId: "CUST002",
    bookingId: "BK002",
    date: "2023-10-25",
    dueDate: "2023-11-08",
    amount: 3920,
    advancePayment: 1500,
    paidAmount: 1500,
    dueAmount: 2420,
    status: "Pending",
  },
  {
    id: "INV-2023-003",
    customerId: "CUST003",
    bookingId: "BK003",
    date: "2023-10-27",
    dueDate: "2023-11-10",
    amount: 2640,
    advancePayment: 1000,
    paidAmount: 1000,
    dueAmount: 1640,
    status: "Pending",
  },
  {
    id: "INV-2023-004",
    customerId: "CUST004",
    bookingId: "BK004",
    date: "2023-11-05",
    dueDate: "2023-11-19",
    amount: 4400,
    advancePayment: 2000,
    paidAmount: 2000,
    dueAmount: 2400,
    status: "Draft",
  },
  {
    id: "INV-2023-005",
    customerId: "CUST005",
    bookingId: "BK005",
    date: "2023-11-02",
    dueDate: "2023-11-16",
    amount: 1750,
    advancePayment: 500,
    paidAmount: 500,
    dueAmount: 1250,
    status: "Overdue",
  },
  {
    id: "INV-2023-006",
    customerId: "CUST001",
    bookingId: "BK006",
    date: "2023-11-01",
    dueDate: "2023-11-15",
    amount: 3300,
    advancePayment: 1500,
    paidAmount: 1500,
    dueAmount: 1800,
    status: "Pending",
  },
  {
    id: "INV-2023-007",
    customerId: "CUST002",
    bookingId: "BK007",
    date: "2023-09-20",
    dueDate: "2023-10-04",
    amount: 4800,
    advancePayment: 2000,
    paidAmount: 4800,
    dueAmount: 0,
    status: "Paid",
  },
]

// Work logs for tracking hours
export const workLogs = [
  {
    id: "WL001",
    bookingId: "BK001",
    date: "2023-10-15",
    hours: 8,
    description: "Site preparation and excavation",
  },
  {
    id: "WL002",
    bookingId: "BK001",
    date: "2023-10-16",
    hours: 8,
    description: "Foundation work",
  },
  {
    id: "WL003",
    bookingId: "BK001",
    date: "2023-10-17",
    hours: 8,
    description: "Material transport and trenching",
  },
  {
    id: "WL004",
    bookingId: "BK001",
    date: "2023-10-18",
    hours: 8,
    description: "Backfilling and compaction",
  },
  {
    id: "WL005",
    bookingId: "BK001",
    date: "2023-10-19",
    hours: 8,
    description: "Final grading and cleanup",
  },
  {
    id: "WL006",
    bookingId: "BK002",
    date: "2023-10-18",
    hours: 8,
    description: "Initial site clearing",
  },
  {
    id: "WL007",
    bookingId: "BK002",
    date: "2023-10-19",
    hours: 8,
    description: "Excavation for foundation",
  },
  {
    id: "WL008",
    bookingId: "BK002",
    date: "2023-10-20",
    hours: 8,
    description: "Utility trenching",
  },
  {
    id: "WL009",
    bookingId: "BK002",
    date: "2023-10-21",
    hours: 8,
    description: "Material transport",
  },
  {
    id: "WL010",
    bookingId: "BK002",
    date: "2023-10-22",
    hours: 8,
    description: "Foundation preparation",
  },
  {
    id: "WL011",
    bookingId: "BK002",
    date: "2023-10-23",
    hours: 8,
    description: "Backfilling",
  },
  {
    id: "WL012",
    bookingId: "BK002",
    date: "2023-10-24",
    hours: 8,
    description: "Final grading",
  },
  {
    id: "WL013",
    bookingId: "BK003",
    date: "2023-10-20",
    hours: 8,
    description: "Bridge support excavation",
  },
  {
    id: "WL014",
    bookingId: "BK003",
    date: "2023-10-21",
    hours: 8,
    description: "Material removal",
  },
  {
    id: "WL015",
    bookingId: "BK003",
    date: "2023-10-22",
    hours: 8,
    description: "Support structure preparation",
  },
  {
    id: "WL016",
    bookingId: "BK003",
    date: "2023-10-23",
    hours: 8,
    description: "Concrete form preparation",
  },
  {
    id: "WL017",
    bookingId: "BK003",
    date: "2023-10-24",
    hours: 8,
    description: "Material transport",
  },
  {
    id: "WL018",
    bookingId: "BK003",
    date: "2023-10-25",
    hours: 8,
    description: "Final preparation",
  },
  {
    id: "WL019",
    bookingId: "BK007",
    date: "2023-09-10",
    hours: 8,
    description: "Initial site clearing",
  },
  {
    id: "WL020",
    bookingId: "BK007",
    date: "2023-09-11",
    hours: 8,
    description: "Foundation excavation",
  },
  {
    id: "WL021",
    bookingId: "BK007",
    date: "2023-09-12",
    hours: 8,
    description: "Utility trenching",
  },
  {
    id: "WL022",
    bookingId: "BK007",
    date: "2023-09-13",
    hours: 8,
    description: "Material transport",
  },
  {
    id: "WL023",
    bookingId: "BK007",
    date: "2023-09-14",
    hours: 8,
    description: "Foundation preparation",
  },
  {
    id: "WL024",
    bookingId: "BK007",
    date: "2023-09-15",
    hours: 8,
    description: "Concrete form setup",
  },
  {
    id: "WL025",
    bookingId: "BK007",
    date: "2023-09-16",
    hours: 8,
    description: "Backfilling",
  },
  {
    id: "WL026",
    bookingId: "BK007",
    date: "2023-09-17",
    hours: 8,
    description: "Grading and leveling",
  },
  {
    id: "WL027",
    bookingId: "BK007",
    date: "2023-09-18",
    hours: 8,
    description: "Drainage installation",
  },
  {
    id: "WL028",
    bookingId: "BK007",
    date: "2023-09-19",
    hours: 8,
    description: "Final site preparation",
  },
]

// Helper functions to get related data
export function getCustomerById(id: string) {
  return customers.find((customer) => customer.id === id)
}

export function getMachineById(id: string) {
  return machines.find((machine) => machine.id === id)
}

export function getSiteById(id: string) {
  return constructionSites.find((site) => site.id === id)
}

export function getBookingById(id: string) {
  return bookings.find((booking) => booking.id === id)
}

export function getInvoiceById(id: string) {
  return invoices.find((invoice) => invoice.id === id)
}

export function getBookingsByCustomerId(customerId: string) {
  return bookings.filter((booking) => booking.customerId === customerId)
}

export function getInvoicesByCustomerId(customerId: string) {
  return invoices.filter((invoice) => invoice.customerId === customerId)
}

export function getSitesByCustomerId(customerId: string) {
  return constructionSites.filter((site) => site.customerId === customerId)
}

export function getWorkLogsByBookingId(bookingId: string) {
  return workLogs.filter((log) => log.bookingId === bookingId)
}

export function getTotalWorkHoursByCustomerId(customerId: string) {
  const customerBookings = getBookingsByCustomerId(customerId)
  return customerBookings.reduce((total, booking) => total + booking.totalHours, 0)
}

export function getTotalAmountByCustomerId(customerId: string) {
  const customerInvoices = getInvoicesByCustomerId(customerId)
  return customerInvoices.reduce((total, invoice) => total + invoice.amount, 0)
}

export function getTotalPaidByCustomerId(customerId: string) {
  const customerInvoices = getInvoicesByCustomerId(customerId)
  return customerInvoices.reduce((total, invoice) => total + invoice.paidAmount, 0)
}

export function getTotalDueByCustomerId(customerId: string) {
  const customerInvoices = getInvoicesByCustomerId(customerId)
  return customerInvoices.reduce((total, invoice) => total + invoice.dueAmount, 0)
}

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount)
}

