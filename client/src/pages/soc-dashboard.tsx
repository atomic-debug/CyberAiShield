import { useAuth } from "@/hooks/useAuth";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  ShieldCheck, 
  Users, 
  AlertTriangle, 
  Activity, 
  BarChart3, 
  FileText, 
  Settings,
  Eye,
  Zap,
  Target
} from "lucide-react";

export default function SOCDashboard() {
  const { user, logout } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <ShieldCheck className="h-8 w-8 text-red-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">ReactorIX SOC Console</h1>
              <p className="text-sm text-gray-600">Security Operations Center - {user?.username}</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="bg-red-100 text-red-800">
              <ShieldCheck className="h-3 w-3 mr-1" />
              SOC Employee
            </Badge>
            <Button variant="outline" onClick={() => logout()}>
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Operations Command Center</h2>
          <p className="text-gray-600">Monitor client systems, manage threats, and oversee security operations.</p>
        </div>

        {/* Critical Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="border-red-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Threats</CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-red-600">7</div>
              <p className="text-xs text-gray-600">Across all clients</p>
            </CardContent>
          </Card>

          <Card className="border-blue-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Clients Monitored</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">24</div>
              <p className="text-xs text-gray-600">All systems online</p>
            </CardContent>
          </Card>

          <Card className="border-green-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Incidents Resolved</CardTitle>
              <Target className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">147</div>
              <p className="text-xs text-gray-600">This month</p>
            </CardContent>
          </Card>

          <Card className="border-purple-200">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">System Health</CardTitle>
              <Activity className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">99.8%</div>
              <p className="text-xs text-gray-600">Overall uptime</p>
            </CardContent>
          </Card>
        </div>

        {/* Operations Tabs */}
        <Tabs defaultValue="monitoring" className="space-y-6">
          <TabsList className="grid grid-cols-4 w-full max-w-md">
            <TabsTrigger value="monitoring">Monitor</TabsTrigger>
            <TabsTrigger value="threats">Threats</TabsTrigger>
            <TabsTrigger value="clients">Clients</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="monitoring" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Eye className="h-5 w-5 mr-2" />
                    Real-time Monitoring
                  </CardTitle>
                  <CardDescription>Live system surveillance and alerts</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button className="w-full justify-start" variant="outline">
                    <Activity className="h-4 w-4 mr-2" />
                    Network Traffic Analysis
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Threat Detection Dashboard
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    Performance Metrics
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Zap className="h-4 w-4 mr-2" />
                    Automated Response Center
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Alerts</CardTitle>
                  <CardDescription>Latest security events requiring attention</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-red-50 rounded-lg border border-red-200">
                      <AlertTriangle className="h-5 w-5 text-red-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-red-900">High: Malware detected</p>
                        <p className="text-xs text-red-600">Client: TechCorp - 15 minutes ago</p>
                      </div>
                      <Button size="sm" variant="destructive">Handle</Button>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                      <AlertTriangle className="h-5 w-5 text-yellow-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-yellow-900">Medium: Suspicious login</p>
                        <p className="text-xs text-yellow-600">Client: HealthInc - 1 hour ago</p>
                      </div>
                      <Button size="sm" variant="outline">Review</Button>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <Activity className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-blue-900">Info: System update completed</p>
                        <p className="text-xs text-blue-600">Client: StartupXYZ - 3 hours ago</p>
                      </div>
                      <Button size="sm" variant="secondary">Acknowledge</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="threats" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2" />
                  Threat Management
                </CardTitle>
                <CardDescription>Analyze and respond to security threats</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-24 flex-col" variant="outline">
                  <AlertTriangle className="h-6 w-6 mb-2" />
                  <span>Active Threat Analysis</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <Target className="h-6 w-6 mb-2" />
                  <span>Incident Response</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <Settings className="h-6 w-6 mb-2" />
                  <span>Security Policies</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <FileText className="h-6 w-6 mb-2" />
                  <span>Threat Intelligence</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Client Management
                </CardTitle>
                <CardDescription>Monitor and manage client accounts</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-24 flex-col" variant="outline">
                  <Users className="h-6 w-6 mb-2" />
                  <span>Client Directory</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <Activity className="h-6 w-6 mb-2" />
                  <span>System Status</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <Settings className="h-6 w-6 mb-2" />
                  <span>Account Settings</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  <span>Usage Analytics</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <FileText className="h-5 w-5 mr-2" />
                  Reports & Analytics
                </CardTitle>
                <CardDescription>Generate and manage security reports</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Button className="h-24 flex-col" variant="outline">
                  <FileText className="h-6 w-6 mb-2" />
                  <span>Security Reports</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  <span>Performance Analytics</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <Users className="h-6 w-6 mb-2" />
                  <span>Client Reports</span>
                </Button>
                <Button className="h-24 flex-col" variant="outline">
                  <AlertTriangle className="h-6 w-6 mb-2" />
                  <span>Incident Reports</span>
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}