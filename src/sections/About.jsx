import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const content = {
  software: {
    p1: `I'm a passionate software engineer with over 5 years of
        experience crafting digital products that make a difference. My
        journey started with a curiosity for how things work on the web,
        and it has evolved into a deep expertise in modern frontend
        technologies.`,
    p2: `I specialize in React, Next.js, and TypeScript, building
        everything from sleek landing pages to complex enterprise
        applications. My approach combines technical excellence with a
        keen eye for design and user experience.`,
    p3: `When I'm not coding, you'll find me exploring new technologies,
        contributing to open-source projects, or sharing knowledge with
        the developer community.`,
    hls: [
    {
        icon: Code2,
        title: "Clean Code",
        description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
    ],
    mission: `"My mission is to create digital experiences that are not just
            functional, but truly delightful products that users love to
            use and developers love to maintain."`
  },
  designer: {
    p1: `I'm a passionate software engineer with over 5 years of
        experience crafting digital products that make a difference. My
        journey started with a curiosity for how things work on the web,
        and it has evolved into a deep expertise in modern frontend
        technologies.`,
    p2: `I specialize in React, Next.js, and TypeScript, building
        everything from sleek landing pages to complex enterprise
        applications. My approach combines technical excellence with a
        keen eye for design and user experience.`,
    p3: `When I'm not coding, you'll find me exploring new technologies,
        contributing to open-source projects, or sharing knowledge with
        the developer community.`,
    hls: [
    {
        icon: Code2,
        title: "Clean Code",
        description:
        "Writing maintainable, scalable code that stands the test of time.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering lightning-fast user experiences.",
    },
    {
        icon: Users,
        title: "Collaboration",
        description: "Working closely with teams to bring ideas to life.",
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description:
        "Staying ahead with the latest technologies and best practices.",
    },
    ],
    mission: `"My mission is to create digital experiences that are not just
            functional, but truly delightful products that users love to
            use and developers love to maintain."`
  }
};

export const About = ({ mode }) => {
    const data = content[mode];
    const highlights = data.hls;

    return (
        <section id="about" className="py-32 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Left Column */}
                    <div className="space-y-8">
                        <div className="animate-fade-in">
                            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">About Me</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
                            Building the future,
                            <span className="font-serif italic font-normal text-white"> one component at a time.</span>
                        </h2>
                        <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
                            <p>
                                {data.p1}
                            </p>
                            <p>
                                {data.p2}
                            </p>
                            <p>
                                {data.p3}
                            </p>
                        </div>

                        <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
                            <p className="text-lg font-medium italic text-foreground">
                                {data.mission}
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Highlights */}
                    <div className="grid sm:grid-cols-2 gap-6">
                        {highlights.map((item,idx) => {
                            // Create a local capitalized variable for the icon
                            const Icon = item.icon;
                            
                            return (
                                <div 
                                    key={idx} 
                                    className="glass p-6 rounded-2xl animate-fade-in"
                                    style={{ animationDelay: `${(idx + 1) * 100}ms` }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                                        <Icon className="w-6 h-6 text-primary" />
                                    </div>
                                
                                    <h3 className="text-xl font-semibold mb-2">
                                        {item.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}