
export const GatewayLayout = ({ children, className = "" }) => {
  return (
    <div className={`relative h-screen flex flex-col items-center justify-center overflow-hidden bg-background ${className}`}>
      
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <img 
          src="/hero-bg.jpg" 
          alt="Background Image" 
          className="w-full h-full object-cover opacity-10" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: `${Math.random()*100}%`,
              top: `${Math.random()*100}%`,
              animation: `slow-drift ${20 + Math.random() * 20}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Page Content */}
      <div className="container relative z-10 px-6 mx-auto text-center">
        {children}
      </div>
    </div>
  );
};