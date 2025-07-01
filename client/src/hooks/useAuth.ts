import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import type { LoginUser, RegisterUser } from "@shared/schema";

interface User {
  id: number;
  username: string;
  email?: string;
}

interface AuthResponse {
  success: boolean;
  message: string;
  user?: User;
}

export function useAuth() {
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Get current user query
  const { data: user, isLoading, error } = useQuery<User>({
    queryKey: ["/api/auth/user"],
    retry: false,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchOnMount: false,
    refetchInterval: false,
  });

  // Login mutation
  const loginMutation = useMutation<AuthResponse, Error, LoginUser>({
    mutationFn: async (credentials: LoginUser) => {
      const response = await apiRequest("POST", "/api/auth/login", credentials);
      return await response.json();
    },
    onSuccess: (data) => {
      if (data.success && data.user) {
        queryClient.setQueryData(["/api/auth/user"], data.user);
        toast({
          title: "Login successful",
          description: "Welcome back!",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Login failed",
        description: error.message || "Invalid credentials",
        variant: "destructive",
      });
    },
  });

  // Register mutation
  const registerMutation = useMutation<AuthResponse, Error, RegisterUser>({
    mutationFn: async (userData: RegisterUser) => {
      const response = await apiRequest("POST", "/api/auth/register", userData);
      return await response.json();
    },
    onSuccess: (data) => {
      if (data.success && data.user) {
        queryClient.setQueryData(["/api/auth/user"], data.user);
        toast({
          title: "Registration successful",
          description: "Welcome to ReactorIX!",
        });
      }
    },
    onError: (error) => {
      toast({
        title: "Registration failed",
        description: error.message || "Registration failed",
        variant: "destructive",
      });
    },
  });

  // Logout mutation
  const logoutMutation = useMutation<AuthResponse, Error>({
    mutationFn: async () => {
      const response = await apiRequest("POST", "/api/auth/logout");
      return await response.json();
    },
    onSuccess: () => {
      queryClient.setQueryData(["/api/auth/user"], null);
      queryClient.invalidateQueries({ queryKey: ["/api/auth/user"] });
      toast({
        title: "Logged out",
        description: "You have been successfully logged out",
      });
    },
    onError: (error) => {
      toast({
        title: "Logout failed",
        description: error.message || "Logout failed",
        variant: "destructive",
      });
    },
  });

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    login: loginMutation.mutate,
    register: registerMutation.mutate,
    logout: logoutMutation.mutate,
    isLoginPending: loginMutation.isPending,
    isRegisterPending: registerMutation.isPending,
    isLogoutPending: logoutMutation.isPending,
  };
}