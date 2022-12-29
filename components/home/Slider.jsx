import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";


const data = [
    {
        id: 1,
        heading: 'WELCOME TO THE WORLD OF ACC',
        text: '',
        image: 'slide3.gif',
    },
    {
        id: 2,
        heading: 'Premium Home Appliance Solution',
        text: 'ACC provides European-engineered precision to any home: from Refrigerator to Washing Machine and even Television or Air Conditioner, we are here to offer a huge constellation of home appliances.',
        image: 'slide1.png',
    }
]

const Slider = () => {

    return (
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper">
            {
                data.map(i => <SwiperSlide key={i.id}> <SliderContent heading={i.heading} image={i.image} text={i.text} /> </SwiperSlide>)
            }


        </Swiper>
    )
}

export default Slider

const SliderContent = ({ heading, image, text }) => {
    return (
        <>
            <div className="relative bg-cover bg-center w-full h-[60vh]" style={{ backgroundImage: `url(/slider/${image})` }}>
                <div className="absolute bottom-1/3 text-white px-10 text-center">
                    <h1 className="text-5xl font-extrabold text-center">{heading}</h1>
                    <p className="text-lg">{text}</p>
                </div>
            </div>

        </>
    )
}