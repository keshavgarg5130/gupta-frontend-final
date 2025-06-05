import ProductImages from "./ProductImages"
import CustomizeProducts from "./CustomizeProduct"
import fetchProduct from "../lib/fetchProduct";
import fetchCategoryProducts from "../lib/fetchCategoryProducts";
import FeaturedProductsClient from "./FeaturedProductsClient";
import { notFound, redirect } from "next/navigation";
import AddToCartButton from "@/app/ui/AddToCartButton";
 // adjust the import path if needed

export const revalidate = 3600;

const ProductPage = async ({ productSlug }: { productSlug: string }) => {
  const product = await fetchProduct(productSlug);
  if (!product) {
    redirect('/');
    return null;
  }

  const images = product.images.map(image => ({
    id: image.id,
    url: image.url
  }));

  const discount: number = Math.round(((parseInt(product.mPrice) - parseInt(product.price)) / parseInt(product.mPrice)) * 100);

  const categoryProducts = await fetchCategoryProducts(product.categoryId);
  let randomDisplayProducts = [];
  for (let i = 0; i < 15; i++) {
    const index = Math.floor(Math.random() * categoryProducts.length);
    randomDisplayProducts.push(categoryProducts[index]);
  }

  return (
      <div>
        <div className='px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16 my-16 bg-white mb-16'>
          {/* Product Images */}
          <div className='w-full lg:w-1/2 lg:sticky top-20 h-max'>
            <ProductImages images={images} />
          </div>

          {/* Product Info */}
          <div className='w-full lg:w-1/2 flex flex-col gap-6'>
            <h1 className='text-4xl font-semibold'>{product.name}</h1>

            <div className='h-[2px] bg-gray-100'/>

            <div>
              <div className='flex items-center gap-4'>
                <h3 className='text-xl text-gray-500 line-through'>MRP ₹{product.mPrice}</h3>
                <h2 className='font-bold text-2xl text-green-700'>₹{product.price}</h2>
              </div>
              <span className="px-4 py-1 text-red-700 font-medium text-sm bg-red-100 rounded-md mt-2 inline-block">
              {discount}% OFF
            </span>
            </div>

            {/* ✅ Add to Cart Button */}
            <div className="flex items-center gap-4 mt-2">
              <AddToCartButton
                  price={product.price}
                  mPrice={product.mPrice}
                  id={product.id}
                  isFeatured={product.isFeatured}
                  gstRate={product.gstRate}
                  currentRatingId={product.currentRatingId}
                  brandId={product.brandId}
                  images={product.images}
                  name={product.name}
                  storeId={product.storeId}
                  categoryId={product.categoryId}
                  isArchived={product.isArchived}
                  createdAt={product.createdAt}
                  updatedAt={product.updatedAt}
                  polesId={product.polesId}
                  poles={product.poles}
                  description={product.description}
                  brand={product.brand}
                  category={product.category}
                  slug={product.slug}
                  currentRating={product.currentRating}
              />
            </div>

            <div className='h-[2px] bg-gray-100'/>

            {/* Product Customization */}
            <CustomizeProducts product={product}/>

            <div className='h-[2px] bg-gray-100'/>

            {/* Product Description */}
            <div className='text-sm'>
              <h4 className='font-medium mb-2 text-gray-800'>DESCRIPTION</h4>
              <p className="text-gray-600">{product.description}</p>
            </div>
          </div>
        </div>

        {/* Similar Products */}
        <div className="mb-16">
          <FeaturedProductsClient products={randomDisplayProducts} heading="Similar Products"/>
        </div>
      </div>
  );
};

export default ProductPage;
