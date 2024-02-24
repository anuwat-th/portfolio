import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store/store';



export const translations = {

    comingSoonText: {

        en: `Coming soon`,

        th: `เร็วๆ นี้`,

    },

};



export function getText<T extends keyof typeof translations>(textTitle: T): string {

    const language = useSelector((state: RootState) => state.language.language);

    return (translations[textTitle] as Record<string, string>)[language];

}