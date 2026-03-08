import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useState, useEffect } from "react";

const images = [
    { src: "/designs/1.png", title: "Brand Identity Mockup" },
    { src: "/designs/2.png", title: "Mobile App UI" },
    { src: "/designs/3.png", title: "Web Design Concept" },
    { src: "/designs/4.png", title: "Web Design Concept" },
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

export const Gallery = ({ mode }) => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [isFullscreen, setIsFullscreen] = useState(false);

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
                            Gallery of Designs
                        </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
                            Designs{" "}
                            <span className="font-serif italic font-normal text-white">
                                Preview
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
                                        alt={images[activeIdx].title || "Gallery Image"} 
                                        className="w-full h-full object-cover animate-fade-in transition-transform duration-700 group-hover:scale-105"
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
                            <div className="flex items-center justify-center gap-4 mt-8">
                                <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={previous}>
                                    <ChevronLeft className="w-6 h-6" />
                                </button>
                                
                                <div className="flex gap-2">
                                    {images.map((_, idx) => (
                                        <button 
                                            key={idx} 
                                            className={`h-2 rounded-full transition-all duration-300 ${idx === activeIdx ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"}`} 
                                            onClick={() => setActiveIdx(idx)} 
                                            aria-label={`Go to slide ${idx + 1}`}
                                        />
                                    ))}
                                </div>

                                <button className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all" onClick={next}>
                                    <ChevronRight className="w-6 h-6" />
                                </button>
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