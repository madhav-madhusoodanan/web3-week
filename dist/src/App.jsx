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
        <div className="w-full bg-[#121212] felx flex-col">
            <div
                id="sponsors"
                className="w-5/6 h-[25vh] mx-auto flex flex-col justify-center py-16"
            >
                <a href="#sponsors">
                    <img
                        src="/src/sponsors.svg"
                        class="mb-4 mt-24 mx-auto h-12 text-white"
                    />
                </a>
            </div>
            <Sponsors />
            <div
                id="speakers"
                className="w-5/6 h-[25vh] mx-auto flex flex-col justify-center py-16"
            >
                <a href="#main">
                    <img
                        src="/src/speakers.svg"
                        class="mb-4 mt-24 mx-auto h-12 text-white"
                    />
                </a>
            </div>
            <div className="w-5/6 flex flex-row justify-between mx-auto">
                <Speakers />
            </div>
            <div
                id="timeline"
                className="w-5/6 h-[25vh] mx-auto flex flex-col justify-center py-16"
            >
                <a href="#main">
                    <img
                        src="/src/timeline.svg"
                        class="mb-4 mt-24 mx-auto h-12 text-white"
                    />
                </a>
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
