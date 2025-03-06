'use client'

import { product } from "../interfaces/product"
import AddToCartButton from "@/app/ui/AddToCartButton";

const ProductPamphletFull = (product: product) => {
  const price = parseInt(product.price);
  const mPrice = parseInt(product.mPrice);
  const discount: number = Math.round(((parseInt(product.mPrice) - parseInt(product.price)) / parseInt(product.mPrice)) * 100)
  const image = product.images[0].url;
  const name = product.name
  const descriptionArray = product.description.split('')
  let size = 60
  const description = descriptionArray.length > size ? descriptionArray.splice(0, size).join('') + '...' : descriptionArray.join('')
  const escapeXml = (unsafe: string) =>
      unsafe.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");
  return (
    <div className="w-full bg-blue-200 h-[200px] flex items-center px-2 justify-center rounded-xl group hover:shadow-xl transition-all duration-500">
      <a href={`/product/${product.id}-${escapeXml(product.name.toLowerCase().replace(/\s+/g, "-"))}`} className="justify-center h-3/4 group-hover:h-5/6 w-1/3 max-w-1/5 flex items-center md:group-hover:w-2/6 transition-all duration-500 rounded-xl">
        <img src={image} className="max-h-full max-w-full rounded-lg group-hover:rounded-xl transition-all duration-500" />
      </a>
      <div className="ml-5 flex w-3/4 h-full items-center py-2 md:py-7 ">
        <a href={'/product/' + product.id}>
          <div className="w-full mr-2 box-border">
            <div className="text-sm mb-1">
              {name}
            </div>
            <div className="text-xs text-gray-600 mb-2">
              {description}
            </div>
            <div>
              <div className="text-sm font-bold" >₹{price}</div>
              <div className="font-extralight text-xs mt-[2px]">
                <span className="relative">MRP ₹{mPrice}
                  <div className="absolute w-full h-[1px] bg-gray-900 top-[50%]"></div>
                </span>
                <span className="text-center px-2 py-1 bg-white rounded-2xl mx-1 font-bold text-green-900" >{discount}% OFF</span>
              </div>
            </div>
          </div>
        </a>
        <div className="items-center w-[100px] flex flex-col gap-3">
          <AddToCartButton price={product.price} mPrice={product.mPrice} id={product.id} isFeatured={product.isFeatured}
            gstRate={product.gstRate} currentRatingId={product.currentRatingId} brandId={product.brandId} images={product.images} name={product.name}
            storeId={product.storeId} categoryId={product.categoryId} isArchived={product.isArchived}
            createdAt={product.createdAt} updatedAt={product.updatedAt} polesId={product.polesId} poles={product.poles} description={product.description}
            brand={product.brand} category={product.category} currentRating={product.currentRating} />
          <div className="w-max text-xs text-white bg-themeBlue h-[25px] flex items-center justify-center px-2 py-1 rounded-full">
            BUY NOW
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPamphletFull
