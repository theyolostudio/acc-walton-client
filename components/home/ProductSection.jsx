import Link from "next/link"
import { Fragment } from "react"




const ProductSection = () => {
    const data = [
        {
            id: 1,
            image: "TV.jpg",
            text: "television",
            item: "television",
        },
        {
            id: 2,
            image: "ac.jpg",
            text: "air condition",
            item: "ac",
        },
        {
            id: 3,
            image: "fridge.jpg",
            text: "refrigerator",
            item: "refrigerator",
        },
        {
            id: 4,
            image: "washing-machine.jpg",
            text: "washing machine",
            item: "wm",
            
        }
    ]
    return (
        <div className="py-10">
            <div className="grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-4">
                {
                    data.map(i => <Link href={`/products/${i.item}`} key={i.id}>
                        <div className={`relative bg-cover bg-center w-full h-[294px] rounded`} style={{backgroundImage: `url(/product/${i.image})` }}>
                            <div className="absolute bottom-0 w-full p-5 bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0),_rgba(0,_0,_0,_0.7)_50%,_rgba(0,_0,_0,_0.95))]">
                                <div className="capitalize font-semibold inline-block text-white">
                                    {i.text}
                                </div>
                            </div>

                        </div>
                    </Link>)
                }

            </div>
        </div>
    )
}

export default ProductSection





