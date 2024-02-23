import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const translations = {
    introText: {
        en: `I love to design and coding.`,
        th: `ผมรักการออกแบบและการเขียนโค๊ด`,
    },
    content1Text: {
        en: `Hello, my name's Anuwat Thongkham. I’m studying at the College of Computing. Khon Kaen University, 3rd year, Computer Science major. I’m passionate about designing and developing applications and websites. I believe the best UI design can enhance the attractiveness and reliability of websites or applications. I’ve a passion for making prototypes exactly as designed. I think that's really amazing.`,
        th: `สวัสดีครับ ผมชื่อ อนุวัฒน์ ทองคำ ผมกำลังศึกษาอยู่ที่ วิทยาลัยการคอมพิวเตอร์ มหาวิทยาลัยขอนแก่น ชั้นปีที่ 3 สาขาวิทยาการคอมพิวเตอร์ ผมมีความสนในเกี่ยวกับการออกแบบและพัฒนาแอปพลิเคชันและเว็บไซต์ ผมเชื่อว่าการออกแบบหน้าตา UI ที่ดีสามารถยกระดับความน่าดึงดูดและสามารถสร้างความน่าเชื่อถือให้แก่เว็บไซต์หรือแอปพลิเคชันของเราได้ ผมมีแรงบัลดาลใจในการเขียนโปรแกรมสร้าง prototype ของจริงให้ออกมาตรงตามที่เราออกแบบไว้ถือเป็นสิ่งที่ทึ่งครับ`,
    },
    content2Text: {
        en: `In frontend development, I've skills in using the React and React Native frameworks. I prefer TypeScript. I can use basic Redux, which I use to create a language's state for multi-language systems. For web development, I've used Sass and Route, and I have good CSS or Sass writing skills to create complex and beautiful components as designed.`,
        th: `ในด้านการพัฒนา Frontend ผมมีทักษณะในการใช้เฟรมเวิร์ก React และ React Native ผมนิยมใช้ TypeScript ผมสามรถใช้ Redux พื้นฐานได้โดยผมเคยใช้สำหรับสร้าง State ของภาษาสำหรับสร้างระบบรองรับหลายภาษา ในการพัฒนาเว็บไซต์ผมเคยใช้ Sass และ Route และผมมีทักษะในการเขียน CSS หรือ  Sass เป็นอย่างดีในการสร้าง UI ที่ซับซ้อนและสวยงามให้ตรงตามที่ออกแบบไว้`,
    },
    skillText: {
        en: `Skills`,
        th: `ทักษะ`,
    },

};

export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: RootState) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}
