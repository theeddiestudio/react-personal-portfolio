import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
    { src: "/designs/1.webp", title: "Food Kitchen UI" },
    { src: "/designs/2.webp", title: "ERC Girls Society Logo" },
    { src: "/designs/3.webp", title: "Enunciators Hub Logo" },
    { src: "/designs/4.webp", title: "Leo Dashain Banner" },
    { src: "/designs/5.webp", title: "World Tour with Saigrace Banner" },
    { src: "/designs/6.webp", title: "Enunciators Hub Representative Call" },
    { src: "/designs/7.webp", title: "Champion in You Banner" },
    { src: "/designs/8.webp", title: "Food Kitchen UI" },
    { src: "/designs/9.webp", title: "Leo Dashain Event Banner" },
    { src: "/designs/10.webp", title: "Food Kitchen UI" },
    { src: "/designs/11.webp", title: "Robotics Club Certificate" },
    { src: "/designs/12.webp", title: "Delta 2.0 Facebook Badge" },
    { src: "/designs/13.webp", title: "Leo Club Membership Post" },
    { src: "/designs/14.webp", title: "ANNFSU Tuition Poster" },
    { src: "/designs/15.webp", title: "Vector Art 01" },
    { src: "/designs/16.webp", title: "Vector Art 02" },
    { src: "/designs/17.webp", title: "Saigrace Sponsors Banner" },
    { src: "/designs/18.webp", title: "Food Kitchen Full UI" },
    { src: "/designs/19.webp", title: "Leo Club Facts Post" },
    { src: "/designs/20.webp", title: "Leo Club MRR Anniversary Banner" },  
    { src: "/designs/21.webp", title: "Robotics Club Training Post" },
    { src: "/designs/22.webp", title: "Robotics Club Training Post" },
    { src: "/designs/23.webp", title: "Robotics Club Training Post" },
    { src: "/designs/24.webp", title: "Food Kitchen Full UI" },
    { src: "/designs/25.webp", title: "Isometric 3D Room Model" },
    { src: "/designs/26.webp", title: "TSAN Krishna Janmasthami Post" },
    { src: "/designs/27.webp", title: "TSAN Teej Post" },
    { src: "/designs/28.webp", title: "ANNFSU Dashain Post" },
    { src: "/designs/29.webp", title: "Enunciators Hub Open Platform Banner" },
    { src: "/designs/30.webp", title: "ANNFSU Debate Competition Post" },
    { src: "/designs/31.webp", title: "International Leo Day Design" },
    { src: "/designs/32.webp", title: "BEI Welcome Program Banner" },
    { src: "/designs/33.webp", title: "Robotics Club Training Post" },
    { src: "/designs/34.webp", title: "Food Kitchen Full UI" },
    { src: "/designs/35.webp", title: "Mastakala NY Poster" },
    { src: "/designs/36.webp", title: "Mastakala NY Daraz Poster 01" },
    { src: "/designs/37.webp", title: "Mastakala NY Daraz Poster 02" },
    { src: "/designs/38.webp", title: "Mastakala NY Daraz Poster 03" },
    { src: "/designs/39.webp", title: "Mastakala NY Daraz Poster 04" },
    { src: "/designs/40.webp", title: "MK Ashar 15 Poster" },
    { src: "/designs/41.webp", title: "MK Loyalty Voucher" },
    { src: "/designs/42.webp", title: "MK Studio Banner" },
    { src: "/designs/43.webp", title: "MK Shark Tank Poster" },
    { src: "/designs/44.webp", title: "MK Pitch Poster" },
    { src: "/designs/45.webp", title: "MK Maghe Sankranti Poster" },
    { src: "/designs/46.webp", title: "MK Dashain Poster" },
    { src: "/designs/47.webp", title: "MK Canvas Design" },
    { src: "/designs/48.webp", title: "MK Available Notebook Designs" },
    { src: "/designs/49.webp", title: "MK Guitarist Rakhi Set" },
    { src: "/designs/50.webp", title: "MK Guitar Pick Design" },
    { src: "/designs/51.webp", title: "MK Canvas Design" },
    { src: "/designs/52.webp", title: "MK Available Caricature Designs" },
    { src: "/designs/53.webp", title: "MK Frame Design" },
    { src: "/designs/54.webp", title: "MK Caricature Specifications" },
    { src: "/designs/55.webp", title: "MK Available Rakhi Designs" },
    { src: "/designs/56.webp", title: "MK Frame Specifications" },
    { src: "/designs/57.webp", title: "MK Caricature Specifications" },
    { src: "/designs/58.webp", title: "MK Yak Notebook Design" },
    { src: "/designs/59.webp", title: "MK Caricature Design" },
];

