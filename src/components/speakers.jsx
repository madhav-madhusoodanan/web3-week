import { useState } from "react"
import logo from "./logo.svg"
import "./index.css"
const Speakers = () => {
    // const [count, setCount] = useState(0)

    return (
        <div className="w-screen h-screen  bg-[#121212]">
            <div id="speakers" className="grid place-items-center w-full">
                <div className="w-5/6 mx-auto">
                    <div className="group w-min">
                        <h1 className="my-4 text-4xl text-white font-grotesk font-[#121212]">
                            Speakers
                        </h1>
                        {/* <div className="w-5/6 h-0 mb-24 transition-all duration-100 ease-in-out border-2 border-blue group-hover:w-full"></div> */}
                    </div>
                    <div className="flex flex-row flex-wrap justify-between  mx-auto overflow-hidden ">
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-sci">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-[#121212] w-min justify-self-end p-2">
                                        SCIENCE
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-sci">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-[#121212] w-min justify-self-end  p-2">
                                        SCIENCE
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-elec">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-[#121212] w-min justify-self-end  p-2">
                                        ELECTRICAL
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                        modules
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-elec">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-[#121212] w-min justify-self-end  p-2">
                                        ELECTRICAL
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                        modules
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-[#121212] transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Speakers
