import React from 'react';

const OtherFeatures = () => {
 return (
 <section className=" text-gray-600 body-font">
    <h1 className='text-center font-bold pt-10 p-0 text-6xl'>Our vision</h1>
    <div className=" justify-center container px-5 py-5 pt-0 mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto">
            <div className="flex flex-col sm:flex-row mt-10">
                <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">         
                    <div className=" w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                <img src="/icons/checkmark.png" />
                    </div>
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Best Quality</h2>
                    <p className="leading-relaxed text-base">
    Our commitment to excellence begins with the products we offer. We tirelessly source the finest products from trusted suppliers and producers. Ensuring every item in our inventory meets our high standards.
                    </p>
                    </div>
                </div>
                <div className="sm:w-1/3 text-center sm:py-8">
                    <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400 mb-5 flex-shrink-0">
                    <img src="/icons/price-tag.png" />
                    </div>
                    
                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Reasonable Price</h2>
                    <p className="leading-relaxed text-base">
    Our commitment to excellence begins with the products we offer. We tirelessly source the finest products from trusted suppliers and producers. Ensuring every item in our inventory meets our high standards.
                    </p>
                    </div>
                </div>
                <div className="sm:w-1/3 text-center sm:pl-8 sm:py-8">
                    <div className="w-24 h-24 rounded-full inline-flex items-center justify-center bg-gray-200 mb-5 flex-shrink-0">
                    <img className='p-3' src="/icons/truck.png" />
                    </div>

                    <div className="flex-grow">
                    <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Fast Delivery</h2>
                    <p className="leading-relaxed text-base">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus facilisis, metus nec faucibus rhoncus, nunc enim sodales nisl, vel lobortis nisl metus vel nulla.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
 </section>
 );
};


export default OtherFeatures;