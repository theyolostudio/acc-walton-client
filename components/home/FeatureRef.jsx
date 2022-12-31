import Image from "next/legacy/image"

const FeatureRef = () => {
    return (
        <div className="py-10 text-white lg:flex lg:justify-between lg:items-center rounded-md">
            <div className="w-full h-80 lg:h-[35rem]">
                <div className="relative w-full h-full" >
                    <Image
                        alt="Image Alt"
                        src="/product/REF/Website Images-09.jpg"
                        layout="fill"
                        objectFit="inherit"
                        priority
                        className="rounded-md"
                    />
                </div>
            </div>
            <div className="lg:ml-9">
                <h1 className="text-5xl font-extrabold">Smart Refrigerator</h1>
                <p className="my-4">If the kitchen is the heart of the home, then the fridge is its soul — without it, your meals or food just wouldn’t be the same. ACC is developing refrigerators integrated with more advanced, connected and feature-rich technology than ever before. Alongside keeping the food safe and fresh, ACC refrigerators can help you to be more organized or entertained.</p>
                <button
                    type="button"
                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                >
                    Find out more
                </button>

            </div>
        </div>
    )
}

export default FeatureRef