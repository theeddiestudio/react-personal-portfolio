import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from '@/layout/Navbar';
import { Footer } from '@/layout/Footer';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Experience } from '@/sections/Experience';
import { Projects } from '@/sections/Projects';
import { Gallery } from '@/sections/Gallery';
import { Testimonials } from '@/sections/Testimonials';
import { Contact } from '@/sections/Contact';
import { ScrollToBottom } from '@/components/ScrollToBottom';
import Landing from '@/pages/Landing';
import Missing from '@/pages/Missing';
import { Certificates } from '@/sections/Certificates';

const PortfolioLayout = ({ mode }) => {
  const isDesigner = mode === 'designer';

  return (
    <div className='min-h-screen overflow-x-hidden'>
      <Navbar mode={mode} />
      <main>
        <Hero mode={mode} />
        <About mode={mode} />

        {isDesigner ? (
          <>
            {/* Designer: Gallery then Experience */}
            <Gallery mode={mode}/>
            <Experience mode={mode} />
            <Testimonials mode={mode} />
          </>
        ) : (
          <>
            {/* Software: Experience first, then Projects */}
            <Experience mode={mode} />
            <Projects mode={mode}/>
            <Certificates mode={mode} />
          </>
        )}
        <Contact mode={mode} />
        <ScrollToBottom />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<><Landing /><Footer /></>} />
        <Route path="/software" element={<PortfolioLayout mode="software" />} />
        <Route path="/designer" element={<PortfolioLayout mode="designer" />} />
        <Route path="*" element={<><Missing /><Footer /></>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;