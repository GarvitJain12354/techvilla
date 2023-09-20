import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div id="#footer" className="w-full h-fit border-t-2 flex items-center justify-center px-16 py-8  bg-black relative text-white max-md:flex-col">
        <div className="blue"></div>
        <div className="violet"></div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7331.42914735296!2d77.52219133701782!3d23.253471399114428!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c4244c97d6f29%3A0x72457a4e85fd116c!2sLNCT%20Group%20of%20Colleges!5e0!3m2!1sen!2sin!4v1695205472792!5m2!1sen!2sin"
          className="h-52 relative z-40 rounded-lg w-96"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="w-full grid place-content-center place-items-center grid-cols-2 p-8 h-52 relative z-40 max-md:p-0 max-md:h-72 max-md:grid-cols-1">
          <div className="flex text-xl max-md:p-4 max-md:mt-14 ">
            <div className="grid grid-cols-1 place-content-center place-items-center">
              <div className="flex gap-2">
                <i class="ri-phone-fill"></i>
                <h3>Conatct</h3>
              </div>
              <h1>+91 80856 18889</h1>
            </div>
          </div>
          
          <div className="flex text-xl max-md:p-4">
            <div className="grid grid-cols-1 place-content-center place-items-center">
              <div className="flex gap-2">
                <i class="ri-mail-fill"></i>
                <h3>Email</h3>
              </div>
              <h1>techvillalnct@gmail.com</h1>
            </div>
          </div>
          <div className="flex items-center justify-center text-2xl gap-6 w-[70vw] ml-auto  text-center h-32 max-md-h-fit max-md:-mt-4">
            <h3>Join us </h3>
            <Link href={"https://www.linkedin.com/in/tech-villa-660a8a290"}>
              <i className="ri-linkedin-box-fill hover:text-orange-300 ease-in-out duration-300"></i>
            </Link>
            <Link
              href={
                "https://instagram.com/techvilla_lnct?igshid=MzRlODBiNWFlZA=="
              }
            >
              <i className="ri-instagram-fill hover:text-orange-300 ease-in-out duration-300"></i>
            </Link>
            <Link
              href={"https://x.com/Techvilla_?t=Ah651-6AZsJ7ayYT9tArDw&s=09"}
            >
              <i className="ri-twitter-x-fill hover:text-orange-300 ease-in-out duration-300"></i>
            </Link>
            <Link href={"https://github.com/techvillaLnct"}>
              <i className="ri-github-fill hover:text-orange-300 ease-in-out duration-300"></i>
            </Link>
            {/* <Link href={"/"}>
              <i className="ri-whatsapp-line hover:text-orange-300 ease-in-out duration-300"></i>
            </Link> */}
          </div>
          <span></span>
          <div className="flex items-center justify-center text-xs w-[70vw] ml-auto  text-center max-md:-mt-6">
            <div className="grid grid-cols-1 place-content-center place-items-center max-md:whitespace-nowrap">
              <h1>Copyright © 2023 by TECHVILLA LNCT. All rights reserved.</h1>
            </div>
          </div>
        </div>
        {/* <div className="flex w-fit relative z-50 text-2xl items-center justify-center gap-6">
        <h3>Join us </h3>
        <Link href={"/"}>
        
        <i className="ri-linkedin-box-fill hover:text-orange-300 ease-in-out duration-300"></i>
        </Link>
        <Link href={"/"}>
        
        <i className="ri-instagram-fill hover:text-orange-300 ease-in-out duration-300"></i>
        </Link>
        <Link href={"/"}>
        
        <i className="ri-twitter-x-fill hover:text-orange-300 ease-in-out duration-300"></i>
        </Link>
        <Link href={"/"}>
        
        <i className="ri-github-fill hover:text-orange-300 ease-in-out duration-300"></i>
        </Link>
        <Link href={"/"}>
        <i className="ri-whatsapp-line hover:text-orange-300 ease-in-out duration-300"></i>
        </Link>
    </div>
    <div className="flex flex-col items-center justify-center z-40 text-sm gap-2">
        <h1>Aryan Singh Parihar </h1>
        <h1 className=''><i class="ri-phone-line"></i>  +91 6267 718 161</h1>
        <h1>@techvillalnct.ac.in</h1>
    </div> */}
      </div>
    </>
  );
};

export default Footer;
