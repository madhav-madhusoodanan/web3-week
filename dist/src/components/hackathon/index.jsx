import "./hackathon.css"
import hackathon_title from "../../sponsors.svg"
import { useEffect } from "react"

export const DesktopHackathon = () => {
    useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://apply.devfolio.co/v2/sdk.js"
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])
    return (
        <div className="select-none w-screen h-screen hidden lg:flex lg:flex-col justify-center  align-middle">
            <div className="h-max w-max mx-auto">
                <div className="hackathon group peer relative flex flex-row h-20 w-[24rem] my-auto border-2 border-[#248dda] mx-auto justify-between p-8 rounded-lg overflow-hidden hover:w-[56rem] hover:h-[35rem] transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)]">
                    <div className="left-8 flex flex-col justify-end h-full duration-500 group-hover:bottom-20 w-[24rem] ">
                        <div className="after:absolute after:h-1 after:w-full after:bottom-0 after:left-0 py-1">
                            <img
                                src="/src/hackathon_title.svg"
                                height={75}
                                className="group-hover:relative absolute -mt-8 transition-all duration-500 z-10 inset-x-0 min-w-[24rem] w-[24rem]"
                            />
                        </div>

                        <p className="[transition-property:height] ease-[cubic-bezier(0.87,0,0.13,1)] duration-500 text-[#212121] group-hover:text-white h-0 group-hover:h-[15rem]">
                            We bring to you the Blockchain Hackathon, where you
                            get a chance to solve real-life problems using web3
                            tech stacks and get it evaluated by some of the best
                            experts and innovators in the Web 3 space. You can
                            form teams and you get 10 days to solve problems
                            after which you progress through multiple stages of
                            vetting. This event is meant for intermediate level
                            Blockchain Developers. Cash prizes and internships
                            at the best Web3 firms awaiting!.
                        </p>
                    </div>
                    <div className="w-[22rem] flex flex-col justify-start gap-8 transition-transform duration-500 translate-y-[-5rem] group-hover:translate-y-0 ease-[cubic-bezier(0.87,0,0.13,1)] text-[#212121] group-hover:text-white">
                        <div>
                            <h3 className="text-2xl font-extrabold transition-transform duration-500 transform-x-[10vw]">
                                MENTORS
                            </h3>
                            <p className=" mx-2 my-2 w-full ease-[cubic-bezier(0.87,0,0.13,1)] transition-transform duration-500">
                                Get access to mentorship from Learnweb3DAO and
                                learn from the best in the space
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-extrabold transition-transform duration-500 transform-x-[10vw]">
                                CASH PRIZES
                            </h3>
                            <p className=" mx-2 my-2 w-full ease-[cubic-bezier(0.87,0,0.13,1)] transition-transform duration-500">
                                The winners of the competition will get huge
                                cash prizes and chance to acquire internships
                            </p>
                        </div>
                        <a
                            href="https://www.learnweb3.io/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <h3 className="cursor-pointer text-2xl font-extrabold transition-transform duration-500 transform-x-[0vw] ease-[cubic-bezier(0.87,0,0.13,1)]">
                                RESOURCES
                            </h3>
                            <p className="group-hover:text-neutral-500 mx-2 my-2 text-[#212121]">
                                Click to access
                            </p>
                        </a>
                        <div className="">
                            {/* <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://bits-web3-week-hackathon.devfolio.co/"
                                className="px-6 py-2 font-bold text-lg w-max text-[#212121] bg-white rounded"
                            >
                                Go to Devfolio
                            </a> */}
                            <div
                                className="apply-button h-11 w-80"
                                data-hackathon-slug="bits-web3-week-hackathon"
                                data-button-theme="dark-inverted"
                            ></div>
                        </div>
                    </div>
                </div>
                <div className="w-max mx-auto text-white peer-hover:text-[#212121] select-none cursor-none transition-colors duration-500 py-1">
                    Hover to view more
                </div>
            </div>
        </div>
    )
}
export const MobileHackathon = () => (
    <div className="w-screen h-screen flex flex-col lg:hidden">
        <div className="mx-auto">
            <img
                src="/src/hackathon_title.svg"
                className="h-12 mx-auto mt-12 mb-4"
            />
            <p className="text-white mx-auto text-justify w-4/5 md:w-3/5">
                We bring to you the Blockchain Hackathon, where you get a chance
                to solve real-life problems using web3 tech stacks and get it
                evaluated by some of the best experts and innovators in the Web
                3 space. You can form teams and you get 10 days to solve
                problems after which you progress through multiple stages of
                vetting. This event is meant for intermediate level Blockchain
                Developers. Cash prizes and internships at the best Web3 firms
                awaiting!.
            </p>
        </div>
        <div className="w-4/5 mx-auto text-center text-white">
            <div className="my-8">
                <h3 className="text-2xl font-extrabold">MENTORS</h3>
                <p className="my-2 w-full md:w-3/5 mx-auto">
                    Get access to mentorship from Learnweb3DAO and learn from
                    the best in the space
                </p>
            </div>
            <div className="my-8">
                <h3 className="text-2xl font-extrabold">CASH PRIZES</h3>
                <p className="my-2 w-full md:w-3/5 mx-auto">
                    The winners of the competition will get huge cash prizes and
                    chance to acquire internships
                </p>
            </div>
            <a
                href="https://www.learnweb3.io/"
                target="_blank"
                rel="noopener noreferrer"
            >
                <h3 className="cursor-pointer text-2xl font-extrabold ">
                    RESOURCES
                </h3>
                <p className="text-neutral-500">Click to access</p>
            </a>
        </div>
    </div>
)
