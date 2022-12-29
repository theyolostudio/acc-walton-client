import Image from "next/legacy/image"
import Link from "next/link"


const ProductCard = ({ image, model, url }) => {
    return (
        <Link href={url}>
            <div className="w-72 h-80">
                <div className="relative w-full h-full border border-gray-400" >
                    <Image
                        alt="Image Alt"
                        src={image}
                        layout="fill"
                        objectFit="cover"
                        priority
                    />
                </div>
                <h6 className="text-lg font-bold text-center text-gray-500">{model}</h6>
            </div>
        </Link>
    )
}

export default ProductCard