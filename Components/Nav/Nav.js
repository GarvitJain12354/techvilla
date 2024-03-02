"use client";
import Link from "next/link";
import React, { useState } from "react";
import Form from "../Form/Form";
import Page1 from "../Page1/Page1";
import Page3 from "../Page3/Page3";
import Page4 from "../Page4/Page4";
import Footer from "../Footer/Footer";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        id="nav"
        className="w-full  flex items-center justify-between px-12 z-50 fixed top-0 left-0  "
      >
        <div className="flex items-center justify-center gap-4">
          <Link href={"https://lnct.ac.in/"}>
            <img className="h-24  object-contain" src={"/Lnct.png"} alt="" />
          </Link>
          {/* <Link href={"/"}><img className='h-20  object-contain' src={"/logo.png"} alt="" /></Link> */}
        </div>
        <Link
          href={
            "/codebeta"
          }
          target="_blank"

        >
          <button className="py-2 border-2 px-8 rounded-lg text-lg md:hidden">
            CODE BETA
          </button>
        </Link>
        <div className="flex items-center justify-center gap-6 max-md:hidden relative z-50">
          <Link className="h relative text-lg" href={"/"}>
            Home
          </Link>
          <Link className="h relative text-lg" href={"#page3"}>
             Events
          </Link>
          <Link className="h relative text-lg" href={"#page4"}>
            Our Team
          </Link>
          {/* <Link className="h relative text-lg" href={"#footer"}>
            Contact
          </Link> */}
       <Link
          href={
            "https://linktr.ee/techvilla_lnct"
          }
          target="_blank"
        >
          <button className="py-2 border-2 px-8 rounded-lg text-lg max-md:hidden">
           Join Us
          </button>
        </Link>
        </div>
      </div>

      {/* <Form open={open} setOpen={setOpen} /> */}
    </>
  );
};

export default Nav;
