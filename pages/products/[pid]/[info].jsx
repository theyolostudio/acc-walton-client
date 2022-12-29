import Image from "next/legacy/image";
import { useRouter } from "next/router";
import LandingLayout from "../../../components/layout/LandingLayout";
import PRODUCTS from "../../../products";


const ProductDetails = () => {
    const router = useRouter()
    const { pid, info } = router.query

    return (
        <div className="w-4/5 mx-auto py-6">
            {
                pid && <div className="lg:flex lg:justify-center">
                    <div className="h-96 lg:w-[35rem] lg:h-[40rem]">
                        <div className="relative w-full h-full border border-gray-400" >
                            <Image
                                alt="Image Alt"
                                src={PRODUCTS[pid].filter(i => i.id === info * 1).shift().image}
                                layout="fill"
                                objectFit="cover"
                                priority
                            />
                        </div>
                    </div>
                    <div className="lg:mx-5">
                        <h6 className="text-lg font-bold text-gray-500">Model : {PRODUCTS[pid].filter(i => i.id === info * 1).shift().model}</h6>
                        <p>{PRODUCTS[pid].filter(i => i.id === info * 1).shift().title}</p>
                        <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                            {
                                PRODUCTS[pid].filter(i => i.id === info * 1).shift().feature.map(i =>
                                    <li key={Math.random()}>{i}</li>
                                )
                            }
                            
                            
                        </ul>
                    </div>
                </div>
            }
        </div>
    )
}

export default ProductDetails

ProductDetails.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};