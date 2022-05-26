import { useState } from "react"
import logo from "./logo.svg"
import "./index.css"
import { TimelineLeft } from "./components/timeline/left"
import { TimelineRight } from "./components/timeline/right"
import { TimelineMiddle } from "./components/timeline/timeline"
import { TimelineMobile } from "./components/timeline/mobile"
import { Sponsors } from "./components/sponsors"
import Speakers from "./components/speakers"
import { Footer } from "./components/footer"
TimelineMiddle
const App = () => {
    // const [count, setCount] = useState(0)

    return (
        <div className="w-full bg-[#121212]">
            <div
                id="sponsors"
                className="w-5/6 h-[10vh] mx-auto flex flex-col justify-center py-16"
            >
                <h1 className="text-white text-3xl font-grotesk font-bold">
                    Sponsors
                </h1>
            </div>
            <Sponsors />
            <div
                id="speakers"
                className="w-5/6 h-[10vh] mx-auto flex flex-col justify-center py-16"
            >
                <h1 className="text-white text-3xl font-grotesk font-bold">
                    Speakers
                </h1>
            </div>
            <div className="w-5/6 flex flex-row justify-between mx-auto min-h-screen align-middle">
                <Speakers />
            </div>
            <div
                id="timeline"
                className="w-5/6 h-[10vh] mx-auto flex flex-col justify-center py-16"
            >
                <h1 className="text-white text-3xl font-grotesk font-bold">
                    Timeline
                </h1>
            </div>
            <div className="hidden w-full bg-[#121212] lg:flex lg:flex-row justify-center gap-4">
                <TimelineLeft />
                <TimelineMiddle />
                <TimelineRight />
            </div>
            <div className="w-full bg-[#121212] flex flex-row justify-center gap-4 lg:hidden">
                <TimelineMobile />
            </div>
            <Footer />
        </div>
    )
}

export default App
