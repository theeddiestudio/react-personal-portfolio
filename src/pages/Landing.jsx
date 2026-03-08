import { Link } from "react-router-dom";
import { GatewayLayout } from "@/components/GatewayLayout";
import { Button } from "@/components/Button";
import { ArrowRight } from "lucide-react";

const LandingPage = () => {
  return (
    <GatewayLayout>
      <section className="min-h-screen flex items-center py-32">

        <div className="container mx-auto px-6">

          {/* Header */}
          <div className="text-center max-w-xl mx-auto mb-24">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Choose your{" "}
              <span className="text-primary glow-text">Pathway</span>
            </h1>

            <p className="text-muted-foreground mt-6 text-lg">
              Explore the work based on the discipline you’re interested in.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 gap-8 md:gap-14 max-w-5xl mx-auto">

            {/* Software */}
            <div className="glass rounded-[28px] p-8 md:p-12 border border-white/10 hover:border-primary/40 transition-all duration-300">

              <div className="space-y-6">

                <div className="space-y-2">
                  <span className="hidden md:inline text-xs tracking-widest text-primary uppercase">
                    Software Development
                  </span>

                  <h2 className="text-2xl font-semibold">
                    Software Engineer
                  </h2>
                </div>

                <p className="hidden md:block text-muted-foreground leading-relaxed">
                  Full-stack web applications built with modern
                  JavaScript stacks and scalable backend systems.
                </p>

                <Link to="/software">
                  <Button size="lg">
                    <span className="md:hidden">Portfolio</span>
                    <span className="hidden md:inline">View Portfolio</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>

              </div>
            </div>

            {/* Designer */}
            <div className="glass rounded-[28px] p-8 md:p-12 border border-white/10 hover:border-primary/40 transition-all duration-300">

              <div className="space-y-6">

                <div className="space-y-2">
                  <span className="hidden md:inline text-xs tracking-widest text-primary uppercase">
                    Creative Design
                  </span>

                  <h2 className="text-2xl font-semibold">
                    Graphic Designer
                  </h2>
                </div>

                <p className="hidden md:block text-muted-foreground leading-relaxed">
                  UI/UX design and brand identity focused on
                  modern digital product experiences.
                </p>

                <Link to="/designer">
                  <Button size="lg">
                    <span className="md:hidden">Portfolio</span>
                    <span className="hidden md:inline">View Portfolio</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GatewayLayout>
  );
};

export default LandingPage;