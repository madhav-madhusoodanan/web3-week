import { useState } from "react"
import logo from "./logo.svg"
import "./index.css"
import { TimelineLeft } from "./components/timeline/left"
import { TimelineRight } from "./components/timeline/right"
import { TimelineMiddle } from "./components/timeline/timeline"
import { TimelineMobile } from "./components/timeline/mobile"
TimelineMiddle
const App = () => {
    // const [count, setCount] = useState(0)

    return (
        <div className="w-full bg-black">
            <div id="speakers" className="grid place-items-center w-full">
                <div className="w-5/6 min-h-screen mx-auto flex flex-col">
                    <div className="group w-min h-min">
                        <h1 className="text-3xl text-white font-grotesk font-black my-11">
                            Speakers
                        </h1>
                        {/* <div className="w-5/6 h-0 mb-24 transition-all duration-100 ease-in-out border-2 border-blue group-hover:w-full"></div> */}
                    </div>
                    <div className="flex flex-row flex-wrap justify-between  mx-auto overflow-hidden ">
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-sci">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-black w-min justify-self-end p-2">
                                        SCIENCE
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-black transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-black transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-sci">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-black w-min justify-self-end  p-2">
                                        SCIENCE
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-black transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-black transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-elec">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-black w-min justify-self-end  p-2">
                                        ELECTRICAL
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-black transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                        modules
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-black transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="overflow-hidden transition-all duration-200 bg-center bg-no-repeat bg-cover rounded-md bg-elec">
                            <div className="h-full transition-all duration-200 bg-white bg-opacity-0 rounded-md hover:bg-opacity-75 group w-60">
                                <div className="px-2 flex flex-col justify-between transition-all duration-200 group-hover:h-full h-96 translate-y-72 group-hover:translate-y-0 hover:translate-y-72  w-60">
                                    <h2 className="mx-auto my-8 text-2xl font-bold text-white transition-all duration-200 group-hover:text-black w-min justify-self-end  p-2">
                                        ELECTRICAL
                                    </h2>
                                    <p className="hidden w-full text-base text-center text-black transition-all duration-200 group-hover:block">
                                        Responsible for developing chassis,
                                        suspension, manipulators, wheels and
                                        modules
                                    </p>
                                    <p className="hidden w-full py-8 text-center text-black transition-all duration-200 group-hover:block">
                                        Know More
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                id="timeline"
                className="w-5/6 h-[10vh] mx-auto flex flex-col justify-center py-16"
            >
                <h1 className="text-white text-3xl font-grotesk font-bold">
                    Timeline
                </h1>
            </div>
            <div className="hidden w-full bg-black lg:flex lg:flex-row justify-center gap-4">
                <TimelineLeft />
                <TimelineMiddle />
                <TimelineRight />
            </div>
            <div className="w-full bg-black flex flex-row justify-center gap-4 lg:hidden">
                <TimelineMobile />
            </div>
        </div>
    )
}

export default App
