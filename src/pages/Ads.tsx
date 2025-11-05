import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Gamepad2, Megaphone, ChevronLeft, ChevronRight } from 'lucide-react';
import { Footer } from '@/components/Footer';

export const Ads = () => {
  const { t, language } = useLanguage();
  const [currentTestimonialPage, setCurrentTestimonialPage] = useState(0);

  const testimonials = [
    {
      quote: t('ads.testimonials.test1.quote'),
      name: t('ads.testimonials.test1.name'),
      company: t('ads.testimonials.test1.company'),
      logo: '/images/clients/Matcha-House-Logo.png',
    },
    {
      quote: t('ads.testimonials.test2.quote'),
      name: t('ads.testimonials.test2.name'),
      company: t('ads.testimonials.test2.company'),
      logo: '/images/clients/Lomar-Logo.png',
    },
    {
      quote: t('ads.testimonials.test3.quote'),
      name: t('ads.testimonials.test3.name'),
      company: t('ads.testimonials.test3.company'),
      logo: '/images/clients/AlSultan-Logo.png',
    },
    {
      quote: language === 'ar' ? 'بفضل بوش براندز، تمكنا من الوصول إلى صناع محتوى مبدعين ساعدونا في تحسين حملاتنا التسويقية بشكل ملحوظ.' : 'Thanks to Pushbrands, we were able to reach creative content creators who helped us improve our marketing campaigns significantly.',
      name: language === 'ar' ? 'متجر بيرفيكتو' : 'Perfecto',
      company: language === 'ar' ? 'بيرفيكتو' : 'Perfecto',
      logo: '/images/clients/perfeto logo.png',
    },
    {
      quote: language === 'ar' ? 'المنصة سهلة الاستخدام وتوفر لنا الوقت والجهد في البحث عن صناع المحتوى المناسبين.' : 'The platform is easy to use and saves us time and effort in finding the right content creators.',
      name: language === 'ar' ? ' زين' : 'Zain',
      company: language === 'ar' ? 'زين' : 'Zain',
      logo: '/images/clients/Zain Logo.png',
    },
    {
      quote: language === 'ar' ? 'النتائج كانت رائعة! حملاتنا مع صناع المحتوى حققت تفاعلاً كبيراً وزادت من مبيعاتنا بشكل ملموس.' : 'The results were amazing! Our campaigns with content creators achieved great engagement and significantly increased our sales.',
      name: language === 'ar' ? ' نانا' : 'Nana ',
      company: language === 'ar' ? 'نانا' : 'Nana',
      logo: '/images/clients/Nana Logo.png',
    },
  ];

  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Auto-pagination effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialPage((prev) => (prev + 1) % totalPages);
    }, 5000); // Change page every 5 seconds

    return () => clearInterval(interval);
  }, [totalPages]);

  const getCurrentTestimonials = () => {
    const start = currentTestimonialPage * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  const nextTestimonialPage = () => {
    setCurrentTestimonialPage((prev) => (prev + 1) % totalPages);
  };

  const prevTestimonialPage = () => {
    setCurrentTestimonialPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Video */}
      <section className="bg-gradient-to-br from-[#6156F6] to-[#7d74f7] pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center space-y-6 sm:space-y-8 mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight px-4">
              {t('ads.hero.title')}
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4">
              {t('ads.hero.subtitle')}
            </p>
          </div>

          {/* Video Container */}
          <div className="max-w-5xl mx-auto mb-8 sm:mb-12">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl" style={{ padding: '56.25% 0 0 0', position: 'relative' }}>
              <iframe 
                src="https://player.vimeo.com/video/1069377836?h=aa9d2d6439&badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&muted=0&controls=1&title=0&byline=0&portrait=0" 
                frameBorder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                title="Landing Page Video"
              />
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold text-white mb-6 sm:mb-8">
              {t('ads.hero.pricing')}
            </p>
            <Button 
              size="lg" 
              className="bg-white text-[#6156F6] hover:bg-white/90 hover:scale-105 rounded-full px-8 sm:px-10 md:px-12 py-6 sm:py-7 md:py-8 text-lg sm:text-xl md:text-2xl font-bold transition-all duration-300 shadow-xl"
              onClick={() => window.location.href = 'https://app.pushbrands.app/register/brand'}
            >
              {t('ads.hero.cta')}
            </Button>
          </div>
        </div>
      </section>

      {/* Client Logos Carousel */}
      <section className="py-8 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-3xl font-bold text-center text-[#1d1d1d] mb-4 sm:mb-6">
            {t('home.brands.title')} <span className="text-[#6156F6]">{t('home.brands.count')}</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-center text-[#434E4E] max-w-3xl mx-auto">
            {t('home.brands.subtitle')}
          </p>
        </div>

        <div className="container mx-auto max-w-7xl space-y-6 sm:space-y-8">
          {/* First Carousel - Right to Left - 8 Logos */}
          <div className="relative overflow-hidden">
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
          <div className="relative overflow-hidden">
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

      {/* Stats Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] mb-10 sm:mb-16 text-center px-4">
            {t('ads.stats.title')}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Stat 1 - Store Ad Performance */}
            <div className="bg-[#F6E8F8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6156F6]">16X</h3>
              <p className="text-lg sm:text-xl font-semibold text-[#1d1d1d]">{t('ads.stats.stat1.title')}</p>
              <p className="text-sm sm:text-base text-[#434E4E] leading-relaxed">{t('ads.stats.stat1.description')}</p>
            </div>

            {/* Stat 2 - Sales Increase */}
            <div className="bg-[#F6E8F8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6156F6]">40%</h3>
              <p className="text-lg sm:text-xl font-semibold text-[#1d1d1d]">{t('ads.stats.stat2.title')}</p>
              <p className="text-sm sm:text-base text-[#434E4E] leading-relaxed">{t('ads.stats.stat2.description')}</p>
            </div>

            {/* Stat 3 - CTR Increase */}
            <div className="bg-[#F6E8F8] rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center space-y-3 sm:space-y-4 hover:shadow-xl transition-shadow sm:col-span-2 lg:col-span-1">
              <h3 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-[#6156F6]">10%</h3>
              <p className="text-lg sm:text-xl font-semibold text-[#1d1d1d]">{t('ads.stats.stat3.title')}</p>
              <p className="text-sm sm:text-base text-[#434E4E] leading-relaxed">{t('ads.stats.stat3.description')}</p>
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
            {/* Horizontal Scroll Container with hidden scrollbar */}
            <div className="overflow-x-auto pb-6 sm:pb-8 -mx-4 px-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              <style>{`
                .hide-scrollbar::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex gap-4 sm:gap-6 hide-scrollbar" style={{ width: 'max-content' }}>
                {/* Video 1 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <iframe 
                      src="https://player.vimeo.com/video/1069377305?h=b9bf82551c&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" 
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      title="UGC Video 1"
                    />
                  </div>
                </div>

                {/* Video 2 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <iframe 
                      src="https://player.vimeo.com/video/1069377375?h=da84e70e01&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" 
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      title="UGC Video 2"
                    />
                  </div>
                </div>

                {/* Video 3 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <iframe 
                      src="https://player.vimeo.com/video/1069377526?h=5ec1d20c75&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" 
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      title="UGC Video 3"
                    />
                  </div>
                </div>

                {/* Video 4 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <iframe 
                      src="https://player.vimeo.com/video/1069377688?h=21fdccf4d7&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" 
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      title="UGC Video 4"
                    />
                  </div>
                </div>

                {/* Video 5 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <iframe 
                      src="https://player.vimeo.com/video/1069377641?h=4a615e7334&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" 
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      title="UGC Video 5"
                    />
                  </div>
                </div>

                {/* Video 6 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <iframe 
                      src="https://player.vimeo.com/video/1069377438?h=bebdb060b4&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" 
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      title="UGC Video 6"
                    />
                  </div>
                </div>

                {/* Video 7 */}
                <div className="w-[240px] sm:w-[280px] md:w-[320px] flex-shrink-0 group">
                  <div className="bg-[#1d1d1d] rounded-2xl sm:rounded-3xl overflow-hidden h-[420px] sm:h-[480px] md:h-[540px] relative shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <iframe 
                      src="https://player.vimeo.com/video/1069377210?h=787d7c21f5&autoplay=1&loop=1&muted=1&controls=0&title=0&byline=0&portrait=0&background=1" 
                      frameBorder="0"
                      allow="autoplay; fullscreen"
                      className="absolute top-0 left-0 w-full h-full object-cover"
                      title="UGC Video 7"
                    />
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
            {t('ads.benefit.title')}
          </h2>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border-2 border-[#26C190] hover:shadow-lg transition-shadow">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#F6E8F8] rounded-full flex items-center justify-center">
                <ShoppingCart className="w-7 h-7 sm:w-8 sm:h-8 text-[#6156F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1d]">{t('ads.benefit.ecommerce.title')}</h3>
              <p className="text-sm sm:text-base text-[#434E4E]">
                {t('ads.benefit.ecommerce.description')}
              </p>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border-2 border-[#26C190] hover:shadow-lg transition-shadow">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#F6E8F8] rounded-full flex items-center justify-center">
                <Gamepad2 className="w-7 h-7 sm:w-8 sm:h-8 text-[#6156F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1d]">{t('ads.benefit.apps.title')}</h3>
              <p className="text-sm sm:text-base text-[#434E4E]">
                {t('ads.benefit.apps.description')}
              </p>
            </div>

            <div className="text-center space-y-4 sm:space-y-6 p-6 sm:p-8 rounded-2xl border-2 border-[#26C190] hover:shadow-lg transition-shadow sm:col-span-2 md:col-span-1">
              <div className="mx-auto w-14 h-14 sm:w-16 sm:h-16 bg-[#F6E8F8] rounded-full flex items-center justify-center">
                <Megaphone className="w-7 h-7 sm:w-8 sm:h-8 text-[#6156F6]" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#1d1d1d]">{t('ads.benefit.agency.title')}</h3>
              <p className="text-sm sm:text-base text-[#434E4E]">
                {t('ads.benefit.agency.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#6156F6] to-[#7d74f7] relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 px-4">
              {t('ads.testimonials.title')}
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              {t('ads.testimonials.subtitle')}
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {getCurrentTestimonials().map((testimonial, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 space-y-4 hover:shadow-2xl transition-all duration-300 hover:scale-105 group"
              >
                {/* Quote Icon */}
                <div className="flex justify-start mb-2">
                  <svg className="w-8 h-8 text-[#6156F6] opacity-50 group-hover:opacity-100 transition-opacity" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                </div>
                
                {/* Testimonial Text */}
                <p className={`text-sm sm:text-base text-[#434E4E] leading-relaxed min-h-[100px] sm:min-h-[120px] ${language === 'ar' ? 'text-right' : 'text-left'}`}>
                  {testimonial.quote}
                </p>
                
                {/* Author Info */}
                <div className={`flex items-center gap-3 sm:gap-4 pt-4 border-t border-gray-200 ${language === 'ar' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gray-100 flex items-center justify-center p-2 overflow-hidden">
                    <img 
                      src={testimonial.logo} 
                      alt={testimonial.company} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className={language === 'ar' ? 'text-right' : ''}>
                    <p className="font-semibold text-[#1d1d1d] text-sm sm:text-base">{testimonial.name}</p>
                    <p className="text-xs sm:text-sm text-[#434E4E]">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-center gap-4 sm:gap-6">
            {/* Previous Button */}
            <button
              onClick={prevTestimonialPage}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 ${language === 'ar' ? 'rotate-180' : ''}`}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>

            {/* Page Indicators */}
            <div className="flex gap-2 sm:gap-3">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialPage(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentTestimonialPage === index
                      ? 'w-8 sm:w-10 h-2 sm:h-2.5 bg-white'
                      : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextTestimonialPage}
              className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 ${language === 'ar' ? 'rotate-180' : ''}`}
              aria-label="Next testimonials"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Ads;
