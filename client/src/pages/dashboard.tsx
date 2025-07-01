import { useAuth } from "@/hooks/useAuth";
import { useLocation } from "wouter";
import { useEffect } from "react";

export default function Dashboard() {
  const { user, isAuthenticated, isLoading } = useAuth();
  const [, navigate] = useLocation();

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        navigate("/login");
        return;
      }

      // Route based on user role
      if (user?.role === "client") {
        navigate("/client-dashboard");
      } else if (user?.role === "soc") {
        navigate("/soc-dashboard");
      }
    }
  }, [user, isAuthenticated, isLoading, navigate]);

  // Show loading state while redirecting
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600 mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  // This component will redirect, so we don't need to render anything else
  return null;
}