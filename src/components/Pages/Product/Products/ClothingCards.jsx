import { ClothingList } from "./ProductList";
import { AddToCartBtn } from "../buttons/AddToCartBtn";

export default function ClothingCards() {
  return (
    <div className="bg-gradient-to-tr from-gray-200 via-gray-400 to-gray-600 h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32 ">
          <h2 className="text-5xl font-bold text-gray-800">Clothing</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {ClothingList.map((product) => (
              <div
                key={product.title}
                className="group relative shadow-md overflow-hidden transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-gray-200"
              >
                <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 sm:h-64">
                  <img
                    src={product.imgSrc}
                    alt={product.imgAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <h3 className="mt-6 text-lg text-gray-900 font-bold">
                  <div>
                    <span className="absolute inset-0" />
                    {product.title}
                  </div>
                </h3>
                <p className="text-base font-semibold text-gray-800">
                  {product.desc}
                </p>
                <p className="text-base font-semibold text-gray-900">
                  ${product.price}
                </p>
                <AddToCartBtn></AddToCartBtn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
