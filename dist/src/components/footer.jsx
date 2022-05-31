export const Footer = () => (
    <div className="invisible w-full h-20">
        <div className="w-5/6 mx-auto flex flex-row align-middle h-min my-auto">
            <a href="#main">
                <img
                    src="/src/image2vector.svg"
                    className="my-2 mx-[-4px] h-8 text-white"
                />
            </a>
            <div className="w-full mx-auto flex flex-row-reverse align-middle gap-8">
                <a
                    className="my-auto font-semibold text-white"
                    href="https://forms.gle/drbSiZVCyDcemBom7"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Whatsapp group
                </a>
                <a
                    className="my-auto font-semibold text-white"
                    href="#speakers"
                >
                    Twitter
                </a>
            </div>
        </div>
    </div>
)
