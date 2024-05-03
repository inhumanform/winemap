import React from 'react';
import '../../index.css';

function About() {
    return (

        <div className='w-full h-screen'>
            <img
                className='top-0 left-100 w-full h-screen object-cover'
                src='https://images.unsplash.com/photo-1568930157403-9ad464e5f075?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Wine in your hand'
            />
            <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>

                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>
                        Wine Info at Your Fingertips
                    </h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
                        The wine education tool developed by a somm, for somms
                    </p>
                    <button className='bg-white text-black '>Start Exploring</button>
                </div>
            </div>
            <div className="bg-gray-100 overflow-hidden pt-responsive-xl-128 relative pb-responsive-xl-389" data-component="ImpactNumberBlockHomepage">
                <div className="px-responsive-xl-36 relative space-y-responsive-xl-80 z-10">
                    <div className="max-w-736 mx-auto space-y-responsive-xl-32 text-center"></div>
                    <h2 className="text-heading-md">Holistic Wine Data for Professionals and Wine Lovers</h2>
                    <p className="text-body-lg">
                        "We put all the wine data in one, easy to reach place. Now pay me for it."
                    </p>
                </div>
                <div className="max-w-1168 mx-auto">
                    <ul className="flex flex-wrap -m-responsive-xl-32 justify-center">
                        <li className="w-full md:w-1/2 xl:w-1/3">
                            <div className="p-responsive-xl-32">
                                <article>
                                    <div className="text-center dark:text-black">
                                        <div className="text-heading-2xl">
                                            " 269 "
                                        </div>
                                        <div className="text-utility-lg font-bold">American Viticultural Areas</div>
                                    </div>
                                    <div className="text-center mt-16 text-body-md dark:text-black lg:border-t lg:border-t-gray-100 lg:pt-24">
                                        "Starting with the US, we are mapping every recognized wine region in the world"
                                    </div>
                                </article>
                            </div>
                        </li>
                        <li className="w-full md:w-1/2 xl:w-1/3">
                            <div className="p-responsive-xl-32">
                                <article>
                                    <div className="text-center dark:text-black">
                                        <div className="text-heading-2xl">
                                            ' 100 + '
                                        </div>
                                        <div className="text-utility-lg font-bold">Grape Varietals</div>
                                    </div>
                                    <div className="text-center mt-16 text-body-md dark:text-black lg:border-t lg:border-t-gray-100 lg:pt-24">
                                        "Documentation about cultivars from around the world"
                                    </div>
                                </article>
                            </div>
                        </li>
                        <li className="w-full md:w-1/2 xl:w-1/3">
                            <div className="p-responsive-xl-32">
                                <article>
                                    <div className="text-center dark:text-black">
                                        <div className="text-heading-2xl"> 11,691+ </div>
                                        <div className="text-utility-lg font-bold">Vineyards</div>
                                    </div>
                                    <div className="text-center mt-16 text-body-md dark:text-black lg:border-t lg:border-t-gray-100 lg:pt-24">
                                        Constantly updating the growing world of wine.
                                    </div>
                                </article>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <div class="absolute bottom-0 left-0 w-full">
                <picture>
                    <img class src="https://images.unsplash.com/photo-1568930157403-9ad464e5f075?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Picture of rolling hills of a vineyard" loading="lazy" style="aspect-ratio: 1600 / 756;"></img>
                </picture>
                <div class="absolute bg-gradient-gray-100-fade-down h-full inset-0 top-0 w-full -mx-px"></div>
            </div> */}
        </div>
    );
};
export default About;