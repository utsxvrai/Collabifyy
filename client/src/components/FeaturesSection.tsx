import { Card } from "@/components/ui/card";
import postCampaignImage from "@assets/Post_campaign_insight_1764049705863.jpg";
import productWorkflowImage from "@assets/product_workflow_1764049705865.jpg";
import aiAgentImage from "@assets/Live_ai_agent_1764049741207.jpg";

const features = [
  {
    title: "Post-Campaign Insights & Automation",
    image: postCampaignImage,
    description: "Real-time tracking, comprehensive ROI analysis, and automated performance reports",
  },
  {
    title: "Product Workflow",
    image: productWorkflowImage,
    description: "AI-automated campaigns or manual launch with AI-assisted support for maximum flexibility",
  },
  {
    title: "Live AI Agent & Agentic Ecosystem",
    image: aiAgentImage,
    description: "Talk to AI agents live, full autonomic ecosystem handling strategy, execution, and reporting",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-accent/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-foreground">
            Powerful Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to succeed in creator-brand collaborations
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="hover-elevate transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col"
              data-testid={`card-feature-${index}`}
            >
              <div className="aspect-video overflow-hidden bg-muted">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full h-full object-cover"
                  data-testid={`img-feature-${index}`}
                />
              </div>
              <div className="flex-1 flex flex-col p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm flex-1">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
