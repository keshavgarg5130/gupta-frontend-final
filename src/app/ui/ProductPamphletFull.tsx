import { product } from '../interfaces/product'
import AddToCartButton from "@/app/ui/AddToCartButton";
import Image from "next/image";

const ProductPamphletFull = (product: product) => {
  const price = parseInt(product.price);
  const mPrice = parseInt(product.mPrice);
  const slug = product.slug;
  const discount: number = Math.round(((mPrice - price) / mPrice) * 100);
  const image = product.images[0].url;
  const name = product.name.length > 35 ? `${product.name.substring(0, 35)}...` : product.name;

  return (
      <div className="flex flex-col bg-white rounded-lg border hover:shadow-md transition-all w-full h-full">
        <a href={`/product/${slug}`} className="flex flex-col h-full">
          {/* Image container */}
          <div className="relative w-full aspect-square overflow-hidden">
            <Image
                alt={product.name}
                src={image}
                fill
                className="object-contain p-2"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
            />
          </div>

          {/* Product info */}
          <div className="p-3 flex flex-col flex-grow">
            <h3 className="text-sm font-medium line-clamp-2">{name}</h3>

            <div className="mt-2">
              <div className="text-sm font-bold">₹{price.toLocaleString()}</div>
              {mPrice > price && (
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-500 line-through">₹{mPrice.toLocaleString()}</span>
                    <span className="text-xs font-bold text-green-600">{discount}% OFF</span>
                  </div>
              )}
            </div>
          </div>
        </a>

        {/* Add to cart button - always visible but compact */}
        <div className="p-3 pt-0">
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
      </div>
  )
}

export default ProductPamphletFull;