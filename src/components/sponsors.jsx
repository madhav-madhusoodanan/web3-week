export const Sponsors = () => (
    <div className="w-full min-h-[40vh] z-30">
        <div className="w-5/6 mx-auto h-full flex flex-row flex-wrap justify-between align-middle gap-8">
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/superblock.svg" height={100} width={100} />
                <img src="/src/title.svg" className="absolute top-1" />
            </div>
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/arcana.svg" height={100} width={100} />
                <img src="/src/hackathon.svg" className="absolute top-1" />
            </div>
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/buidlers.svg" height={100} width={100} />
                <img src="/src/collab.svg" className="absolute top-1" />
            </div>
            <div className="w-64 flex-grow mx-auto h-72 grid place-items-center relative">
                <img src="/src/biconomy.svg" height={100} width={100} />
                <img src="/src/collab.svg" className="absolute top-1" />
            </div>
        </div>
    </div>
)
