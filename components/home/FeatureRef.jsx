import Link from "next/link"


const FeatureRef = () => {
    return (
        <div className="py-16">
            <section className="py-10 md:py-14 lg:py-14">
                <div className="w-full mx-auto">
                    <section
                        className="flex items-center md:flex-row-reverse md:space-x-10 md:space-x-reverse flex-col-reverse space-y-reverse space-y-10 md:space-y-0">
                        <article className="w-full md:w-5/6 flex-1 text-white">
                            <h3 className="text-5xl mb-5">Smart Refrigerator</h3>
                            <p className="mb-6">If the kitchen is the heart of the home, then the fridge is its soul — without
                                it, your meals or food just wouldn’t be the same. ACC is developing refrigerators integrated
                                with more advanced, connected and feature-rich technology than ever before. Alongside
                                keeping the food safe and fresh, ACC refrigerators can help you to be more organized or
                                entertained.</p>
                            <Link href='#'>
                            {/* "/products/refrigerator" */}
                                <button
                                    type="button"
                                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                                >
                                    Find out more
                                </button>
                            </Link>
                        </article>
                        <div className="flex-1"><img src="/product/REF/Website Images-09.jpg"
                            className="rounded-md block" /></div>
                    </section>
                </div>
            </section>
        </div>


    )
}

export default FeatureRef