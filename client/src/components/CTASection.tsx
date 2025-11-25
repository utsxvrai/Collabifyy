import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function CTASection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-background pointer-events-none" />
      
      <div className="container mx-auto px-6 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Ready to Transform Your Collaborations?
          </h2>
          <p className="text-xl text-muted-foreground">
            Join the waitlist today and be among the first to experience the future of creator-brand partnerships
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/auth?type=creator">
              <a>
                <Button size="lg" className="gap-2" data-testid="button-cta-creator">
                  Join as Creator
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
            <Link href="/auth?type=brand">
              <a>
                <Button size="lg" variant="outline" className="gap-2" data-testid="button-cta-brand">
                  Join as Brand
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
