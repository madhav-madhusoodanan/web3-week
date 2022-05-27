export const Sponsors = () => (
    <div className="w-full min-h-[40vh] z-30">
        <div className="w-5/6 mx-auto h-full flex flex-row flex-wrap justify-between align-middle gap-8">
            <div className="w-64 flex-grow mx-auto h-80 grid place-items-center relative">
                <img
                    src="/src/superblock.svg"
                    height={100}
                    width={100}
                    className="mx-auto -mt-8"
                />

                <a
                    href="https://www.superblock.one/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1 w-full"
                >
                    <img src="/src/title.svg" />
                    <p className="mx-auto text-[#eee] font-semibold text-2xl text-center">SUPERBLOCK</p>
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-80 grid place-items-center relative">
                <img src="/src/buidlers.svg" height={100} width={100} className="-mt-8" />
                <a
                    href="https://buidlerstribe.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1 "
                >
                    <img src="/src/collab.svg" />
                    <p className="mx-auto text-[#eee] font-semibold text-2xl text-center">BUIDLERS TRIBE</p>
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-80 grid place-items-center relative">
                <img src="/src/biconomy.svg" height={100} width={100} className="-mt-8 ml-2" />
                <a
                    href="https://www.biconomy.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1"
                >
                    <img src="/src/hackathon.svg" />
                    <p className="mx-auto text-[#eee] font-semibold text-2xl text-center">BICONOMY</p>
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-80 grid place-items-center relative">
                <img src="/src/arcana.svg" height={100} width={100}  className="-mt-8" />
                <a
                    href="https://arcana.network/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1"
                >
                    <img src="/src/hackathon.svg" />
                    <p className="mx-auto text-[#eee] font-semibold text-2xl text-center">ARCANA</p>
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-80 grid place-items-center relative">
                <img src="/src/celo.svg" height={75} width={75} className="-mt-8" />
                <a
                    href="https://celo.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1"
                >
                    <img src="/src/hackathon.svg" />
                    <p className="mx-auto text-[#eee] font-semibold text-2xl text-center">CELO</p>
                </a>
            </div>
        </div>
    </div>
)
