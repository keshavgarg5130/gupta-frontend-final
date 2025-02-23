import ProductImages from "./ProductImages"
import CustomizeProducts from "./CustomizeProduct"
import fetchProduct from "../lib/fetchProduct";
import fetchCategoryProducts from "../lib/fetchCategoryProducts";
import FeaturedProductsClient from "./FeaturedProductsClient";
import {notFound} from "next/navigation";

export const revalidate = 3600;

const ProductPage = async ({ productId }: { productId: string }) => {

  const product = await fetchProduct(productId)
  if(!product) {
    notFound()
  }
  const images = product.images.map(image => {
    return {
      id: image.id,
      url: image.url
    }
  })
  const discount: number = Math.round(((parseInt(product.mPrice) - parseInt(product.price)) / parseInt(product.mPrice)) * 100)
  const categoryProducts = await fetchCategoryProducts(product.categoryId);
  let randomDisplayProducts = [];
  for (let i = 0; i < 15; i++) {
    const index = Math.round(Math.random() * (categoryProducts.length - 1))
    randomDisplayProducts.push(categoryProducts[index])
  }

  return (
    <div>
      <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 my-16 bg-white mb-16'>
        <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
          <ProductImages images={images} />
        </div>
        <div className='w-full lg:w-1/2 flex flex-col gap-6'>
          <h1 className='text-4xl font-medium'>{product.name}</h1>
          <div className='h-[2px] bg-gray-100' />
          <div>
            <div className='flex items-center gap-4'>
              <h3 className='text-xl text-gray-500 line-through'>MRP ₹{product.mPrice}</h3>
              <h2 className='font-medium text-2xl'>₹{product.price}</h2>
            </div>
            <span className="px-4 py-2 text-red-700 font-light text-sm">({discount}% OFF)</span>
          </div>
          <div className='h-[2px] bg-gray-100' />
          <CustomizeProducts product={product} />
          <div className='h-[2px] bg-gray-100' />
          <div className='text-sm'>
            <h4 className='font-medium mb-4'>DESCRIPTION</h4>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="mb-16">
        <FeaturedProductsClient products={randomDisplayProducts} heading="Similar Products" />
      </div>
    </div>
  )
}

export default ProductPage
