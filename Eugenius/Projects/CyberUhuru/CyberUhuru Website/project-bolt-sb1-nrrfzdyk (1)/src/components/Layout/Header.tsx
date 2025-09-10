import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '../ui/button';

export const Header = (): JSX.Element => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  
  const navigationItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Training", path: "/training" },
    { label: "Contact", path: "/contact" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-[90rem] px-6">
      <nav className={`h-[85px] rounded-2xl shadow-lg border backdrop-blur-sm transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 border-gray-200 shadow-xl' 
          : 'bg-white border-gray-100'
      }`}>
        <div className="flex items-center justify-between h-full px-12">
          <Link to="/" className="flex-shrink-0">
            <img
              className="w-[60px] h-[60px] object-contain rounded-lg"
              alt="CyberUhuru Logo"
              src="/images/logo.png"
            />
          </Link>

          <div className="hidden md:flex items-center gap-[48px]">
            {navigationItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className={`relative w-fit [font-family:'Kanit',Helvetica] ${
                  location.pathname === item.path ? "font-bold" : "font-normal"
                } text-[#295aa4] text-lg tracking-[0] leading-[30px] whitespace-nowrap hover:font-bold transition-all`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="relative">
            <Button
              variant="cyber"
              className="w-[130px] md:w-[150px] h-[50px] md:h-[55px] [font-family:'Kanit',Helvetica] text-sm md:text-base"
            >
              Learn
            </Button>
          </div>
        </div>
      </nav>
    </div>
  );
};