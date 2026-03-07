import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from '@/layout/Navbar'
import { Footer } from '@/layout/Footer'
import { Hero } from '@/sections/Hero'
import { About } from '@/sections/About'
import { Experience } from '@/sections/Experience'
import { Projects } from '@/sections/Projects'
import { Testimonials } from '@/sections/Testimonials'
import { Contact } from '@/sections/Contact'

function PortfolioContent() {
  const location = useLocation();
  const mode = location.pathname.includes('designer') ? 'designer' : 'software';

  return (
    <div className='min-h-screen overflow-x-hidden'>
      {/* Pass mode to every component so they know what to display */}
      <Navbar mode={mode} />
      <main>
        <Hero mode={mode} />
        <About mode={mode} />
        <Experience mode={mode} />
        <Projects mode={mode} />
        <Testimonials mode={mode} />
        <Contact mode={mode} />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* This catches ashwind.com.np/designer */}
        <Route path="/designer" element={<PortfolioContent />} />
        {/* This catches ashwind.com.np/ and everything else */}
        <Route path="*" element={<PortfolioContent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App