import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const translations = {
    introText: {
        en: `Hello, my name is`,
        th: `สวัสดี, ชื่อของผมคือ`,
    },
    myNameText: {
        en: `Anuwat Thongkham`,
        th: `อนุวัฒน์ ทองคำ`,
    },
    descriptionText: {
        en: `Frontend Developer and UX/UI Designer. Fluent in React and React Native.`,
        th: `นักพัฒนา Frontend และ นักออกแบบ UX/UI, มีความถนัดในการใช้ React และ React Native`,
    }
};

export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: RootState) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}
