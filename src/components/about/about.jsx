import React from 'react';
import '../../index.css';

function About() {
    return (

        <div className='w-full h-full'>
            <img
                className='top-0 w-screen h-screen object-cover '
                src='https://images.unsplash.com/photo-1568930157403-9ad464e5f075?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                alt='Wine in your hand'
            />
            <div className='subpixel-antialiased bg-black/30 absolute top-0 left-0 w-full h-screen' />
            <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
                <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>

                    <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl font-display'>
                        World Wine Web
                    </h1>
                    <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl font-display '>
                        The wine education tool developed by a somm, for somms
                    </p>
                    <a href="/map">
                        <button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-full">
                            Start Exploring
                        </button>
                    </a>
                </div>
            </div>
            <div className="bg-gray-100 overflow-hidden pt-responsive-xl-128 relative pb-responsive-xl-389" data-component="ImpactNumberBlockHomepage">
                <div className="px-responsive-xl-36 relative space-y-responsive-xl-80 z-10">
                    <div className="max-w-736 mx-auto space-y-responsive-xl-32 text-center"></div>
                    <h2 className="text-heading-md text-5xl mt-4 text-center font-display">Holistic Data for Professionals and Wine Lovers</h2>
                    <p className="text-body-lg text-center font-display text-2xl">
                        All the wine data in one easy to reach place.
                    </p>
                    <ul>
                        <li className="text-center text-body-md font-display text-2xl">
                            <span className="font-bold">Interactive Wine Maps:</span> A full view of the Earth, and all its wine growing areas
                        </li>
                        <li className="text-center text-body-md font-display text-2xl">
                            <span className="font-bold">Grape Varietals:</span> Documentation about cultivars from around the world
                        </li>
                        <li className="text-center text-body-md font-display text-2xl">
                            <span className="font-bold">Regional Data:</span> Constantly updating the growing world of wine.
                        </li>
                    </ul>
                </div>
                <div className="max-w-1168 mx-auto mt-12">
                    <ul className="flex flex-wrap -m-0  justify-center">
                        <li className="w-full md:w-1/2 xl:w-1/3">
                            <div className="p-responsive-xl-32">
                                <article>
                                    <div className="text-center dark:text-black">
                                        <div className="text-6xl font-display">
                                            269
                                        </div>
                                        <div className="text-utility-lg font-bold font-display text-2xl">American Viticultural Areas</div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img className="h-fit w-full" src="./public/aboutimages/longvineyard.jpg" alt='Aerial Shot of Vineyard' />
                                    </div>
                                    <div className="text-center font-display mt-1 text-body-md dark:text-black lg:border-t lg:border-t-gray-100 text-xl">
                                        Starting with the US, we are mapping every recognized wine region in the world
                                    </div>
                                </article>
                            </div>
                        </li>
                        <li className="w-full md:w-1/2 xl:w-1/3">
                            <div className="p-responsive-xl-32">
                                <article>
                                    <div className="text-center dark:text-black">
                                        <div className="text-6xl font-display">
                                            100+
                                        </div>
                                        <div className="text-utility-lg font-bold font-display text-2xl">Grape Varietals</div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img className="h-500 w-full" src="./public/aboutimages/lebanon-252.jpg" alt='Winehand' />
                                    </div>
                                    <div className="text-center mt-1 text-body-md dark:text-black lg:border-t lg:border-t-gray-100 font-display text-xl ">
                                        Documentation about cultivars from around the world
                                    </div>
                                </article>
                            </div>
                        </li>
                        <li className="w-full md:w-1/2 xl:w-1/3">
                            <div className="p-responsive-xl-32">
                                <article>
                                    <div className="text-center dark:text-black">
                                        <div className="text-6xl font-display"> 11,691+ </div>
                                        <div className="text-utility-lg font-bold font-display text-2xl">Vineyards</div>
                                    </div>
                                    <div className="flex justify-center items-center">
                                        <img className="h-500 w-full" src="./public/aboutimages/house-vineyard.jpg" alt='Winehand' />
                                    </div>
                                    <div className="text-center mt-1 text-body-md dark:text-black lg:border-t lg:border-t-gray-100 font-display text-xl">
                                        Constantly updating the growing world of wine.
                                    </div>
                                </article>
                            </div>
                            {/* <article>
                            <div className= ''>
                                    <img className=''
                                    src='./public/aboutimages/overlook.jpg'/>
                                </div>
                                </article> */}
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};
export default About;