import { useLanguage } from '@/contexts/LanguageContext';
import { Footer } from '@/components/Footer';

export const PrivacyPolicy = () => {
  const { language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-[#6156F6] pt-24 sm:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
            {language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-4xl">
          <div className={`prose prose-lg max-w-none ${language === 'ar' ? 'text-right' : ''}`} dir={language === 'ar' ? 'rtl' : 'ltr'}>
            
            {/* Introduction */}
            <p className="text-[#434E4E] mb-6 leading-relaxed">
              {language === 'ar'
                ? 'توفر سياسة الخصوصية هذه معلومات حول كيفية تعامل PushBrands مع البيانات الشخصية عندما يستخدم الأفراد تطبيق PushBrands، والتسجيل على منصة PushBrands على الموقع الإلكتروني، وزيارة موقع PushBrands الإلكتروني، بالإضافة إلى حسابات شبكة PushBrands الاجتماعية، وتقديم الاستفسارات والشكاوى والطلبات إلى PushBrands، وعندما تتواصل PushBrands مع الأفراد في حالات أخرى.'
                : 'This Privacy Policy provides information about how PushBrands handles personal data when individuals use the PushBrands application, register on the PushBrands platform on the website, visit the PushBrands website, as well as PushBrands social network accounts, submit inquiries, complaints, and requests to PushBrands, and when PushBrands communicates with individuals in other cases.'}
            </p>
            <p className="text-[#434E4E] mb-6 leading-relaxed">
              {language === 'ar'
                ? 'توفر سياسة الخصوصية هذه معلومات حول معالجة البيانات.'
                : 'This Privacy Policy provides information about data processing.'}
            </p>
            <p className="text-[#434E4E] mb-6 leading-relaxed">
              {language === 'ar'
                ? 'نبلغك أيضًا أن التغييرات في وظائف التطبيق والموقع الإلكتروني ومنصة PushBrands وفي الحلول التكنولوجية وكذلك في الخدمات التي تقدمها PushBrands يمكن أن تؤدي إلى تغييرات في أنشطة معالجة البيانات في PushBrands. ولذلك، يجوز لشركة PushBrands تجديد سياسة الخصوصية هذه وتغييرها من جانب واحد. وفي ضوء ذلك، نوصي بأن يقوم صاحب البيانات بمراجعة سياسة الخصوصية هذه بشكل دوري.'
                : 'We also inform you that changes in the functionality of the application, website, and PushBrands platform, as well as in technological solutions and services provided by PushBrands, may lead to changes in PushBrands\' data processing activities. Therefore, PushBrands may unilaterally renew and change this Privacy Policy. In light of this, we recommend that data subjects review this Privacy Policy periodically.'}
            </p>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? 'تضمن PushBrands أن يتم التعامل مع أي بيانات شخصية محددة في سياسة الخصوصية هذه وفقًا لأعلى معايير الأمان والسرية، مع الالتزام الصارم بلوائح الخصوصية المعمول بها.'
                : 'PushBrands ensures that any personal data specified in this Privacy Policy is handled in accordance with the highest standards of security and confidentiality, with strict adherence to applicable privacy regulations.'}
            </p>

            {/* Content Creators Section */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'صناع المحتوى' : 'Content Creators'}
            </h2>
            
            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? 'فئات البيانات الشخصية التي تمت معالجتها:' : 'Categories of Personal Data Processed:'}
            </h3>

            <h4 className="text-lg font-medium text-[#1d1d1d] mb-2">
              {language === 'ar' ? 'بيانات التسجيل في التطبيق وإنشاء حساب في التطبيق وتسجيل الدخول إلى الحساب:' : 'App Registration, Account Creation, and Login Data:'}
            </h4>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-4 space-y-2`}>
              <li>{language === 'ar' ? 'المعلومات التعريفية (الاسم، اللقب، الجنس، البلد، تاريخ الميلاد)' : 'Identification information (name, surname, gender, country, date of birth)'}</li>
              <li>{language === 'ar' ? 'تفاصيل الاتصال (عنوان البريد الإلكتروني، رقم الهاتف المحمول)' : 'Contact details (email address, mobile phone number)'}</li>
              <li>{language === 'ar' ? 'معلومات إنشاء الحساب (عنوان البريد الإلكتروني، كلمة مرور تسجيل الدخول، الصورة، المدينة، العنوان)' : 'Account creation information (email address, login password, photo, city, address)'}</li>
              <li>{language === 'ar' ? 'إعدادات تسجيل الدخول الشخصية عندما يقوم المنشئ بتسجيل الدخول إلى التطبيق باستخدام تسجيلات الدخول إلى Google وApple.' : 'Personal login settings when the creator logs into the app using Google and Apple logins.'}</li>
            </ul>

            <h4 className="text-lg font-medium text-[#1d1d1d] mb-2">
              {language === 'ar' ? 'بيانات استخدام التطبيق:' : 'App Usage Data:'}
            </h4>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-4 space-y-2`}>
              <li>{language === 'ar' ? 'المحتوى الذي أنشأه المنشئ (بما في ذلك الفيديو)' : 'Content created by the creator (including video)'}</li>
              <li>{language === 'ar' ? 'الشروط والأحكام الفردية لاتفاقية منشئ المحتوى مع PushBrands بشأن استخدام التطبيق (شروط الخدمة والاتفاقيات الأخرى، إن وجدت) وتفاصيل تنفيذها' : 'Individual terms and conditions of the creator\'s agreement with PushBrands regarding app usage (Terms of Service and other agreements, if any) and implementation details'}</li>
              <li>{language === 'ar' ? 'رقم الحساب/ Cliq أو رقم المحفظة' : 'Account number/Cliq or wallet number'}</li>
              <li>{language === 'ar' ? 'العنوان (فقط في حالة إرسال عينات المنتج إلى المنشئ)' : 'Address (only when product samples are sent to the creator)'}</li>
              <li>{language === 'ar' ? 'مقاسات الملابس والأحذية (فقط في حالة إرسال عينات المنتج إلى المنشئ)' : 'Clothing and shoe sizes (only when product samples are sent to the creator)'}</li>
            </ul>

            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? 'أي وسيلة أخرى يقدم من خلالها الفرد معلومات شخصية إلى PushBrands، بما في ذلك ماديًا أو إلكترونيًا؛ وأي وسيلة أخرى نجمع من خلالها معلومات شخصية عنك بشكل قانوني.'
                : 'Any other means by which an individual provides personal information to PushBrands, including physically or electronically; and any other means by which we legally collect personal information about you.'}
            </p>

            {/* Purposes and Legal Basis for Creators */}
            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? 'الأغراض والأساس القانوني لمعالجة البيانات:' : 'Purposes and Legal Basis for Data Processing:'}
            </h3>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? 'تقوم الشركة بمعالجة البيانات الشخصية للمنشئ المذكورة أعلاه للأغراض التالية وبناءً على الأساس القانوني التالي:'
                : 'The company processes the above-mentioned creator\'s personal data for the following purposes and based on the following legal basis:'}
            </p>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-8 space-y-4`}>
              <li>
                {language === 'ar'
                  ? 'لتمكين صناع المحتوى من التسجيل في التطبيق وإنشاء حساب واستخدام التطبيق، بالإضافة إلى تنفيذ الحقوق والالتزامات المتبادلة بين PushBrands وصانع المحتوى المنصوص عليها في الاتفاقيات المبرمة بين PushBrands وصانع المحتوى. الأساس القانوني لمعالجة البيانات لهذا الغرض هو إبرام وتنفيذ عقد مع صانع المحتوى.'
                  : 'To enable content creators to register in the app, create an account, and use the app, as well as to implement the mutual rights and obligations between PushBrands and the content creator as stipulated in the agreements between PushBrands and the content creator. The legal basis for processing data for this purpose is the conclusion and execution of a contract with the content creator.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'تحسين وتطوير التطبيق ووظائفه وخدمات PushBrands. من خلال تحليل البيانات، تكتسب PushBrands فهمًا أفضل لخدماتها واستخدام التطبيق، مما يساعد PushBrands على تحسين التطبيق وخدماته. الأساس القانوني لمعالجة البيانات لهذا الغرض هو المصلحة المشروعة لشركة PushBrands في تقديم خدمات ذات صلة ومبتكرة ومكيفة وحديثة وآمنة.'
                  : 'Improving and developing the app, its functionality, and PushBrands services. Through data analysis, PushBrands gains a better understanding of its services and app usage, helping PushBrands improve the app and its services. The legal basis for processing data for this purpose is PushBrands\' legitimate interest in providing relevant, innovative, adapted, modern, and secure services.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'إرسال عروض تسويقية مباشرة من PushBrands إلى صانع المحتوى. الأساس القانوني لمعالجة البيانات لهذا الغرض هو المصلحة المشروعة لشركة PushBrands في تسويق سلعها وخدماتها. يتم استخدام البيانات لهذا الغرض حتى يعرب صانع المحتوى عن عدم موافقته على استخدام البيانات لهذا الغرض.'
                  : 'Sending direct marketing offers from PushBrands to the content creator. The legal basis for processing data for this purpose is PushBrands\' legitimate interest in marketing its goods and services. Data is used for this purpose until the content creator expresses their disagreement with the use of data for this purpose.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'لضمان التواصل بين PushBrands وصانع المحتوى. الأساس القانوني لمعالجة بيانات صانع المحتوى لهذا الغرض هو إبرام وتنفيذ الاتفاقية مع المصلحة المشروعة صانع المحتوى وPushBrands في ضمان خدمة عملاء ذات جودة مناسبة.'
                  : 'To ensure communication between PushBrands and the content creator. The legal basis for processing content creator data for this purpose is the conclusion and execution of the agreement with the content creator and PushBrands\' legitimate interest in ensuring appropriate quality customer service.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'الإعلان والتسويق والعرض العام لشركة PushBrands. لا يجوز معالجة بيانات صانع المحتوى لهذا الغرض إلا بموافقة منفصلة من صانع المحتوى.'
                  : 'Advertising, marketing, and public presentation of PushBrands. Content creator data may only be processed for this purpose with the separate consent of the content creator.'}
              </li>
            </ul>

            {/* Brand Section */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'العلامة التجارية' : 'Brands'}
            </h2>

            <h4 className="text-lg font-medium text-[#1d1d1d] mb-2">
              {language === 'ar' ? 'معلومات الاتصال المطلوبة لإنشاء حساب العلامة التجارية على منصة PushBrands:' : 'Contact Information Required to Create a Brand Account on the PushBrands Platform:'}
            </h4>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-4 space-y-2`}>
              <li>{language === 'ar' ? 'رقم هاتف ممثل العلامة التجارية' : 'Brand representative\'s phone number'}</li>
              <li>{language === 'ar' ? 'البريد الإلكتروني لممثل العلامة التجارية' : 'Brand representative\'s email'}</li>
              <li>{language === 'ar' ? 'رابط المتجر لممثل العلامة التجارية' : 'Brand representative\'s store link'}</li>
            </ul>

            <h4 className="text-lg font-medium text-[#1d1d1d] mb-2">
              {language === 'ar' ? 'بيانات ممثل العلامة التجارية اللازمة للتنفيذ السليم للعقد المبرم بين العلامة التجارية وPushBrands ولتقديم خدمات PushBrands:' : 'Brand Representative Data Necessary for Proper Execution of the Contract Between the Brand and PushBrands and for Providing PushBrands Services:'}
            </h4>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-8 space-y-2`}>
              <li>{language === 'ar' ? 'معلومات تعريفية (الاسم، الاسم الأخير)' : 'Identification information (first name, last name)'}</li>
              <li>{language === 'ar' ? 'تفاصيل الاتصال (رقم الهاتف، عنوان البريد الإلكتروني)' : 'Contact details (phone number, email address)'}</li>
              <li>{language === 'ar' ? 'البيانات المتعلقة بتقديم الخدمات للعلامة التجارية أو تنفيذ العقد' : 'Data related to providing services to the brand or executing the contract'}</li>
            </ul>

            {/* Purposes and Legal Basis for Brands */}
            <h3 className="text-xl font-semibold text-[#1d1d1d] mb-3">
              {language === 'ar' ? 'الأغراض والأساس القانوني لمعالجة البيانات:' : 'Purposes and Legal Basis for Data Processing:'}
            </h3>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? 'تقوم PushBrands بمعالجة البيانات الشخصية لممثل العلامة التجارية المذكورة أعلاه للأغراض التالية واستنادًا إلى الأساس القانوني التالي:'
                : 'PushBrands processes the above-mentioned brand representative\'s personal data for the following purposes and based on the following legal basis:'}
            </p>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-8 space-y-4`}>
              <li>
                {language === 'ar'
                  ? 'لتمكين العلامة التجارية من التسجيل على منصة PushBrands وإنشاء حساب واستخدام المنصة، بالإضافة إلى تنفيذ الحقوق والالتزامات بين PushBrands والعلامة التجارية المنصوص عليها في شروط الخدمة والعقود الأخرى. الأساس القانوني لمعالجة البيانات لهذا الغرض هو المصلحة المشروعة لشركة PushBrands.'
                  : 'To enable the brand to register on the PushBrands platform, create an account, and use the platform, as well as to implement the rights and obligations between PushBrands and the brand as stipulated in the Terms of Service and other contracts. The legal basis for processing data for this purpose is PushBrands\' legitimate interest.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'تحسين وتطوير منصة PushBrands ووظائفها والموقع الإلكتروني وخدمات PushBrands. ومن خلال تحليل البيانات، تكتسب PushBrands فهمًا أفضل لخدماتها واستخدام المنصة، مما يساعد PushBrands على تحسين المنصة وخدماتها. الأساس القانوني لمعالجة البيانات لهذا الغرض هو المصلحة المشروعة لشركة PushBrands في تقديم خدمات ذات صلة ومبتكرة ومكيفة وحديثة وآمنة.'
                  : 'Improving and developing the PushBrands platform, its functionality, the website, and PushBrands services. Through data analysis, PushBrands gains a better understanding of its services and platform usage, helping PushBrands improve the platform and its services. The legal basis for processing data for this purpose is PushBrands\' legitimate interest in providing relevant, innovative, adapted, modern, and secure services.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'لضمان التواصل بين PushBrands والعلامة التجارية. الأساس القانوني لمعالجة بيانات ممثل العلامة التجارية لهذا الغرض هو المصلحة المشروعة لشركة PushBrands في ضمان خدمة العملاء بالجودة المناسبة.'
                  : 'To ensure communication between PushBrands and the brand. The legal basis for processing brand representative data for this purpose is PushBrands\' legitimate interest in ensuring appropriate quality customer service.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'إرسال عروض تسويقية مباشرة من PushBrands إلى العلامة التجارية. الأساس القانوني لمعالجة البيانات لهذا الغرض هو المصلحة المشروعة لشركة PushBrands في تسويق سلعها وخدماتها.'
                  : 'Sending direct marketing offers from PushBrands to the brand. The legal basis for processing data for this purpose is PushBrands\' legitimate interest in marketing its goods and services.'}
              </li>
            </ul>

            {/* Acknowledgment of Privacy Policy */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'التعرف على سياسة الخصوصية:' : 'Acknowledgment of Privacy Policy:'}
            </h2>
            <p className="text-[#434E4E] mb-8 leading-relaxed">
              {language === 'ar'
                ? 'باستخدام التطبيق، يقر صانع المحتوى والعلامة التجارية بأنه قد قرأ سياسة الخصوصية وفهمها بعناية ويقبل معالجة بياناته الشخصية بواسطة التطبيق.'
                : 'By using the app, content creators and brands acknowledge that they have carefully read and understood the Privacy Policy and accept the processing of their personal data by the app.'}
            </p>

            {/* Data Storage */}
            <h2 className="text-2xl font-bold text-[#1d1d1d] mb-4">
              {language === 'ar' ? 'تخزين البيانات:' : 'Data Storage:'}
            </h2>
            <p className="text-[#434E4E] mb-4 leading-relaxed">
              {language === 'ar'
                ? 'يسعى PushBrands إلى سرية المعلومات وسياسة الخصوصية الخاصة بالمستخدمين ولن تخالف أحكام هذه القواعد والسياسة ولكن نظراً لعدم إمكانية ضمان ذلك 100% عبر وسائل الإنترنت فإن PushBrands ينوّه بما يلي:'
                : 'PushBrands strives for information confidentiality and user privacy policy and will not violate the provisions of these rules and policy, but since 100% guarantee is not possible via internet means, PushBrands notes the following:'}
            </p>
            <ul className={`list-disc ${language === 'ar' ? 'pr-6' : 'pl-6'} text-[#434E4E] mb-8 space-y-4`}>
              <li>
                {language === 'ar'
                  ? 'يسعى PushBrands للحفاظ على جميع المعلومات الخاصة بالمستخدم وألا يطلع عليها أحد بما لا يخالف هذه السياسة المعمول بها.'
                  : 'PushBrands strives to maintain all user information and ensure that no one views it in violation of this applicable policy.'}
              </li>
              <li>
                {language === 'ar'
                  ? 'يعمل PushBrands على حماية هذه المعلومات عن طريق "سيرفرات معيّنة" محمية بموجب أنظمة الحماية الإلكترونية "نظامي برمجي أو سوفتوير معين".'
                  : 'PushBrands protects this information through "specific servers" protected by electronic protection systems "specific software systems".'}
              </li>
              <li>
                {language === 'ar'
                  ? 'غير أنه نظراً لأن شبكة الانترنت لا يمكن ضمانها 100% لما قد يطرأ من اختراق أو فيروسات على أنظمة الحماية الالكترونية وعلى جدران الحماية المعمول به في PushBrands فإن PushBrands ينصح المستخدمين بالحفاظ على معلوماتهم بسرية تامة، وعدم إفشاء أي معلومات يراها المستخدم هامة جداً له، وهذا حرصاً من PushBrands في توجيه وإرشاد المستخدمين.'
                  : 'However, since the internet cannot be 100% guaranteed due to potential hacking or viruses on electronic protection systems and firewalls used by PushBrands, PushBrands advises users to keep their information completely confidential and not disclose any information that users consider very important to them. This is PushBrands\' concern in guiding and advising users.'}
              </li>
            </ul>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
