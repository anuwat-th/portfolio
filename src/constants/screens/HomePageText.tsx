import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store/store';

export const translations = {
    heroText: {
        en: `Hello World`,
        th: `สวัสดีชาวโลก`,
    },
    heroDescriptionText:{
        en: `I’m a junior Frontend Developer and UX&UI Designer. I’ve specialized in designing and creating websites and mobile applications by using the frameworks React and React Native.`,
        th: `ผมเป็นนักพัฒนา Front-end และนักออกแบบ UX&UI ผมมีความถนัดในด้านการออกแบบและสร้างเว็บไซต์และแอปพลิเคชันด้วยเฟรมเวิร์ก React และ React Native`,
    },
    heroButton: {
        en: `See Work`,
        th: `ดูผลงาน`,
    },
    bioPrimaryText:{
        en: `My name's`,
        th: `ชื่อของผมคือ`,
    },
    bioNameText:{
        en: `Anuwat Thongkham`,
        th: `อนุวัฒน์ ทองคำ`,
    },
    bioContent1Text:{
        en: `I'm a passionate Junior Frontend Developer and UX&UI Designer with a belief that design is a guiding force in today's internet-connected world. Frontend design showcases not just functionality, but also a brand's vision and identity, making it more than just pixels on a screen.`,
        th: `ผมเป็นนักพัฒนา Front-end และนักออกแบบ UX&UI ผมเชื่อว่าการออกแบบ Front-end นั้นมีความสำคัญอย่างมากในโลกที่เชื่อมต่อกันด้วยอินเทอร์เน็ตในปัจจุบัน การออกแบบส่วนหน้าไม่เพียงแต่นำเสนอฟังก์ชันการทำงานเท่านั้น แต่ยังรวมถึงวิสัยทัศน์และเอกลักษณ์ของแบรนด์ ทำให้มันเป็นมากกว่าพิกเซลบนหน้าจอ`,
    },
    bioContent2Text:{
        en: `I’ve studying in Computer Science at Khon Kaen University in Thailand. I've experience with React and React Native frameworks and I specialize in UX&UI design,I’ve experienced with using tools like Figma.`,
        th: `ผมกำลังศึกษาอยู่ สาขาวิทยาการคอมพิวเตอร์ ที่มหาวิทยาลัยขอนแก่น ประเทศไทย ผมมีประสบการณ์ในการใช้เฟรมเวิร์ก React และ React Native และผมมีความถนัดในด้านการออกแบบ UX&UI และมีประสบการณ์ในการใช้งาน Figma`,
    },
    bioToolTitle1Text:{
        en: `Tools`,
        th: `เครื่องมือ`,
    },
    bioToolTitle2Text:{
        en: `Languages and Frameworks`,
        th: `ภาษาและเฟรมเวิร์ก`,
    },
    contractHeaderText:{
        en: `Get Started `,
        th: `มาเริ่มกันเลย`,
    },
    contractDescriptionText:{
        en: `I’m looking for an opportunity on exciting workplace where had an interest in UX&UI design. Please contract by email.`,
        th: `ผมกำลังมองหาโอกาสในสถานที่ที่น่าตื่นเต้นและเป็นที่ที่มีความสนใจในงานด้านการออกแบบ UX&UI โปรดติดต่อทางอีเมล`,
    },
    contractButton: {
        en: `Send Email`,
        th: `ส่งอีเมล`,
    },

};

export function getText<T extends keyof typeof translations>(textTitle: T): string {
    const language = useSelector((state: RootState) => state.language.language);
    return (translations[textTitle] as Record<string, string>)[language];
}
