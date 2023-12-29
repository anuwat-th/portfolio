import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const translations = {
    footerText: {
        en: `Create by Anuwat Thongkham`,
        th: `สร้างโดย อนุวัฒน์ ทองคำ`,
    },
};

export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: RootState) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}
