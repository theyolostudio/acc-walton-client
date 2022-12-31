import Head from "next/head";
import LandingLayout from "../components/layout/LandingLayout";


const About = () => {
    return (
        <>
            <Head>
                <title>About Acc</title>
            </Head>
            <div className="bg-[#000B35] text-white text-justify  min-h-[57.49vh]">
                <div className="py-10 mx-10  lg:w-4/5 lg:mx-auto">
                    <h1 className="text-5xl font-semibold text-center">About Acc</h1>
                    <br />
                    <p>ACC is a historical company founded in 1968 in the Belluno area, Italy. The company is recognized as one of the leaders in household compressor production.</p>
                    <br />
                    <p>Walton Hi-Tech Industries PLC has received the rights of the brands from Italian WanbaoACC S.r.I, along with their trademark and brand in 57 countries, all R&D intellectual properties (patents, design, and software licenses). Through this acquisition, the brand is set to produce and make sure the use of energy-efficient products. The manufacturing plant of ACC is the first full-fledged, fully automated inverter compressor manufacturing plant in this subcontinent.</p>
                    <br />
                    <p>The brand aims to produce energy-efficient electronic home appliances to contribute to the 100 percent electrification of the country. ACC is now manufacturing European standard refrigerators, air conditioners, televisions, washing machines, fans, ovens, and other electronic appliances.</p>

                </div>
            </div>
        </>
    )
}

export default About

About.getLayout = function getLayout(page) {
    return <LandingLayout>{page}</LandingLayout>;
};