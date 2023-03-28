import Link from "next/link"
import { useRouter } from "next/router"


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
            text: "air conditioner",
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
    const router = useRouter()
    const gotoDetails = (item)=>{
        if(item.item=== "ac"){
            router.push(`/products/${item.item}`)
        }else{
            return;
        }
    }
    return (
        <div className="py-10">
            <div className="grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-4">
                {
                    data.map(i =>  
                        <div onClick={()=>gotoDetails(i)} className="relative group overflow-hidden rounded-md cursor-pointer">
                            <img src={`/product/${i.image}`}
                                alt="television image"
                                className="object-cover w-full block relative h-full rounded-md overflow-hidden group-hover:scale-110 transition-transform duration-300 " />
                            <div className="absolute inset-x-0 top-0 flex items-end overflow-hidden bottom-0 h-full">
                                <div
                                    className="absolute rounded-md inset-x-0 bottom-0 top-1/2 z-0 bg-gradient-to-b from-transparent via-black/70 to-black/95">
                                </div>
                                <article className="p-4 z-10">
                                    <h4 className="capitalize font-semibold text-lg text-white">{i.text}</h4>
                                </article>
                            </div>
                            {
                            i.item === "ac" ||
                            <div className="p-3 bg-white absolute right-0 top-0 font-bold text-red-500 rounded-bl-lg">
                                <p>UpComing...</p>
                            </div>
                                                        }
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default ProductSection





