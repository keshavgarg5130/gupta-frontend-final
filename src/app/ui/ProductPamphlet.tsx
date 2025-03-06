import { product } from '../interfaces/product'
import AddToCartButton from "@/app/ui/AddToCartButton";

const ProductPamphelt = (product: product) => {
  const price = parseInt(product.price);
  const mPrice = parseInt(product.mPrice);
  const discount: number = Math.round(((parseInt(product.mPrice) - parseInt(product.price)) / parseInt(product.mPrice)) * 100)
  const image = product.images[0].url
  const nameArray = product.name.split('')
  let name = nameArray.length > 35 ? nameArray.splice(0, 35).join('') + '...' : product.name
  const escapeXml = (unsafe: string) =>
      unsafe.replace(/&/g, "&amp;")
          .replace(/</g, "&lt;")
          .replace(/>/g, "&gt;")
          .replace(/"/g, "&quot;")
          .replace(/'/g, "&apos;");

  return (
    <div className="m-2 p-1 flex flex-col items-center box-border group flex-grow w-[200px] bg-white rounded-lg h-[320px] hover:shadow-xl transition-all border" >
      <a href={`/product/${product.id}-${escapeXml(product.name.toLowerCase().replace(/\s+/g, "-"))}`}>
        <div className="overflow-hidden relative w-[200px] h-[200px] group-hover:h-[160px] items-center justify-center flex rounded-md transition-all">
          <img src={image} className="rounded-md z-0 w-[195px] group-hover:w-[160px] transition-all" />
        </div>
        <div className="h-[100px] px-4 mt-2">
          <div className="text-sm ">{name}</div>
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
      <div className="w-[200px] px-4 items-center h-0 overflow-hidden group-hover:h-[60px] justify-evenly flex transition-all">
        <AddToCartButton price={product.price} mPrice={product.mPrice} id={product.id} isFeatured={product.isFeatured}
          gstRate={product.gstRate} currentRatingId={product.currentRatingId} brandId={product.brandId} images={product.images} name={product.name}
          storeId={product.storeId} categoryId={product.categoryId} isArchived={product.isArchived}
          createdAt={product.createdAt} updatedAt={product.updatedAt} polesId={product.polesId} poles={product.poles} description={product.description}
          brand={product.brand} category={product.category} currentRating={product.currentRating} />
        <div className="w-max text-xs text-white bg-themeBlue h-[25px] flex items-center justify-center px-2 py-1 rounded-full">
          BUY NOW
        </div>
      </div>
    </div >
  )
}

export default ProductPamphelt;
