import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';

const contactFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function Contact() {
  const { toast } = useToast();
  
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
        title: "Request Submitted Successfully",
        description: "We'll get back to you within 24 hours!",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Submission Failed",
        description: error.message || "Please try again or contact support.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    submitConsultation.mutate(data);
  };

  return (
    <section id="contact" className="py-24 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* ClickUp-style Contact Header */}
        <h2 className="text-5xl font-black text-gray-900 mb-8">
          Ready to get started?
        </h2>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Join thousands of IT teams who've transformed their security operations with RactorIX.
        </p>

        {/* Contact Form - ClickUp style */}
        <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-medium">Full Name</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                          placeholder="John Doe" 
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
                      <FormLabel className="text-gray-700 font-medium">Work Email</FormLabel>
                      <FormControl>
                        <Input 
                          {...field} 
                          type="email"
                          className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
                          placeholder="john@company.com" 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-medium">Company Name</FormLabel>
                    <FormControl>
                      <Input 
                        {...field} 
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg"
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
                    <FormLabel className="text-gray-700 font-medium">Tell us about your needs</FormLabel>
                    <FormControl>
                      <Textarea 
                        {...field} 
                        className="border-gray-300 focus:border-purple-500 focus:ring-purple-500 rounded-lg min-h-[120px]"
                        placeholder="What security challenges are you facing? How many endpoints do you manage?"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button 
                type="submit" 
                disabled={submitConsultation.isPending}
                className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-bold text-lg transition-colors"
              >
                {submitConsultation.isPending ? 'Sending...' : 'Get started. It\'s FREE'}
              </Button>
              
              <p className="text-sm text-gray-500 mt-4">
                Free Forever. No credit card required.
              </p>
            </form>
          </Form>
        </div>
        
        {/* ClickUp-style Additional Info */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-bold text-gray-900 mb-2">Setup in minutes</h3>
            <p className="text-gray-600">Deploy across your infrastructure in under 30 minutes</p>
          </div>
          <div>
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="font-bold text-gray-900 mb-2">Enterprise secure</h3>
            <p className="text-gray-600">SOC 2 Type II certified with zero-trust architecture</p>
          </div>
          <div>
            <div className="text-3xl mb-4">📞</div>
            <h3 className="font-bold text-gray-900 mb-2">24/7 support</h3>
            <p className="text-gray-600">Expert security engineers available around the clock</p>
          </div>
        </div>
      </div>
    </section>
  );
}