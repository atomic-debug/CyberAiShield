import { useState, useEffect } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { ArrowRight, Calendar, Mail, MapPin, Phone, Sparkles, CheckCircle2, Shield, Target } from 'lucide-react';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('contact');
    if (element) observer.observe(element);
    
    return () => observer.disconnect();
  }, []);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      company: '',
      message: '',
    },
  });

  const submitConsultation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest('POST', '/api/consultation', data);
      return await response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Consultation Request Submitted",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Failed to submit consultation request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitConsultation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 px-4 scroll-offset bg-gradient-to-br from-purple-50/30 via-white to-gray-50 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-30"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <Badge variant="outline" className="bg-gradient-to-r from-purple-50 to-indigo-50 backdrop-blur-sm border-purple-300 text-purple-800 px-6 py-3 font-bold text-sm tracking-wider mb-8">
            <Shield className="w-4 h-4 mr-2" />
            COMMAND CENTER ACCESS
          </Badge>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-8 leading-[0.9] tracking-tight">
            Claim Your <span className="bg-gradient-to-r from-purple-600 via-purple-700 to-indigo-600 bg-clip-text text-transparent">Atomic Advantage</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-700 leading-relaxed max-w-4xl mx-auto font-medium">
            Experience the power of <span className="text-purple-700 font-bold">1000 experts</span> working in perfect synchronization.
            <br />
            <span className="text-xl text-gray-600 font-normal">Deploy. Dominate. Scale infinitely.</span>
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20 hover:bg-white/90 transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '200ms' }}>
            <div className="flex items-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                <Target className="w-8 h-8 text-white drop-shadow-lg" />
              </div>
              <div>
                <h3 className="text-3xl font-black text-gray-900 leading-tight">Deploy Atomic Solutions</h3>
                <p className="text-sm text-purple-700 font-semibold tracking-wide">ENTERPRISE COMMAND CENTER</p>
              </div>
            </div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Name *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg"
                          placeholder="Your full name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Email *</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          type="email"
                          className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg"
                          placeholder="your.email@company.com"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="company"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Company</FormLabel>
                      <FormControl>
                        <Input 
                          {...field}
                          className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg"
                          placeholder="Your company name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium text-gray-700">Message *</FormLabel>
                      <FormControl>
                        <Textarea 
                          {...field}
                          rows={4}
                          className="bg-white border border-gray-300 text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-purple-500 rounded-lg resize-none"
                          placeholder="Tell us about your IT challenges and goals..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button 
                  type="submit" 
                  disabled={submitConsultation.isPending}
                  size="lg"
                  className="reactive-button w-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white py-6 text-xl font-black rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 disabled:opacity-50 group border-0 relative md:w-full thumb-zone-cta"
                  onClick={(e) => {
                    if (!submitConsultation.isPending) {
                      // Create expanding circle effect
                      const button = e.currentTarget;
                      const circle = document.createElement('span');
                      circle.classList.add('absolute', 'inset-0', 'bg-white/20', 'rounded-3xl', 'animate-ping');
                      button.appendChild(circle);
                      setTimeout(() => circle.remove(), 1000);
                    }
                  }}
                >
                  {submitConsultation.isPending ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-6 w-6 border-3 border-white border-t-transparent mr-3"></div>
                      Deploying Access...
                    </div>
                  ) : (
                    <span className="flex items-center justify-center">
                      Claim Command Center Access
                      <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-3 transition-transform duration-300" />
                    </span>
                  )}
                </Button>
              </form>
            </Form>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className={`bg-gradient-to-br from-white via-gray-50/80 to-purple-50/50 backdrop-blur-lg rounded-3xl p-8 shadow-xl border-2 border-gray-200/30 hover:border-purple-300/50 hover:shadow-2xl transition-all duration-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '400ms' }}>
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                  <Shield className="w-8 h-8 text-white drop-shadow-lg" />
                </div>
                <div>
                  <h3 className="text-3xl font-black text-gray-900 leading-tight">Direct Command Line</h3>
                  <p className="text-sm text-purple-700 font-semibold tracking-wide">INSTANT ACCESS PROTOCOLS</p>
                </div>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:bg-purple-50/50 p-3 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Phone className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:bg-purple-50/50 p-3 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <Mail className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">contact@ractorix.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:bg-purple-50/50 p-3 rounded-xl transition-colors">
                  <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center group-hover:bg-purple-200 transition-colors">
                    <MapPin className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Address</div>
                    <div className="text-gray-600">123 Innovation Drive<br />Tech City, CA 94105</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div className={`relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 rounded-3xl p-8 text-center overflow-hidden transform transition-all duration-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '600ms' }}>
              {/* Background Effects */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.3),transparent_70%)]"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl flex items-center justify-center mr-4 shadow-xl">
                    <CheckCircle2 className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-white leading-tight">Ready for Atomic Dominance?</h3>
                    <p className="text-sm text-purple-300 font-semibold tracking-wide">JOIN THE ELITE</p>
                  </div>
                </div>
                
                <p className="text-xl text-gray-200 mb-8 font-medium">
                  Join <span className="text-purple-300 font-bold">elite organizations</span> that command their infrastructure with atomic precision.
                  <br />
                  <span className="text-lg">Scale without limits. Secure without compromise.</span>
                </p>
                
                <Button
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-400 hover:to-indigo-400 text-white font-bold px-8 py-4 text-lg rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 group border-0"
                >
                  Explore Atomic Solutions
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
