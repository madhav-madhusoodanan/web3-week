export const Sponsors = () => (
    <div className="w-full h-min z-30">
        <div className="w-5/6 mx-auto h-full flex flex-row justify-between bg-green-500">
            <div className="w-64 h-64 grid place-items-center relative bg-green-500">
                <img src="/src/arcana.svg" height={100} width={100}  className="absolute" />
                <img src="/src/hackathon.svg"/>
            </div>
            <div className="w-64 h-64 grid place-items-center relative bg-green-500">
                <img src="/src/buidlers.svg" height={100} width={100}  className="absolute"/>
                <img src="/src/collab.svg" />
            </div>
            <div className="w-64 h-64 grid place-items-center relative bg-green-500">
                <img src="/src/biconomy.svg" height={100} width={100}  className="absolute" />
                <img src="/src/collab.svg"/>
            </div>
        </div>
    </div>
)
