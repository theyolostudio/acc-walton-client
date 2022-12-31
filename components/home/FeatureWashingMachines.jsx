import Image from "next/legacy/image"


const FeatureWashingMachines = () => {
    return (
        <div className="py-10 text-white lg:flex lg:justify-between lg:items-center">
            <div>
                <h1 className="text-5xl font-extrabold">Front Load Washing Machines</h1>
                <p className="my-4">Introducing new ACC front load washing machine with sate of the earth design, world class technology and advanced features to take your laundry experience to whole new level. So, move away your hassle and elevate your laundry experience with new ACC Laundry Maestro.</p>
                <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                    Find out more
                </button>
            </div>
            <div className="w-full h-80 lg:h-[37rem]">
                <div className="relative w-full h-full rounded-md" >
                    <Image
                        alt="Image Alt"
                        src="/product/WM/Website Images-13.jpg"
                        layout="fill"
                        objectFit="contain"
                        priority
                        className="rounded-md"
                    />
                </div>
            </div>
        </div>
    )
}

export default FeatureWashingMachines