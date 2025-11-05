import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { ArrowLeft, ArrowRight, Heart, Video } from 'lucide-react';
import { Footer } from '@/components/Footer';

export const Creators = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#7CFBBA] pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-5xl">
          <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center ${language === 'ar' ? 'lg:flex-row-reverse' : ''}`}>
            <div className={`space-y-4 sm:space-y-6 ${language === 'ar' ? 'lg:order-2' : ''}`}>
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-[#1d1d1d] leading-tight">
                {t('creators.hero.title')}<br />
                <span className="text-[#1d1d1d]">{t('creators.hero.subtitle')}</span>
              </h1>
              
              <div className={`${language === 'ar' ? 'border-r-4 pr-4' : 'border-l-4 pl-4'} border-[#1d1d1d]`}>
                <p className="text-base sm:text-lg md:text-xl text-[#1d1d1d]">
                  {t('creators.hero.description')}
                </p>
              </div>

              <Button 
                size="lg" 
                className="bg-gradient-to-r from-[#6156F6] to-[#7d74f7] text-white hover:shadow-xl hover:scale-105 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300"
                onClick={() => window.location.href = 'https://app.pushbrands.app/register/creator'}
              >
                {t('creators.hero.cta')}
              </Button>
            </div>

            <div className={`relative ${language === 'ar' ? 'lg:order-1' : ''}`}>
              <img 
                src="/images/creator image/hero-creators.png" 
                alt="Content Creators" 
                className="w-full h-auto max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-7xl">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] mb-8 sm:mb-12 md:mb-16 text-center">
            {t('how.title')}
          </h2>

          <div className="space-y-16 sm:space-y-20 md:space-y-24">
            {/* Step 1 - Select Campaign */}
            <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${language === 'ar' ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`relative group ${language === 'ar' ? 'lg:col-start-2' : ''}`}>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6156F6] to-[#26C190] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src="/images/creator image/select-campaign-1.png" 
                  alt="Select Campaign" 
                  className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
              <div className={`space-y-3 sm:space-y-4 ${language === 'ar' ? 'text-right lg:col-start-1' : ''}`}>
                <p className="text-[#6156F6] font-semibold text-sm sm:text-base">{t('how.step1')}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1d1d1d]">{t('how.step1.title')}</h3>
                <p className="text-base sm:text-lg text-[#434E4E] leading-relaxed">{t('how.step1.description')}</p>
              </div>
            </div>

            {/* Step 2 - Create Content */}
            <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${language === 'ar' ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`space-y-3 sm:space-y-4 ${language === 'ar' ? 'text-right lg:col-start-2' : ''}`}>
                <p className="text-[#6156F6] font-semibold text-sm sm:text-base">{t('how.step2')}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1d1d1d]">{t('how.step2.title')}</h3>
                <p className="text-base sm:text-lg text-[#434E4E] leading-relaxed">{t('how.step2.description')}</p>
              </div>
              <div className={`relative group ${language === 'ar' ? 'lg:col-start-1' : ''}`}>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6156F6] to-[#26C190] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src="/images/creator image/content-creation-1-1024x827.png" 
                  alt="Create Content" 
                  className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
            </div>

            {/* Step 3 - Get Paid */}
            <div className={`grid lg:grid-cols-2 gap-8 sm:gap-12 items-center ${language === 'ar' ? 'lg:grid-flow-dense' : ''}`}>
              <div className={`relative group ${language === 'ar' ? 'lg:col-start-2' : ''}`}>
                <div className="absolute -inset-2 bg-gradient-to-r from-[#6156F6] to-[#26C190] rounded-3xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity"></div>
                <img 
                  src="/images/creator image/Withdraw-Money-V2-876x1024.png" 
                  alt="Get Paid" 
                  className="relative rounded-2xl sm:rounded-3xl w-full h-auto object-cover shadow-2xl"
                />
              </div>
              <div className={`space-y-3 sm:space-y-4 ${language === 'ar' ? 'text-right lg:col-start-1' : ''}`}>
                <p className="text-[#6156F6] font-semibold text-sm sm:text-base">{t('how.step3')}</p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1d1d1d]">{t('how.step3.title')}</h3>
                <p className="text-base sm:text-lg text-[#434E4E] leading-relaxed">{t('how.step3.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* No followers section */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-[#F6E8F8]">
        <div className="container mx-auto max-w-6xl text-center space-y-6 sm:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] max-w-3xl mx-auto px-4">
            {t('noFollowers.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-[#434E4E] max-w-2xl mx-auto px-4 leading-relaxed">
            {t('noFollowers.description')}
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#6156F6] to-[#7d74f7] text-white hover:shadow-xl hover:scale-105 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg font-bold transition-all duration-300"
            onClick={() => window.location.href = 'https://app.pushbrands.app/register/creator'}
          >
            {t('noFollowers.cta')}
          </Button>
          
          <div className="mt-8 sm:mt-12 pt-6 sm:pt-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-3xl overflow-hidden max-w-3xl mx-auto shadow-xl">
              <img 
                src="/images/creator image/no-followers-banner.jpg" 
                alt="Content Creator" 
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 sm:py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#1d1d1d] mb-8 sm:mb-12 text-center px-4">
            {t('faq.title')}
          </h2>

          <Accordion type="single" collapsible className="space-y-3 sm:space-y-4">
            <AccordionItem value="item-1" className="border-2 border-[#26C190] rounded-2xl px-4 sm:px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className={`${language === 'ar' ? 'text-right' : 'text-left'} text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 sm:py-5 text-[#1d1d1d]`}>
                {t('faq.q1')}
              </AccordionTrigger>
              <AccordionContent className={`${language === 'ar' ? 'text-right' : 'text-left'} text-[#434E4E] text-sm sm:text-base pb-4`}>
                {t('faq.a1')}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-2 border-[#26C190] rounded-2xl px-4 sm:px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className={`${language === 'ar' ? 'text-right' : 'text-left'} text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 sm:py-5 text-[#1d1d1d]`}>
                {t('faq.q2')}
              </AccordionTrigger>
              <AccordionContent className={`${language === 'ar' ? 'text-right' : 'text-left'} text-[#434E4E] text-sm sm:text-base pb-4`}>
                {language === 'ar' ? 'لا، المحتوى ملك للعلامة التجارية.' : 'No, the content belongs to the brand.'}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-2 border-[#26C190] rounded-2xl px-4 sm:px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className={`${language === 'ar' ? 'text-right' : 'text-left'} text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 sm:py-5 text-[#1d1d1d]`}>
                {t('faq.q3')}
              </AccordionTrigger>
              <AccordionContent className={`${language === 'ar' ? 'text-right' : 'text-left'} text-[#434E4E] text-sm sm:text-base pb-4`}>
                {language === 'ar' ? 'الأمر متروك لك! لكل حملة، يتضمن المبلغ أيضًا كسب المزيد عن طريق تقديم على حملات إضافية في نفس الوقت.' : 'It depends on the jobs you take and how much content you create.'}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-2 border-[#26C190] rounded-2xl px-4 sm:px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className={`${language === 'ar' ? 'text-right' : 'text-left'} text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 sm:py-5 text-[#1d1d1d]`}>
                {t('faq.q4')}
              </AccordionTrigger>
              <AccordionContent className={`${language === 'ar' ? 'text-right' : 'text-left'} text-[#434E4E] text-sm sm:text-base pb-4`}>
                {language === 'ar' ? 'عادة خلال 24-48 ساعة.' : 'Usually within 24-48 hours.'}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-2 border-[#26C190] rounded-2xl px-4 sm:px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className={`${language === 'ar' ? 'text-right' : 'text-left'} text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 sm:py-5 text-[#1d1d1d]`}>
                {t('faq.q5')}
              </AccordionTrigger>
              <AccordionContent className={`${language === 'ar' ? 'text-right' : 'text-left'} text-[#434E4E] text-sm sm:text-base pb-4`}>
                {language === 'ar' ? 'يعتمد على متطلبات الوظيفة.' : 'It depends on the job requirements.'}
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border-2 border-[#26C190] rounded-2xl px-4 sm:px-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <AccordionTrigger className={`${language === 'ar' ? 'text-right' : 'text-left'} text-sm sm:text-base md:text-lg font-semibold hover:no-underline py-4 sm:py-5 text-[#1d1d1d]`}>
                {t('faq.q6')}
              </AccordionTrigger>
              <AccordionContent className={`${language === 'ar' ? 'text-right' : 'text-left'} text-[#434E4E] text-sm sm:text-base pb-4`}>
                {language === 'ar' ? 'من خلال التحويل البنكي إلى محفظتك.' : 'Through bank transfer to your account.'}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Creators;
