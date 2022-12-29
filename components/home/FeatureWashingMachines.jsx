import Image from "next/legacy/image"


const FeatureWashingMachines = () => {
    return (
        <div className="py-10 text-white lg:flex lg:justify-between lg:items-center">
            <div>
                <h1 className="text-5xl font-extrabold">Front Load Washing Machines</h1>
                <p>Introducing new ACC front load washing machine with sate of the earth design, world class technology and advanced features to take your laundry experience to whole new level. So, move away your hassle and elevate your laundry experience with new ACC Laundry Maestro.</p>
            </div>
            <div className="w-full h-80 lg:h-[37rem]">
                <div className="relative w-full h-full " >
                    <Image
                        alt="Image Alt"
                        src="/product/WM/2.jpg"
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
            </div>
        </div>
    )
}

export default FeatureWashingMachines