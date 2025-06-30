import { useState, useRef, useEffect } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/hooks/use-toast";
import { MessageCircle, Send, Bot, User, Sparkles } from "lucide-react";
import type { ChatMessage } from "@shared/schema";

interface ChatSession {
  sessionId: string;
}

interface ChatResponse {
  success: boolean;
  message: string;
  messageId?: number;
}

interface ChatHistoryResponse {
  success: boolean;
  messages: ChatMessage[];
}

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSessionId, setCurrentSessionId] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isVisible, setIsVisible] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const { toast } = useToast();

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Handle scroll-based visibility with throttling
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (ticking) return;
      
      ticking = true;
      requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollY / documentHeight) * 100;
        
        // Show AI assistant when at top or scrolled back up above 20%
        if (scrollPercentage <= 20) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
        
        ticking = false;
      });
    };

    const handleJumpToTop = () => {
      setIsVisible(true);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('jumpToTop', handleJumpToTop);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('jumpToTop', handleJumpToTop);
    };
  }, []);

  // Create new chat session
  const createSessionMutation = useMutation({
    mutationFn: async (): Promise<ChatSession> => {
      const res = await apiRequest("POST", "/api/chat/session");
      return res.json();
    },
    onSuccess: (data: ChatSession) => {
      setCurrentSessionId(data.sessionId);
      setMessages([]);
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to start chat session. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Send message mutation
  const sendMessageMutation = useMutation({
    mutationFn: async ({ sessionId, message }: { sessionId: string; message: string }): Promise<ChatResponse> => {
      const res = await apiRequest("POST", "/api/chat/message", { sessionId, message });
      return res.json();
    },
    onSuccess: (data: ChatResponse, variables) => {
      // Add user message
      const userMessage: ChatMessage = {
        id: Date.now(),
        sessionId: variables.sessionId,
        role: "user",
        content: variables.message,
        timestamp: new Date(),
      };
      
      // Add AI response
      const aiMessage: ChatMessage = {
        id: data.messageId || Date.now() + 1,
        sessionId: variables.sessionId,
        role: "assistant",
        content: data.message,
        timestamp: new Date(),
      };

      setMessages(prev => [...prev, userMessage, aiMessage]);
      setInputMessage("");
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  // Get chat history
  const { data: chatHistory } = useQuery({
    queryKey: ["/api/chat/history", currentSessionId],
    enabled: !!currentSessionId,
  });

  // Handle chat history data
  useEffect(() => {
    if (chatHistory && (chatHistory as ChatHistoryResponse).success) {
      setMessages((chatHistory as ChatHistoryResponse).messages);
    }
  }, [chatHistory]);

  const handleStartChat = () => {
    setIsOpen(true);
    if (!currentSessionId) {
      createSessionMutation.mutate();
    }
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim() || !currentSessionId || sendMessageMutation.isPending) return;
    
    sendMessageMutation.mutate({
      sessionId: currentSessionId,
      message: inputMessage.trim(),
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (timestamp: Date | string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  if (!isOpen) {
    return (
      <div className={`fixed bottom-6 right-6 z-50 transition-all duration-500 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}>
        <button
          onClick={handleStartChat}
          className="clickup-btn clickup-btn-primary rounded-full shadow-xl"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          AI Assistant
        </button>
      </div>
    );
  }

  return (
    <div className={`fixed bottom-6 right-6 z-50 w-96 h-[600px] flex flex-col transition-all duration-500 ${
      isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
    }`}>
      <Card className="h-full flex flex-col shadow-2xl border-purple-200">
        <CardHeader className="flex-shrink-0 bg-gradient-to-r from-purple-600 to-purple-500 text-white rounded-t-lg">
          <div className="flex items-center justify-between">
            <CardTitle className="flex items-center text-lg">
              <Bot className="w-6 h-6 mr-2" />
              RactorIX AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              ×
            </Button>
          </div>
        </CardHeader>

        <CardContent className="flex-1 flex flex-col p-0">
          <ScrollArea className="flex-1 p-4">
            {messages.length === 0 && currentSessionId && (
              <div className="text-center text-gray-500 py-8">
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-purple-300" />
                <p className="text-lg font-medium mb-2">Welcome to RactorIX AI!</p>
                <p className="text-sm">
                  Ask me about cybersecurity, IT automation, or any technical questions.
                </p>
              </div>
            )}
            
            {messages.map((message) => (
              <div
                key={message.id}
                className={`mb-4 flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 ${
                    message.role === "user"
                      ? "bg-purple-600 text-white"
                      : "bg-gray-100 text-gray-900"
                  }`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    {message.role === "user" ? (
                      <User className="w-4 h-4" />
                    ) : (
                      <Bot className="w-4 h-4" />
                    )}
                    <span className="text-xs opacity-70">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                </div>
              </div>
            ))}
            
            {sendMessageMutation.isPending && (
              <div className="mb-4 flex justify-start">
                <div className="bg-gray-100 text-gray-900 rounded-lg px-3 py-2">
                  <div className="flex items-center gap-2">
                    <Bot className="w-4 h-4" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </ScrollArea>

          <div className="border-t p-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me anything about cybersecurity..."
                disabled={!currentSessionId || sendMessageMutation.isPending}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || !currentSessionId || sendMessageMutation.isPending}
                size="sm"
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}