import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/Button";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";

const certificates = [
    {
        title: "Course on Avengers",
        type: "Beginner Course",
        author: "Natasha Romanoff",
        avatar: "https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg",
        vendor: "Marvel Studio",
        date: "3rd Jan 2026",
        quote: "Ashwin is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
        dPath: "/Avengers-Course-Certificate.png",
        dName: "Avengers-Course-Certificate.png",
    },
    {
        title: "Course on Justice League",
        type: "Beginner Course",
        author: "Bruce Wayne",
        avatar: "https://img-c.udemycdn.com/user/200_H/31334738_a13c_3.jpg",
        vendor: "DC Films",
        date: "12th Feb 2022",
        quote: "Ashwin is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
        dPath: "/JL-Course-Certificate.png",
        dName: "JL-Course-Certificate.png",
    },
];

export const Certificates = ({ mode }) => {
    const [activeIdx, setActiveIdx] = useState(0);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % certificates.length);
    }

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + certificates.length) % certificates.length);
    }

    return (
        <section id="certificates" className="py-32 relative overflow-hidden">
            
            {/* Bg glows */}
            <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

            <div className="container mx-auto px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                        My Achievements
                    </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                        Learning from{" "}
                        <span className="font-serif italic font-normal text-white">
                            skilled tutors.
                        </span>
                    </h2>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-4xl mx-auto">
                    <div className="relative">

                        {/* Main Testimonial */}
                        <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
                            <div className="max-w-3xl mx-auto mb-6">
                                <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                                    {certificates[activeIdx].title}
                                    <span className="block mt-4 text-xl font-serif font-normal text-white">
                                        {certificates[activeIdx].type}
                                    </span>
                                    <span className="block mt-2 text-lg font-serif font-light text-white">
                                        {certificates[activeIdx].date}
                                    </span>
                                </h2>
                            </div>
                            <blockquote className="text-xl font-medium italic leading-relaxed mb-8 pt-0">
                                {certificates[activeIdx].quote}
                            </blockquote>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="flex items-center gap-4">
                                    <img 
                                    src={certificates[activeIdx].avatar} 
                                    alt={certificates[activeIdx].author} 
                                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                                    />
                                    {/* <div className="flex items-center gap-4"> */}
                                    <div>
                                        <div className="font-semibold">
                                            {certificates[activeIdx].author}
                                        </div>
                                        <div className="text-sm text-muted-foreground">
                                            {certificates[activeIdx].vendor}
                                        </div>
                                    </div>
                                </div>

                                {/* Download Certificate Button */}
                                <a href={certificates[activeIdx].dPath} download={certificates[activeIdx].dName}>
                                    <Button className="w-full" type="submit" size="lg">                 
                                            <span className="md:hidden">Certificate</span>
                                            <span className="hidden md:inline">Download Certificate</span>
                                            <ChevronRight className="w-5 h-5" />
                                    </Button>
                                </a>
                            </div>
                        </div>

                        {/* Certificates Navigation */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                                <ChevronLeft />
                            </button>
                            
                            <div className="flex gap-2">
                                {certificates.map((_, idx) => (
                                    <button key={idx} className={`w-2 h-2 rounded-full transition-all duration-300 ${idx == activeIdx ? "w-8 bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} onClick={() => setActiveIdx(idx)} />
                                ))}
                            </div>

                            <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                                <ChevronRight />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}