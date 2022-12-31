import PRODUCTS from "../../products"
import ProductCard from "./ProductCard"



const AllProducts = ({ prod }) => {
  // const {television} = PRODUCTS

  return (
    <>
      <h1 className="text-center text-5xl font-extrabold capitalize">{prod}</h1>
      <div className="flex flex-wrap">
        {
          PRODUCTS[prod].map(i => <ProductCard key={i.id} image={i.image} model={i.model} url={`/products/${prod}/${i.id}`} />)
        }
      </div>

    </>
  )
}

export default AllProducts



