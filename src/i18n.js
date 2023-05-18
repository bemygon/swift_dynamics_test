import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'EN',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      EN: {
        translation: {
          description: {
            part1: 'this is a cat',
            part2: 'Layout & Style',
            part3: 'Connect API',
            part4: 'Form & Table',
            part5: 'Test 1',
            part6: 'Test 2',
            part7: 'Test 3',
            part8: 'Move shape',
            part9: 'Move position',
            part10: 'Home',
            
          }
        }
      },
      TH: {
        translation: {
          description: {
            part1: 'นี้คือแมว',
            part2: 'การจัดการหน้าเว็บ',
            part3: 'การเชื่อมต่อ API',
            part4: 'การจัดการหน้าฟอร์ม',
            part5: 'แบบทดสอบที่ 1',
            part6: 'แบบทดสอบที่ 2',
            part7: 'แบบทดสอบที่ 3',
            part8: 'เลื่อนรูปแบบ',
            part9: 'เปลี่ยนตำแหน่ง',
            part10: 'หน้าหลัก',
          
          }
        }
      }
    }
  });

export default i18n;