import { useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Play, TrendingUp, ShoppingCart, Gamepad2, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Footer } from '@/components/Footer';

export const Home = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const howItWorksSteps = [
    { title: t('home.howItWorks.tab1') },
    { title: t('home.howItWorks.tab2') },
    { title: t('home.howItWorks.tab3') },
    { title: t('home.howItWorks.tab4') },
  ];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#6156F6] pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className={`space-y-6 z-10 relative ${language === 'ar' ? 'lg:order-2' : ''}`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {t('home.hero.title')}
              </h1>
              
              <div className={`${language === 'ar' ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-[#7CFBBA]`}>
                <p className="text-base sm:text-lg md:text-xl text-white">
                  {t('home.hero.description')}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button 
                  size="lg" 
                  className="bg-[#7CFBBA] text-[#1d1d1d] hover:bg-[#6be9a8] rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold w-full sm:w-auto"
                  onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
                >
                  {t('home.hero.cta')}
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg w-full sm:w-auto"
                >
                  <Play className={`${language === 'ar' ? 'ml-2' : 'mr-2'} h-5 w-5`} />
                  {t('home.hero.watchVideo')}
                </Button>
              </div>
            </div>

            <div className={`relative z-10 ${language === 'ar' ? 'lg:order-1' : ''}`}>
              <div className="relative max-w-sm mx-auto">
                {/* Phone mockup */}
                <div className="bg-[#1d1d1d] rounded-[2.5rem] sm:rounded-[3rem] p-2 shadow-2xl">
                  <div className="bg-white rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden aspect-[9/16]">
                    <video 
                      src="/videos/hero-1.mp4" 
                      className="w-full h-full object-cover"
                      muted
                      loop
                      autoPlay
                      playsInline
                    />
                  </div>
                </div>
                
                {/* Stats card */}
                <div className={`absolute -bottom-6 sm:-bottom-8 ${language === 'ar' ? '-left-4 sm:-left-8' : '-right-4 sm:-right-8'} bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl max-w-[200px] sm:max-w-xs`}>
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="bg-[#1d1d1d] rounded-full p-2">
                      <TrendingUp className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <div>
                      <p className="text-lg sm:text-2xl font-bold text-[#1d1d1d]">{t('home.stats.views')}</p>
                      <p className="text-sm sm:text-lg font-semibold text-[#1d1d1d]">{t('home.stats.platforms')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clients Logo Carousel */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl space-y-6 sm:space-y-8">
          {/* First Carousel - Right to Left - 8 Logos */}
          <div className="relative overflow-hidden" dir="ltr">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling logos container */}
            <div className="flex gap-8 sm:gap-12 md:gap-16 items-center animate-scroll">
              {/* First set of 8 logos */}
              <img src="/images/clients/aloyayri Logo.png" alt="Aloyayri" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Baseus Logo.png" alt="Baseus" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Nana Logo.png" alt="Nana" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/perfeto logo.png" alt="Perfeto" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Yaqoot Logo.png" alt="Yaqoot" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Zain Logo.png" alt="Zain" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Zed Meals Logo.png" alt="Zed Meals" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/AlSultan-Logo.png" alt="Al Sultan" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              {/* Duplicate for seamless loop */}
              <img src="/images/clients/aloyayri Logo.png" alt="Aloyayri" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Baseus Logo.png" alt="Baseus" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Nana Logo.png" alt="Nana" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/perfeto logo.png" alt="Perfeto" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Yaqoot Logo.png" alt="Yaqoot" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Zain Logo.png" alt="Zain" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Zed Meals Logo.png" alt="Zed Meals" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/AlSultan-Logo.png" alt="Al Sultan" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
            </div>
          </div>

          {/* Second Carousel - Left to Right (Reverse) - Other 8 Logos */}
          <div className="relative overflow-hidden" dir="ltr">
            {/* Gradient overlays for fade effect */}
            <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent z-10"></div>
            
            {/* Scrolling logos container - Reverse direction */}
            <div className="flex gap-8 sm:gap-12 md:gap-16 items-center animate-scroll-reverse">
              {/* Second set of 8 different logos */}
              <img src="/images/clients/Ansaaj-Logo.png" alt="Ansaaj" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Barllina-Logo.png" alt="Barllina" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Ladoun-Logo.png" alt="Ladoun" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Lomar-Logo.png" alt="Lomar" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Matcha-House-Logo.png" alt="Matcha House" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Mazeed-Logo.png" alt="Mazeed" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Mulfet-Logo.png" alt="Mulfet" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Pharmabrand-Logo.png" alt="Pharmabrand" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              {/* Duplicate for seamless loop */}
              <img src="/images/clients/Ansaaj-Logo.png" alt="Ansaaj" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Barllina-Logo.png" alt="Barllina" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Ladoun-Logo.png" alt="Ladoun" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Lomar-Logo.png" alt="Lomar" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Matcha-House-Logo.png" alt="Matcha House" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Mazeed-Logo.png" alt="Mazeed" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Mulfet-Logo.png" alt="Mulfet" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
              <img src="/images/clients/Pharmabrand-Logo.png" alt="Pharmabrand" className="h-12 sm:h-16 w-auto grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100 flex-shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* 1500+ Creators Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-center">
            <div className={`space-y-6 order-2 lg:order-1 ${language === 'ar' ? 'lg:order-2' : 'lg:order-1'}`}>
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] leading-tight">
                <span className="text-[#6156F6]">{t('home.creators.count')}</span> {t('home.creators.title')}
              </h2>
              <p className="text-base sm:text-lg text-[#434E4E] leading-relaxed">
                {t('home.creators.description')}
              </p>
              <Button 
                size="lg" 
                className="bg-[#6156F6] text-white hover:bg-[#4d44d9] rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
              >
                {t('home.creators.cta')}
              </Button>
            </div>

            <div className={`relative h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2 ${language === 'ar' ? 'lg:order-1' : 'lg:order-2'}`}>
              {/* Three images with social icons - New Layout */}
              <div className="relative h-full w-full max-w-2xl mx-auto">
                {/* Top Image - Center with TikTok */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[55%] z-30">
                  <div className="relative">
                    <img 
                      src="/images/Creators-Sections-01.jpg" 
                      alt="Creator 1" 
                      className="rounded-[1.5rem] sm:rounded-[2rem] w-full h-[180px] sm:h-[220px] md:h-[240px] object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-2 sm:border-4 border-white"
                    />
                    {/* TikTok icon */}
                    <div className={`absolute -top-3 sm:-top-5 ${language === 'ar' ? '-left-3 sm:-left-5' : '-right-3 sm:-right-5'} bg-white rounded-full p-2 sm:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 transition-transform cursor-pointer`}>
                      <img src="/images/tiktok.svg" alt="TikTok" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    </div>
                  </div>
                </div>

                {/* Bottom left image with Snapchat */}
                <div className={`absolute bottom-8 sm:bottom-10 ${language === 'ar' ? 'right-0' : 'left-0'} w-[48%] z-20`}>
                  <div className="relative">
                    <img 
                      src="/images/Creators-Sections-02.jpg" 
                      alt="Creator 2" 
                      className="rounded-[1.5rem] sm:rounded-[2rem] w-full h-[220px] sm:h-[280px] md:h-[300px] object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-2 sm:border-4 border-white"
                    />
                    {/* Snapchat icon */}
                    <div className={`absolute ${language === 'ar' ? '-right-3 sm:-right-5' : '-left-3 sm:-left-5'} top-1/3 bg-white rounded-full p-2 sm:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 transition-transform cursor-pointer`}>
                      <img src="/images/snapchat.svg" alt="Snapchat" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    </div>
                  </div>
                </div>
                
                {/* Bottom right image with Instagram */}
                <div className={`absolute bottom-0 ${language === 'ar' ? 'left-0' : 'right-0'} w-[48%] z-10`}>
                  <div className="relative">
                    <img 
                      src="/images/Creators-Sections-03.jpg" 
                      alt="Creator 3" 
                      className="rounded-[1.5rem] sm:rounded-[2rem] w-full h-[200px] sm:h-[260px] md:h-[280px] object-cover shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)] border-2 sm:border-4 border-white"
                    />
                    {/* Instagram icon */}
                    <div className={`absolute -bottom-3 sm:-bottom-5 ${language === 'ar' ? '-left-3 sm:-left-5' : '-right-3 sm:-right-5'} bg-white rounded-full p-2 sm:p-3 shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:scale-110 transition-transform cursor-pointer`}>
                      <img src="/images/instagram.svg" alt="Instagram" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples Carousel */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6E8F8]">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] mb-8 sm:mb-12 text-center px-4">
            {t('home.examples.title')}
          </h2>

          <div className="relative">
            {/* Navigation Arrows - Hidden on mobile, visible on desktop */}
            <button
              onClick={scrollLeft}
              className={`hidden lg:flex absolute ${language === 'ar' ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2 -translate-x-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center hover:bg-gray-100 transition-all hover:scale-110`}
              aria-label="Scroll left"
            >
              {language === 'ar' ? <ChevronRight className="w-6 h-6 text-[#6156F6]" /> : <ChevronLeft className="w-6 h-6 text-[#6156F6]" />}
            </button>
            
            <button
              onClick={scrollRight}
              className={`hidden lg:flex absolute ${language === 'ar' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 translate-x-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-xl items-center justify-center hover:bg-gray-100 transition-all hover:scale-110`}
              aria-label="Scroll right"
            >
              {language === 'ar' ? <ChevronLeft className="w-6 h-6 text-[#6156F6]" /> : <ChevronRight className="w-6 h-6 text-[#6156F6]" />}
            </button>

            {/* Horizontal Scroll Container with hidden scrollbar */}
            <div ref={scrollContainerRef} className="overflow-x-auto pb-6 sm:pb-8 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex gap-4 sm:gap-6 hide-scrollbar" style={{ width: 'max-content' }}>
                {/* Video 1 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <video
                      src="https://pushbrands-test.s3.eu-north-1.amazonaws.com/videos/hawazin_ugc_btb91r_v1%20(720p).mp4"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Video 2 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <video
                      src="https://pushbrands-test.s3.eu-north-1.amazonaws.com/videos/ugc3_qmrsdf%20(720p).mp4"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Video 3 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <video
                      src="https://pushbrands-test.s3.eu-north-1.amazonaws.com/videos/%D8%A7%D8%A8%D8%B1%D8%A7%D9%87%D9%8A%D9%85_ugc_%D9%85%D9%86%D8%B5%D8%A9_%D8%A7%D8%B1%D9%8A%D8%A8_01_xisq2r_v1%20(720p).mp4"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Video 4 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <video
                      src="https://pushbrands-test.s3.eu-north-1.amazonaws.com/videos/%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B1%D8%AD%D9%85%D9%86_qmnyav_v1%20(720p).mp4"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Video 5 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <video
                      src="https://pushbrands-test.s3.eu-north-1.amazonaws.com/videos/%D8%B9%D9%85%D8%B1_ugc_%D9%85%D8%AA%D8%AC%D8%B1_asrarco_dw7uwp%20(720p).mp4"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Video 6 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <video
                      src="https://pushbrands-test.s3.eu-north-1.amazonaws.com/videos/%D9%81%D9%8A%D8%AF%D9%8A%D9%88_ugc_%D9%84%D8%A7%D9%86%D9%83%D9%88%D9%85_%D8%A7%D9%8A%D8%AF%D9%88%D9%84_h5jiob%20(720p).mp4"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>

                {/* Video 7 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <video
                      src="https://pushbrands-test.s3.eu-north-1.amazonaws.com/videos/%D9%81%D9%8A%D8%AF%D9%8A%D9%88_ugc_%D9%85%D8%AE%D8%AF%D8%A9_%D8%BA%D9%8A%D9%85_pcasfz_v1%20(720p).mp4"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    />
                  </div>
                </div>
                
                {/* CTA Card */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-gradient-to-br from-[#6156F6] to-[#7d74f7] rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 h-[420px] sm:h-[480px] md:h-[540px] flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 relative overflow-hidden">
                    {/* Decorative circles */}
                    <div className="absolute -top-8 -right-8 sm:-top-10 sm:-right-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/10 rounded-full"></div>
                    <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 bg-white/10 rounded-full"></div>
                    
                    <div className="relative z-10">
                      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mb-2 sm:mb-3 md:mb-4">
                        {t('home.examples.card')}
                      </h3>
                      <p className="text-white/90 text-xs sm:text-sm leading-relaxed">
                        {language === 'ar' ? 'ابدأ حملتك اليوم وتواصل مع منشئي المحتوى الأصيلين' : 'Start your campaign today and connect with authentic content creators'}
                      </p>
                    </div>
                    
                    <Button 
                      className="bg-white text-[#6156F6] hover:bg-white/90 hover:scale-105 rounded-full px-5 py-4 sm:px-6 sm:py-5 md:px-8 md:py-6 w-full text-sm sm:text-base md:text-lg font-bold shadow-lg transition-all duration-300 relative z-10"
                      onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
                    >
                      {t('home.examples.cta')}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="text-center mt-4 sm:mt-6">
              <p className="text-xs sm:text-sm text-gray-500 flex items-center justify-center gap-2">
                <svg className={`w-4 h-4 sm:w-5 sm:h-5 animate-pulse ${language === 'ar' ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
                {language === 'ar' ? 'مرر لرؤية المزيد' : 'Scroll to see more'}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who can benefit from UGC */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] mb-10 sm:mb-12 md:mb-16 text-center px-4">
            {t('home.benefit.title')}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border-2 border-[#26C190] hover:shadow-lg transition-shadow">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#F6E8F8] rounded-full flex items-center justify-center">
                <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-[#6156F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1d]">{t('home.benefit.ecommerce.title')}</h3>
              <p className="text-sm sm:text-base text-[#434E4E]">
                {t('home.benefit.ecommerce.description')}
              </p>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border-2 border-[#26C190] hover:shadow-lg transition-shadow">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#F6E8F8] rounded-full flex items-center justify-center">
                <Gamepad2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#6156F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1d]">{t('home.benefit.apps.title')}</h3>
              <p className="text-sm sm:text-base text-[#434E4E]">
                {t('home.benefit.apps.description')}
              </p>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border-2 border-[#26C190] hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#F6E8F8] rounded-full flex items-center justify-center">
                <Megaphone className="w-7 h-7 sm:w-8 sm:h-8 text-[#6156F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1d]">{t('home.benefit.agency.title')}</h3>
              <p className="text-sm sm:text-base text-[#434E4E]">
                {t('home.benefit.agency.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-[#F6E8F8]">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] mb-3 sm:mb-4 px-4">
              {t('home.howItWorks.title')}
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-[#434E4E] max-w-2xl mx-auto px-4">
              {language === 'ar' ? 'احصل على محتوى UGC الخاص بك في 4 خطوات بسيطة. سريع، سهل وفعال.' : 'Get your UGC content in 4 simple steps. Fast, easy, and efficient.'}
            </p>
          </div>

          {/* Steps Navigation - Hidden on mobile */}
          <div className="hidden sm:flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-10 sm:mb-12 md:mb-16 px-3 sm:px-4">
            {howItWorksSteps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`group relative min-w-[70px] sm:min-w-0 px-3 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold transition-all duration-300 text-xs sm:text-sm md:text-base ${
                  activeTab === index
                    ? 'bg-gradient-to-r from-[#6156F6] to-[#7d74f7] text-white shadow-lg sm:shadow-xl scale-105'
                    : 'bg-white text-[#1d1d1d] hover:bg-[#F6E8F8] border-2 border-[#26C190] hover:border-[#6156F6] hover:scale-105 shadow-sm'
                }`}
              >
                <span className="flex items-center justify-center gap-1.5 sm:gap-2">
                  <span className={`flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full text-[10px] sm:text-xs md:text-sm font-bold flex-shrink-0 ${
                    activeTab === index ? 'bg-white/20' : 'bg-[#6156F6] text-white'
                  }`}>
                    {index + 1}
                  </span>
                  <span className="hidden sm:inline whitespace-nowrap">{step.title}</span>
                  <span className="sm:hidden text-xs font-bold">{index + 1}</span>
                </span>
                {activeTab === index && (
                  <span className="absolute -bottom-1.5 sm:-bottom-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white sm:bg-[#6156F6] rounded-full animate-bounce"></span>
                )}
              </button>
            ))}
          </div>

          {/* Choose creators step content */}
          {activeTab === 1 && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-[#26C190]/20 animate-fadeIn">
              <div className="space-y-6 sm:space-y-8">
                {/* Title and Arrows */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#6156F6] to-[#7d74f7] flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-lg flex-shrink-0">
                      2
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] leading-tight">
                      {t('home.howItWorks.tab2.title')}
                    </h3>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 flex-shrink-0 self-end sm:self-auto">
                    <button 
                      onClick={() => setActiveTab(activeTab > 0 ? activeTab - 1 : 3)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                    <button 
                      onClick={() => setActiveTab(activeTab < 3 ? activeTab + 1 : 0)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                  </div>
                </div>

                {/* Image and Content Grid */}
                <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${language === 'ar' ? '' : ''}`}>
                  {/* Image */}
                  <div className={`relative group ${language === 'ar' ? 'lg:order-1' : 'lg:order-1'}`}>
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#6156F6] to-[#26C190] rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                    <img 
                      src="/images/How-it-works02-1.jpg" 
                      alt="Choose creators" 
                      className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 sm:space-y-6 ${language === 'ar' ? 'lg:order-2' : 'lg:order-2'}`}>
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-[#434E4E] leading-relaxed">
                      {t('home.howItWorks.tab2.description')}
                    </p>

                    {/* Pro Tip */}
                    <div className="flex items-start gap-2 sm:gap-3 bg-[#F6E8F8] p-3 sm:p-4 rounded-xl">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#26C190] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1d1d1d]">
                        <strong>{language === 'ar' ? 'نصيحة محترف:' : 'Pro Tip:'}</strong> {language === 'ar' ? 'راجع بروفايل صانع المحتوى بعناية للتأكد من أن أسلوبه يتناسب مع جمالية علامتك التجارية.' : 'Review the content creator\'s profile carefully to ensure their style matches your brand aesthetic.'}
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-[#6156F6] to-[#7d74f7] text-white hover:shadow-xl hover:scale-105 rounded-full px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                        onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
                      >
                        {t('home.howItWorks.signUp')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Send Product step content */}
          {activeTab === 2 && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-[#26C190]/20 animate-fadeIn">
              <div className="space-y-6 sm:space-y-8">
                {/* Title and Arrows */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#6156F6] to-[#7d74f7] flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-lg flex-shrink-0">
                      3
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] leading-tight">
                      {t('home.howItWorks.tab3.title')}
                    </h3>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 flex-shrink-0 self-end sm:self-auto">
                    <button 
                      onClick={() => setActiveTab(activeTab > 0 ? activeTab - 1 : 3)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                    <button 
                      onClick={() => setActiveTab(activeTab < 3 ? activeTab + 1 : 0)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                  </div>
                </div>

                {/* Image and Content Grid */}
                <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${language === 'ar' ? '' : ''}`}>
                  {/* Image */}
                  <div className={`relative group ${language === 'ar' ? 'lg:order-1' : 'lg:order-1'}`}>
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#6156F6] to-[#26C190] rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                    <img 
                      src="/images/How-it-works03-1.jpg" 
                      alt="Send Product" 
                      className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 sm:space-y-6 ${language === 'ar' ? 'lg:order-2' : 'lg:order-2'}`}>
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-[#434E4E] leading-relaxed">
                      {t('home.howItWorks.tab3.description')}
                    </p>

                    {/* Pro Tip */}
                    <div className="flex items-start gap-2 sm:gap-3 bg-[#F6E8F8] p-3 sm:p-4 rounded-xl">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#26C190] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1d1d1d]">
                        <strong>{language === 'ar' ? 'نصيحة محترف:' : 'Pro Tip:'}</strong> {language === 'ar' ? 'قم بتضمين إرشادات المنتج ورسائل العلامة التجارية لمساعدة صناع المحتوى على فهم رؤيتك.' : 'Include product guidelines and brand messaging to help content creators understand your vision.'}
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-[#6156F6] to-[#7d74f7] text-white hover:shadow-xl hover:scale-105 rounded-full px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                        onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
                      >
                        {t('home.howItWorks.signUp')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Pick content step content */}
          {activeTab === 3 && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-[#26C190]/20 animate-fadeIn">
              <div className="space-y-6 sm:space-y-8">
                {/* Title and Arrows */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#6156F6] to-[#7d74f7] flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-lg flex-shrink-0">
                      4
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] leading-tight">
                      {t('home.howItWorks.tab4.title')}
                    </h3>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 flex-shrink-0 self-end sm:self-auto">
                    <button 
                      onClick={() => setActiveTab(activeTab > 0 ? activeTab - 1 : 3)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                    <button 
                      onClick={() => setActiveTab(activeTab < 3 ? activeTab + 1 : 0)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                  </div>
                </div>

                {/* Image and Content Grid */}
                <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${language === 'ar' ? '' : ''}`}>
                  {/* Image */}
                  <div className={`relative group ${language === 'ar' ? 'lg:order-1' : 'lg:order-1'}`}>
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#6156F6] to-[#26C190] rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                    <img 
                      src="/images/How-it-works04-1.jpg" 
                      alt="Pick content" 
                      className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 sm:space-y-6 ${language === 'ar' ? 'lg:order-2' : 'lg:order-2'}`}>
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-[#434E4E] leading-relaxed">
                      {t('home.howItWorks.tab4.description')}
                    </p>

                    {/* Pro Tip */}
                    <div className="flex items-start gap-2 sm:gap-3 bg-[#F6E8F8] p-3 sm:p-4 rounded-xl">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#26C190] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1d1d1d]">
                        <strong>{language === 'ar' ? 'نصيحة محترف:' : 'Pro Tip:'}</strong> {language === 'ar' ? 'قم بتحميل إصدارات عالية الجودة واستخدمها عبر جميع قنواتك التسويقية!' : 'Download high-quality versions and use them across all your marketing channels!'}
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-[#6156F6] to-[#7d74f7] text-white hover:shadow-xl hover:scale-105 rounded-full px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                        onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
                      >
                        {t('home.howItWorks.signUp')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Default Create a job step */}
          {activeTab === 0 && (
            <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-[#26C190]/20 animate-fadeIn">
              <div className="space-y-6 sm:space-y-8">
                {/* Title and Arrows */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4 flex-1">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#6156F6] to-[#7d74f7] flex items-center justify-center text-white font-bold text-base sm:text-lg md:text-xl shadow-lg flex-shrink-0">
                      1
                    </div>
                    <h3 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] leading-tight">
                      {t('home.howItWorks.tab1.title')}
                    </h3>
                  </div>
                  <div className="flex gap-1.5 sm:gap-2 flex-shrink-0 self-end sm:self-auto">
                    <button 
                      onClick={() => setActiveTab(activeTab > 0 ? activeTab - 1 : 3)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                    <button 
                      onClick={() => setActiveTab(activeTab < 3 ? activeTab + 1 : 0)}
                      className="p-1.5 sm:p-2 md:p-3 rounded-full bg-[#F6E8F8] hover:bg-[#6156F6] hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      {language === 'ar' ? <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" /> : <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />}
                    </button>
                  </div>
                </div>

                {/* Image and Content Grid */}
                <div className={`grid lg:grid-cols-2 gap-6 sm:gap-8 items-center ${language === 'ar' ? '' : ''}`}>
                  {/* Image */}
                  <div className={`relative group ${language === 'ar' ? 'lg:order-1' : 'lg:order-1'}`}>
                    <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#6156F6] to-[#26C190] rounded-2xl sm:rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                    <img 
                      src="/images/How-it-works01-1.jpg" 
                      alt="Create a job" 
                      className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Content */}
                  <div className={`space-y-4 sm:space-y-6 ${language === 'ar' ? 'lg:order-2' : 'lg:order-2'}`}>
                    {/* Description */}
                    <p className="text-sm sm:text-base md:text-lg text-[#434E4E] leading-relaxed">
                      {t('home.howItWorks.tab1.description')}
                    </p>

                    {/* Pro Tip */}
                    <div className="flex items-start gap-2 sm:gap-3 bg-[#F6E8F8] p-3 sm:p-4 rounded-xl">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-[#26C190] flex items-center justify-center flex-shrink-0 mt-0.5 sm:mt-1">
                        <svg className="w-3 h-3 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm text-[#1d1d1d]">
                        <strong>{language === 'ar' ? 'نصيحة محترف:' : 'Pro Tip:'}</strong> {language === 'ar' ? 'كلما كان وصف الحملة أكثر تفصيلاً، كانت جودة التطبيقات التي ستحصل عليها أفضل.' : 'The more detailed your campaign description, the better quality applications you\'ll receive.'}
                      </p>
                    </div>

                    {/* Button */}
                    <div>
                      <Button 
                        size="lg" 
                        className="bg-gradient-to-r from-[#6156F6] to-[#7d74f7] text-white hover:shadow-xl hover:scale-105 rounded-full px-6 sm:px-8 py-5 sm:py-6 transition-all duration-300 w-full sm:w-auto text-sm sm:text-base"
                        onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
                      >
                        {t('home.howItWorks.signUp')}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl text-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] px-4">
            {t('home.brands.title')} <span className="text-[#6156F6]">{t('home.brands.count')}</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#434E4E] max-w-2xl mx-auto px-4">
            {t('home.brands.subtitle')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] mb-8 sm:mb-10 md:mb-12 text-center px-4">
            {t('home.faq.title')}
          </h2>

          <div className="space-y-3 sm:space-y-4">
            {/* FAQ Item 1 */}
            <details className="group border-2 border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 bg-white hover:border-[#6156F6] transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none text-left text-sm sm:text-base md:text-lg font-semibold text-[#1d1d1d]">
                {t('home.faq.q1')}
                <span className="transition group-open:rotate-180 flex-shrink-0 ml-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-[#434E4E] leading-relaxed">
                {t('home.faq.a1')}
              </div>
            </details>

            {/* FAQ Item 2 */}
            <details className="group border-2 border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 bg-white hover:border-[#6156F6] transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none text-left text-sm sm:text-base md:text-lg font-semibold text-[#1d1d1d]">
                {t('home.faq.q2')}
                <span className="transition group-open:rotate-180 flex-shrink-0 ml-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-[#434E4E] leading-relaxed">
                {t('home.faq.a2')}
              </div>
            </details>

            {/* FAQ Item 3 */}
            <details className="group border-2 border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 bg-white hover:border-[#6156F6] transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none text-left text-sm sm:text-base md:text-lg font-semibold text-[#1d1d1d]">
                {t('home.faq.q3')}
                <span className="transition group-open:rotate-180 flex-shrink-0 ml-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-[#434E4E] leading-relaxed">
                {t('home.faq.a3')}
              </div>
            </details>

            {/* FAQ Item 4 */}
            <details className="group border-2 border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 bg-white hover:border-[#6156F6] transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none text-left text-sm sm:text-base md:text-lg font-semibold text-[#1d1d1d]">
                {t('home.faq.q4')}
                <span className="transition group-open:rotate-180 flex-shrink-0 ml-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-[#434E4E] leading-relaxed">
                {t('home.faq.a4')}
              </div>
            </details>

            {/* FAQ Item 5 */}
            <details className="group border-2 border-gray-200 rounded-xl sm:rounded-2xl px-4 sm:px-6 py-3 sm:py-4 bg-white hover:border-[#6156F6] transition-colors">
              <summary className="flex justify-between items-center cursor-pointer list-none text-left text-sm sm:text-base md:text-lg font-semibold text-[#1d1d1d]">
                {t('home.faq.q5')}
                <span className="transition group-open:rotate-180 flex-shrink-0 ml-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </summary>
              <div className="mt-3 sm:mt-4 text-sm sm:text-base text-[#434E4E] leading-relaxed">
                {t('home.faq.a5')}
              </div>
            </details>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};
export default Home;