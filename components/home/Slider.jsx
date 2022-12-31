import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";


const data = [
    {
        id: 1,
        title: '',
        heading: 'WELCOME TO THE WORLD OF ACC',
        text: '',
        image: 'slide3.gif',
    },
    {
        id: 2,
        title: 'European Standard',
        heading: 'Premium Home Appliance Solution',
        text: 'ACC provides European-engineered precision to any home: from Refrigerator to Washing Machine and even Television or Air Conditioner, we are here to offer a huge constellation of home appliances.',
        image: 'slide1.png',
    },
    {
        id: 3,
        title: 'Worry-free Solution',
        heading: 'Uncompromising Quality & Value',
        text: 'ACC home and electronic appliances are powerful and eco-friendly, built with a focus on sustainability. Whether you want full-scale performance or a premium look, you will get it all in our product options.',
        image: 'slide2.png',
    }
]

const Slider = () => {
    const [sliderNum, setSliderNum] = useState(0)

    return (
        <Swiper
            pagination={true}
            modules={[Autoplay]}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            className="mySwiper"
            onAutoplay={swiper => {
                setSliderNum(swiper.activeIndex)
            }}


        >
            {
                data.map(i => <SwiperSlide key={i.id}> <SliderContent heading={i.heading} image={i.image} text={i.text} title={i.title} /> </SwiperSlide>)
            }

            <div className="bg-[#000B35]">
                <div className="w-1/2 mx-auto py-5">
                    <div className="flex justify-center">
                        <div className="w-32 h-1 mx-2  bg-gray-300 rounded-full ">
                            {sliderNum === 0 && <SliderIndecator />}
                        </div>
                        <div className="w-32 h-1 mx-2 bg-gray-300 rounded-full">
                            {sliderNum === 1 && <SliderIndecator />}
                        </div>
                        <div className="w-32 h-1 mx-2 bg-gray-300 rounded-full">
                            {sliderNum === 2 && <SliderIndecator />}
                        </div>
                    </div>
                </div>
            </div>
        </Swiper>
    )
}

export default Slider

const SliderContent = ({ heading, image, text, title }) => {
    return (
        <>
            <div className="bg-contain bg-center bg-no-repeat bg-[#000B35] h-96 w-full lg:bg-cover lg:h-[60vh] lg:relative" style={{ backgroundImage: `url(/slider/${image})` }}>
                <div className="text-white p-10 lg:absolute lg:w-1/2 lg:bottom-1/3">
                    <h2 className="text-xl font-extrabold">{title}</h2>
                    <h1 className="text-2xl font-extrabold lg:text-4xl">{heading}</h1>
                    <p className="text-md my-2">{text}</p>
                    
                    <button
                        type="button"
                        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
                    >
                        Find out more
                    </button>
                </div>

            </div>

        </>
    )
}





const SliderIndecator = () => {
    const [val, setVal] = useState(0)

    useEffect(() => {
        let interval = null;
        let time = 0
        interval = setInterval(() => {
            if (time <= 600) {
                setVal(time / 600 * 100)
            } else {
                setVal(0)
                clearInterval(interval)
            }
            time++

        }, 0);
        return () => clearInterval(interval)
    }, [])



    return (
        <div className="bg-[#3e476e] h-1 rounded-full" style={{ width: val + "%" }} />

    )
}