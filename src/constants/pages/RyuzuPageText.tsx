import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store/store';



export const translations = {

    hintText: {

        en: `work`,

        th: `ผลงาน`,

    },

    subTitleText: {

        en: `Ryuzu is an e-commerce website that develop by React+Vite+TypeScript.`,

        th: `Ryuzu คือเว็บไซต์ a e-commerce พัฒนาโดยใช้เฟรมเวิร์ก React+Vite+TypeScript`,



    },

    descriptionText: {

        en: `Ryuzu is an e-commerce website that user can register and login. the website is use MySQL for storage data and use Node.js server. In full condition, user can login to admin page side and user can input product that it will display on home page`,

        th: `Ryuzu คือเว็บไซต์ a e-commerce ที่ผู้ใช้สามารถสร้างบัญชีและเข้าสู่ระบบ ตัวเว็บไซต์ใช้ฐานข้อมูล MySQL สำหรับเก็บข้อมูลและใช้ Node.js เพื่อสร้าง Server เมื่อเปิดทุกอย่างสำเร็จผูใช้ที่เป็นแอดมินสามารถเข้าสู้ระบบเพื่อไปที่หน้า Dashboard และสามารถใส่ข้อมูลสินค้าได้โดยตัวสินค้าจะมาแสดงที่หน้าแรก`,

    },

}



export function getText<T extends keyof typeof translations>(textTitle: T): string {

    const language = useSelector((state: RootState) => state.language.language);

    return (translations[textTitle] as Record<string, string>)[language];

}