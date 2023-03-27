import Image from "next/legacy/image"
import Link from "next/link"


const ProductCard = ({ image, model, url }) => {
    return (
        <Link href={url}>
            <div className=" py-5 mx-4">
                <div className="relative w-full h-full border border-gray-400" >
                    <img
                        alt="Image Alt"
                        src={image}
                        layout="fill"
                        objectFit="contain"
                        priority
                    />
                </div>
                <h6 className="text-lg font-bold text-center text-gray-500">{model}</h6>
            </div>
        </Link>
    )
}

export default ProductCard