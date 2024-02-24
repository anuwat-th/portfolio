import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store/store';



export const translations = {

    titleText: {

        en: `About`,

        th: `เกี่ยวกับ`,

    },

    descriptionText: {

        en: `Hello, My name is Anuwat Thongkham. I am really passionate about design and coding that not only just look amazing but also are  easy for people to understand and relate with. I have spent a lot of time learning how to design and code for my college study period, and now I use those skills to create awesome deign. I love the challenge of bringing ideas to design more better. It's all about finding that perfect balance between creativity and functionality, and I am always learning to make sure I deliver the best possible results.`,

        th: `สวัสดีครับ ผมชื่อ อนุวัฒน์ ทองคํา ผมหลงใหลในการออกแบบและการเขียนโค้ดที่ไม่เพียงแต่ทำให้มันดูน่าทึ่งเท่านั้น แต่ยังต้องทำให้ผู้คนเข้าใจและมีปฏิสัมพันธ์ได้ง่ายอีกด้วย ผมใช้เวลามากมายในการเรียนรู้เกี่ยวกับการออกแบบและเขียนโค้ดในช่วงเวลาที่เรียนในมหาวิทยาลัย และตอนนี้ผมใช้ทักษะเหล่านั้นเพื่อสรรค์สร้างการออกแบบที่ดี ผมชอบความท้าทายในการนำไอเดียใหม่ๆ มาใช้ในการออกแบบให้ดีขึ้น ทั้งหมดเพื่อที่จะการค้นหาสมดุลที่สมบูรณ์แบบระหว่างความคิดสร้างสรรค์และการตอบสนองการทำงาน และผมชอบเรียนรู้และปรับปรุงอยู่ตัวเองอยู่เสมอเพื่อให้แน่ใจว่าผมจะสามารถได้ผลลัพธ์ที่ดีที่สุดเท่าที่จะเป็นไปได้`,

    },

    passionText: {

        en: `“My passion is about connecting people by design”`,

        th: `"แรงบัลดาลใจของผมคือการที่ได้เชื่อมโยงผู้คนด้วยการออกแบบ"`,

    },

    buttonText: {

        en: `Resume`,

        th: `เรซูเม่`

    }

};



export function getText<T extends keyof typeof translations>(textTitle: T): string {

    const language = useSelector((state: RootState) => state.language.language);

    return (translations[textTitle] as Record<string, string>)[language];

}