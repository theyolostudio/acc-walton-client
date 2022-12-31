import Head from "next/head";
import { useRouter } from "next/router";
import LandingLayout from "../../../components/layout/LandingLayout";
import AllProducts from "../../../components/products/AllProducts";




const Products = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
    <>
      <Head>
        <title>{pid && pid.toUpperCase()}</title>
      </Head>
      <div className="w-4/5 mx-auto p-5">
        {pid === 'television' && <AllProducts prod='television' />}
        {pid === 'ac' && <AllProducts prod='ac' />}
        {pid === 'refrigerator' && <AllProducts prod='refrigerator' />}
        {pid === 'wm' && <AllProducts prod='wm' />}

      </div>
    </>

  )
}

export default Products

Products.getLayout = function getLayout(page) {
  return <LandingLayout>{page}</LandingLayout>;
};