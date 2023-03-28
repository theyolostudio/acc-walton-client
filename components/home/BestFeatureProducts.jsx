// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


import Image from "next/legacy/image"
import Link from "next/link";
import { useRouter } from "next/router";

const data = [
    {
        id: 1,
        model: 'AE55UOS',
        product: 'AmazeView 55" Smart Television',
        image: '/product/TV/Images-05.jpg',
        url: "/products/television/1",

    },
    {
        id: 2,
        model: 'ARNI591NEGBD',
        product: 'Future Smart Side-by-Side Refrigerator',
        image: '/product/REF/Website Images-09.jpg',
        url: '/products/refrigerator/1'

    },
    {
        id: 3,
        model: 'AFR10C',
        product: 'Laundry Maestro',
        image: '/product/WM/Website Images-13.jpg',
        url: '/products/wm/1'
    },
    {
        id: 4,
        model: 'ASI18BHB1-TRDD',
        product: 'Convertible AIoT Air Conditioner',
        image: '/product/AC/Untitled-1-01.jpg',
        url: '/products/ac/1'
    }
]

const BestFeatureProducts = () => {
    const router = useRouter()
    const hendleDetails = (id, url) => {
        if (id === 4) {
            router.push(url)
        }
    }
    return (
        <div>
            <Swiper

                pagination={{
                    clickable: true,
                }}

                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 5,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 15,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }}
                className="mySwiper"
            >


                {
                    data.map(i =>
                        <SwiperSlide key={i.id}>
                            <div className="bg-white rounded-md relative">
                                <div className="w-full h-64 grow ">
                                    <div className="relative w-full h-full " >
                                        <Image
                                            alt="Image Alt"
                                            src={i.image}
                                            layout="fill"
                                            objectFit="contain"
                                        />
                                    </div>
                                </div>
                                <div className="bg-[#F7F7F8] p-5 max-h-[150px] rounded-md flex flex-col items-stretch cursor-pointer">
                                    <p className="text-gray-500 font-medium">{i.model}</p>
                                    <div onClick={() => hendleDetails(i.id, i.url)}>
                                        <h3 className="font-bold text-lg h-32">{i.product}</h3>
                                    </div>
                                    <p className="font-bold text-2xl self-end mt-2">TBD</p>
                                </div>
                                {
                                    i.id === 4 ||
                                    <div className="p-3 bg-white absolute right-0 top-0 font-bold text-red-500 rounded-bl-lg">
                                        <p>Upcoming</p>
                                    </div>
                                }
                            </div>
                        </SwiperSlide>
                    )
                }



            </Swiper>

            {/* <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
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
            <p className="text-white font-semibold text-3xl text-center m-2">1/1</p> */}
        </div>

    )
}

export default BestFeatureProducts