// Fullscreen Viewer Sub-component
const FullscreenViewer = ({ src, alt, onClose }) => {
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const [isLandscape, setIsLandscape] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detect mobile screen and handle Escape key
    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 768);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        const handleKeyDown = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKeyDown);

        // Lock body scroll when open
        document.body.style.overflow = 'hidden';

        return () => {
            window.removeEventListener('resize', checkMobile);
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = 'auto';
        };
    }, [onClose]);

    // Check intrinsic image dimensions
    const handleImageLoad = (e) => {
        setIsLandscape(e.target.naturalWidth > e.target.naturalHeight);
    };

    // Zoom on wheel scroll
    const handleWheel = (e) => {
        const newScale = Math.min(Math.max(1, scale - e.deltaY * 0.01), 5); // Scale between 1x and 5x
        setScale(newScale);
    };

    // Pan / Drag handlers
    const handlePointerDown = (e) => {
        setIsDragging(true);
        setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    };

    const handlePointerMove = (e) => {
        if (!isDragging) return;
        setPosition({
            x: e.clientX - dragStart.x,
            y: e.clientY - dragStart.y
        });
    };

    const handlePointerUp = () => {
        setIsDragging(false);
    };

    const shouldRotate = isMobile && isLandscape;

    return (
        <div
            className="fixed inset-0 z-[100] bg-background/80 backdrop-blur-xl flex items-center justify-center overflow-hidden touch-none animate-fade-in"
            onWheel={handleWheel}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            onContextMenu={(e) => e.preventDefault()} // Prevent right-click menu while panning
        >
            {/* Exit Button */}
            <button
                onClick={onClose}
                className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-red-950/40 text-red-500 border border-red-500/20 hover:bg-red-900/60 hover:text-red-400 transition-all backdrop-blur-md shadow-[0_0_15px_rgba(239,68,68,0.2)]"
            >
                <X className="w-6 h-6" />
            </button>

            {/* Draggable & Zoomable Container */}
            <div
                style={{
                    transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                    cursor: isDragging ? 'grabbing' : 'grab'
                }}
                className="flex items-center justify-center w-full h-full transition-transform duration-75 ease-out"
            >
                <img
                    src={src}
                    alt={alt}
                    onLoad={handleImageLoad}
                    className={`
                        object-contain select-none pointer-events-none drop-shadow-2xl
                        ${shouldRotate 
                            ? "w-[100vh] h-[100vw] max-w-none origin-center rotate-90" 
                            : "w-full h-full max-w-full max-h-full"
                        }
                    `}
                />
            </div>
        </div>
    );
};

export const Gallery = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Preload Images
    useEffect(() => {
        const bufferSize = 7;
        const totalImages = images.length;
        
        const indicesToPreload = [];
        for (let i = 1; i <= bufferSize; i++) {
            // 7 Images to the right (Next)
            indicesToPreload.push((activeIdx + i) % totalImages);
            // 7 Images to the left (Previous)
            indicesToPreload.push((activeIdx - i + totalImages) % totalImages);
        }

        // Hidden Image objects for Cache
        indicesToPreload.forEach((idx) => {
            const img = new Image();
            img.src = images[idx].src;
        });
    }, [activeIdx]);

    const next = () => {
        setActiveIdx((prev) => (prev + 1) % images.length);
    }

    const previous = () => {
        setActiveIdx((prev) => (prev - 1 + images.length) % images.length);
    }

    return (
        <>
            <section id="gallery" className="py-32 relative overflow-hidden">
                
                {/* Bg glows */}
                <div className="absolute top-1/2 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />

                <div className="container mx-auto px-6 relative z-10">

                    {/* Section Header */}
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
                            Designs Preview
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            Gallery of{" "}
                            <span className="font-serif italic font-normal text-white">
                                Featured Works
                            </span>
                        </h2>
                    </div>

                    {/* Designs Carousel */}
                    <div className="max-w-4xl mx-auto">
                        <div className="relative">

                            {/* Main Design Card */}
                            <div className="glass p-4 md:p-6 rounded-3xl glow-border animate-fade-in animation-delay-200">
        
                                <div 
                                    className="relative w-full h-[350px] md:h-[500px] overflow-hidden rounded-2xl group cursor-zoom-in"
                                    onClick={() => setIsFullscreen(true)}
                                >
                                    
                                    {/* The Design Image */}
                                    <img 
                                        key={activeIdx}
                                        src={images[activeIdx].src}
                                        loading="eager"
                                        fetchpriority="high" 
                                        alt={images[activeIdx].title || "Gallery Image"} 
                                        className="w-full h-full object-contain animate-fade-in transition-transform duration-700 group-hover:scale-105"
                                    />

                                    {images[activeIdx].title && (
                                        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background/90 via-background/40 to-transparent pointer-events-none">
                                            <h3 className="text-xl md:text-2xl font-semibold text-white drop-shadow-md">
                                                {images[activeIdx].title}
                                            </h3>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Carousel Navigation */}
                            <div className="flex flex-col items-center gap-6 mt-10 w-full max-w-4xl mx-auto px-4">
                                
                                {/* Dots Container*/}
                                <div className="flex flex-wrap items-center justify-center gap-2 w-full max-w-full">
                                    {images.map((_, idx) => (
                                        <button 
                                            key={idx} 
                                            className={`h-2 rounded-full transition-all duration-300 shadow-sm
                                                ${idx === activeIdx 
                                                    ? "w-8 bg-primary" 
                                                    : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/60"}`} 
                                            onClick={() => setActiveIdx(idx)} 
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                {/* Primary Controls*/}
                                <div className="flex items-center justify-center gap-8">
                                    <button 
                                        className="group p-4 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-90" 
                                        onClick={previous}
                                    >
                                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
                                    </button>
                                    
                                    <span className="text-sm font-mono text-muted-foreground bg-secondary/20 px-3 py-1 rounded-full">
                                        {activeIdx + 1} / {images.length}
                                    </span>

                                    <button 
                                        className="group p-4 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all active:scale-90" 
                                        onClick={next}
                                    >
                                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Render Fullscreen Overlay */}
            {isFullscreen && (
                <FullscreenViewer 
                    src={images[activeIdx].src} 
                    alt={images[activeIdx].title} 
                    onClose={() => setIsFullscreen(false)} 
                />
            )}
        </>
    );
};