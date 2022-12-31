import Image from "next/legacy/image"

const data = [
    {
        id: 1,
        model: 'AE55UOS',
        product: 'AmazeView 55" Smart Television',
        image: '/product/TV/Images-05.jpg'

    },
    {
        id: 2,
        model: 'ARNI591NEGBD',
        product: 'Future Smart Side-by-Side Refrigerator',
        image: '/product/REF/Website Images-09.jpg'
    },
    {
        id: 3,
        model: 'AFR10C',
        product: 'Laundry Maestro',
        image: '/product/WM/Website Images-13.jpg'
    },
    {
        id: 4,
        model: 'ASI18BHB1-TRDD',
        product: 'Convertible AIoT Air Conditioner',
        image: '/product/AC/Untitled-1-01.jpg'
    }
]

const BestFeatureProducts = () => {
    return (
        <div className="p-10">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {
                    data.map(i => <div key={i.id} className="bg-white rounded-md">
                        <div className="w-full h-64">
                            <div className="relative w-full h-full " >
                                <Image
                                    alt="Image Alt"
                                    src={i.image}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                        </div>
                        <div className="bg-[#F7F7F8] p-5 rounded-md flex flex-col items-stretch">
                            <p className="text-gray-500 font-medium">{i.model}</p>
                            <h3 className="font-bold text-xl">{i.product}</h3>
                            <p className="font-bold text-2xl self-end mt-2">TBD</p>
                        </div>
                    </div>)
                }

            </div>
            <p className="text-white font-semibold text-3xl text-center m-2">1/1</p>
        </div>

    )
}

export default BestFeatureProducts