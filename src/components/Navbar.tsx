import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export const Navbar = () => {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const isCreatorsPage = location.pathname.includes('/creators');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHowItWorksClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const isHomePage = location.pathname === `/${language}` || location.pathname === '/';
    
    if (isHomePage) {
      // Already on home page, just scroll
      const element = document.getElementById('how-it-works');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Navigate to home page first, then scroll
      navigate(`/${language}`);
      // Wait for navigation to complete, then scroll
      setTimeout(() => {
        const element = document.getElementById('how-it-works');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { to: `/${language}`, label: t('nav.home'), isExternal: false, isSpecial: false },
    { to: '#how-it-works', label: t('nav.howItWorks'), isExternal: true, isSpecial: true },
    { to: `/${language}/creators`, label: t('nav.creators'), isExternal: false, isSpecial: false },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'shadow-2xl backdrop-blur-md border-b border-white/10' : 'shadow-md'
    }`} style={{ backgroundColor: '#6156f6' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link 
              to={`/${language}`}
              className="flex items-center transform transition-transform duration-300 hover:scale-105"
            >
              <img 
                src="/images/Push-Brand-Logo.png" 
                alt="PushBrands" 
                className="h-8 sm:h-16 w-auto drop-shadow-2xl brightness-110" 
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                link.isSpecial ? (
                  <a 
                    key={link.to}
                    href={link.to}
                    onClick={handleHowItWorksClick}
                    className="relative text-sm font-semibold text-white hover:text-secondary transition-all duration-300 group cursor-pointer"
                  >
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300 group-hover:w-full rounded-full"></span>
                  </a>
                ) : (
                  <Link 
                    key={link.to}
                    to={link.to} 
                    className={`relative text-sm font-semibold transition-all duration-300 group ${
                      location.pathname === link.to 
                        ? 'text-secondary' 
                        : 'text-white hover:text-secondary'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-secondary to-accent transition-all duration-300 rounded-full ${
                      location.pathname === link.to ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}></span>
                  </Link>
                )
              ))}
            </div>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-white hover:text-secondary hover:bg-white/10 transition-all duration-300 rounded-lg"
            >
              <Globe className="h-4 w-4 transition-transform duration-500 hover:rotate-180" />
              <span className="text-sm font-semibold hidden sm:inline">
                {language === 'en' ? 'العربية' : 'English'}
              </span>
            </Button>
            
            {/* Action Buttons - Desktop */}
            <div className="hidden sm:flex items-center gap-2">
              {isCreatorsPage ? (
                <>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 font-semibold backdrop-blur-sm"
                    onClick={() => window.location.href = 'https://app.pushbrands.app/register/creator'}
                  >
                    {t('nav.registerCreator')}
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/30 hover:shadow-lg transition-all duration-300 font-semibold backdrop-blur-sm"
                    onClick={() => window.location.href = 'https://app.pushbrands.app/login/creator'}
                  >
                    {t('nav.login')}
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-secondary to-accent text-dark hover:shadow-xl hover:shadow-secondary/40 hover:scale-105 transition-all duration-300 font-bold"
                    onClick={() => window.location.href = 'https://app.pushbrands.app/register/creator'}
                  >
                    {t('nav.startNow')}
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-secondary hover:shadow-lg hover:shadow-secondary/20 transition-all duration-300 font-semibold backdrop-blur-sm"
                    onClick={() => window.location.href = 'https://app.pushbrands.app/login/brand'}
                  >
                    {t('nav.login')}
                  </Button>
                  <Button 
                    size="sm" 
                    className="bg-gradient-to-r from-secondary to-accent text-dark hover:shadow-xl hover:shadow-secondary/40 hover:scale-105 transition-all duration-300 font-bold"
                    onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
                  >
                    {t('nav.register')}
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white hover:text-secondary hover:bg-white/10 transition-all duration-300"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 border-t border-white/10">
            {navLinks.map((link) => (
              link.isSpecial ? (
                <a
                  key={link.to}
                  href={link.to}
                  onClick={handleHowItWorksClick}
                  className="block text-sm font-semibold text-white hover:text-secondary hover:bg-white/10 px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-1 cursor-pointer"
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`block text-sm font-semibold px-4 py-3 rounded-lg transition-all duration-300 hover:translate-x-1 ${
                    location.pathname === link.to
                      ? 'text-secondary bg-white/10 border-l-2 border-secondary'
                      : 'text-white hover:text-secondary hover:bg-white/10'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              )
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="pt-4 space-y-2 px-4 border-t border-white/10 mt-4">
              {isCreatorsPage ? (
                <>
                  <Button 
                    size="sm" 
                    className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-secondary font-semibold transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = 'https://app.pushbrands.app/register/creator';
                    }}
                  >
                    {t('nav.registerCreator')}
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20 font-semibold transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = 'https://app.pushbrands.app/login/creator';
                    }}
                  >
                    {t('nav.login')}
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-secondary to-accent text-dark hover:shadow-lg hover:shadow-secondary/40 font-bold transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = 'https://app.pushbrands.app/register/creator';
                    }}
                  >
                    {t('nav.startNow')}
                  </Button>
                </>
              ) : (
                <>
                  <Button 
                    size="sm" 
                    className="w-full bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-secondary font-semibold transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = 'https://app.pushbrands.app/login/brand';
                    }}
                  >
                    {t('nav.login')}
                  </Button>
                  <Button 
                    size="sm" 
                    className="w-full bg-gradient-to-r from-secondary to-accent text-dark hover:shadow-lg hover:shadow-secondary/40 font-bold transition-all duration-300"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      window.location.href = 'https://app.pushbrands.app/register/brand';
                    }}
                  >
                    {t('nav.register')}
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
