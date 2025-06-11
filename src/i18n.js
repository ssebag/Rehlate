import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';

// استرجاع اللغة المخزنة
const storedLanguage = localStorage.getItem('language');
const language = storedLanguage ? storedLanguage : 'en';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: language, // اللغة الحالية
    fallbackLng: 'en', // اللغة البديلة
    debug: true, // تفعيل وضع التصحيح
    backend: {
      loadPath: function(language, namespace) {
        return '/locales/' + language + '/' + namespace + '.json';
      },
    },
    interpolation: {
      escapeValue: false, // لا تحتاج للهروب من القيم
    },
    ns: ['navbar', 'hero',  'rehlate_section', 'plans_section', 'services_section', 'contact_section', 'footer'], // إضافة أسماء الأقسام هنا
    defaultNS: 'navbar', // تحديد القسم الافتراضي
  });

export default i18n;
