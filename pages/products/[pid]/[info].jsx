import Head from "next/head";
import Image from "next/legacy/image";
import { useRouter } from "next/router";
import LandingLayout from "../../../components/layout/LandingLayout";
import PRODUCTS from "../../../products";

import data from "../../../components/products/@media/data.json";

import TEMP from "../../../components/products/@media/temp.png";
import POWER from "../../../components/products/@media/power.png";
import VOLT from "../../../components/products/@media/volt.png";
import ERROR from "../../../components/products/@media/error.png";
import featureImg from "../../../components/products/@media/ACC Icon_1-01.png"
import specificationsImg from "../../../components/products/@media/specifications .jpeg" 


const ProductDetails = () => {
  const router = useRouter();
  const { pid, info } = router.query;
console.log(pid)

  return (
    <>
      <Head>
        <title>
          {pid && PRODUCTS[pid].filter((i) => i.id === info * 1).shift().model}
        </title>
      </Head>
      <div className="w-4/5 mx-auto py-6">
        {pid && (
          <div className="lg:flex lg:justify-center">
            <div className="h-96 lg:w-[35rem] lg:h-[40rem]">
              <div className="relative w-full h-full border border-gray-400">
                <Image
                  alt="Image Alt"
                  src={
                    PRODUCTS[pid].filter((i) => i.id === info * 1).shift().image
                  }
                  layout="fill"
                  objectFit="cover"
                  priority
                />
              </div>
            </div>
            <div className="lg:mx-5">
              <h6 className="text-lg font-bold text-gray-500">
                Model :{" "}
                {PRODUCTS[pid].filter((i) => i.id === info * 1).shift().model}
              </h6>
              <p>
                {PRODUCTS[pid].filter((i) => i.id === info * 1).shift().title}
              </p>
              <p className="text-red-600 font-bold">
                {PRODUCTS[pid].filter((i) => i.id === info * 1).shift().capacity}
              </p>
              <ul className="pl-5 mt-2 space-y-1 list-disc list-inside">
                {PRODUCTS[pid]
                  .filter((i) => i.id === info * 1)
                  .shift()
                  .feature.map((i) => (
                    <li key={Math.random()}>{i}</li>
                  ))}
              </ul>
              <div className="my-8">
                
                {
                  pid === 'refrigerator' || <>
                  <p className="text-gray-600">Product Price</p>
                  <p className="font-bold text-2xl">BDT 84,900</p>
                  </>
                }
                {
                  pid === "refrigerator" && <div className="flex gap-6">
                    <div>
                      <p className="text-red-500 font-bold">Choose Color</p>
                    </div>
                    <div>
                        
                        <input type="radio" className="radio" name="" id="" />
                        <span>Black</span>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>
        )}
        {/* Specifications & Features  */}
        {
          pid === "refrigerator"? <Image src={specificationsImg}/>:
          <div className="xl:w-4/5 mx-auto py-6">
          <h2 className="text-2xl font-bold">Specifications & Features</h2>

          <div className="relative overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500">
              <tbody>
                {data.map((i) => (
                  <tr key={i.id} className="bg-white border-b">
                    <th
                      scope="row"
                      className="py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {i.key}
                    </th>
                    <td className="px-6 py-4">{i.value}</td>
                    <td className="px-6 py-4">{i.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        }
        {/* Technical Features  */}
        
        <div className="xl:w-4/5 mx-auto py-6">
          <h2 className="text-2xl font-bold">Technical Features</h2>
          <p>
            Digital display is a panel screen that presents a variety of
            multimedia formats to a customer. The advanced digital display is
            able to show a wide range of these multimedia formats which make it
            to become a superior mode of communication.
          </p>

          {
            pid === "refrigerator" || 
            <div className="py-5 space-y-5">
            <div className="flex items-center">
              <Image src={TEMP} />
              <h3 className="text-2xl font-bold">Temperature</h3>
            </div>
            <div className="flex items-center ">
              <Image src={POWER} />
              <h3 className="text-2xl font-bold">Power Consumption</h3>
            </div>
            <div className="flex items-center ">
              <Image src={VOLT} />
              <h3 className="text-2xl font-bold">Voltage</h3>
            </div>
            <div className="flex items-center ">
              <Image src={ERROR} />
              <h3 className="text-2xl font-bold">Error Code</h3>
            </div>
          </div>
          }
          {
            pid === "refrigerator" && <Image src={featureImg} alt="" />
          }
          
        </div>
      </div>
    </>
  );
};

export default ProductDetails;

ProductDetails.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};
