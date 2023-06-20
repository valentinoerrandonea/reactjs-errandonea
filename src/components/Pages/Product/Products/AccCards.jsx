import { AccList } from "./ProductList";
import { AddToCartBtn } from "../buttons/AddToCartBtn";

export const AccCards = () => {
  return (
    <div className="bg-gradient-to-tr from-gray-700 via-gray-900 to-black h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
          <h2 className="text-5xl font-bold text-gray-200">Accesories</h2>

          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
            {AccList.map((product) => (
              <div
                key={product.title}
                className="group relative shadow-md overflow-hidden transform translate-y-4 hover:translate-y-0 duration-500 ease-in-out bg-white"
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
                <AddToCartBtn className="hover:hover:bg-indigo-700"></AddToCartBtn>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
