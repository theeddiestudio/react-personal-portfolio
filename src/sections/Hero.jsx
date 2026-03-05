import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const content = {
  software: {
    badge1: "Software Engineer",
    badge2: "Fullstack Developer",
    sub: "Namaste, I'm Ashwin Dhakal — A Fullstack Software Developer specializing in MERN/PERN Stacks. I build responsive websites that users love."
  },
  designer: {
    badge1: "Graphics Designer",
    badge2: "UI/UX Designer",
    sub: "Namaste, I'm Ashwin Dhakal — A Graphic & UI/UX Designer specializing in Figma and Brand Identity. I create stunning visuals that convert."
  }
};

export const Hero = ({ mode }) => {
    const data = content[mode];

    return ( 
    <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Bg image */}
        <div className="absolute inset-o">
            <img src="/hero-bg.jpg" alt="Background Image" className="w-full h-full object-cover opacity-10" />
        <div className="absolute inset-o bg-gradient-to-b from-background/20 via-background/80 to-background" />
        </div>

        {/*Green Dots*/}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(30)].map((_, i) => (
                <div
                    className="absolute w-1.5 h-1.5 rounded-full opacity-60"
                    style={{
                    backgroundColor: "#20B2A6",
                    left: `${Math.random()*100}%`,
                    top: `${Math.random()*100}%`,
                    animation: `slow-drift ${15 + Math.random() *20}s ease-in-out infinite`,
                    animationDelay: `${Math.random() *5}s`
                    }}
                />
            ))}
        </div>
        
        {/* Content of the Section */}
        <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                
                {/* Left Column - Text content */}
                <div className="space-y-8">
                    <div className="animate-fade-in">
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            {data.badge1}
                            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                            {data.badge2}
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
                            Crafting <span className="text-primary glow-text">digital</span>
                            <br />
                            precision with
                            <br />
                            <span className="font-serif italic font-normal text-white">
                            creative edge.
                            </span>
                        </h1>
                        <p className="text-lg text-muted-foreground max-w-lg animate-fade-in animation-delay-200">
                            {data.sub}
                        </p>
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-wrap gap-4 animate-fade-in animation-delay-400">
                        <Button size="lg">Contact Me <ArrowRight className="w-5 h-5" /></Button>
                        <AnimatedBorderButton>
                            <Download className="w-5 h-5" />Download CV
                        </AnimatedBorderButton>
                    </div>

                    { /* Social Media */}
                    <div className="flex items-center gap-4 animate-fade-in animation-delay-500">
                        <span className=" text-md font-bold text-muted-foreground">Visit:</span>
                        {[
                            { icon: Mail, href: "mailto:dkashwin576@gmail.com"},
                            { icon: Linkedin, href: "https://www.linkedin.com/in/ashwindhakal007"},
                            { icon: Github, href: "https://github.com/theeddiestudio"},
                            { icon: MessageCircle, href: "https://wa.me/9844888978"},
                        ].map((social, index) => (
                            <a 
                                key={index} 
                                href={social.href} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                            >
                                <social.icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right Column - Profile Image */}
                <div>
                    {/* Profile Image */}
                    <div>
                        <div>
                            <img src="/ashwin.png" alt="Ashwin Dhakal" className="w-full aspect-[4/5] object-cover rounded-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
    );
}