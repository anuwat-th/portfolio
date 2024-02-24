import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store/store';



export const translations = {

    titleText: {

        en: ` Work`,

        th: `ผลงาน`,

    },

    descriptionText: {

        en: `*Mostly is incomplete. Please enjoy.`,

        th: `*ส่วนใหญ่เป็นโปรเจ็คที่ไม่เสร็จสมบูรณ์`,

    },



    detailText: {

        en: `More detail`,

        th: `รายละเอียดเพิ่มเติม`

    },

    work1Title: {

        en: `Ryuzu`,

        th: `Ryuzu`,

    },

    work1Description: {

        en: `Ryuzu web is a e-commerce website. I had create this project for System Analysis and Design class in first semester 2023. `,

        th: `Ryuzu เป็นเว็บไซต์ e-commerce สร้างตอนเรียนวิชา System Analysis and Design ตอนเทอมแรกปี 2023`,

    },

    work2Title: {

        en: `Gotty`,

        th: `Gotty`,

    },

    work2Description: {

        en: `Gotty is my final project. it’s represent concept of mobile social media application that user can share photos and videos.`,

        th: `Gotty จะเป็นโปรเจ็คจบการศึกษาของผม เป็นโปรเจ็คที่นำเสนอเกี่ยวกับแนวคิดของแอปพลิเคชันโซเชียลมีเดียที่ผู้ใช้งานสามรถใช้งานเพื่อแบ่งปันรูปภาพและวิดีโอ`,

    }





};



export function getText<T extends keyof typeof translations>(textTitle: T): string {

    const language = useSelector((state: RootState) => state.language.language);

    return (translations[textTitle] as Record<string, string>)[language];

}