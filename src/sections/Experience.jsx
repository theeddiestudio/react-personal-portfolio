const content = {
  software: {
    pdesc: "A timeline of my professional growth, from curious beginner to established developer building products at high scale and rapid rate.",
    exps: [
    {
        period: "2025 — 2026",
        role: "Junior Designer",
        company: "Masta Kala Crafts",
        description:
        "Designed over 50 event oriented designs for websites and products.",
        technologies: ["Illustrator", "Canva"],
        current: false,
    },
    {
        period: "2024 — 2025",
        role: "Freelance Developer",
        company: "Self-Employed",
        description:
        "Delivered custom web solutions for small businesses and startups. Built 15+ websites and applications.",
        technologies: ["React", "Node.js", "WordPress", "Flutter", "MongoDB", "Docker"],
        current: false,
    },
    {
        period: "2021 — 2023",
        role: "IT Head",
        company: "Enunciators' Hub",
        description:
        "Created web designs as well as website pages for the organisation. Hosted over 10 massive events and created over 20 designs.",
        technologies: ["HTML", "JavaScript", "Wordpress", "Figma", "Docker"],
        current: false,
    },
    {
        period: "2021 — 2022",
        role: "Social Media Manager",
        company: "Leo Club of Itahari Professionals [Engineering]",
        description:
        "Contributed to the organisation with designs and websites and learned leadership, collaboration and time managament in the process.",
        technologies: ["HTML", "JavaScript", "Figma", "Linux", "Docker"],
        current: false,
    },
    ],
  },
  designer: {
    pdesc: "A timeline of my professional growth, from beginner designer to experienced creator producing designs at high scale and rapid rate.",
    exps: [
    {
        period: "2025 — 2026",
        role: "Junior Graphic Designer",
        company: "Masta Kala Crafts",
        description:
        "Designed and created over 50 event oriented designs and banners including screen banners as well as printed banners. Designed over 300 products with customisation and personalisation. Created over 15 promotional videos for social media.",
        technologies: ["Illustrator", "Canva", "Photoshop", "Corel Draw", "Blender3D", "Premiere Pro"],
        current: false,
    },
    {
        period: "2022 — 2025",
        role: "Technical Advisor and Designer",
        company: "All Nepal National Free Students' Union",
        description:
        "Crafted over 100 political designs, event certificates, election posters, flyers and stickers. Created over 10 promotional videos and over 75 banners for elections and events including screen banners as well as printed banners.",
        technologies: ["Illustrator", "Canva", "Photoshop", "Figma", "Filmora"],
        current: false,
    },
    {
        period: "2021 — 2022",
        role: "Social Media Incharge",
        company: "Leo Club of Itahari Professionals [Engineering]",
        description:
        "Created the brand identities and 30+ banners and certificates within LY 2021/2022. Took part in 20+ Events hosted by the organisation at Itahari, and learnt leadership, collaboration and time management.",
        technologies: ["Illustrator", "Figma", "Filmora"],
        current: false,
    },
    {
        period: "2021 — 2022",
        role: "Designer Head",
        company: "Enunciators' Hub",
        description:
        "Designed brand identities and flex for the organisation leading to 25% increase in brand recognition and engagement. Hosted the Saigrace World Tour Event, which attracted more than 200 attendees.",
        technologies: ["Illustrator", "Photoshop"],
        current: false,
    },
    {
        period: "2020 — 2021",
        role: "Freelance Graphic Designer",
        company: "Self-Employed",
        description:
        "Learned through various online platforms about designing, typography and color theory and volunteered myself for designs and creations.",
        technologies: ["Illustrator", "Photoshop", "Picsart"],
        current: false,
    },
    ],
  }
};

export const Experience = ({ mode }) => {
    const data = content[mode];
    const experiences = data.exps;

    return (
        <section id="experience" className="py-32 relative overflow-hidden">
            
            {/* Bg glows */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center mx-auto max-w-3xl mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">Career Journey</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Experience that <span className="font-serif italic font-normal text-white"> speaks volumes.</span>
                    </h2>
                    <p className="text-muted-foreground animate-fade-in animation-delay-200">
                        {data.pdesc}
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />
                
                    {/* Experience Items */}
                    <div className="space-y-12">
                        {experiences.map((exp, idx) => (
                            <div key={idx} 
                            className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                            style={{ animationDelay: `${(idx + 1) * 150}ms` }}
                            >

                                {/* Timeline Dot */}
                                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                                    {exp.current && <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />}
                                </div>

                                {/* Content */}
                                <div className={`pl-8 md:pl-0 ${idx % 2 == 0 ? "md:pr-16 md:text-right" : "md:col-start-2 md:pl-16"}`}>
                                    <div className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}>
                                        <span className="text-sm text-primary font-medium">{exp.period}</span>
                                        <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                                        <p className="text-muted-foreground">{exp.company}</p>
                                        <p className="text-sm text-muted-foreground mt-4">{exp.description}</p>
                                        <div className={`flex flex-wrap gap-2 mt-4 ${idx % 2 == 0 ? "md:justify-end" : ""}`}>
                                            {exp.technologies.map((tech, techIdx) => (
                                                <span key={techIdx} className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground">{tech}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}