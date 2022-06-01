export const Sponsors = () => (
    <div className="w-full min-h-[40vh] z-30">
        <div className="w-5/6 mx-auto h-full flex flex-row flex-wrap justify-between align-middle gap-8">
            <div className="w-full h-min text-[#79f8bb] font-bold text-3xl md:text-5xl text-center mt-12">
                TITLE SPONSORS
            </div>
            <div className="w-80  flex-grow mx-auto h-max  grid place-items-center">
                <a
                    src="/src/superblock.svg"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/src/superblock.svg" className="h-32" />
                </a>
            </div>
            <div className="w-full h-max text-[#79f8bb] font-bold text-3xl md:text-5xl text-center mt-12">
                IN COLLABORATION WITH
            </div>
            <div className="w-80  flex-grow mx-auto h-max  grid place-items-center relative">
                <img src="/src/bdt.png" />
                <a
                    href="https://buidlerstribe.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1 "
                ></a>
            </div>
            <div className="w-full h-max text-[#79f8bb] font-bold text-3xl md:text-5xl text-center mt-12">
                HACKATHON PARTNERS
            </div>
            <div className="w-80  h-max my-auto grid place-items-center relative mx-8">
                <a
                    href="https://devfolio.co/home/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/src/devfolio.png" />
                </a>
            </div>
            <div className="w-80  mx-8 h-max my-auto  grid place-items-center relative">
                <a
                    href="https://polygon.technology/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/src/polygon.png" />
                </a>
            </div>
            <div className="w-80 h-max  grid place-items-center relative">
                <a
                    href="https://filecoin.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/src/filecoin.png" />
                </a>
            </div>
            <div className="w-80  h-max  flex flex-col justify-center mx-8 relative ">
                <a
                    href="https://tezos.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/src/tezos.png"  className="w-80 "/>
                </a>
            </div>
            <div className="w-80 h-max  flex flex-col justify-center mx-auto">
                <a
                    href="https://celo.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/src/celo.png" className="w-full "/>
                </a>
            </div>
            <div className="w-80  h-max flex flex-col justify-center mx-auto my-auto">
                <a
                    href="https://www.biconomy.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-full mx-auto flex flex-col justify-center relative">
                        <img src="/src/biconomy.svg" />
                    </div>
                </a>
            </div>
            <div className="w-full h-max  flex flex-col justify-center">
                <a
                    href="https://arcana.network/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <div className="w-80  flex-grow mx-auto h-min  grid place-items-center relative">
                        <img src="/src/arcana.svg" className="w-full" />
                    </div>
                </a>
            </div>
        </div>
    </div>
)
