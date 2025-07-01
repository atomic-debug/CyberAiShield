import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import { 
  Shield, 
  Settings, 
  Activity, 
  Users, 
  BarChart3, 
  LogOut,
  User,
  Lock
} from "lucide-react";

export default function Dashboard() {
  const { user, logout, isAuthenticated } = useAuth();
  const [, navigate] = useLocation();

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate("/login");
    return null;
  }

  const handleLogout = () => {
    logout(undefined, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-purple-600 mr-3" />
              <h1 className="text-xl font-bold text-gray-900">ReactorIX Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center text-sm text-gray-700">
                <User className="h-4 w-4 mr-2" />
                Welcome, {user?.username}
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          {/* Welcome Section */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome to your Command Center
            </h2>
            <p className="text-gray-600">
              Manage your cybersecurity infrastructure with atomic precision
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">System Status</CardTitle>
                <Activity className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">Operational</div>
                <p className="text-xs text-gray-600">99.9% Uptime</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Security Level</CardTitle>
                <Lock className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">Fortress</div>
                <p className="text-xs text-gray-600">All systems secured</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Monitoring</CardTitle>
                <BarChart3 className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">24/7</div>
                <p className="text-xs text-gray-600">Real-time analysis</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Automation</CardTitle>
                <Settings className="h-4 w-4 text-orange-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-orange-600">Atomic</div>
                <p className="text-xs text-gray-600">Precision controls</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Features */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="h-5 w-5 mr-2 text-purple-600" />
                  Security Center
                </CardTitle>
                <CardDescription>
                  Monitor and manage your cybersecurity infrastructure
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Threat Detection</span>
                    <span className="text-sm font-medium text-green-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Firewall Status</span>
                    <span className="text-sm font-medium text-green-600">Protected</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Compliance Score</span>
                    <span className="text-sm font-medium text-blue-600">98%</span>
                  </div>
                  <Button className="w-full mt-4">
                    Launch Security Console
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-orange-600" />
                  Automation Hub
                </CardTitle>
                <CardDescription>
                  Configure and monitor automated processes
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Active Workflows</span>
                    <span className="text-sm font-medium text-blue-600">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Tasks Completed</span>
                    <span className="text-sm font-medium text-green-600">2,847</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Efficiency Gain</span>
                    <span className="text-sm font-medium text-purple-600">340%</span>
                  </div>
                  <Button variant="outline" className="w-full mt-4">
                    Configure Automation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}