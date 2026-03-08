import { Link } from 'react-router-dom';
import {Button} from '@/components/Button'
import { GatewayLayout } from '@/components/GatewayLayout';
import { ChevronRight } from 'lucide-react';

const MissingPage = () => {
  return (
    <GatewayLayout>
      <div className="min-h-screen flex items-center justify-center">
        <div className="space-y-6 text-center">
          
          {/* 404 text */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in animation-delay-100">
            <span className="text-primary glow-text">4</span>
            <span className="text-primary glow-text">0</span>
            <span className="text-primary glow-text">4</span>
          </h1>

          <div className="space-y-12 animate-fade-in animation-delay-200">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">You've hit a dead end.</h2>
              <p className="text-md md:text-lg text-muted-foreground max-w-md mx-auto">
                This path has no destination. Perhaps a typo in the URL or the void has consumed it.
              </p>
            </div>

            {/* Home */}
            <Link to="/">
                <Button size="lg">
                Return to Gateway
                <ChevronRight className="w-5 h-5" />
                </Button>
            </Link>
          </div>
        </div>
      </div>
    </GatewayLayout>
  );
};

export default MissingPage;