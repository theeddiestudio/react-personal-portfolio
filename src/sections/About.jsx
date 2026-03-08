import { BicepsFlexed, Code2, Lightbulb, Rocket, Users } from "lucide-react";

const content = {
  software: {
    header: "Building the future,",
    p1: `I'm a passionate software engineer with over 3 years of
        experience crafting digital products that make a difference. My
        journey started when I was very little with a curiosity for how things work on the web,
        and it has evolved into deep knowledge of the frontend and backend side of the web.`,
    p2: `I specialize in React, Node.js, PostgresSQL as well as MongoDB, building
        everything from sleek landing pages to complex enterprise
        applications. My approach combines technical excellence with a
        keen eye for design and user experience.`,
    p3: `When I'm not actively participating in software design, you'll find me exploring new technologies and knowledge
        or working on artificial intelligence technologies.`,
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
    header: "Portraying the moment,",
    p1: `I'm a passionate graphic designer with over 5 years of
        experience creating designs and models that pleases the customers. My
        journey started during the Covid-19 pandemic when I started taking online courses on Adobe Illustrator as well as Blender3D.`,
    p2: `I worked for a variety of political as well as non political organisations during my college and specialised in banners, certificates, caricatures, UI/UX designs and brand identities.
        During this period I have designed over 350 designs as well as over 10 web user interfaces.`,
    p3: `During my leisure periods, I am learning about modern designs and user experiences.
        In addition to graphic design, I am also excellent in coding and have 3+ years of coding experience.`,
    hls: [
    {
        icon: BicepsFlexed,
        title: "Hard At Work",
        description:
        "Crafting modern designs and sleek user interfaces with hard-boiled dedication.",
    },
    {
        icon: Rocket,
        title: "Performance",
        description:
        "Optimizing for speed and delivering fast results even under urgent conditions.",
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
        "Staying ahead with the modern designs and best practices.",
    },
    ],
    mission: `"My mission is to create designs and user interfaces that not just pretty to look at, 
            but are creative and meaningful and bring joy to the ones interacting with it."`
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
                            {data.header}
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