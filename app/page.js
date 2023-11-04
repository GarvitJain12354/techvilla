import About from "@/Components/About/About"
import Footer from "@/Components/Footer/Footer"
import Gallery from "@/Components/Gallery/Gallery"
import Garvit from "@/Components/Garvit/Garvit"
import Loader from "@/Components/Loader/Loader"
import Nav from "@/Components/Nav/Nav"
import Page1 from "@/Components/Page1/Page1"
import Page2 from "@/Components/Page2/Page2"
import Page3 from "@/Components/Page3/Page3"
import Page4 from "@/Components/Page4/Page4"
import Social from "@/Components/Social/Social"

import React from "react"

const page = () => {


  return (
  <>
 <div className="main w-full relative overflow-hidden">
  <Loader/>
 <Nav/>
    <Page1/>
    <Gallery/>
    <Page2/>
    <About/>
    <Page3/>
    <Page4/>
    
    <Footer/>
    <Social/>
    {/* <Garvit/> */}
 </div>
  </>
  )
}

export default page