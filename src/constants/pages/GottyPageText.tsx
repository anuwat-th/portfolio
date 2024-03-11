import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store/store';



export const translations = {

    hintText: {

        en: `work`,

        th: `ผลงาน`,

    },

    subTitleText: {

        en: `Gotty, A social media application develop with React Native+TypeScript`,

        th: `Gotty, แอปพลิเคชัรโซเชียลที่พัฒนาด้วย React Native+TypeScript`,



    },

    descriptionText: {

        en: `Gotty is an application developed using the React Native framework. It presents the concept of a social media application where users can share photos and videos and users can like and comment.`,

        th: `Gotty คือแอปพลิเคชันที่พัฒนาโดยใช้เฟรมเวิร์ก React Native โดยโครงงานนี้นำเสนอแนวคิดของแอปพลิเคชันโซเชียลที่ผู้ฝช้สามารถใช้เพื่อแบ่งปันรูปภาพและวิดีโอและผู้ใช้ยังสามารถกดไลค์และแสดงความคิดเห็นได้ด้วย`,

    },

};



export function getText<T extends keyof typeof translations>(textTitle: T): string {

    const language = useSelector((state: RootState) => state.language.language);

    return (translations[textTitle] as Record<string, string>)[language];

}