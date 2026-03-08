import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { ArrowRight, ChevronDown, Download, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

const content = {
  software: {
    badge1: "Software Engineer",
    badge2: "Fullstack Developer",
    exp: "2+",
    sub: "Namaste, I'm Ashwin Dhakal — A Fullstack Software Developer specializing in MERN/PERN Stacks. I build responsive websites that users love.",
    skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "AWS",
        "Vercel",
        "Tailwind CSS",
        "Prisma",
        "Jest",
        "Cypress",
        "Figma",
        "Git",
        "GitHub Actions",
    ]
  },
  designer: {
    badge1: "Graphics Designer",
    badge2: "UI/UX Designer",
    exp: "5+",
    sub: "Namaste, I'm Ashwin Dhakal — A Graphic & UI/UX Designer specializing in Figma and Brand Identity. I create stunning visuals that convert.",
    skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Docker",
        "AWS",
        "Vercel",
        "Tailwind CSS",
        "Prisma",
        "Jest",
        "Cypress",
        "Figma",
        "Git",
        "GitHub Actions",
    ]
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
                    key={i} 
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
                <div className="space-y-8 order-2 md:order-1">
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
                        <a href="#contact"><Button size="lg">Contact Me <ArrowRight className="w-5 h-5" /></Button></a>
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
                <div className="relative animate-fade-in animation-delay-300 order-1 md:order-2">

                    {/* Profile Image */}
                    <div className="relative w-60 sm:w-72 md:w-96 lg:w-[420px] mx-auto">
                        <div
                            className="absolute inset-0 
                            rounded-3xl bg-gradient-to-br 
                            from-primary/30 via-transparent 
                            to-primary/10 blur-2xl animate-pulse"
                        />
                        <div className="relative rounded-3xl p-2">
                            <img src="/ashwin-full.png" alt="Ashwin Dhakal" className="w-full object-cover rounded-2xl"/>
                        
                            {/* Floating Badge */}
                            <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 glass rounded-xl px-3 py-2 md:px-4 md:py-3 animate-float">
                                <div className="flex items-center gap-3">
                                    <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
                                    {/* <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" /> */}
                                    <span className="text-xs md:text-sm font-medium">Already Employed</span>
                                </div>
                            </div>

                            {/* Stats Badge */}
                            <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 glass rounded-xl px-3 py-2 md:px-4 md:py-3 animate-float animation-delay-500">
                                <div className="text-lg md:text-2xl font-bold text-primary">{data.exp}</div>
                                    <div className="text-xs text-muted-foreground">
                                        Years Exp.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Skills Section */}
                <div className="mt-20 animate-fade-in animation-delay-600">
                    <p className="text-sm text-muted-foreground mb-6 text-center">Technologies I work with:</p>
                    
                    {/* Add a mask for a smoother look */}
                    <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]">
                        <div className="flex w-max animate-marquee"> {/* Added w-max here */}
                        {[...data.skills, ...data.skills].map((skill, idx) => (
                            <div key={idx} className="flex-shrink-0 px-8 py-4">
                            <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors whitespace-nowrap">
                                {skill}
                            </span>
                            </div>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-fade-in animation-delay-800 hidden md:block">
                <a
                href="#about"
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
                >
                <span className="text-xs uppercase tracking-wider">Scroll</span>
                <ChevronDown className="w-6 h-6 animate-bounce" />
                </a>
            </div>
        </section>
    );
}