import React from 'react';
import Slideshow from './Slideshow';

const images = ["/ss.png","/office.png","factory.jpg"]

const css = `
    .main {
        @media only screen and (max-width: 499px) {
            height: 30vh;            
        }

        background-image: url(./office.jpg);
        background-size: 100% 100%;
        height:90vh;
        width:100%;
        
    }
`

const Hero = () => {
return (
<section className="main">

<div className="p-3 pb-0">
        <div className="p-2 bg-black bg-opacity-60 rounded-lg">
        <p className="text-xs lg:text-4xl text-left text-slate-50 leading-relaxed">
            Millasky trading FZC is a multinational trading company in Ajman, United Arab Emirates.
            We specialize in sale of non-essential products. We are best known
            for our range of home care and body care products
        </p>       
   </div>
</div>

  {/* <style>{css}</style> */}
</section>
 
 );
};

export default Hero;