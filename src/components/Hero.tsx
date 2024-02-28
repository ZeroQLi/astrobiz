import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = ["/ss.png","/office.png","factory.jpg"]

const css = `
    .main {
        @media only screen and (max-width: 499px) {
            height: 40vh;
        }
        
        background-image: url(./office.jpg);
        background-size: 100% 100%;
        height:90vh;
        width:100%;
        
    }
`

const Hero = () => {
 return (
 <section className=" main">
 
 <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
 {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
 <img className="object-cover object-center rounded" alt="hero" src="./factory.jpg" />
 </div> */}
 <div className=" bg-opacity-60 max-sm:mt-28 lg:mt-80 bg-black rounded-lg lg:m-4 lg:p-8 lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
 {/* <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
 Millasky General Trading
 </h1> */}
 <p className="text-xs lg:text-4xl p-2 text-left text-slate-50 mb-0 leading-relaxed">
 Millasky trading FZC is a multinational trading company in Sharjah, United Arab Emirates.
 We specialize in sale of non-essential products. We are best known 
 for our range of home care and body care products

 </p>
 </div>
 </div>

  <style>{css}</style>
 </section>
 
 );
};

export default Hero;