import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus } from "lucide-react" // Import Plus icon

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Settings</h1>
      </div>

      <Tabs defaultValue="general">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="company">Company</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="users">Users</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Manage your application preferences and settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="timezone">Timezone</Label>
                <Select defaultValue="utc">
                  <SelectTrigger id="timezone">
                    <SelectValue placeholder="Select timezone" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="utc">UTC (Coordinated Universal Time)</SelectItem>
                    <SelectItem value="est">EST (Eastern Standard Time)</SelectItem>
                    <SelectItem value="cst">CST (Central Standard Time)</SelectItem>
                    <SelectItem value="mst">MST (Mountain Standard Time)</SelectItem>
                    <SelectItem value="pst">PST (Pacific Standard Time)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="date-format">Date Format</Label>
                <Select defaultValue="mdy">
                  <SelectTrigger id="date-format">
                    <SelectValue placeholder="Select date format" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mdy">MM/DD/YYYY</SelectItem>
                    <SelectItem value="dmy">DD/MM/YYYY</SelectItem>
                    <SelectItem value="ymd">YYYY/MM/DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="currency">Currency</Label>
                <Select defaultValue="usd">
                  <SelectTrigger id="currency">
                    <SelectValue placeholder="Select currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="usd">USD ($)</SelectItem>
                    <SelectItem value="eur">EUR (€)</SelectItem>
                    <SelectItem value="gbp">GBP (£)</SelectItem>
                    <SelectItem value="cad">CAD (C$)</SelectItem>
                    <SelectItem value="aud">AUD (A$)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="dark-mode">Dark Mode</Label>
                  <p className="text-sm text-muted-foreground">Enable dark mode for the application.</p>
                </div>
                <Switch id="dark-mode" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Changes</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="company" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Company Information</CardTitle>
              <CardDescription>Update your company details and business information.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company-name">Company Name</Label>
                  <Input id="company-name" placeholder="JCB Rental Solutions" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tax-id">Tax ID / VAT Number</Label>
                  <Input id="tax-id" placeholder="XX-XXXXXXX" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="address">Address</Label>
                <Textarea id="address" placeholder="123 Business Street, City, State, ZIP" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="+1 (555) 123-4567" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="contact@jcbrentals.com" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Website</Label>
                <Input id="website" placeholder="https://www.jcbrentals.com" />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Company Information</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="billing" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Billing Settings</CardTitle>
              <CardDescription>Configure your billing preferences and payment methods.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="payment-terms">Default Payment Terms</Label>
                <Select defaultValue="net15">
                  <SelectTrigger id="payment-terms">
                    <SelectValue placeholder="Select payment terms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="immediate">Due Immediately</SelectItem>
                    <SelectItem value="net7">Net 7 Days</SelectItem>
                    <SelectItem value="net15">Net 15 Days</SelectItem>
                    <SelectItem value="net30">Net 30 Days</SelectItem>
                    <SelectItem value="net60">Net 60 Days</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="invoice-prefix">Invoice Number Prefix</Label>
                <Input id="invoice-prefix" placeholder="INV-" />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="auto-invoice">Automatic Invoicing</Label>
                  <p className="text-sm text-muted-foreground">
                    Automatically generate invoices when bookings are completed.
                  </p>
                </div>
                <Switch id="auto-invoice" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="send-reminders">Payment Reminders</Label>
                  <p className="text-sm text-muted-foreground">
                    Send automatic payment reminders for overdue invoices.
                  </p>
                </div>
                <Switch id="send-reminders" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Billing Settings</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Configure how and when you receive notifications.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-bookings">New Booking Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email notifications for new bookings.</p>
                </div>
                <Switch id="email-bookings" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-payments">Payment Notifications</Label>
                  <p className="text-sm text-muted-foreground">Receive email notifications for payments received.</p>
                </div>
                <Switch id="email-payments" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-returns">Machine Return Notifications</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications when machines are returned.
                  </p>
                </div>
                <Switch id="email-returns" defaultChecked />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label htmlFor="email-maintenance">Maintenance Alerts</Label>
                  <p className="text-sm text-muted-foreground">
                    Receive email notifications for scheduled maintenance.
                  </p>
                </div>
                <Switch id="email-maintenance" defaultChecked />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Save Notification Preferences</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="users" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage user accounts and permissions.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-end">
                <Button>
                  <Plus className="mr-2 h-4 w-4" />
                  Add User
                </Button>
              </div>

              <div className="rounded-md border">{/* Table component would go here */}</div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

