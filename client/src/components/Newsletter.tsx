import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const newsletterMutation = useMutation({
    mutationFn: async (email: string) => {
      const response = await apiRequest("POST", "/api/newsletter", { email });
      return response.json();
    },
    onSuccess: (data) => {
      toast({
        title: "Success!",
        description: data.message,
      });
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe to newsletter",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }
    newsletterMutation.mutate(email);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-clara-pink to-clara-coral text-white" data-testid="newsletter-section">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6" data-testid="newsletter-title">
          Stay In <span className="italic">Style</span>
        </h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90" data-testid="newsletter-description">
          Subscribe to our newsletter for the latest collections, style tips, and exclusive offers.
        </p>
        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="flex">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-6 py-4 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white/50 rounded-r-none"
              data-testid="newsletter-email-input"
            />
            <Button
              type="submit"
              disabled={newsletterMutation.isPending}
              className="bg-white text-clara-pink px-8 py-4 font-semibold hover:bg-gray-100 transition-colors duration-300 rounded-l-none"
              data-testid="newsletter-submit-button"
            >
              {newsletterMutation.isPending ? "Subscribing..." : "Subscribe"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
