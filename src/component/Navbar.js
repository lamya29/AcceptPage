import React from 'react';
const  Navbar = () => {
  return (
    <div className="container-fluid mt-63 py-0 px-30 relative bg-white font-Jazeera">
      <div className="flex mx-auto my-0 justify-between items-center	">
      <div className="flex p-10 justify-between items-center">
    
      <img src="./images/avatar.svg" className='mr-6' alt="avatar" />
      <p className='font-regular text-lg '>اسم البطل</p>
      </div>
      <ul className= "flex transition all .4s ease-in text-xl	font-bold">
      <li className="p-4"><a className="
          inline-block
          relative
          cursor-pointer
          transition-all
          duration-500
          before:content-['']
          before:absolute
          before:-bottom-2
          before:right-0
          before:w-0
          before:h-1
          before:rounded-full
          before:opacity-0
          before:transition-all
          before:duration-500
          before:bg-[#FBD675]
          hover:before:w-full
          hover:before:opacity-100" href="#" >أعمالنا </a></li>
          
    
         <li className="p-4"><a className="
          inline-block
          relative
          cursor-pointer
          transition-all
          duration-500
          before:content-['']
          before:absolute
          before:-bottom-2
          before:right-0
          before:w-0
          before:h-1
          before:rounded-full
          before:opacity-0
          before:transition-all
          before:duration-500
          before:bg-[#FBD675]
          hover:before:w-full
          hover:before:opacity-100
        " href="#" >فريقنا  </a></li>
         <li className="p-4"><a className="
          inline-block
          relative
          cursor-pointer
          transition-all
          duration-500
          before:content-['']
          before:absolute
          before:-bottom-2
          before:right-0
          before:w-0
          before:h-1
          before:rounded-full
          before:opacity-0
          before:transition-all
          before:duration-500
          before:bg-[#FBD675]
          hover:before:w-full
          hover:before:opacity-100
        " href="#" >المسارات </a></li>
              <li className="p-4"><a className="
          inline-block
          relative
          cursor-pointer
          transition-all
          duration-500
          before:content-['']
          before:absolute
          before:-bottom-2
          before:right-0
          before:w-0
          before:h-1
          before:rounded-full
          before:opacity-0
          before:transition-all
          before:duration-500
          before:bg-[#FBD675]
          hover:before:w-full
          hover:before:opacity-100
        " href="#" >ماذا نقدم </a></li>


    
        <li className="p-4"><a className="
          inline-block
          relative
          cursor-pointer
          transition-all
          duration-500
          before:content-['']
          before:absolute
          before:-bottom-2
          before:right-0
          before:w-0
          before:h-1
          before:rounded-full
          before:opacity-0
          before:transition-all
          before:duration-500
          before:bg-[#FBD675]
          hover:before:w-full
          hover:before:opacity-100
        " href="#about" >من نحن </a></li>
        <li className="p-4"> <a  className="
          inline-block
          relative
          cursor-pointer
          transition-all
          duration-500
       
        
          before:content-['']
          before:absolute
          before:-bottom-2
          before:right-0
          before:w-0
          before:h-1
          before:rounded-full
          before:opacity-0
          before:transition-all
          before:duration-500
          before:bg-[#FBD675]
          active:before:bg-[#FBD675]
          hover:before:w-full
          hover:before:opacity-100" href="#home" >الصفحة الرئيسية </a></li>
     
  
  
      </ul>
      <div className="p-10">
        <img src="./images/LOGO.svg" className=" cursor-pointer w-95px h-72px" alt="logo" />
      </div>
      
    </div>
    </div>
  
  );
}

export default Navbar;