import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, Users, Building2 } from "lucide-react";
import { Link } from "wouter";

const creatorBenefits = [
  "Access to premium brand partnerships",
  "AI-powered brand matching",
  "Automated contract management",
  "Guaranteed payment protection",
  "Performance analytics dashboard",
];

const brandBenefits = [
  "Discover authentic creators",
  "AI-driven audience insights",
  "Campaign ROI tracking",
  "Streamlined collaboration tools",
  "Secure payment processing",
];

export function ForYouSection() {
  return (
    <section id="for-you" className="py-24 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Built For You
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a creator or a brand, we've got you covered
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="flex flex-col" data-testid="card-for-creators">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                For Creators
              </h3>
              <p className="text-muted-foreground">
                Grow your brand and monetize your influence
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {creatorBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/auth?type=creator" className="w-full">
                <a className="w-full">
                  <Button className="w-full" data-testid="button-join-creator-section">
                    Join as Creator
                  </Button>
                </a>
              </Link>
            </CardFooter>
          </Card>

          <Card className="flex flex-col" data-testid="card-for-brands">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-bold text-foreground">
                For Brands
              </h3>
              <p className="text-muted-foreground">
                Find the perfect creators for your campaigns
              </p>
            </CardHeader>
            <CardContent className="flex-1">
              <ul className="space-y-3">
                {brandBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              <Link href="/auth?type=brand" className="w-full">
                <a className="w-full">
                  <Button className="w-full" variant="outline" data-testid="button-join-brand-section">
                    Join as Brand
                  </Button>
                </a>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
