import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const translations = {
    aboutLink: {
        en: `About`,
        th: `เกี่ยวกับ`
    },
    workLink: {
        en: `Work`,
        th: `ผลงาน`,
    },
    blogLink: {
        en: `Blog`,
        th: `บล็อก`,

    },
    contractLink: {
        en: `Contract`,
        th: `การติดต่อ`,

    }
};

export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: RootState) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}
