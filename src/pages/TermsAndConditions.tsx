import { useLanguage } from '@/contexts/LanguageContext';
import { Footer } from '@/components/Footer';

export const TermsAndConditions = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#6156F6] pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {language === 'ar' ? 'الشروط والأحكام' : 'Terms and Conditions'}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className={`prose prose-lg max-w-none ${language === 'ar' ? 'text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            
            {/* Introduction */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'مقدمة' : 'Introduction'}
            </h2>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar' 
                ? '1.1 ترحب بك شركة PushBrands في منصتها، التي تهدف إلى ربط الشركات (المشار إليها باسم "العلامات التجارية") مع مجتمع المستخدمين على وسائل التواصل الاجتماعي (المشار إليها باسم "صناع المحتوى") للتسويق عبر وسائل التواصل الاجتماعي، والمحتوى الذي ينشئه المستخدمون، والأنشطة ذات الصلة. تحكم هذه الشروط والأحكام استخدامك لمنصة PushBrands. من خلال الوصول إلى المنصة واستخدامها، فإنك توافق على الالتزام بهذه الشروط والأحكام. يُشار إلى كل من العلامات التجارية والمبدعين بشكل جماعي باسم "المستخدمين" أو "أنت" حسب الاقتضاء. إذا كنت لا توافق على هذه الشروط والأحكام، فيرجى الامتناع عن استخدام المنصة.'
                : '1.1 PushBrands welcomes you to its platform, which aims to connect companies (referred to as "Brands") with the social media user community (referred to as "Content Creators") for social media marketing, user-generated content, and related activities. These Terms and Conditions govern your use of the PushBrands platform. By accessing and using the platform, you agree to abide by these Terms and Conditions. Both Brands and Creators are collectively referred to as "Users" or "you" as applicable. If you do not agree to these Terms and Conditions, please refrain from using the platform.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '1.2 مشاركة المحتوى: عندما تعمل العلامة التجارية نيابة عن عملائها (على سبيل المثال، كوكالة تمثل عملاء متعددين)، تؤكد العلامة التجارية وPushBrands أن مشاركة المحتوى مع عملاء العلامة التجارية غير مقيد بهذه الاتفاقية.'
                : '1.2 Content Sharing: When a Brand acts on behalf of its clients (for example, as an agency representing multiple clients), the Brand and PushBrands confirm that sharing content with the Brand\'s clients is not restricted by this agreement.'}
            </p>

            {/* Acceptance of Terms */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'قبول الشروط' : 'Acceptance of Terms'}
            </h2>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '2.1 من خلال الوصول إلى منصة PushBrands واستخدامها، فإنك تشير إلى موافقتك على هذه الشروط والأحكام. يشكل استمرار استخدامك للمنصة قبولًا مستمرًا لهذه الشروط والأحكام. إذا كنت لا توافق على الالتزام بهذه الشروط والأحكام، فيرجى الامتناع عن استخدام المنصة.'
                : '2.1 By accessing and using the PushBrands platform, you indicate your agreement to these Terms and Conditions. Your continued use of the platform constitutes ongoing acceptance of these Terms and Conditions. If you do not agree to abide by these Terms and Conditions, please refrain from using the platform.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '2.2 مراجعة الشروط: يجوز لشركة PushBrands مراجعة هذه الشروط والأحكام في أي وقت عن طريق تحديث هذه الصفحة. ستصبح الشروط والأحكام المعدلة سارية فور نشرها وقد تؤثر على استخدامك للمنصة. وبما أنك ملتزم بهذه الشروط والأحكام في كل مرة تستخدم فيها المنصة، فمن المستحسن التحقق بانتظام من وجود أي مراجعات. يشير استمرار استخدامك لمنصة PushBrands بعد أي مراجعات إلى موافقتك على الشروط والأحكام المحدثة.'
                : '2.2 Terms Review: PushBrands may review these Terms and Conditions at any time by updating this page. The revised Terms and Conditions will become effective immediately upon posting and may affect your use of the platform. Since you are bound by these Terms and Conditions each time you use the platform, it is advisable to check regularly for any revisions. Your continued use of the PushBrands platform after any revisions indicates your agreement to the updated Terms and Conditions.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '2.3 تغييرات النظام الأساسي: تحتفظ شركة PushBrands بالحق في تعديل النظام الأساسي حسب ما تراه مناسبًا. يتضمن ذلك إنهاء وصولك واستخدامك لمنصة PushBrands، حتى لو كان لديك حساب، دون إشعار مسبق.'
                : '2.3 Platform Changes: PushBrands reserves the right to modify the platform as it sees fit. This includes terminating your access and use of the PushBrands platform, even if you have an account, without prior notice.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '2.4 مسؤولية التكلفة: أي تكاليف مرتبطة باستخدام منصة PushBrands، بما في ذلك رسوم مزود الخدمة، هي مسؤوليتك وتعتمد على مزود الخدمة المختار.'
                : '2.4 Cost Responsibility: Any costs associated with using the PushBrands platform, including service provider fees, are your responsibility and depend on the chosen service provider.'}
            </p>

            {/* Intellectual Property */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'الملكية الفكرية' : 'Intellectual Property'}
            </h2>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '3.1 المحتوى المتاح على منصة PushBrands، بما في ذلك النصوص والرسومات والشعارات والصور ومقاطع الفيديو والبرامج، محمي بموجب حقوق الملكية الفكرية المملوكة أو المرخصة لشركة PushBrands. أنت توافق على عدم إعادة إنتاج أو تعديل أو توزيع أو استغلال أي محتوى من المنصة دون موافقة كتابية مسبقة من PushBrands.'
                : '3.1 Content available on the PushBrands platform, including text, graphics, logos, images, videos, and software, is protected by intellectual property rights owned or licensed to PushBrands. You agree not to reproduce, modify, distribute, or exploit any content from the platform without prior written consent from PushBrands.'}
            </p>

            {/* User Obligations */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'التزامات المستخدم' : 'User Obligations'}
            </h2>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '4.1 باستخدام منصة PushBrands، فإنك توافق على الالتزام بالالتزامات التالية:'
                : '4.1 By using the PushBrands platform, you agree to comply with the following obligations:'}
            </p>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-8 space-y-2`}>
              <li>{language === 'ar' ? 'قم بتوفير معلومات دقيقة وكاملة أثناء عملية التسجيل وحافظ على تحديث معلومات حسابك.' : 'Provide accurate and complete information during the registration process and keep your account information up to date.'}</li>
              <li>{language === 'ar' ? 'استخدم المنصة فقط للأغراض المشروعة ووفقًا لهذه الشروط والأحكام.' : 'Use the platform only for legitimate purposes and in accordance with these Terms and Conditions.'}</li>
              <li>{language === 'ar' ? 'تجنب الانخراط في أي أنشطة قد تهدد سلامة أو أمن أو وظائف المنصة أو مستخدميها.' : 'Avoid engaging in any activities that may threaten the safety, security, or functionality of the platform or its users.'}</li>
              <li>{language === 'ar' ? 'احترام حقوق الملكية الفكرية للآخرين والامتناع عن التعدي على أي حقوق لأطراف ثالثة.' : 'Respect the intellectual property rights of others and refrain from infringing on any third-party rights.'}</li>
              <li>{language === 'ar' ? 'الالتزام بجميع القوانين واللوائح والإرشادات المعمول بها أثناء استخدام المنصة.' : 'Comply with all applicable laws, regulations, and guidelines while using the platform.'}</li>
              <li>{language === 'ar' ? 'حافظ على سرية بيانات اعتماد تسجيل الدخول إلى حسابك وتحمل المسؤولية عن أي أنشطة تتم باستخدام حسابك.' : 'Maintain the confidentiality of your account login credentials and take responsibility for any activities conducted using your account.'}</li>
              <li>{language === 'ar' ? 'قم بالإبلاغ فورًا عن أي وصول غير مصرح به أو انتهاكات أمنية مشتبه بها إلى PushBrands.' : 'Immediately report any unauthorized access or suspected security breaches to PushBrands.'}</li>
            </ul>

            {/* Liability and Disclaimer */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'المسؤولية وإخلاء المسؤولية' : 'Liability and Disclaimer'}
            </h2>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '5.1 توفر PushBrands المنصة على أساس "كما هي" و"كما هو متاح". بينما نسعى جاهدين لضمان دقة المنصة وموثوقيتها ووظائفها، فإننا لا نضمن تشغيلًا دون انقطاع أو خاليًا من الأخطاء أو خاليًا من الفيروسات.'
                : '5.1 PushBrands provides the platform on an "as is" and "as available" basis. While we strive to ensure the accuracy, reliability, and functionality of the platform, we do not guarantee uninterrupted, error-free, or virus-free operation.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '5.2 لن تكون PushBrands مسؤولة عن أي أضرار مباشرة أو غير مباشرة أو عرضية أو تبعية أو تأديبية تنشأ عن أو فيما يتعلق باستخدامك للمنصة، بما في ذلك على سبيل المثال لا الحصر، أي خسارة للبيانات أو الأرباح أو فرص العمل.'
                : '5.2 PushBrands will not be liable for any direct, indirect, incidental, consequential, or punitive damages arising from or in connection with your use of the platform, including but not limited to any loss of data, profits, or business opportunities.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '5.3 أنت توافق على تعويض PushBrands وحمايته من أي مطالبات أو التزامات أو أضرار أو خسائر أو نفقات يتم تكبدها نتيجة لاستخدامك للمنصة.'
                : '5.3 You agree to indemnify and hold PushBrands harmless from any claims, liabilities, damages, losses, or expenses incurred as a result of your use of the platform.'}
            </p>

            {/* Account Registration */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'تسجيل حساب' : 'Account Registration'}
            </h2>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '6.1 للوصول إلى منصة PushBrands Creators، يجب على المستخدمين إكمال عملية التسجيل على المنصة كما هو موضح في شروط الخدمة هذه.'
                : '6.1 To access the PushBrands Creators platform, users must complete the registration process on the platform as described in these Terms of Service.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '6.2 تحتفظ PushBrands بالحق في رفض أو إنهاء تسجيل الحساب وفقًا لتقديرها الخاص.'
                : '6.2 PushBrands reserves the right to refuse or terminate account registration at its sole discretion.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '6.3 عند تسجيل الحساب، يجب أن تكون جميع المعلومات المقدمة دقيقة وحديثة وكاملة. سيتم اعتبار التسجيلات غير الكاملة أو غير المؤهلة أو غير المفهومة غير صالحة. في كل مرة ترغب فيها في استخدام منصة PushBrands Creators، يجب عليك تسجيل الدخول إلى حسابك باستخدام الطريقة المطلوبة. يُحظر تمامًا استخدام حساب شخص آخر دون الحصول على إذن مناسب.'
                : '6.3 When registering an account, all information provided must be accurate, current, and complete. Incomplete, unqualified, or incomprehensible registrations will be considered invalid. Each time you wish to use the PushBrands Creators platform, you must log in to your account using the required method. Using another person\'s account without proper permission is strictly prohibited.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '6.4 أنت مسؤول مسؤولية كاملة عن الحفاظ على السرية التامة لتفاصيل حسابك وجميع الأنشطة التي يتم تنفيذها من خلال حسابك. إذا كان هناك أي استخدام غير مصرح به لحسابك أو أي انتهاكات أمنية، فإنك توافق على إخطار PushBrands على الفور.'
                : '6.4 You are fully responsible for maintaining the complete confidentiality of your account details and all activities conducted through your account. If there is any unauthorized use of your account or any security breaches, you agree to notify PushBrands immediately.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '6.5 تحتفظ PushBrands بالحق المطلق في إنهاء حسابك و/أو الوصول إلى منصة PushBrands Creators (أو أي جزء منها) إذا اعتقدت أنك تسيء استخدام منصة PushBrands Creators أو تتدخل في الإدارة السليمة لها، مما ينتهك شروط الخدمة هذه، أو الانخراط في أي أنشطة غير قانونية أو غير أخلاقية أو سوء سلوك.'
                : '6.5 PushBrands reserves the absolute right to terminate your account and/or access to the PushBrands Creators platform (or any part thereof) if it believes you are misusing the PushBrands Creators platform or interfering with its proper administration, violating these Terms of Service, or engaging in any illegal, unethical activities or misconduct.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '6.6 يُمنع منعًا باتًا استخدام البرامج الآلية أو أي وسيلة ميكانيكية أو إلكترونية أخرى لإنشاء الحسابات. تتمتع PushBrands بسلطة تعليق حسابك أو إنهائه إذا قررت أنك مشترك في مثل هذه الأنشطة.'
                : '6.6 The use of automated software or any other mechanical or electronic means to create accounts is strictly prohibited. PushBrands has the authority to suspend or terminate your account if it determines that you are engaged in such activities.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '6.7 من خلال إنشاء حساب، يقر المستخدمون بأنهم يقدمون معلوماتهم إلى PushBrands وليس إلى أي منصة وسائط اجتماعية. يتحمل مستخدمو منصة PushBrands Creators (سواء المبدعون أو العلامات التجارية) المسؤولية الوحيدة عن أي محتوى أو معلومات ينقلونها إلى مستخدمين آخرين لمنصة PushBrands Creators.'
                : '6.7 By creating an account, users acknowledge that they are providing their information to PushBrands and not to any social media platform. Users of the PushBrands Creators platform (whether Creators or Brands) bear sole responsibility for any content or information they transmit to other users of the PushBrands Creators platform.'}
            </p>

            {/* Terms for Content Creators */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'الشروط المطبقة على صناع المحتوى' : 'Terms Applicable to Content Creators'}
            </h2>
            
            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? '7.1 أهلية صانع المحتوى' : '7.1 Creator Eligibility'}
            </h3>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '7.1.1 من أجل المشاركة في المهام والحملات والحصول على تعويض مقابل الخدمة من خلال PushBrands، يجب على صناع المحتوى استيفاء الحد الأدنى من المعايير التالية:'
                : '7.1.1 In order to participate in tasks and campaigns and receive compensation for services through PushBrands, content creators must meet the following minimum criteria:'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '7.1.2 يجب ألا تحتوي قنوات التواصل الاجتماعي الخاصة بهم (بما في ذلك على سبيل المثال وغيرها من القنوات Instagram وFacebook وTiktok وyoutube) على أي محتوى غير لائق أو غير أخلاقي أو غير محترم، أو محتوى ينتهك شروط الخدمة هذه أو شروط الاستخدام ذات الصلة. منصة التواصل الاجتماعي.'
                : '7.1.2 Their social media channels (including but not limited to Instagram, Facebook, TikTok, and YouTube) must not contain any inappropriate, unethical, or disrespectful content, or content that violates these Terms of Service or the relevant social media platform\'s terms of use.'}
            </p>

            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? '7.3 تعويض المبدع' : '7.3 Creator Compensation'}
            </h3>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '7.3.1 يتم تعويض صناع المحتوى مقابل المحتوى الذي يقومون بإنشائه بعد تحميل المحتوى على منصة PushBrands وقبوله من قبل العلامة التجارية، ويتم خصم من المبلغ 30% كرسوم لمنصة PushBrands.'
                : '7.3.1 Content creators are compensated for the content they create after uploading the content to the PushBrands platform and it being accepted by the brand, with 30% deducted as fees for the PushBrands platform.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '7.3.2 من خلال تحميل المحتوى على المنصة، يوافق صناع المحتوى على نقل جميع الحقوق والملكية والمصالح في جميع حقوق الملكية الفكرية للمحتوى إلى العلامة التجارية. لا يجوز لصناع المحتوى نشر مثل هذا المحتوى على قنوات التواصل الاجتماعي الخاصة به ما لم تسمح العلامة التجارية بذلك.'
                : '7.3.2 By uploading content to the platform, content creators agree to transfer all rights, title, and interest in all intellectual property rights of the content to the brand. Content creators may not publish such content on their social media channels unless the brand permits it.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '7.3.3 يتم اضافة معلومات البنكية الخاصة بصناع المحتوى في المحفظة ليتم تحويل المبلغ المتوفر في المحفظة ومنصة PushBrand غير مسؤولة عن اي معلومات غير صحيحة في البيانات المدخلة.'
                : '7.3.3 Content creators\' banking information is added to the wallet for transferring the amount available in the wallet. PushBrands is not responsible for any incorrect information entered.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '7.3.4 يتم طلب سحب الرصيد المتوفر في حساب صانع المحتوى ويتم جدولة التحويل المبلغ المستحق خلال فترة 7 - 15 يوم عمل ويتم إصدار فاتورة بالحوالة.'
                : '7.3.4 Withdrawal of the balance available in the content creator\'s account is requested and the transfer of the due amount is scheduled within 7-15 business days, and an invoice is issued for the transfer.'}
            </p>

            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? '7.6 التواصل خارج المنصة' : '7.6 Off-Platform Communication'}
            </h3>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '7.6.1 يجب على صانع المحتوى عدم مشاركة بيانات التواصل التالية (ايميل، رقم الواتس اب، رقم الجوال) والتواصل مع العميل خارج المنصة منعا باتا لحفظ حقوق الطرفين.'
                : '7.6.1 Content creators must not share the following contact information (email, WhatsApp number, phone number) and must not communicate with the client outside the platform to strictly protect the rights of both parties.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? 'يحق لمنصة PushBrands حظر صانع المحتوى من المنصة إذا خالف هذا البند.'
                : 'PushBrands has the right to ban content creators from the platform if they violate this clause.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? 'يحق لمنصة PushBrands عدم ارسال المبلغ لصانع المحتوى في أي مرحلة من مراحل العمل إذا خالف البنود السابقة.'
                : 'PushBrands has the right not to send the amount to the content creator at any stage of work if they violate the previous clauses.'}
            </p>

            {/* Brand Terms */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'شروط العلامات التجارية' : 'Brand Terms'}
            </h2>
            
            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? '8.1 شروط حسابات العلامة التجارية' : '8.1 Brand Account Terms'}
            </h3>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '8.1.1 لتسجيل حساب علامة تجارية على منصة PushBrands، يجب على العلامة التجارية الوصول إلى PushBrands وتسجيل الدخول كما هو مطلوب. يتضمن ذلك تقديم الاسم الكامل للعلامة التجارية وعنوان البريد الإلكتروني وعنوان المكتب ورقم الهاتف وتفاصيل الدفع. لا يؤدي إنشاء حساب علامة تجارية على PushBrands إلى تحمل أي رسوم.'
                : '8.1.1 To register a brand account on the PushBrands platform, the brand must access PushBrands and log in as required. This includes providing the brand\'s full name, email address, office address, phone number, and payment details. Creating a brand account on PushBrands does not incur any fees.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '8.1.2 يجب أن تلتزم العلامات التجارية بالحد الأدنى من متطلبات الإنفاق التي تطبقها PushBrands، كما هو موضح في موقع PushBrands الإلكتروني والمنصة. تحتفظ PushBrands بالحق في تغيير الحد الأدنى للإنفاق لحسابات العلامة التجارية وفقًا لتقديرها الخاص.'
                : '8.1.2 Brands must comply with the minimum spending requirements applied by PushBrands, as outlined on the PushBrands website and platform. PushBrands reserves the right to change the minimum spend for brand accounts at its sole discretion.'}
            </p>

            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? '8.6 المرتجعات أو إلغاء الحملات' : '8.6 Returns or Campaign Cancellation'}
            </h3>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '8.6.1 يحق للعلامات التجارية في إلغاء الحملات واسترجاع المبلغ المدفوع لمنصة PushBrands في حال صانع المحتوى لم يستلم المنتج او خلال فترة لا تتجاوز 3 أيام.'
                : '8.6.1 Brands have the right to cancel campaigns and recover the amount paid to PushBrands if the content creator has not received the product or within a period not exceeding 3 days.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '8.6.2 يتم استرجاع المبلغ الى محفظة ويستطيع استخدام المبلغ في الحملات أخرى'
                : '8.6.2 The amount is refunded to the wallet and can be used for other campaigns.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '8.6.3 يحق للعلامات التجارية في طلب تحويل المبلغ من المحفظة الى حساب البنك الخاصة فيهم مع تزويد منصة PushBrands بمعلومات البنكية الخاصة بحساب العلامة التجارية، يتم تحويل المبلغ خلال فترة 7 - 14 يوم عمل ومنصة PushBrand غير مسؤولة عن أي معلومات غير صحيحة في البيانات المدخلة.'
                : '8.6.3 Brands have the right to request transfer of the amount from the wallet to their bank account by providing PushBrands with the brand account\'s banking information. The amount is transferred within 7-14 business days and PushBrands is not responsible for any incorrect information entered.'}
            </p>

            {/* General Terms */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'شروط عامة' : 'General Terms'}
            </h2>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '9.1 يقر موقع PushBrands وصناع المحتوى بما يلي:'
                : '9.1 PushBrands and content creators acknowledge the following:'}
            </p>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-8 space-y-2`}>
              <li>{language === 'ar' ? '9.1.1 يجوز لشركة PushBrands الترتيب لإرسال منتج ملموس او المنتجات الرقمية إلى صناع المحتوى. وتكون النسخة التجريبية للمنتج أو الخدمة مجانية لصانع المحتوى.' : '9.1.1 PushBrands may arrange to send tangible products or digital products to content creators. The trial version of the product or service is free for the content creator.'}</li>
              <li>{language === 'ar' ? '9.1.2 لن تكون PushBrands مسؤولة بأي شكل من الأشكال عن التأخر في تسليم أو عدم وصول أي منتجات مرسلة من علامة تجارية إلى صناع المحتوى.' : '9.1.2 PushBrands will not be responsible in any way for delayed delivery or non-arrival of any products sent from a brand to content creators.'}</li>
              <li>{language === 'ar' ? '9.1.4 يتم نقل حقوق الملكية الفكرية في المحتوى الذي تم إنشاؤه إلى العلامة التجارية.' : '9.1.4 Intellectual property rights in the created content are transferred to the brand.'}</li>
              <li>{language === 'ar' ? '9.1.5 لا يوجد في شروط الخدمة هذه ما يمنح صناع المحتوى أي حقوق ملكية في حقوق الملكية الفكرية للعلامة التجارية.' : '9.1.5 Nothing in these Terms of Service grants content creators any ownership rights in the brand\'s intellectual property rights.'}</li>
              <li>{language === 'ar' ? '9.1.6 لا يوجد في شروط الخدمة هذه ما يتطلب من العلامة التجارية الاستفادة من أي من الحقوق الممنوحة للعلامة التجارية من قبل صناع المحتوى بموجب هذه الاتفاقية.' : '9.1.6 Nothing in these Terms of Service requires the brand to exercise any of the rights granted to the brand by content creators under this agreement.'}</li>
            </ul>

            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '10.1 إذا كانت منصة PushBrands غير قادرة على العمل كما هو مخطط له لأي سبب خارج عن السيطرة المعقولة لشركة PushBrands، بما في ذلك الحرب أو الإرهاب أو حالة الطوارئ أو الكوارث (بما في ذلك الكوارث الطبيعية)، أو الإصابة بفيروسات الكمبيوتر، أو الأخطاء، أو العبث، أو التدخل غير المصرح به أو أعطال فنية أو أي أحداث أخرى تفسد أو تؤثر على الإدارة أو الأمن أو العدالة أو النزاهة أو السلوك السليم لمنصة PushBrands، تحتفظ PushBrands بالحق، وفقًا لتقديرها المطلق، في إلغاء أو إنهاء أو تعديل أو تعليق منصة PushBrands.'
                : '10.1 If the PushBrands platform is unable to operate as planned for any reason beyond PushBrands\' reasonable control, including war, terrorism, emergency, or disasters (including natural disasters), computer virus infections, errors, tampering, unauthorized interference, or technical failures or any other events that corrupt or affect the administration, security, fairness, integrity, or proper conduct of the PushBrands platform, PushBrands reserves the right, at its sole discretion, to cancel, terminate, modify, or suspend the PushBrands platform.'}
            </p>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? '10.3 إذا كنت تستخدم منصة PushBrands بالنيابة عن كيان قانوني، فإنك تقر بأنه يحق لك الدخول في اتفاقية نيابة عن هذا الكيان القانوني. تشكل شروط الخدمة هذه الاتفاقية الكاملة بينك وبين PushBrands وتحكم استخدامك لمنصة PushBrands، وتحل محل أي اتفاقيات سابقة بينك وبين PushBrands.'
                : '10.3 If you are using the PushBrands platform on behalf of a legal entity, you acknowledge that you have the right to enter into an agreement on behalf of that legal entity. These Terms of Service constitute the entire agreement between you and PushBrands and govern your use of the PushBrands platform, superseding any prior agreements between you and PushBrands.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? '10.4 إذا كان أي بند أو جزء من أي بند غير قابل للتنفيذ أو غير صالح أو غير قانوني بأي شكل من الأشكال، فيجب قراءته وتعديله حتى يصبح قابلاً للتنفيذ وصالحًا وقانونيًا. إذا لم يكن ذلك ممكنًا، فسيتم فصل البند (أو الجزء المخالف حيثما أمكن) من شروط الخدمة هذه دون التأثير على إمكانية تنفيذ أو صحة أو شرعية البنود المتبقية والتي ستستمر في القوة الكاملة والتأثير.'
                : '10.4 If any clause or part of any clause is unenforceable, invalid, or illegal in any way, it must be read and modified until it becomes enforceable, valid, and legal. If this is not possible, the clause (or the offending part where possible) will be severed from these Terms of Service without affecting the enforceability, validity, or legality of the remaining clauses, which will continue in full force and effect.'}
            </p>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
