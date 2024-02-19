import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const translations = {
    heroTitle1Text: {
        en: `I’m a Junior Frontend Developer`,
        th: `ผมคือนักพัฒนา Frontend และ`,
    },
    heroTitle2Text: {
        en: `and UX/UI Designer`,
        th: `นักออกแบบ UX/UI`,
    },
    heroDescription1Text: {
        en: `I’ve specialized in designing and developing websites and mobile applications`,
        th: `ผมมีความถนัดในการออกแบบและพัฒนาเว็บไซต์และแอปพลิเคชัน`,
    },
    heroDescription2Text: {
        en: `by using the frameworks React and React Native.`,
        th: `ด้วยเฟรมเวิร์ก React และ React Native`,
    },
    heroButton: {
        en: `See Works`,
        th: `ดูผลงาน`,
    }
};

export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: RootState) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}
