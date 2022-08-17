import React from 'react';
const  Footer = () => {
return (
    <>
    <div className="inline-flex">
        <div className="relative gap-2.5 w-[1440px] h-[1024px] overflow-clip">
        <div className="absolute w-[1440px] h-[74px] left-[0] top-[950px] bg-[rgba(248,248,248,1)]"></div>
    <p className="absolute text-lg text-black inline  cursor-pointer left-[330px] top-[972px] font-[Al-Jazeera-Arabic]">
        سياسة الخصوصية
    </p>
    <p className="absolute text-lg text-black inline  cursor-pointer left-[1246px] top-[972px] font-[Al-Jazeera-Arabic]">تواصل معنا     </p>
    <div className="absolute w-[173px] h-[30px] left-[94px] top-[972px]">
        <p className="ltr:ml-3 rtl:mr-3 text-lg text-black font-[Al-Jazeera-Arabic]">&copy; 2022 TG Academy
      </p>
    </div>
    <div className=" flex justify-between absolute w-[124.11px] h-[25px] left-[1071px] top-[974px] cursor-pointer">
    <img src="./images/Telegram.svg"/>
        <img src="./images/Linkedin.svg"/>
        <img src="./images/facebook.svg"/>
     
    </div>
    </div>
    </div>
    </>
)
}
export default Footer;