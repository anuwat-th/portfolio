import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const translations = {
    heroText: {
        en: `Hello World`,
        th: `สวัสดีชาวโลก`,
    },
    heroDescription:{
        en: `I’m a junior Frontend Developer and UX&UI Designer. I focus on create UI components for web and mobile application by React&React Native`,
        th: `ผมเป็นนักพัฒนาส่วนหน้า (Frontend) และนักออกแบบ UX&UI ผมมีความถนัดในการสร้างเว็บไซต์และแอปพลิเคชันบนสมาร์ทโฟนด้วยเฟรมเวิร์ค React และ React Native`,
    },
    heroButton: {
        en: `See Work`,
        th: `ดูผลงาน`,
    },

};

export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: RootState) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}
