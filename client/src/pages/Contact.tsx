import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import type { z } from "zod";

type ContactFormData = z.infer<typeof insertContactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Message Sent!",
        description: data.message,
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <div className="bg-gray-50 text-gray-800 font-poppins">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-clara-cream" data-testid="contact-hero">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="font-playfair text-5xl md:text-6xl font-bold text-gray-800 mb-6" data-testid="contact-hero-title">
              Get In <span className="text-clara-pink italic">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed" data-testid="contact-hero-description">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white" data-testid="contact-section">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div data-testid="contact-info">
              <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-8">
                Visit Our <span className="text-clara-pink italic">Studio</span>
              </h2>
              <div className="space-y-8">
                <div className="flex items-start space-x-4" data-testid="address-info">
                  <div className="w-6 h-6 bg-clara-pink rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Visit Our Showroom</h3>
                    <p className="text-gray-600">123 Fashion Avenue<br />New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="contact-details">
                  <div className="w-6 h-6 bg-clara-pink rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Contact Us</h3>
                    <p className="text-gray-600">hello@clara.com<br />(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="hours-info">
                  <div className="w-6 h-6 bg-clara-pink rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Hours</h3>
                    <p className="text-gray-600">
                      Monday - Friday: 10am - 8pm<br />
                      Saturday: 10am - 6pm<br />
                      Sunday: 12pm - 5pm
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4" data-testid="social-links">
                  <div className="w-6 h-6 bg-clara-pink rounded-full mt-1 flex-shrink-0"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Follow Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="text-clara-pink hover:text-clara-rose transition-colors duration-300" data-testid="instagram-link">
                        Instagram
                      </a>
                      <a href="#" className="text-clara-pink hover:text-clara-rose transition-colors duration-300" data-testid="pinterest-link">
                        Pinterest
                      </a>
                      <a href="#" className="text-clara-pink hover:text-clara-rose transition-colors duration-300" data-testid="facebook-link">
                        Facebook
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100" data-testid="contact-form">
              <h3 className="font-playfair text-2xl font-bold text-gray-800 mb-6">Send us a message</h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="First Name" 
                              {...field} 
                              data-testid="input-first-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input 
                              placeholder="Last Name" 
                              {...field} 
                              data-testid="input-last-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input 
                            type="email" 
                            placeholder="Email Address" 
                            {...field} 
                            data-testid="input-email"
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
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea 
                            rows={5} 
                            placeholder="Your Message" 
                            {...field} 
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    disabled={contactMutation.isPending}
                    className="w-full bg-clara-pink hover:bg-clara-rose text-white py-3 font-semibold transition-all duration-300 transform hover:scale-105"
                    data-testid="submit-button"
                  >
                    {contactMutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-clara-cream" data-testid="faq-section">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-4xl font-bold text-gray-800 mb-4" data-testid="faq-title">
              Frequently Asked <span className="text-clara-pink italic">Questions</span>
            </h2>
            <p className="text-lg text-gray-600" data-testid="faq-description">
              Quick answers to common questions about our products and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-shipping">
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">What are your shipping options?</h3>
              <p className="text-gray-600">We offer free standard shipping on orders over $100. Express shipping is available for $15. International shipping rates vary by destination.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-returns">
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">What is your return policy?</h3>
              <p className="text-gray-600">We accept returns within 30 days of purchase. Items must be unworn with original tags attached. Return shipping is complimentary.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-sizing">
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">How do I find my size?</h3>
              <p className="text-gray-600">We provide detailed size charts for each product. If you're between sizes, we recommend sizing up. Our customer service team is happy to help with sizing questions.</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm" data-testid="faq-care">
              <h3 className="font-playfair text-xl font-semibold text-gray-800 mb-3">How should I care for my Clara pieces?</h3>
              <p className="text-gray-600">Care instructions vary by fabric. Check the care label on each garment. For delicate pieces, we recommend dry cleaning to maintain quality and longevity.</p>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
