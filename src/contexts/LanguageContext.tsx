import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type Language = 'en' | 'ar';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.howItWorks': 'How it works',
    'nav.creators': 'Creators',
    'nav.arabic': 'العربية',
    'nav.login': 'Login',
    'nav.register': 'Register',
    'nav.registerCreator': 'Register as a creator',
    'nav.startNow': 'Start now',

    // Creators Hero
    'creators.hero.title': 'Love creating content?',
    'creators.hero.subtitle': 'Get paid for it.',
    'creators.hero.description': 'Earn for shooting a UGC videos for brands looking for Creative creators.',
    'creators.hero.cta': 'Become a Creator',

    // How it works
    'how.title': 'How does it work?',
    'how.step1': '1. Step',
    'how.step1.title': 'Select a job',
    'how.step1.description': 'Choose brands and products that really align with your personality and preferences!',
    'how.step2': '2. Step',
    'how.step2.title': 'Create content',
    'how.step2.description': 'If the brand likes your profile and wants to work with you, you\'ll be hired to create the content. Make the content and send it to the brand via chat.',
    'how.step3': '3. Step',
    'how.step3.title': 'Get paid',
    'how.step3.description': 'When the brand is happy with your content, they\'ll approve it which releases payment into your account.',

    // No followers section
    'noFollowers.title': 'No followers, no worries.',
    'noFollowers.description': 'You don\'t have to be an influencer or actor. All you need is a smartphone or a working camera and you\'re ready to start making money for your content.',
    'noFollowers.cta': 'Get started now',

    // FAQ
    'faq.title': 'Frequently asked questions',
    'faq.q1': 'What if I don\'t have much experience in content creation?',
    'faq.a1': 'We\'re looking for real people to create content. If you\'ve got a smartphone with a camera you\'re good to go. All you have to do is be yourself and create real content.',
    'faq.q2': 'Do I have to post the content on my social media accounts?',
    'faq.q3': 'How much money can I make?',
    'faq.q4': 'How long does it take for my application to be accepted?',
    'faq.q5': 'Do I have to speak in my videos?',
    'faq.q6': 'How do I get paid?',

    // Home Hero
    'home.hero.title': 'Are you a brand owner or online store owner and need a content creator?',
    'home.hero.description': 'Connect instantly with ready-to-work content creators for your brand today',
    'home.hero.cta': 'Register Now',
    'home.hero.watchVideo': 'Watch video',

    // 1500+ creators
    'home.creators.title': 'content creators in Saudi Arabia ready to create UGC content for your products',
    'home.creators.count': '+1500',
    'home.creators.description': 'Within minutes of posting your campaign, content creators apply and you get to review their portfolios and choose the perfect content creator!',
    'home.creators.cta': 'Create your campaign now',

    // Examples
    'home.examples.title': 'Just some examples to get your creative juices flowing!',
    'home.examples.card': '+1500 TikTok Creators are ready to work with you',
    'home.examples.cta': 'Create my UGC campaign',

    // How it works tabs
    'home.howItWorks.title': 'How it works',
    'home.howItWorks.tab1': 'Create campaign',
    'home.howItWorks.tab2': 'Choose content creator',
    'home.howItWorks.tab3': 'Send Product',
    'home.howItWorks.tab4': 'Receive content',
    'home.howItWorks.tab1.title': 'Create campaign',
    'home.howItWorks.tab1.description': 'Add your brand and products and share some creative details about it. Content creators will start applying within minutes.',
    'home.howItWorks.tab2.title': 'Choose content creator',
    'home.howItWorks.tab2.description': 'Content creators will apply to your jobs, and you will be able to browse their profiles to find the perfect match for your brand.',
    'home.howItWorks.tab3.title': 'Send Product',
    'home.howItWorks.tab3.description': 'Send your product to content creators yourself, or ask them to buy it and pay them the full amount for the product and shipping costs.',
    'home.howItWorks.tab4.title': 'Receive content',
    'home.howItWorks.tab4.description': 'Content creators upload the content in standard form with UGC content. Request what you need from the best content creators.',
    'home.howItWorks.signUp': 'Register Now',

    // Brands section
    'home.brands.title': 'We help',
    'home.brands.count': '1000+ local brands',
    'home.brands.subtitle': 'reach the best content creators to market their products and services',

    // Home FAQ
    'home.faq.title': 'Frequently Asked Questions',
    'home.faq.q1': 'What makes pusbrands a suitable choice?',
    'home.faq.a1': 'We connect brands with real content creators to source the most authentic content. Everything is on us: from finding the right content creators to ensuring your content is exactly to your needs and delivered on time.',
    'home.faq.q2': 'Why is UGC so important?',
    'home.faq.a2': 'User-generated content helps influence engagement, increase conversions, and build customer trust. UGC works as real social proof about your product that people shop for.',
    'home.faq.q3': 'How quickly do you get content?',
    'home.faq.a3': 'Within minutes of posting your job, creators start applying, and you can receive content within days.',
    'home.faq.q4': 'Is the platform suitable for a marketing agency?',
    'home.faq.a4': 'Yes, our platform is perfect for agencies managing multiple brands and scaling content creation services.',
    'home.faq.q5': 'Can I communicate with content creators?',
    'home.faq.a5': 'Yes, you can communicate with creators through our chat system to discuss your requirements and provide feedback.',

    // Who can benefit
    'home.benefit.title': 'Who can benefit from UGC?',
    'home.benefit.ecommerce.title': 'Online Store Owners',
    'home.benefit.ecommerce.description': 'Connect instantly with ready-to-work content creators for your brand today',
    'home.benefit.apps.title': 'Apps & Games',
    'home.benefit.apps.description': 'Expand your app growth in standard form with UGC content. Request what you need for your digital products produced by the best content creators',
    'home.benefit.agency.title': 'Marketing Agency',
    'home.benefit.agency.description': 'Scale your content creation services with over 1500 UGC content creators ready to work with your agency!',

    // Stats
    'home.stats.views': '150 K views on',
    'home.stats.platforms': 'the platforms',

    // Ads Page
    'ads.hero.title': 'Invest in UGC media ads that focus on user experience and increase your online store sales by up to 10X',
    'ads.hero.subtitle': 'Over 1500 content creators in Saudi Arabia ready to create UGC content for your products',
    'ads.hero.pricing': 'Video prices start from 150 SAR only',
    'ads.hero.cta': 'Register Now',

    // Ads Stats
    'ads.stats.title': 'Numbers Our Clients Have Achieved',
    'ads.stats.stat1.title': 'Store Ad Performance',
    'ads.stats.stat1.description': 'Store ad performance has achieved a 6X return on ad spend (ROAS), up from 16X in campaigns that started at just 10X.',
    'ads.stats.stat2.title': 'Sales Increase',
    'ads.stats.stat2.description': 'By favoring creative UGC videos that we created, our clients enabled us to achieve an increase in sales by 40%.',
    'ads.stats.stat3.title': 'CTR Increase',
    'ads.stats.stat3.description': 'By favoring UGC videos provided by our creative content creators, our clients\' campaigns achieved a CTR increase of up to 10%.',

    // Ads Benefit
    'ads.benefit.title': 'Who can benefit from UGC?',
    'ads.benefit.ecommerce.title': 'Online Store Owners',
    'ads.benefit.ecommerce.description': 'Connect instantly with ready-to-work content creators for your brand today',
    'ads.benefit.apps.title': 'Apps & Games',
    'ads.benefit.apps.description': 'Scale your growth with UGC content, request what you need for your digital products from the best content creators.',
    'ads.benefit.agency.title': 'Marketing Agency',
    'ads.benefit.agency.description': 'Expand content creation services with over 1500 UGC creators ready to work with your agency!',

    // Ads Testimonials
    'ads.testimonials.title': 'We help over +1000 local brands',
    'ads.testimonials.subtitle': 'To reach the best content creators to market their products and services',
    'ads.testimonials.test1.quote': 'The quality and creativity of the content creators helped us capture audience attention, leading to meaningful engagement throughout different seasons.',
    'ads.testimonials.test1.name': 'Matcha House Store',
    'ads.testimonials.test1.company': 'Matcha House',
    'ads.testimonials.test2.quote': 'The experience was smooth and fast, we were able to communicate with the content creators in our future campaigns.',
    'ads.testimonials.test2.name': 'Lomar Store',
    'ads.testimonials.test2.company': 'Lomar',
    'ads.testimonials.test3.quote': 'Pushbrands provided us with an innovative way to showcase our products. The quality of content creators is high and a large number are available.',
    'ads.testimonials.test3.name': 'Al Sultan Store',
    'ads.testimonials.test3.company': 'Al Sultan',

    // Footer
    'footer.description': 'Connecting brands with authentic content creators for impactful UGC campaigns in Saudi Arabia.',
    'footer.quickLinks.title': 'Quick Links',
    'footer.quickLinks.home': 'Home',
    'footer.quickLinks.howItWorks': 'How it Works',
    'footer.quickLinks.creators': 'Creators',
    'footer.quickLinks.pricing': 'Pricing',
    'footer.quickLinks.about': 'About Us',
    'footer.forBrands.title': 'For Brands',
    'footer.forBrands.createCampaign': 'Create Campaign',
    'footer.forBrands.findCreators': 'Find Creators',
    'footer.forBrands.caseStudies': 'Case Studies',
    'footer.forBrands.resources': 'Brand Resources',
    'footer.forBrands.faq': 'FAQ',
    'footer.forCreators.title': 'For Creators',
    'footer.forCreators.become': 'Become a Creator',
    'footer.forCreators.browse': 'Browse Jobs',
    'footer.forCreators.guidelines': 'Creator Guidelines',
    'footer.forCreators.payment': 'Payment Info',
    'footer.forCreators.support': 'Support',
    'footer.copyright': '© 2025 PushBrands. All rights reserved.',
    'footer.registrationNumber': 'Registration Number',
    'footer.vatNumber': 'VAT Number',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.howItWorks': 'كيف يعمل',
    'nav.creators': 'المبدعون',
    'nav.arabic': 'English',
    'nav.login': 'تسجيل الدخول',
    'nav.register': 'تسجيل',
    'nav.registerCreator': 'سجل صانع محتوى',
    'nav.startNow': 'ابدأ الآن',

    // Creators Hero
    'creators.hero.title': 'هل تحب صناعة المحتوى؟',
    'creators.hero.subtitle': 'أحصل على أموال مقابل ذلك.',
    'creators.hero.description': 'اربح مقابلا مقاطع فيديو UGC للعلامات التي تبحث عن أشخاص مبدعين لتسويق منتجاتهم.',
    'creators.hero.cta': 'كون صانع محتوى',

    // How it works
    'how.title': 'كيف طريقة العمل',
    'how.step1': 'الخطوة الأولى',
    'how.step1.title': 'اختار الحملة',
    'how.step1.description': 'اختر البرائد والمنتجات التي تتوافق حقًا مع شخصيتك وتفضيلاتك!',
    'how.step2': 'الخطوة الثانية',
    'how.step2.title': 'إنشاء المحتوى',
    'how.step2.description': 'إذا أعجبت البرائنات بملفك الشخصي وأرادت العمل معك، فسيتم تعيينك لإنشاء المحتوى، و أظهر إبداعك أثناء إنشاء المحتوى. للحصول على تقييم عالي على المنصة',
    'how.step3': 'الخطوة الثالثة',
    'how.step3.title': 'الحصول على أموال',
    'how.step3.description': 'عندما يكون البائد راضية عن المحتوى، سيوافق عليه مما يؤدي إلى تحويل المبلغ على محفظتك.',

    // No followers section
    'noFollowers.title': 'ماعندك متابعين لا تشيل هم.',
    'noFollowers.description': 'ليس عليك أن تكون مشهور كل ما تحتاجه هو هاتف ذكي أو كاميرا، وستكون جاهز للبدء في جني الأموال مقابل صناعة المحتوى.',
    'noFollowers.cta': 'سجل الآن',

    // FAQ
    'faq.title': 'الأسئلة الشائعة',
    'faq.q1': 'ماذا لو لم يكن لدي الكثير من الخبرة في إنشاء المحتوى؟',
    'faq.a1': 'نحن نبحث عن أشخاص حقيقيين لإنشاء المحتوى. إذا كان لديك هاتف ذكي مع كاميرا، فأنت جاهز للانطلاق. كل ما عليك فعله هو أن تكون نفسك وتنشئ محتوى حقيقيًا.',
    'faq.q2': 'هل يجب علي نشر المحتوى على حساباتي على وسائل التواصل الاجتماعي؟',
    'faq.q3': 'كم من المال يمكنني كسبه؟',
    'faq.q4': 'كم من الوقت يستغرق قبول طلبي؟',
    'faq.q5': 'هل يجب أن أتحدث في مقاطع الفيديو الخاصة بي؟',
    'faq.q6': 'كيف أحصل على أموالي؟',

    // Home Hero
    'home.hero.title': 'صاحب علامة تجارية أو متجر الكتروني وتحتاج صانع محتوى؟',
    'home.hero.description': 'تواصل فوراً مع صناع المحتوى المستعدين للعمل مع علامتك التجارية اليوم',
    'home.hero.cta': 'سجل الآن',
    'home.hero.watchVideo': 'شاهد الفيديو',

    // 1500+ creators
    'home.creators.title': 'صانع محتوى في السعودية جاهزين لإنشاء محتوى UGC لمنتجاتك',
    'home.creators.count': '+1500',
    'home.creators.description': 'في غضون دقائق من نشر حملتك، يتقدم صناع المحتوى بطلب ويمكنك مراجعة بروفايلهم واختيار صانع المحتوى المثالي!',
    'home.creators.cta': 'أنشئ حملتك الآن',

    // Examples
    'home.examples.title': 'بعض الامثلة عن أعمال صانعي المحتوى لدينا',
    'home.examples.card': '+1500 منشئ محتوى على تيك توك جاهزون للعمل معك',
    'home.examples.cta': 'أنشئ حملة UGC الخاصة بي',

    // How it works tabs
    'home.howItWorks.title': 'طريقة العمل',
    'home.howItWorks.tab1': 'أنشئ الحملة',
    'home.howItWorks.tab2': 'اختار صانع المحتوى',
    'home.howItWorks.tab3': 'إرسال المنتج',
    'home.howItWorks.tab4': 'استلم المحتوى',
    'home.howItWorks.tab1.title': 'أنشئ الحملة',
    'home.howItWorks.tab1.description': 'أضف علامتك التجارية ومنتجاتك وشارك ببعض التفاصيل الإبداعية عنها. سيبدأ صناع المحتوى في التقديم خلال دقائق. الإرسال خلال دقائق.',
    'home.howItWorks.tab2.title': 'اختار صانع المحتوى',
    'home.howItWorks.tab2.description': 'سيتقدم صناع المحتوى إلى وظائفك، وسيتمكن من تصفح بروفايلهم للعثور على التطابق المثالي مع علامتك التجارية.',
    'home.howItWorks.tab3.title': 'إرسال المنتج',
    'home.howItWorks.tab3.description': 'أرسل منتجك إلى صناع المحتوى بنفسك، أو اطلب منهم شرائه وادفع لهم كامل المبلغ مقابل المنتج وتكاليف الشحن.',
    'home.howItWorks.tab4.title': 'استلم المحتوى',
    'home.howItWorks.tab4.description': 'يقوم صانع المحتوى برفع المحتوى بشكل قياسي مع محتوى UGC إطلب ما تحتاجه افضل صناع المحتوى.',
    'home.howItWorks.signUp': 'سجل الآن',

    // Brands section
    'home.brands.title': 'نحن نساعد',
    'home.brands.count': '+1000 علامة تجارية محلية',
    'home.brands.subtitle': 'للوصول إلى أفضل منشئي المحتوى لتسويق منتجاتهم وخدماتهم',

    // Home FAQ
    'home.faq.title': 'الأسئلة الشائعة المتكررة',
    'home.faq.q1': 'ما الذي يجعل pusbrands خيار مناسب؟',
    'home.faq.a1': 'نحن نربط العلامات التجارية بصناع المحتوى الحقيقيين للحصول على محتوى أكثر أصالة كل ذلك على عاتقنا بدءاً من العثور على صناع المحتوى المناسبين ووصولة إلى ضمان المحتوى الخاص بك بالكامل وفقاً لاحتياجاتك وتسليمه في الوقت المحدد.',
    'home.faq.q2': 'لماذا تعتبر UGC مهمة جداً؟',
    'home.faq.a2': 'يساعد المحتوى الذي ينشئه المستخدمون في التأثير على التفاعل وزيادة التحويلات وبناء ثقة العملاء. يعمل UGC كدليل اجتماعي حقيقي عن أي منتجك يتسوق الأشخاص.',
    'home.faq.q3': 'ما مدى سرعة الحصول على المحتوى؟',
    'home.faq.a3': 'في غضون دقائق من نشر وظيفتك، يبدأ المبدعون في التقديم، ويمكنك الحصول على المحتوى في غضون أيام.',
    'home.faq.q4': 'هل المنصة مناسبة لوكالة تسويق؟',
    'home.faq.a4': 'نعم، منصتنا مثالية للوكالات التي تدير علامات تجارية متعددة وتوسع خدمات إنشاء المحتوى.',
    'home.faq.q5': 'هل يمكنني التواصل مع صانع المحتوى؟',
    'home.faq.a5': 'نعم، يمكنك التواصل مع المبدعين من خلال نظام الدردشة الخاص بنا لمناقشة متطلباتك وتقديم الملاحظات.',

    // Who can benefit
    'home.benefit.title': 'من يمكنه الاستفادة من UGC؟',
    'home.benefit.ecommerce.title': 'أصحاب المتاجر الإلكترونية',
    'home.benefit.ecommerce.description': 'تواصل فوراً مع صناع المحتوى المستعدين للعمل مع علامتك التجارية اليوم',
    'home.benefit.apps.title': 'التطبيقات والألعاب',
    'home.benefit.apps.description': 'وسع نمو تطبيق بشكل قياسي مع محتوى UGC إطلب ما تحتاجه لمنتجاتك الرقمية التي ينتجها أفضل صناع المحتوى',
    'home.benefit.agency.title': 'وكالة تسويق',
    'home.benefit.agency.description': 'قم توسيع خدمات صناعة المحتوى الخاصة بك مع أكثر من 1500 صناع محتوى UGC والمستعدين للعمل مع وكالتك!',

    // Stats
    'home.stats.views': '150 ألف مشاهدة على',
    'home.stats.platforms': 'المنصات',

    // Ads Page
    'ads.hero.title': 'استثمر في محتوى إعلاني يركز على تجربة المستخدم UGC ويرفع مبيعات متجرك الألكتروني بعوائد تصل إلى 10X',
    'ads.hero.subtitle': 'أكثر من 1500 صانع محتوى في السعودية جاهزين لإنشاء محتوى UGC لمنتجاتك',
    'ads.hero.pricing': 'أسعار الفيديوهات تبدأ من 150 ريال فقط',
    'ads.hero.cta': 'سجل الآن',

    // Ads Stats
    'ads.stats.title': 'أرقام حققها عملائنا',
    'ads.stats.stat1.title': 'إعلانات المتاجر',
    'ads.stats.stat1.description': 'حققت إعلانات المتاجر معدل عائد على الإنفاق (ROAS) في الحملات بدءا من 6X ويصل حتى 16 X ضعف.',
    'ads.stats.stat2.title': 'زيادة في المبيعات',
    'ads.stats.stat2.description': 'بفضل مقاطع UGC الإبداعية التي تم إنشائها عبر منصتنا، تمكن عملائنا من تحقيق زيادة في المبيعات بنسبة 40%',
    'ads.stats.stat3.title': 'زيادة معدل نقر (CTR)',
    'ads.stats.stat3.description': 'بفضل مقاطع UGC التي يوفرها صناع المحتوى عبر منصتنا، حققت حملات عملائنا معدل نقر (CTR) يصل إلى 10%',

    // Ads Benefit
    'ads.benefit.title': 'من يمكنه الاستفادة من UGC؟',
    'ads.benefit.ecommerce.title': 'أصحاب المتاجر الإلكترونية',
    'ads.benefit.ecommerce.description': 'تواصل فوراً مع صناع المحتوى المستعدين للعمل مع علامتك التجارية اليوم',
    'ads.benefit.apps.title': 'التطبيقات والألعاب',
    'ads.benefit.apps.description': 'وسع نمو تطبيق بشكل قياسي مع محتوى UGC إطلب ما تحتاجه لمنتجاتك الرقمية التي ينتجها أفضل صناع المحتوى',
    'ads.benefit.agency.title': 'وكالة تسويق',
    'ads.benefit.agency.description': 'قم توسيع خدمات صناعة المحتوى الخاصة بك مع أكثر من 1500 صناع محتوى UGC والمستعدين للعمل مع وكالتك!',

    // Ads Testimonials
    'ads.testimonials.title': 'نساعد +1000 براند محلي',
    'ads.testimonials.subtitle': 'للوصول الى افضل صناع المحتوى لتسويق منتجاتهم وخدماتهم',
    'ads.testimonials.test1.quote': 'منصة الوقت وفرت لنا وقتاً وجهداً كبيراً بفضل آلية تنبر الطلب واختيار صانع المحتوى. وجود عدد كبير من صناع المحتوى جعل الخيارات أمامنا واسعة ومناسبة لحاجياتناتنا.',
    'ads.testimonials.test1.name': 'متجر السلطان',
    'ads.testimonials.test1.company': 'السلطان',
    'ads.testimonials.test2.quote': 'سهولة في اختيار صانع المحتوى مع أسعار مناسبة جداً، التجربة كانت مريحة وسريعة، وتنطلع للتعاون معهم في حملاتنا المستقبلية.',
    'ads.testimonials.test2.name': 'متجر لومار',
    'ads.testimonials.test2.company': 'Lomar',
    'ads.testimonials.test3.quote': 'صناع المحتوى في بوش براندز ساعدونا بحق! كنيوا لنا النصوص وصوروا المنتجات بطريقة مبتكرة ومختلفة في كل مرة، مما ساعدنا على التميز في مواسم التسوق.',
    'ads.testimonials.test3.name': 'متجر ماتشا هاوس',
    'ads.testimonials.test3.company': 'Matcha House',

    // Footer
    'footer.description': 'ربط العلامات التجارية مع صناع المحتوى الأصليين لحملات UGC مؤثرة في المملكة العربية السعودية.',
    'footer.quickLinks.title': 'روابط سريعة',
    'footer.quickLinks.home': 'الرئيسية',
    'footer.quickLinks.howItWorks': 'كيف يعمل',
    'footer.quickLinks.creators': 'المبدعون',
    'footer.quickLinks.pricing': 'الأسعار',
    'footer.quickLinks.about': 'من نحن',
    'footer.forBrands.title': 'للعلامات التجارية',
    'footer.forBrands.createCampaign': 'إنشاء حملة',
    'footer.forBrands.findCreators': 'البحث عن منشئي المحتوى',
    'footer.forBrands.caseStudies': 'دراسات الحالة',
    'footer.forBrands.resources': 'موارد العلامة التجارية',
    'footer.forBrands.faq': 'الأسئلة الشائعة',
    'footer.forCreators.title': 'لصناع المحتوى',
    'footer.forCreators.become': 'كن صانع محتوى',
    'footer.forCreators.browse': 'تصفح الوظائف',
    'footer.forCreators.guidelines': 'إرشادات صانع المحتوى',
    'footer.forCreators.payment': 'معلومات الدفع',
    'footer.forCreators.support': 'الدعم',
    'footer.copyright': '© 2025 بوش براندز. جميع الحقوق محفوظة.',
    'footer.registrationNumber': 'السجل التجاري',
    'footer.vatNumber': 'الرقم الضريبي',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.cookies': 'سياسة ملفات تعريف الارتباط',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [language, setLanguage] = useState<Language>('en');

  // Sync language with URL on mount and location change
  useEffect(() => {
    const pathLanguage = location.pathname.split('/')[1];
    if (pathLanguage === 'ar' || pathLanguage === 'en') {
      setLanguage(pathLanguage as Language);
    }
  }, [location.pathname]);

  // Update HTML attributes when language changes
  useEffect(() => {
    document.documentElement.setAttribute('dir', language === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'ar' : 'en';
    const currentPath = location.pathname;

    // Replace language prefix in URL
    let newPath = currentPath;
    if (currentPath.startsWith('/en')) {
      newPath = currentPath.replace('/en', '/ar');
    } else if (currentPath.startsWith('/ar')) {
      newPath = currentPath.replace('/ar', '/en');
    } else {
      // If no language prefix, add one
      newPath = `/${newLanguage}${currentPath}`;
    }

    navigate(newPath);
    setLanguage(newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
