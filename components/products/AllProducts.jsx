import Link from "next/link";
import PRODUCTS from "../../products";
import ProductCard from "./ProductCard";

const AllProducts = ({ prod }) => {
  // const {television} = PRODUCTS

  return (
    <>
      <h1 className="text-center text-5xl font-extrabold capitalize">
        {prod === "television" && "Television"}
        {prod === "ac" && "Air Conditioner"}
        {prod === "refrigerator" && "Refrigerator"}
        {prod === "wm" && "Washing Machine"}
      </h1>
      <center className="my-3">
        <Link
          target="_blank"
          href="https://drive.google.com/file/d/1gKbgUs74n2IO_nmaCqFKSy8jz7GVhfPe/view?usp=share_link"
          // 
          className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700"
        >
          Download Catalogue
        </Link>
      </center>
      <div className="lg:grid lg:grid-cols-4">
        {PRODUCTS[prod].map((i) => (
          <ProductCard
            key={i.id}
            image={i.image}
            model={i.model}
            url={`/products/${prod}/${i.id}`}
          />
        ))}
      </div>
    </>
  );
};

export default AllProducts;
