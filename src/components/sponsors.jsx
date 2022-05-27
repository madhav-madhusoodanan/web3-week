export const Sponsors = () => (
    <div className="w-full min-h-[40vh] z-30">
        <div className="w-5/6 mx-auto h-full flex flex-row flex-wrap justify-between align-middle gap-8">
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/superblock.svg" height={100} width={100} />
                <a href="" target="_blank" rel="noopener noreferrer" className="absolute top-1">
                    <img src="/src/title.svg" />
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/buidlers.svg" height={100} width={100} />
                <a href="https://twitter.com/buidlerstribe" target="_blank" rel="noopener noreferrer" className="absolute top-1">
                    <img src="/src/collab.svg" />
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/biconomy.svg" height={100} width={100} />
                <a
                    href="https://twitter.com/biconomy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1"
                >
                    <img src="/src/hackathon.svg" />
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/arcana.svg" height={100} width={100} />
                <a
                    href="https://twitter.com/ArcanaNetwork"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-1"
                >
                    <img src="/src/hackathon.svg" />
                </a>
            </div>
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/celo.svg" height={75} width={75} />
                <a href="https://celo.org/" target="_blank" rel="noopener noreferrer" className="absolute top-1">
                    <img src="/src/hackathon.svg"  />
                </a>
            </div>
        </div>
    </div>
)
