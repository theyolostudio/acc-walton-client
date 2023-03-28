import Link from "next/link"

const FeatureWashingMachines = () => {
    return (

        <section className="py-10 md:py-14 lg:py-14">
            <div className="w-full mx-auto">
                <section className="flex items-center md:space-x-10 flex-col space-y-10 md:space-y-0 md:flex-row">
                    <article className="w-full md:w-5/6 flex-1 text-white">
                        <h3 className="text-4xl font-bold mb-5">Front Load Washing Machines</h3>
                        <p className="mb-6">Introducing new ACC front load washing machine with sate of the earth design,
                            world class technology and advanced features to take your laundry experience to whole new
                            level. So, move away your hassle and elevate your laundry experience with new ACC Laundry
                            Maestro.</p>
                        <Link href='#'>
                        {/* "/products/wm" */}
                            <button
                                type="button"
                                className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                            >
                                Find out more
                            </button>
                        </Link>
                    </article>
                    <div className="flex-1"><img src="/product/WM/Website Images-13.jpg" alt="Featured product image"
                        className="rounded-md block" /></div>
                </section>
            </div>
        </section>
    )
}

export default FeatureWashingMachines