import React from 'react';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = ["/ss.png","/office.png","factory.jpg"]

const css = `
    .main {
        background-image: url(./building.jpg);
        background-size: 100% 100%;
        height:90vh;
        width:100%;
    }
`

const Hero = () => {
 return (
 <section className="main">

 <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
 <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
 <img className="object-cover object-center rounded" alt="hero" src="./factory.jpg" />
 </div>
 <div className="bg-black rounded-lg m-4 p-8 bg-opacity-65 lg:flex-grow md:w-1/2 lg:pl-12 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
 <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
 Millasky General Trading
 </h1>
 <p className=" text-slate-50 mb-8 leading-relaxed">
 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, exercitationem reprehenderit, porro ad vel ratione maiores deleniti laborum tempore culpa animi, nisi mollitia doloremque! Soluta tenetur deleniti omnis iure tempora!
 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel lobortis nisl metus vel nulla. Integer vitae congue dolor. Aenean auctor vitae mauris sit amet commodo. Phasellus viverra lectus vitae ultrices vulputate.
 </p>
 </div>
 </div>

  <style>{css}</style>
 </section>
 
 );
};

export default Hero;